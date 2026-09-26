# Yudhasono Aditio (Yaditio) Portfolio & Apps Website

Modern, high-performance static website built with **Astro**, **GitHub Pages**, and **Pages CMS**.

## Overview

**Yudhasono Aditio** is an experienced Civil Technologist with a strong background in various types of projects, including infrastructure (roads, bridges, and drainage systems), architectural works, and irrigation structures.

## Features

- 🚀 **Built with Astro**: Fast, lightweight static site generation.
- 📝 **Git-based CMS with Pages CMS**: Manage Resume, Software Apps, Blog Posts, and App Downloads directly from a clean web interface (`https://pagescms.org`) using `.pages.yml`.
- ⚡ **GitHub Pages Ready**: Automatic CI/CD build & deployment via GitHub Actions workflow (`.github/workflows/deploy.yml`).
- 🎨 **Modern Dark Theme UI**: Responsive, glassmorphic layout, gradient typography, and hover animations.
- 📦 **Featured Apps & Downloads**:
  - [RTWall-Cantilever](https://github.com/yaditio/RTWall-Cantilever) — Cantilever Retaining Wall Analysis & Design Application.
  - [BIM-BAM](https://github.com/yaditio/BIM-BAM) — Building Information Modeling & Automation Toolkit.

## Pages Included

1. **Home (`/`)**: Intro hero, bio summary, quick links, featured apps, downloads, and latest blog posts.
2. **Apps (`/apps`)**: Portfolio of open-source software applications & automation tools (CMS editable).
3. **Resume (`/resume`)**: Full interactive CV featuring About, Experience, Education, Licenses & Certifications, 32 Skills, Languages, and Projects.
4. **Blog (`/blog`)**: Engineering notes, Python articles, and AEC tech posts (CMS editable).
5. **Download (`/download`)**: Open-source apps & tools download page with README breakdowns (CMS editable).
6. **Contact (`/contact`)**: Interactive contact form with Name, Email, and Message fields.

## Profiles Linked

- **GitHub**: [github.com/yaditio](https://github.com/yaditio)
- **LinkedIn**: [linkedin.com/in/yudhasonoaditio](https://www.linkedin.com/in/yudhasonoaditio)

---

## Local Development

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Build static production site
npm run build
```

---

## Pages CMS Integration

1. Go to [pagescms.org](https://pagescms.org) and click **Sign in with GitHub**.
2. Select your `Yaditio-Website` repository.
3. Pages CMS will auto-detect `.pages.yml` and load content collections:
   - **Resume / CV**: Edit resume details & markdown (`src/content/resume/main.md`).
   - **Software Apps**: Add, edit, or remove app items (`src/content/apps/`).
   - **Blog Posts**: Write and publish articles (`src/content/blog/`).
   - **Downloads & Releases**: Manage app listings & release URLs (`src/content/downloads/`).

---

## Deploying to GitHub Pages

1. Push this repository to GitHub (`main` branch).
2. Go to your repo **Settings > Pages > Build and deployment**.
3. Set **Source** to **GitHub Actions**.
4. Pushing code or saving content changes via Pages CMS will automatically trigger the deployment workflow!
