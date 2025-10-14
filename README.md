# Blueprint Driven Development Monorepo

This monorepo contains the Blueprint Driven Development presentation and related materials.

## Structure

- `packages/presentation/` - Main presentation slides and assets
- `packages/demo/` - React demo application with TypeScript and Vitest
- `presentation-plan.md` - Detailed presentation plan (also available in packages/presentation/)

## Getting Started

### Prerequisites
- Node.js >= 16.0.0
- npm >= 7.0.0

### Installation
```bash
# Install all dependencies for all workspaces
npm install
```

### Running the Presentation
```bash
# Start the presentation server
npm run presentation:start

# Generate PDF
npm run presentation:pdf

# Serve the presentation
npm run presentation:serve
```

### Running the Demo Application
```bash
# Start the demo development server
npm run demo:dev

# Build the demo application
npm run demo:build

# Run demo tests
npm run demo:test

# Run tests with UI
npm run demo:test:ui

# Run tests with coverage
npm run demo:test:coverage
```

## Workspaces

### Presentation
Located in `packages/presentation/` - contains the main Blueprint Driven Development presentation slides.

### Demo
Located in `packages/demo/` - React application demonstrating Blueprint Driven Development principles with:
- **React 18** with TypeScript
- **Vite** for development and build
- **Vitest** for testing with jsdom environment
- **ESLint** for code linting
- **Testing Library** for component testing

Презентація до доповіді `Blueprint Driven Development, або як я писав тести до коду і не вмер`

Slides for presentation by Stanislav Dolgachov, Kyiv, Ukraine
