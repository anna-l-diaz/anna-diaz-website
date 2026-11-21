# Anna Diaz — Industrial Editorial Website

A complete, deployable static website using the approved earthy-industrial visual direction: warm ivory, charcoal, olive green, open whitespace, a diagonal portrait frame, and restrained technical typography.

## Contents

- `index.html` — redesigned homepage
- `about.html`, `writing.html`, `projects.html`, `advisory.html`, `contact.html` — interior pages
- `writing/`, `projects/` — detailed research and project pages
- `assets/styles.css` — site-wide branding and responsive layouts
- `assets/anna-diaz-portrait.jpg` — actual uploaded portrait, optimized for the web
- `assets/*.svg`, `assets/script.js` — graphics and mobile navigation

## Preview before publishing

Extract the ZIP and open `index.html` in your browser. Ensure the `assets` folder stays alongside `index.html`.

## Update the existing GitHub + Cloudflare Pages website

1. Back up the current repository (`Code → Download ZIP` in GitHub).
2. Open the **existing** repository `anna-l-diaz/anna-diaz-website`.
3. Upload all files and folders **inside** this website folder to the **root** of the existing repository (do not upload just the ZIP, or add an extra top-level folder). For existing files such as `index.html` and `assets/styles.css`, use GitHub's file editor or git to overwrite them; GitHub's browser upload behavior may vary for duplicate paths.
4. Commit the changes to the production branch (`main`, if that is your configured branch).
5. In Cloudflare Pages, open **Workers & Pages → your existing Pages project → Deployments** and verify the new Git deployment succeeded. **Do not create another Pages project.**
6. Visit `https://anna-diaz-website.pages.dev/` and hard-refresh (Ctrl+Shift+R). Test the About, Writing, Projects, Advisory, and Contact links.

### Recommended reliable method (Git installed)

Clone the repository, copy the contents of this folder into the clone, then run:

```bash
git add -A
git commit -m "Refresh earthy industrial website design"
git push
```

Your connected Cloudflare Pages project will deploy automatically.

## Personalization checklist

- The portrait in `assets/anna-diaz-portrait.jpg` is the user-supplied headshot. To change it later, replace that file with another JPG of the same name.
- Your LinkedIn link is already added. Do not publish an email address in the website files.
- Writing topics and project concepts are labeled honestly as in progress or proposed; do not present them as completed case studies until ready.
- No specific volunteer organizations are named.
- Review your employer's communications and conflict-of-interest policies before publishing employer-related or outside-advisory content.

## Static hosting

Works with Cloudflare Pages, GitHub Pages, Netlify, or any static web host. No build command is required. Use `.` as the Cloudflare Pages output directory when deploying from the repository root.

## New in this version

- A low-contrast mountain horizon at the bottom of the homepage navigation panels (`assets/mountain-horizon.svg`). This is an abstract landscape motif, not a photograph.
- Italics reduced to just the main homepage headline.
- Removed references to specific volunteer organizations from public-facing pages.
- A redesigned contact page with LinkedIn and a third-party hosted inquiry form that does not expose your email address.

### REQUIRED: Activate your private, hosted contact form

The contact form uses Formspree. Your private email address is **not** included anywhere in the website files. Formspree receives your submissions and can notify you at the email address configured privately in your Formspree account.

1. Create a free account at https://formspree.io/ and create a form named `Anna Diaz — Contact`.
2. Set/verify the destination email **inside your Formspree dashboard only**. Do NOT type it in GitHub, HTML or JavaScript.
3. Copy the form endpoint, e.g. `https://formspree.io/f/abcdefgh`; the `abcdefgh` portion is your **public form ID**.
4. In `assets/contact-config.js`, set `formId: "abcdefgh"` (use your actual form ID).
5. Commit and push your changed file to GitHub. Cloudflare Pages will redeploy automatically.
6. Open the live `/contact.html`, send a test message, and confirm it appears in your Formspree dashboard and reaches your notifications if enabled. Check spam filtering and any Formspree verification requests.

The form is intentionally disabled until you add your form ID; LinkedIn remains available. It uses a hidden honeypot field and sends messages over HTTPS to Formspree only on submission. No additional analytics or form tracking code is introduced.

**Privacy considerations:** Formspree is a third-party processor, not end-to-end encryption; messages are visible to your Formspree account and subject to Formspree's privacy/retention practices. The site tells visitors what is submitted and links to https://formspree.io/legal/privacy-policy/. Do not ask for sensitive or confidential information. For additional controls, review Formspree spam and retention settings.

**LinkedIn:** The contact page links to https://www.linkedin.com/in/anna-l-diaz/.

### Updating with PowerShell

From the folder containing the updated files, copy all items into your *existing local Git clone*, then run `git add -A`, `git commit -m "Refine Anna Diaz website and contact page"`, and `git push origin main`. Keep the site files at the repository root. No new Cloudflare Pages project is needed.
