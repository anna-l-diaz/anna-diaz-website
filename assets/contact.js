document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  if (!form) return;
  const status = document.getElementById('contact-form-note');
  const button = document.getElementById('contact-submit');
  const formId = String(window.ANNA_CONTACT?.formId || '').trim();
  const configured = /^[a-zA-Z0-9]{6,20}$/.test(formId);
  if (!configured) {
    status.textContent = 'The contact form is being set up. You can reach me through LinkedIn in the meantime.';
    button.disabled = true;
    return;
  }
  const endpoint = `https://formspree.io/f/${formId}`;
  form.action = endpoint;
  button.disabled = false;
  status.textContent = 'Your message will be sent securely to the form provider, Formspree.';
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    if (form.elements._gotcha?.value) {
      status.textContent = 'Thank you for your message.';
      form.reset();
      return;
    }
    button.disabled = true;
    button.textContent = 'Sending…';
    status.textContent = 'Sending your message…';
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });
      if (!response.ok) {
        const result = await response.json().catch(() => ({}));
        const details = Array.isArray(result.errors) ? result.errors.map(x => x.message).filter(Boolean).join(' ') : '';
        throw new Error(details || 'The form could not be submitted. Please try again.');
      }
      form.reset();
      status.textContent = 'Thank you — your message has been sent successfully.';
    } catch (error) {
      status.textContent = error.message || 'Something went wrong. Please try again or use LinkedIn.';
    } finally {
      button.disabled = false;
      button.textContent = 'Send inquiry →';
    }
  });
});
