# Portfolio Frontend

A React and TypeScript portfolio website built with Next.js App Router. The site loads portfolio content from a backend API and presents it through responsive pages for projects, skills, experience, education, services, and contact.

## Features

- API-backed profile, project, career, education, skills, language, service, and social data
- Home page with hero, about, and featured projects sections
- Project listing and slug-based project detail pages
- Loading and error states for API-backed sections
- Contact form and newsletter subscription integrations
- Responsive navigation, SEO metadata, smooth scrolling, and theme support
- Next.js App Router navigation and metadata

## Routes

| Route | Page |
| --- | --- |
| `/` | Home and featured projects |
| `/about` | About, services, and languages |
| `/projects` | All projects |
| `/projects/:slug` | Project details |
| `/skills` | Skills and professional traits |
| `/experience` | Career timeline |
| `/education` | Education and learning |
| `/contact` | Contact form |

## Getting Started

Requirements: Node.js 20.19 or newer and a running portfolio API.

```bash
npm install
npm run dev
```

The development server runs at `http://localhost:3000` by default.

The frontend uses `http://localhost:5000` as the API URL by default. Set `NEXT_PUBLIC_API_URL` when the backend runs elsewhere:

```bash
NEXT_PUBLIC_API_URL=https://api.example.com npm run dev
```

## Scripts

```bash
npm run dev       # Start the Next.js development server
npm run build     # Create a production build
npm run start     # Start the production server
npm run lint      # Run ESLint
npm run typecheck # Run TypeScript without emitting files
```

## Project Structure

```text
src/
├── components/   # Portfolio sections and reusable UI components
├── hooks/         # Shared React hooks
├── lib/api.ts     # API client, data normalization, and API types
├── route-pages/   # Shared route-rendering components
└── App.tsx        # Data loading and client application shell
src/app/           # Next.js App Router routes and root layout
public/            # Static metadata, redirects, and public assets
```

## Deployment

Build the application with `npm run build` and deploy the generated `.next/` output through a Next.js-compatible host. Configure `NEXT_PUBLIC_API_URL` in the deployment environment.
