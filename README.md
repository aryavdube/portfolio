# Aryav Dube: Portfolio + Interactive Resume

Personal portfolio for Aryav Dube (UCLA Linguistics + Computer Science, Class of 2029). The work spans accessibility, special education, AI research, and full-stack engineering.

- `index.html`: portfolio with interactive project previews (SpecialThinkers, MindLuminary, UCLA SEED Lab, Vanderbilt AAC paper, DonorMozo) and a contact form
- `resume.html`: interactive resume with a filterable timeline, hover/tap detail cards, skills, honors, and education

## Stack

Plain HTML, CSS, and vanilla JavaScript. There's no build step and no dependencies. Fonts load from [Fontshare](https://www.fontshare.com/) (Cabinet Grotesk and Satoshi).

```
.
├── index.html      # portfolio
├── resume.html     # interactive resume
├── base.css        # reset + base styles
├── style.css       # shared design system + portfolio styles
├── resume.css      # resume page styles
├── app.js          # theme toggle, scroll motion, project demos, contact form
├── resume.js       # resume data + timeline, tooltips, dialogs, filters
├── favicon.svg

```

## Run locally

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploy to GitHub Pages

1. Push this folder to a GitHub repository.
2. Go to **Settings → Pages**, set **Source** to *Deploy from a branch*, and pick `main` with the `/ (root)` folder.
3. The site goes live at `https://<username>.github.io/<repo>/`.

Vercel and Netlify also work. Import the repo and leave the build command empty.

## Contact form

The form posts to [FormSubmit](https://formsubmit.co/) and delivers to `adube08@ucla.edu`, so no backend is needed.

- **One-time activation:** the first submission sends an activation email to that inbox. Click **Activate Form**, and after that every message arrives normally.
- **Validation:** the form includes a honeypot field for spam, and JavaScript validates it and shows status messages. Without JavaScript it falls back to a standard POST.
- **Changing the recipient:** update the `action` and `data-ajax` attributes on `#contact-form` in `index.html`.

## Editing the resume

All resume content lives in the `items`, `awards`, `edu`, and `skills` arrays at the top of `resume.js`. Edit those arrays and the timeline, cards, tooltips, and dialogs update automatically. Durations for "Present" roles are calculated from today's date.

## Accessibility

- Semantic landmarks, a skip link, visible focus styles, and full keyboard support (Tab, Enter, and Escape for tooltips and dialogs)
- WCAG AA color contrast in both dark and light themes
- Every hover detail also opens on keyboard focus and on tap for touch devices
- Honors `prefers-reduced-motion`

## Credits

Project logos belong to their respective organizations. The UCLA and Vanderbilt marks are used for identification only. The illustrations and avatars are AI-generated.

© 2026 Aryav Dube
