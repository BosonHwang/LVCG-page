# LVCG Project Page

GitHub Pages homepage for **LVCG: Learning Cardiac Latent Representations in Vectorcardiogram Space** (ICML 2026 Poster).

## Local Preview

```bash
cd lvcg-page
python -m http.server 8080
# open http://localhost:8080
```

## Deploy to GitHub Pages

1. Push this directory to a GitHub repository (e.g. `BosonHwang/LVCG` or a dedicated `lvcg-page` repo).
2. In repository **Settings → Pages**, set source to **Deploy from branch**.
3. Select branch `main` (or `gh-pages`) and folder `/ (root)`.
4. Save — the site will be available at `https://<username>.github.io/<repo>/`.

> A `.nojekyll` file is included so GitHub Pages serves static assets as-is.

## Structure

```
lvcg-page/
├── index.html          # Main project page
├── css/style.css       # Styles
├── js/main.js          # BibTeX copy button
├── assets/             # SVG figures
├── poster/poster.html  # ICML 2026 poster (interactive HTML)
└── .nojekyll
```

## Adding Figures

Place paper figures in `assets/` and update `index.html` image references. The poster references images under `poster/images/` — add `framework.png`, `vcg_space.png`, `tsne.png`, and `qr_code.png` there for full poster rendering.
