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


## Accessibility

- Semantic landmarks, a skip link, visible focus styles, and full keyboard support (Tab, Enter, and Escape for tooltips and dialogs)
- WCAG AA color contrast in both dark and light themes
- Every hover detail also opens on keyboard focus and on tap for touch devices
- Honors `prefers-reduced-motion`

## Credits

Project logos belong to their respective organizations. The UCLA and Vanderbilt marks are used for identification only. The illustrations and avatars are AI-generated.

© 2026 Aryav Dube
