# aravind.dev

Personal website and blog built with [Astro](https://astro.build).

## Tech Stack

- **Framework:** Astro 4
- **Styling:** Vanilla CSS (Brutalist theme)
- **Content:** Markdown + Astro components
- **Deployment:** Firebase Hosting
- **CI/CD:** GitHub Actions

## Quick Start

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:4321)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/astro/   # Reusable components (Nav, Footer)
├── content/
│   ├── posts/          # Blog posts (markdown)
│   └── guides/         # Technical guides (markdown)
├── layouts/            # Page layouts
├── pages/              # Routes (index, blog, about, archive)
└── style.css           # Global styles

public/
├── images/             # Static images
└── thumbnails/         # Post thumbnails
```

## Content

Blog posts and guides are written in Markdown with frontmatter:

```markdown
---
title: 'Post Title'
date: '2024-01-01'
tags: ['tag1', 'tag2']
thumbnail: '../thumbnails/image.png'
---

Content here...
```

## Deployment

Push to `main` triggers automatic deployment to Firebase Hosting via GitHub Actions.

**Branch previews:** Push to any branch to get a preview deployment.

## Local Development

The site uses a brutalist design with light/dark mode support. Dark mode styles are in `public/dark.css` and loaded dynamically.

## License

Content is copyrighted. Code is available for reference.
