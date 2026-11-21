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
- Add your real professional email and LinkedIn URL in `contact.html` once you choose to publish them.
- Writing topics and project concepts are labeled honestly as in progress or proposed; do not present them as completed case studies until ready.
- SCORE and Catchafire are mentioned as organizations being explored, not completed affiliations.
- Review your employer's communications and conflict-of-interest policies before publishing employer-related or outside-advisory content.

## Static hosting

Works with Cloudflare Pages, GitHub Pages, Netlify, or any static web host. No build command is required. Use `.` as the Cloudflare Pages output directory when deploying from the repository root.
