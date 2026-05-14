# Ewa Ramus — Personal Portfolio

This repository contains the source code for my personal portfolio website published with GitHub Pages.

The goal of this portfolio is to present my work as a frontend/product-minded engineer: React, TypeScript, thoughtful UX, accessibility, product quality, and continuous learning.

## Tech stack

- Astro
- React islands where interactivity is needed
- TypeScript
- Tailwind CSS
- MDX for future project case studies
- GitHub Pages deployment

## Current status

Initial portfolio setup in progress.

Planned first milestone:

- create the Astro project structure
- add the homepage layout
- add the first React portfolio component
- configure Tailwind CSS
- configure GitHub Pages deployment
- publish the first version online

## Local development

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Build the production version:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Project structure

```txt
src/
  components/
    PortfolioHome.tsx
  layouts/
    BaseLayout.astro
  pages/
    index.astro
  styles/
    global.css

public/
  Ewa-Ramus-CV.pdf
```

## Deployment

The site will be deployed to GitHub Pages using GitHub Actions.

Target URL:

```txt
https://ekaramus.github.io
```
