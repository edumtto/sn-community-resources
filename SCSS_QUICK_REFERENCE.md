# SCSS Quick Reference Guide

## Available Scripts

```bash
# Development with live reloading
npm run dev

# Build CSS only
npm run build:css

# Watch CSS for changes
npm run watch:css

# Build entire site
npm run build

# Start dev server (builds CSS first)
npm start
```

## File Organization

### Where to make changes:

- **Colors/Theme**: `src/scss/abstracts/_variables.scss`
- **New Components**: `src/scss/components/_[component-name].scss`
- **Layout Changes**: `src/scss/layout/_[layout-name].scss`
- **Responsive Styles**: `src/scss/utilities/_responsive.scss`
- **New Mixins**: `src/scss/abstracts/_mixins.scss`

## Common Mixins

```scss
// Responsive breakpoints
@include mobile { /* styles */ }
@include tablet { /* styles */ }
@include desktop { /* styles */ }

// Button styles
@include button-primary;
@include button-secondary;

// Card styles
@include card-base;

// Flexbox utilities
@include flex-center;
@include flex-between;
@include flex-column;

// Accessibility
@include focus-visible;
@include reduced-motion;
@include high-contrast;
```

## SCSS Variables

```scss
// Colors
$primary, $primary-light, $primary-dark
$secondary, $secondary-light, $secondary-dark
$accent, $accent-light, $accent-dark
$highlight, $highlight-light, $highlight-dark

// Neutrals
$light, $light-gray, $medium-gray, $dark

// Spacing & Layout
$spacing-unit, $border-radius, $max-width

// Breakpoints
$breakpoint-mobile: 480px
$breakpoint-tablet: 768px
$breakpoint-desktop: 1024px
$breakpoint-large: 1200px
```

## Adding New Components

1. Create new file: `src/scss/components/_new-component.scss`
2. Add import to `src/scss/main.scss`:
   ```scss
   @import 'components/new-component';
   ```
3. Use existing mixins and variables for consistency

## Backward Compatibility

- All original CSS class names are preserved
- CSS custom properties (variables) are still available
- No changes needed to HTML templates
