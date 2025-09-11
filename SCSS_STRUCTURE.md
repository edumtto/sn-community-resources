# SCSS Structure Documentation

This project has been converted from CSS to a modular SCSS architecture for better maintainability and organization.

## Directory Structure

```
src/scss/
├── abstracts/          # Variables, mixins, and functions
│   ├── _variables.scss
│   ├── _mixins.scss
│   └── _functions.scss
├── base/              # Reset, typography, and base styles
│   ├── _reset.scss
│   ├── _typography.scss
│   └── _base.scss
├── layout/            # Header, navigation, footer
│   ├── _header.scss
│   ├── _navigation.scss
│   └── _footer.scss
├── components/        # Reusable UI components
│   ├── _buttons.scss
│   ├── _cards.scss
│   ├── _forms.scss
│   ├── _hero.scss
│   └── _sections.scss
├── utilities/         # Utility classes and helpers
│   ├── _responsive.scss
│   ├── _accessibility.scss
│   └── _animations.scss
└── main.scss          # Main file that imports all modules
```

## Module Organization

### Abstracts
- **Variables**: All SCSS variables (colors, spacing, typography, breakpoints)
- **Mixins**: Reusable mixins for common patterns (buttons, cards, responsive breakpoints)
- **Functions**: Custom SCSS functions for calculations

### Base
- **Reset**: CSS reset and base element styles
- **Typography**: Font styles, headings, and text elements
- **Base**: Container, main, section, and other base element styles

### Layout
- **Header**: Header layout and logo styles
- **Navigation**: Navigation menu and mobile menu styles
- **Footer**: Footer layout and link styles

### Components
- **Buttons**: All button variants and states
- **Cards**: Resource cards, event cards, photo albums, etc.
- **Forms**: Form elements, validation states, and form layouts
- **Hero**: Hero section variations and styles
- **Sections**: Section layouts and background variants

### Utilities
- **Responsive**: Responsive utilities and mobile-first helpers
- **Accessibility**: Screen reader utilities, focus management, high contrast support
- **Animations**: Keyframe animations and animation utility classes

## Available Scripts

- `npm run build:css` - Compile SCSS to CSS (compressed with source maps)
- `npm run watch:css` - Watch SCSS files for changes and recompile
- `npm run dev` - Run both SCSS watcher and Eleventy dev server concurrently
- `npm start` - Build CSS and start Eleventy dev server
- `npm run build` - Build CSS and compile Eleventy site

## Key Features

### Modern SCSS Architecture
- Uses `@use` instead of deprecated `@import` for better performance and namespace management
- Proper module system with explicit dependencies
- Future-proof for Dart Sass 3.0.0

### SCSS Variables
All colors, spacing, typography, and other design tokens are defined as SCSS variables in `_variables.scss`.

### Responsive Mixins
Use the included mixins for consistent responsive design:
```scss
@include mobile { /* mobile styles */ }
@include tablet { /* tablet styles */ }
@include desktop { /* desktop styles */ }
```

### Component Mixins
Reusable mixins for common patterns:
```scss
@include button-primary;
@include card-base;
@include flex-center;
```

### Accessibility Support
- High contrast mode support
- Reduced motion support
- Focus management utilities
- Screen reader utilities

### Backward Compatibility
CSS custom properties (variables) are still available for any existing JavaScript that might depend on them.

## Migration Notes

The original CSS files (`src/css/style.css` and `src/css/components.css`) have been converted to this modular SCSS structure using the modern `@use` syntax. The compiled CSS maintains the same class names and functionality while providing better organization, maintainability, and future-proofing.

### What Changed
- All `@import` statements replaced with `@use`
- Proper namespace management for variables and mixins
- Explicit dependencies between modules
- No more deprecation warnings
- Better performance and compilation speed

## Development Workflow

1. Use `npm run dev` for development with live reloading
2. Edit SCSS files in the appropriate module directory
3. The main.scss file automatically imports all modules
4. CSS is compiled to `src/css/style.css` for Eleventy to use
