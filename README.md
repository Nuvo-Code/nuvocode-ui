# @nuvocode/ui-library

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
npm install @nuvocode/ui-library
# or
yarn add @nuvocode/ui-library
# or
pnpm add @nuvocode/ui-library
```

## Peer Dependencies

Make sure you have the following peer dependencies installed:

```bash
npm install react react-dom react-i18next i18next
```

## Quick Start

```tsx
import React from 'react';
import { Navbar, LanguageProvider } from '@nuvocode/ui-library';
import '@nuvocode/ui-library/dist/index.css';

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

### Layout Components

#### Navbar
A responsive navigation bar with mobile menu support.

```tsx
import { Navbar } from '@nuvocode/ui-library';

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
import { LanguageSelector } from '@nuvocode/ui-library';

<LanguageSelector 
  availableLanguages={['en', 'tr', 'et']}
  showFlags={true}
/>
```

### Common Components

#### NetworkStatus
Shows online/offline status with customizable messages.

```tsx
import { NetworkStatus } from '@nuvocode/ui-library';

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
import { useScroll } from '@nuvocode/ui-library';

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
