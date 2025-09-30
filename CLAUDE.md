# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Build and Development
- `npm run dev` - Start development server with Vite
- `npm run build` - Build for production (TypeScript check + Vite build)
- `npm run preview` - Preview production build locally

### Code Quality
- `npm run lint` - Run ESLint for code linting
- `tsc --noEmit` - Type check without emitting files

### Deployment
- Firebase hosting configured to serve from `dist` folder
- SPA routing configured with fallback to `index.html`

## Architecture Overview

### Tech Stack
- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite
- **Styling**: SASS modules (.module.scss)
- **Routing**: React Router DOM v7 with file-based structure
- **Deployment**: Firebase Hosting

### Project Structure

```
src/
├── pages/               # Route-based pages
│   ├── home/           # Homepage components
│   ├── sobre-mim/      # About page
│   └── case-page/      # Dynamic case studies
│       ├── components/ # Reusable case components
│       ├── caseBemol/  # Specific case implementations
│       ├── appBemol/   # App Bemol case
│       └── melliuz/    # Melliuz case
├── components/         # Global reusable components
│   ├── layout/        # Header, Footer, etc.
│   ├── links/         # Link components
│   └── navigation/    # Navigation components
├── interfaces/        # TypeScript interfaces (organized by domain)
├── utils/            # Utility functions
├── assets/           # Static assets (images, videos, PDFs)
└── layouts/          # Layout components
```

### Case Study Component System

The application uses a structured component hierarchy for building case studies:

**Main Structure:**
- `Chapter` - Primary section container with automatic background alternation
- `ContentBlock` - Groups related content with flexible spacing
- `ContentSection` - Generic container for complex content with titles
- `TextContent` - Specialized text component with markdown support (**bold**)
- `CaseTitleHeader` - Standardized section headers with ID, title, and subtitle

**Key Features:**
- All components support `customCss` props for spacing control
- Automatic "px" unit addition for numeric values (via `normalizeMeasures`)
- Responsive design with max-width: 1440px and 75% content width
- CSS modules for scoped styling
- Chapter background alternation: odd (#0f0f0f), even (#272727)

### CSS Architecture

- **CSS Modules**: All styles use `.module.scss` for component scoping
- **Utility Functions**: `normalizeMeasures()` normalizes CSS values (adds "px" to numbers)
- **Responsive Design**: Consistent max-width and padding across components
- **Color Scheme**: Dark theme with alternating chapter backgrounds

### Interface Organization

TypeScript interfaces are organized by domain:
- `components.ts` - Component props (deprecated, use specific files)
- `content.ts` - Content-related interfaces
- `media.ts` - Media component interfaces
- `metrics.ts` - Metrics and data interfaces
- `navigation.ts` - Navigation interfaces
- `tools.ts` - Tool-related interfaces

### Case Study Data Management

Each case study has its own folder with:
- `data.ts` - Core case data and configuration
- `contentData.ts` - Detailed content data for components
- Main component file (e.g., `CaseBemol.tsx`)

### Routing Structure

- `/` - Home page with case previews
- `/sobre-mim` - About page with tools and experience
- `/case/:id` - Dynamic case study pages

### Asset Management

Assets are organized by:
- `cases/` - Case study thumbnails and previews
- `ferramentas/` - Tool icons and logos
- `svgs/` - SVG icons and graphics
- Case-specific folders (e.g., `caseBemol/`, `appBemol/`)

## Development Guidelines

### Component Creation
- Use TypeScript interfaces from `src/interfaces/`
- Follow CSS modules pattern with `.module.scss`
- Implement responsive design with consistent spacing
- Use `normalizeMeasures()` for dynamic CSS values

### Case Study Development
- Create new case folder in `src/pages/case-page/`
- Include `data.ts`, `contentData.ts`, and main component
- Use structured component hierarchy (Chapter → ContentBlock → Content)
- Follow naming convention: PascalCase for components, camelCase for files

### Styling Conventions
- Dark theme: #0f0f0f, #272727, #ffffff, #bbbbbb
- Typography: Inter font family with consistent font sizes
- Spacing: Use multiples of 20px for consistency
- Max content width: 1440px with 75% inner width

### Firebase Deployment
- Build generates static files in `dist/`
- Single Page Application routing configured
- Production builds include TypeScript compilation