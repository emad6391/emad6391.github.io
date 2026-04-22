<<<<<<< HEAD
# Welcome to your new project!

Technology Stack
- **Astro** - Modern web framework for building fast, content-focused websites
- **Tailwind CSS v4** - Utility-first CSS framework for rapid UI development
- **shadcn/ui** - Re-usable component library built on Radix UI primitives (54 components pre-installed)
- **React 19** - JavaScript library for building interactive user interfaces
- **Lucide** - Beautiful, consistent icon library with tree-shakeable ES modules
- **Vite** - Fast build tool and dev server (powers Astro under the hood)
=======
# Ed Al – DevOps Portfolio

A static React portfolio showcasing DevOps skills, certifications, and projects.

## Stack

- **React 18** – component-based UI
- **Vite** – fast dev server and optimised static build
- **CSS Modules (per-component)** – scoped styles, no external UI library
- **No backend** – fully static, deployable anywhere

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

## Project Structure

```
ed-al-portfolio/
├── index.html
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx              # React entry point
    ├── App.jsx               # Root — assembles all sections
    ├── index.css             # Global styles & CSS variables
    ├── data/
    │   └── portfolio.js      # ✏️  All content lives here
    └── components/
        ├── Nav.jsx / .css
        ├── Hero.jsx / .css
        ├── About.jsx / .css
        ├── Certifications.jsx / .css
        ├── Projects.jsx / .css
        ├── Contact.jsx / .css
        ├── Footer.jsx / .css
        └── Section.css       # Shared section layout
```

## Customising Content

Everything is data-driven. Edit **`src/data/portfolio.js`** to update:

- Your name, role, and tagline
- Hero tag cloud
- About paragraphs
- Skills list
- Certifications (name, provider, colour)
- Projects (title, description, tech stack, GitHub link)

No need to touch component files for content changes.

## Deploying

This is a fully static build. After `npm run build`, deploy the `dist/` folder to:

- **Netlify** – drag & drop the `dist/` folder or connect GitHub
- **Vercel** – `vercel --prod` from the project root
- **GitHub Pages** – push `dist/` to a `gh-pages` branch
- **AWS S3 + CloudFront** – upload `dist/` and serve via CloudFront

## Licence

Personal portfolio – all rights reserved.
>>>>>>> 1c3309d0a8b116b1a8c16845731a0a60d5ecc582
