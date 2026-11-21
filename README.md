# Anna Diaz — personal website

A multi-page, responsive static website. This is a working starter site, not a published site.

## Files

- `index.html` — homepage, portrait placeholder, introduction, featured work
- `about.html` — background and industrial-renewal interests
- `writing.html` — article previews and research status
- `writing/agricultural-biosecurity.html` — research outline page
- `projects.html` — technical projects and portfolio
- `projects/autonomous-inventory.html` — project-detail page
- `advisory.html` — prospective volunteer/advisory focus
- `contact.html` — placeholder contact details
- `assets/styles.css` — all visual styling
- `assets/script.js` — mobile menu and footer year
- `assets/portrait-placeholder.svg` — illustration to replace
- `assets/*.svg` — original lightweight vector illustrations

## Preview locally

Double-click `index.html` to open the homepage in your browser. Navigation between pages works without a build step. For a closer preview of the deployed site, start a simple local server in the folder:

```bash
python -m http.server 8000
```

Then visit http://localhost:8000.

## Publish free on Cloudflare Pages

1. Create a GitHub repository (for example `anna-diaz-website`).
2. Upload **the contents** of this folder into the repository root, so `index.html` is at the top level.
3. In Cloudflare dashboard, open **Workers & Pages**, create a Pages project, and connect the GitHub repository.
4. Select an ordinary static site deployment. Set build command to blank and output directory to the repository root (`.`) if asked.
5. Deploy and visit the `*.pages.dev` address Cloudflare assigns.
6. Add a personal domain later if wanted; buying a domain is typically the only necessary recurring expense.

Cloudflare's interface changes occasionally; consult its current Pages docs if labels differ.

## Before publishing publicly

- **Portrait:** Replace `assets/portrait-placeholder.svg` with your own photo (e.g. `assets/anna-portrait.jpg`), then change the image `src` in `index.html` and update the image alt text. Optimize it to under ~500 KB if possible.
- **Contact:** Update `contact.html` with a public-facing email or LinkedIn link. There is no contact form or active contact address yet.
- **Writing:** Research outlines and suggested articles are clearly marked as in-progress / proposed. Replace them with your own verified finished articles as they are ready.
- **Projects:** Don't imply completed engineering or consulting projects if they are still ideas.
- **Professional boundaries:** Publish only employer-approved public professional information. Do not include confidential data or volunteer-client details without authorization. Do not imply affiliation with SCORE or Catchafire unless an affiliation is established.
- **Brand review:** Review your employer's outside-work, communications, and conflict-of-interest policies before launching any paid advisory work.

## Editing

Update content directly in each `.html` file. Common typography, colors, layout, and responsive behavior live in `assets/styles.css`. All links use relative URLs so the site works on a `pages.dev` address or your own custom domain.

## Design decisions

The site is intentionally nonpartisan and lightly emphasizes U.S. industrial renewal through the copy and article themes. Its central positioning is: “Working at the intersection of industrial operations, emerging technology, and strategic competition.”

No analytics, trackers, external image services, or forms are included. Google Fonts are an optional enhancement; fallback fonts are provided if that network request fails.
