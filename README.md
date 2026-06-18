# Personal Site

This project contains the personal landing page and a dedicated resume page with English and Portuguese Markdown versions.

## Local development

Run `npm install` once, then:

- `npm start` to run the site locally
- `npm test -- --watchAll=false` to run the tests once
- `npm run build` to generate the production build

The resume files live in `resumes/` and are automatically copied to `public/resumes/` before `start` and `build`.

## Free deploy on GitHub Pages

This repository is already configured to publish with `gh-pages`.

1. Run `npm run deploy`
2. In the GitHub repository settings, open Pages
3. Set the source to the `gh-pages` branch if GitHub has not selected it automatically
4. Access the site at `https://jhonatanmsc.github.io`

The resume page is available at `https://jhonatanmsc.github.io/#resumes`.
