# Nuvo Code UI

A comprehensive React UI component library built with TypeScript, designed for modern web applications with space-themed aesthetics and internationalization support.

## Features

- 🎨 **Space-themed Design**: Beautiful, modern components with neon accents and cosmic aesthetics
- 🌍 **Internationalization**: Built-in i18n support with multiple languages
- 📱 **Responsive**: Mobile-first design that works on all devices
- ⚡ **TypeScript**: Full TypeScript support with comprehensive type definitions
- 🎯 **Accessible**: WCAG compliant components with proper ARIA attributes
- 🔧 **Customizable**: Easy to theme and customize for your brand
- 📦 **Tree-shakable**: Import only what you need

## Installation

```bash
npm install nuvocode-ui
# or
yarn add nuvocode-ui
# or
pnpm add nuvocode-ui
```

## Peer Dependencies

Make sure you have the following peer dependencies installed:

```bash
npm install react react-dom react-i18next i18next
```

## Quick Start

```tsx
import React from 'react';
import { Navbar, LanguageProvider } from 'nuvocode-ui';
import 'nuvocode-ui/dist/index.css';

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <Navbar 
          logoSrc="/your-logo.png"
          logoAlt="Your Company"
        />
        {/* Your app content */}
      </div>
    </LanguageProvider>
  );
}

export default App;
```

## Components

### Button Components

#### Button
A versatile button component with multiple variants and states.

```tsx
import { Button } from 'nuvocode-ui';

<Button variant="primary" size="md" loading={false}>
  Click me
</Button>

// With icons
<Button variant="gradient" startIcon={<Icon />} endIcon={<Icon />}>
  Action Button
</Button>
```

**Props:**
- `variant`: 'primary' | 'secondary' | 'gradient' | 'ghost' | 'danger'
- `size`: 'sm' | 'md' | 'lg'
- `loading`: boolean
- `fullWidth`: boolean
- `startIcon`, `endIcon`: React.ReactNode

### Form Components

#### TextField
Text input component with label, validation, and icon support.

```tsx
import { TextField } from 'nuvocode-ui';

<TextField
  label="Email"
  placeholder="Enter your email"
  error="Invalid email"
  startIcon={<EmailIcon />}
  fullWidth
/>
```

#### Select
Dropdown select component with options.

```tsx
import { Select } from 'nuvocode-ui';

<Select
  label="Country"
  options={[
    { value: 'us', label: 'United States' },
    { value: 'ca', label: 'Canada' }
  ]}
  placeholder="Select country"
/>
```

#### FormControl
Wrapper component for form fields with label and validation.

```tsx
import { FormControl } from 'nuvocode-ui';

<FormControl label="Username" required error="Username is required">
  <input type="text" />
</FormControl>
```

### Modal Components

#### Modal
Base modal component with backdrop and animations.

```tsx
import { Modal } from 'nuvocode-ui';

<Modal
  open={isOpen}
  onClose={() => setIsOpen(false)}
  title="Modal Title"
  size="md"
>
  Modal content here
</Modal>
```

#### Dialog
Enhanced modal with structured content and actions.

```tsx
import { Dialog } from 'nuvocode-ui';

<Dialog
  open={isOpen}
  onClose={() => setIsOpen(false)}
  title="Confirm Action"
  description="Are you sure you want to proceed?"
  actions={[
    { label: 'Cancel', onClick: handleCancel, variant: 'secondary' },
    { label: 'Confirm', onClick: handleConfirm, variant: 'primary' }
  ]}
/>
```

### Alert Components

#### Alert
Inline alert messages with different severity levels.

```tsx
import { Alert } from 'nuvocode-ui';

<Alert severity="success" title="Success!" closable>
  Operation completed successfully
</Alert>
```

#### Toast
Floating notification system with auto-dismiss.

```tsx
import { Toast, ToastContainer } from 'nuvocode-ui';

<ToastContainer
  position="top-right"
  toasts={[
    {
      id: '1',
      severity: 'info',
      message: 'This is a toast notification',
      duration: 5000
    }
  ]}
/>
```

### Card Components

#### Card
Flexible card component with header, content, and footer sections.

```tsx
import { Card, CardHeader, CardContent, CardFooter } from 'nuvocode-ui';

<Card variant="gradient" hoverable>
  <CardHeader title="Card Title" subtitle="Card subtitle" />
  <CardContent>
    Card content goes here
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
```

#### Container
Responsive container with size and padding options.

```tsx
import { Container } from 'nuvocode-ui';

<Container size="lg" padding="md" centered>
  Your content here
</Container>
```

### Layout Components

#### Navbar
A responsive navigation bar with mobile menu support.

```tsx
import { Navbar } from 'nuvocode-ui';

<Navbar 
  logoSrc="/logo.png"
  logoAlt="Company Logo"
  showBlogLink={true}
  onNavigate={(section) => console.log('Navigate to:', section)}
  customLinks={[
    { href: '/custom', label: 'Custom Link', onClick: handleClick }
  ]}
/>
```

#### LanguageSelector
A dropdown component for language selection.

```tsx
import { LanguageSelector } from 'nuvocode-ui';

<LanguageSelector 
  availableLanguages={['en', 'tr', 'et']}
  showFlags={true}
/>
```

### Common Components

#### NetworkStatus
Shows online/offline status with customizable messages.

```tsx
import { NetworkStatus } from 'nuvocode-ui';

<NetworkStatus 
  onlineMessage="Connected"
  offlineMessage="No Internet"
  showIcon={true}
/>
```

### Hooks

#### useScroll
Hook for tracking scroll position.

```tsx
import { useScroll } from 'nuvocode-ui';

const Component = () => {
  const scrolled = useScroll(100); // threshold in pixels
  return <div className={scrolled ? 'scrolled' : ''}>Content</div>;
};
```

#### useNetworkStatus
Hook for monitoring network connectivity.

```tsx
import { useNetworkStatus } from '@nuvocode/ui-library';

const Component = () => {
  const isOnline = useNetworkStatus();
  return <div>{isOnline ? 'Online' : 'Offline'}</div>;
};
```

#### useLanguage
Hook for language management (requires LanguageProvider).

```tsx
import { useLanguage } from '@nuvocode/ui-library';

const Component = () => {
  const { language, changeLanguage } = useLanguage();
  return (
    <button onClick={() => changeLanguage('tr')}>
      Current: {language}
    </button>
  );
};
```

## Styling

The library includes CSS variables for easy theming:

```css
:root {
  --text-primary: #ffffff;
  --neon-purple: #9d4edd;
  --neon-green: #00ff7f;
  /* Add your custom variables */
}
```

## Development

```bash
# Install dependencies
npm install

# Start development mode
npm run dev

# Build the library
npm run build

# Run tests
npm test

# Run linting
npm run lint
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT © NuvoCode

## Support

For support, email support@nuvocode.com or create an issue on GitHub.
