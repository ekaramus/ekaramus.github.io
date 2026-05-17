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

## Requirements

Required Node.js version:

```txt
22.12.0 or higher
```

The project includes an `.nvmrc` file so the expected local Node version is documented.

## Current status

Portfolio implementation in progress.

Completed so far:

- initialized Astro project structure
- added React integration
- added Tailwind CSS and global visual tokens
- added shared layout, header, and footer
- added reusable UI components
- added homepage sections
- added projects overview page
- added VoicePin case study page
- added VibeCheck case study page
- added About page
- added Experience page
- added Contact page
- configured GitHub Pages deployment
- configured deployment to use a supported Node.js version
- published the first version online
- added CV file to public assets

Next milestone:

- review mobile layout and accessibility basics
- replace generic project links with final repository/demo links when ready

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
    layout/
      Header.astro
      Footer.astro
    projects/
      ProjectCard.astro
    ui/
      Badge.astro
      ButtonLink.astro
      Card.astro
      SectionHeading.astro
  data/
    projects.ts
  layouts/
    BaseLayout.astro
  pages/
    index.astro
    about.astro
    contact.astro
    experience.astro
    projects.astro
    projects/
      voicepin.astro
      slow-productivity.astro
  styles/
    global.css

public/
  Ewa-Ramus-CV.pdf

.github/
  workflows/
    deploy.yml
```

## Featured projects

- VoicePin — short voice messages with automatic transcription
- VibeCheck — Slow productivity tracker

## Deployment

The site is deployed to GitHub Pages using GitHub Actions.

Deployment workflow:

```txt
.github/workflows/deploy.yml
```

Target URL:

```txt
https://ekaramus.github.io
```

The workflow runs on pushes to the `master` branch and can also be triggered manually from the GitHub Actions tab.

After pushing to `master`, GitHub Actions builds the Astro project and publishes the generated site to GitHub Pages.

## Purpose

This site showcases selected product-focused frontend projects, with emphasis on:

- React + TypeScript
- UX decisions
- testing
- accessibility
- quality
- security and user trust
- technical communication
- continuous iteration
