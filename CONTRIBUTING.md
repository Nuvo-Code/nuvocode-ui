# Contributing to @nuvocode/ui-library

Thank you for your interest in contributing to the NuvoCode UI Library! This document provides guidelines and instructions for contributing.

## Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/nuvocode/ui-library.git
   cd ui-library
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development mode**
   ```bash
   npm run dev
   ```

4. **Run Storybook for component development**
   ```bash
   npm run storybook
   ```

## Project Structure

```
src/
├── components/          # React components
│   ├── layout/         # Layout components (Navbar, Footer, etc.)
│   ├── common/         # Common components (NetworkStatus, etc.)
│   ├── forms/          # Form components
│   ├── admin/          # Admin-specific components
│   └── home/           # Home page components
├── hooks/              # Custom React hooks
├── types/              # TypeScript type definitions
├── utils/              # Utility functions
├── index.ts            # Main export file
└── index.css           # Global styles
```

## Component Development Guidelines

### 1. Component Structure

Each component should follow this structure:

```
ComponentName/
├── ComponentName.tsx    # Main component file
├── ComponentName.css    # Component styles
├── ComponentName.stories.tsx  # Storybook stories
├── ComponentName.test.tsx     # Unit tests
└── index.ts            # Export file
```

### 2. TypeScript

- All components must be written in TypeScript
- Define proper interfaces for props
- Export types from the main types file
- Use generic types where appropriate

### 3. Styling

- Use CSS custom properties (CSS variables) for theming
- Follow the existing design system
- Ensure responsive design
- Use semantic class names

### 4. Accessibility

- Include proper ARIA attributes
- Ensure keyboard navigation works
- Test with screen readers
- Follow WCAG 2.1 guidelines

### 5. Internationalization

- Use react-i18next for text content
- Provide translation keys
- Support RTL languages where applicable

## Testing

### Unit Tests

```bash
npm test
```

### Test Coverage

```bash
npm run test:coverage
```

### Testing Guidelines

- Write tests for all public APIs
- Test accessibility features
- Test responsive behavior
- Mock external dependencies

## Storybook

We use Storybook for component documentation and development.

### Writing Stories

```typescript
import type { Meta, StoryObj } from '@storybook/react';
import { ComponentName } from './ComponentName';

const meta: Meta<typeof ComponentName> = {
  title: 'Category/ComponentName',
  component: ComponentName,
  parameters: {
    docs: {
      description: {
        component: 'Component description here'
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // Default props
  }
};
```

## Building

### Development Build

```bash
npm run build:watch
```

### Production Build

```bash
npm run build
```

### Build Output

The build process creates:
- `dist/index.js` - CommonJS bundle
- `dist/index.esm.js` - ES modules bundle
- `dist/index.d.ts` - TypeScript declarations
- `dist/index.css` - Compiled styles

## Publishing

### Pre-publish Checklist

- [ ] All tests pass
- [ ] Build succeeds without errors
- [ ] Version number updated in package.json
- [ ] CHANGELOG.md updated
- [ ] Documentation updated

### Publishing Process

1. **Update version**
   ```bash
   npm version patch|minor|major
   ```

2. **Build the library**
   ```bash
   npm run build
   ```

3. **Publish to npm**
   ```bash
   npm publish
   ```

## Code Style

### ESLint

```bash
npm run lint
npm run lint:fix
```

### Prettier

Code formatting is handled by Prettier. Make sure to format your code before committing.

## Git Workflow

### Branch Naming

- `feature/component-name` - New features
- `fix/issue-description` - Bug fixes
- `docs/update-readme` - Documentation updates
- `refactor/component-name` - Code refactoring

### Commit Messages

Follow conventional commits:

- `feat: add new Button component`
- `fix: resolve navbar mobile menu issue`
- `docs: update README with new examples`
- `style: improve component spacing`
- `refactor: simplify hook implementation`
- `test: add unit tests for Navbar`

### Pull Request Process

1. Create a feature branch from `main`
2. Make your changes
3. Add tests for new functionality
4. Update documentation
5. Create a pull request
6. Ensure all CI checks pass
7. Request review from maintainers

## Design System

### Colors

Use CSS custom properties defined in `src/index.css`:

- `--primary-bg` - Primary background
- `--text-primary` - Primary text color
- `--neon-purple` - Primary accent color
- `--neon-blue` - Secondary accent color

### Typography

- Use system fonts for better performance
- Follow the typography scale defined in CSS variables
- Ensure good contrast ratios

### Spacing

Use the spacing scale defined in CSS variables:

- `--space-xs` to `--space-2xl`

## Questions?

If you have questions about contributing, please:

1. Check existing issues and discussions
2. Create a new issue with the `question` label
3. Join our Discord community (link in README)

Thank you for contributing! 🚀
