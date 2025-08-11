import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Navbar from './Navbar';
import { LanguageProvider } from '../../hooks';

const meta: Meta<typeof Navbar> = {
  title: 'Layout/Navbar',
  component: Navbar,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <LanguageProvider>
        <div style={{ minHeight: '100vh', background: '#030718' }}>
          <Story />
          <div style={{ height: '200vh', padding: '100px 20px', color: 'white' }}>
            <h1>Scroll down to see navbar behavior</h1>
            <p>The navbar will change appearance when scrolled.</p>
          </div>
        </div>
      </LanguageProvider>
    ),
  ],
  argTypes: {
    logoSrc: {
      control: 'text',
      description: 'URL or path to the logo image',
    },
    logoAlt: {
      control: 'text',
      description: 'Alt text for the logo',
    },
    showBlogLink: {
      control: 'boolean',
      description: 'Whether to show the blog link in navigation',
    },
    onNavigate: {
      action: 'navigate',
      description: 'Callback function when navigation items are clicked',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    logoSrc: 'https://via.placeholder.com/120x40/9d4edd/ffffff?text=LOGO',
    logoAlt: 'Company Logo',
    showBlogLink: true,
    onNavigate: action('navigate'),
  },
};

export const WithCustomLinks: Story = {
  args: {
    logoSrc: 'https://via.placeholder.com/120x40/9d4edd/ffffff?text=LOGO',
    logoAlt: 'Company Logo',
    showBlogLink: true,
    customLinks: [
      {
        href: '/portfolio',
        label: 'Portfolio',
        onClick: action('portfolio-click'),
      },
      {
        href: '/contact',
        label: 'Contact',
        onClick: action('contact-click'),
      },
    ],
    onNavigate: action('navigate'),
  },
};

export const NoBlogLink: Story = {
  args: {
    logoSrc: 'https://via.placeholder.com/120x40/9d4edd/ffffff?text=LOGO',
    logoAlt: 'Company Logo',
    showBlogLink: false,
    onNavigate: action('navigate'),
  },
};
