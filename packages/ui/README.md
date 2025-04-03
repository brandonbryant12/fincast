# @repo/ui

This package contains the shared UI components for the monorepo, built using [shadcn/ui](https://ui.shadcn.com/) as a foundation.

## Features

- Reusable UI components built with Radix UI and styled with Tailwind CSS
- Consistent design across all applications in the monorepo
- TypeScript support
- Easy to add new components
- Simplified file structure with all components in one location

## Installation

This package is automatically available to all applications in the monorepo.

## Using Components

### Import components

You can import components from the UI package in your application:

```tsx
// Import a component
import { Button, Accordion } from "@repo/ui";

// Or import from a specific path
import { Accordion } from "@repo/ui/components/accordion";
```

### Adding Tailwind Config

To use these components in your application, you need to add the UI package's tailwind preset to your application's tailwind config:

```js
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  // Add content from the UI package
  content: [
    // ... your app content
    "../../packages/ui/src/**/*.{js,ts,jsx,tsx}",
  ],
  // Extend the UI package theme
  presets: [require("../../packages/ui/tailwind.config.js")],
};
```

### Importing Styles

Make sure to import the styles in your application:

```tsx
// In your app's global CSS file
@import "@repo/ui/styles/global.css";

// Rest of your app's CSS
```

## Adding New Components

To add a new component from shadcn/ui, use the provided script:

```bash
# From the packages/ui directory
npm run add:component [component-name]

# For example
npm run add:component button
```

When you add a component using the script, it will automatically be placed in the `src/components` directory, following our simplified structure.

## Development

1. Make changes to components in `src/components`
2. Export them in `src/index.ts` 
3. Use them in any application in the monorepo

## Component Structure

```
packages/ui/
└── src/              # All source files are here
    ├── components/   # All UI components including shadcn components
    ├── lib/          # Shared utilities
    ├── hooks/        # React hooks
    ├── styles/       # CSS styles
    └── index.ts      # Main export file
``` 