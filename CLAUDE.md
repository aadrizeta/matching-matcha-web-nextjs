# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Matching Matcha is a Spanish-language e-commerce website for premium matcha tea products, built with Next.js 16 and React 19.

## Commands

```bash
pnpm dev          # Start development server at localhost:3000
pnpm build        # Production build
pnpm lint         # Run ESLint
```

## Architecture

### Tech Stack
- **Framework**: Next.js 16.1.2 with App Router
- **React**: v19.2.3 with React Compiler enabled (`reactCompiler: true` in next.config.ts)
- **Styling**: Tailwind CSS v4 with `@tailwindcss/typography` plugin
- **Package Manager**: pnpm

### Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout with Header + Footer
│   ├── page.tsx            # Home page
│   ├── about-us/           # About Us page
│   └── community/          # Community page
├── components/
│   ├── layout/             # Page-level layout components (Header, Footer, HomePage sections)
│   └── ui/                 # Reusable UI components organized by feature
└── globals.css             # Global styles, CSS variables, Tailwind theme
```

### Component Organization Pattern
- `components/layout/` contains composite layout components that assemble UI pieces (e.g., `Header/header.tsx` combines burger menu, logo, navbar, cart)
- `components/ui/` contains smaller reusable UI components organized by feature area (e.g., `ui/header/`, `ui/footer/`, `ui/sidecart/`)

### Path Aliases
- `@/*` maps to `./src/*` (configured in tsconfig.json)

### Styling System
- CSS variables defined in `:root` for colors, paddings, and max-widths
- Custom fonts: `Encabezados` (Helvetica) for headings, `Cuerpo` for body text
- Tailwind theme extension via `@theme inline` block in globals.css
- Utility classes defined in `@layer components` (e.g., `.padding-responsive`, `.header`, `.nav-link`)
- Responsive padding system: `--padding-mobile` (16px), `--padding-tablet` (20px), `--padding-desktop` (32px)
- Max container width: 1400px

### Key Color Variables
- `--main_green: #8B9B81` - Primary brand color
- `--dark-green: #313429` - Dark accent
- `--light-yellow: #f8f7f1` - Light background accent
- `--main-banner: #ececec` - Banner background
