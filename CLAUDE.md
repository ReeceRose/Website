# CLAUDE.md

This file provides guidance for AI assistants working with this codebase.

## Project Overview

This is a personal portfolio website for Reece Rose, built with **Astro** and styled with **Tailwind CSS**. The site is statically generated and deployed on Vercel.

- **Live site**: https://reecerose.com
- **Framework**: Astro 5.x
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Output**: Static site generation
- **Node requirement**: >=20.0.0

## Quick Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build locally
npm run lint     # Run Biome linter
npm run format   # Format code with Biome
npm run check    # Run Biome linter and formatter
```

## Project Structure

```
Website/
├── public/                    # Static assets (served as-is)
│   ├── assets/
│   │   ├── fonts/            # Custom fonts (Inter, Outfit)
│   │   └── images/           # Project images
│   └── *.png, *.ico          # Favicons and PWA icons
├── src/
│   ├── components/
│   │   ├── general/          # Shared components
│   │   │   ├── Footer.astro
│   │   │   ├── MetaHead.astro
│   │   │   ├── ProjectCard.astro
│   │   │   └── ProjectsWrapper.astro
│   │   └── home/             # Homepage-specific components
│   │       ├── Hero.astro
│   │       └── Experience.astro
│   ├── data/
│   │   └── info.ts           # Central data source for all content
│   ├── layouts/
│   │   └── Layout.astro      # Main layout wrapper
│   ├── pages/
│   │   ├── index.astro       # Homepage
│   │   └── 404.astro         # Custom 404 error page
│   ├── styles/
│   │   ├── style.css         # Main stylesheet (imports others)
│   │   ├── fonts.css         # @font-face definitions
│   │   └── custom-styles.css # Custom CSS (gradient animations)
│   ├── types/
│   │   └── index.ts          # TypeScript interfaces
│   └── env.d.ts              # Astro environment types
├── astro.config.mjs          # Astro configuration
├── biome.json                # Biome linter/formatter configuration
├── tailwind.config.cjs       # Tailwind configuration
├── tsconfig.json             # TypeScript configuration
├── vercel.json               # Vercel deployment config (security headers)
└── package.json
```

## Key Conventions

### Path Aliases

The project uses TypeScript path aliases (configured in `tsconfig.json`):

```typescript
@layouts/*     → src/layouts/*
@components/*  → src/components/*
@data          → src/data/info
@utils         → src/utils
@types         → src/types
```

### Data Management

All site content is centralized in `src/data/info.ts`. This includes:
- Personal information (name, job description, about text)
- Work experience entries
- Education entries
- Social media links
- Projects list

**To update content**, modify the `info` object in this file.

### TypeScript Interfaces

All interfaces are defined in `src/types/index.ts`:
- `IMetaHead` - SEO meta information
- `IHeroProps` - Hero section props
- `IExperience` / `IExperiences` - Work/education entries
- `IProject` / `IProjects` - Project cards
- `ITech` - Technology tags with colors

### Styling Approach

1. **Tailwind CSS** - Primary styling method, use utility classes
2. **Custom CSS** - Located in `src/styles/custom-styles.css` for complex styles (e.g., gradient animations)
3. **Fonts** - Inter (body text) and Outfit (headings), defined in `fonts.css`
4. **Colors** - Custom palette in `tailwind.config.cjs`:
   - `dark`: #111111
   - `light`: #FFFFFF
   - `blue`: #33d2ff
   - `gray`: #C4C4C4
   - `dark-gray`: #1A1A1A

### Dark Mode

- Uses `class` strategy with `[data-theme="dark"]` selector
- Theme detection: prefers system preference, falls back to localStorage, defaults to dark
- Theme logic is in `src/layouts/Layout.astro`

### Components

All components are Astro components (`.astro` files):
- Props are typed using TypeScript interfaces
- Frontmatter section (`---`) handles imports and data processing
- Template section contains HTML with Astro directives

## Adding Content

### Adding a New Experience Entry

Edit `src/data/info.ts`:

```typescript
experience: [
  {
    name: "Job Title",
    company: "Company Name",
    location: "City, Country",
    startDate: "Month Year",
    endDate: "Present",
    description: [
      "Accomplishment 1",
      "Accomplishment 2",
    ],
  },
  // ... existing entries
]
```

### Adding a New Project

Edit `src/data/info.ts`:

```typescript
projects: [
  {
    title: "Project Name",
    thumbnail: "/assets/images/project.webp",  // Add image to public/assets/images/
    githubUrl: "https://github.com/...",
    liveUrl: "https://...",
    description: "Project description",
    tech: [
      { title: "React", colour: "bg-blue-500" },
      { title: "TypeScript", colour: "bg-blue-700" },
    ],
  },
]
```

## Build & Deployment

- **Build output**: Static files in `dist/` directory
- **Deployment**: Vercel (configured in `.vercel/` directory)
- **SEO**: Auto-generated sitemap and robots.txt via Astro integrations

## Code Quality

This project uses **Biome** for linting and formatting:

```bash
npm run check    # Lint and format in one command
```

Biome is configured in `biome.json` with:
- 2-space indentation
- Double quotes for strings
- Semicolons required
- Trailing commas (ES5 style)

## Development Notes

- The site has two pages: `index.astro` (home) and `404.astro` (error page)
- No client-side JavaScript framework (pure Astro with minimal vanilla JS for theme)
- Images should be optimized (prefer `.webp` format)
- Font preloading is configured in `MetaHead.astro`
- Only essential font weights are loaded (7 total) to optimize performance
- Security headers are configured in `vercel.json`
