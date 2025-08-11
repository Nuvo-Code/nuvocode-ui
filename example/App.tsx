import React from 'react';
import { 
  Navbar, 
  NetworkStatus, 
  LanguageProvider,
  useLanguage 
} from '../src';
import '../src/index.css';

// Example i18n setup (you would normally have this in a separate file)
const translations = {
  en: {
    navigation: {
      home: 'Home',
      services: 'Services',
      about: 'About',
      blog: 'Blog',
      contact: 'Contact'
    },
    network: {
      online: 'Back Online',
      offline: "You're Offline",
      viewOfflinePage: 'View Offline Page'
    }
  },
  tr: {
    navigation: {
      home: 'Ana Sayfa',
      services: 'Hizmetler',
      about: 'Hakkımızda',
      blog: 'Blog',
      contact: 'İletişim'
    },
    network: {
      online: 'Tekrar Çevrimiçi',
      offline: 'Çevrimdışısınız',
      viewOfflinePage: 'Çevrimdışı Sayfayı Görüntüle'
    }
  }
};

// Mock i18next for the example
const mockI18n = {
  t: (key: string, fallback?: string) => {
    const { language } = useLanguage();
    const keys = key.split('.');
    let value = translations[language as keyof typeof translations];
    
    for (const k of keys) {
      value = value?.[k as keyof typeof value];
    }
    
    return value || fallback || key;
  },
  changeLanguage: (lng: string) => {
    console.log('Language changed to:', lng);
  }
};

// Mock react-i18next
jest.mock('react-i18next', () => ({
  useTranslation: () => mockI18n
}));

const ExampleContent: React.FC = () => {
  const { language, changeLanguage } = useLanguage();

  return (
    <div style={{ paddingTop: '80px', minHeight: '100vh' }}>
      <div className="container-custom">
        <h1 style={{ color: 'var(--neon-purple)', marginBottom: '2rem' }}>
          NuvoCode UI Library Example
        </h1>
        
        <div style={{ marginBottom: '2rem' }}>
          <h2>Current Language: {language}</h2>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
            <button 
              className="btn btn-primary"
              onClick={() => changeLanguage('en')}
            >
              English
            </button>
            <button 
              className="btn btn-primary"
              onClick={() => changeLanguage('tr')}
            >
              Türkçe
            </button>
            <button 
              className="btn btn-primary"
              onClick={() => changeLanguage('et')}
            >
              Eesti
            </button>
          </div>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h2>Components Included:</h2>
          <ul style={{ color: 'var(--text-secondary)' }}>
            <li>✅ Navbar - Responsive navigation with language selector</li>
            <li>✅ NetworkStatus - Online/offline status indicator</li>
            <li>✅ LanguageSelector - Multi-language support</li>
            <li>🔄 More components coming soon...</li>
          </ul>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h2>Features:</h2>
          <ul style={{ color: 'var(--text-secondary)' }}>
            <li>🎨 Space-themed design with neon accents</li>
            <li>📱 Fully responsive</li>
            <li>🌍 Internationalization support</li>
            <li>⚡ TypeScript support</li>
            <li>🎯 Accessible components</li>
            <li>📦 Tree-shakable</li>
          </ul>
        </div>

        <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <p style={{ color: 'var(--text-muted)' }}>
            Scroll up to see the navbar behavior change
          </p>
        </div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="App">
        <Navbar 
          logoSrc="https://via.placeholder.com/120x40/9d4edd/ffffff?text=NUVOCODE"
          logoAlt="NuvoCode"
          onNavigate={(section) => console.log('Navigate to:', section)}
          customLinks={[
            { 
              href: '/example', 
              label: 'Example',
              onClick: (e) => {
                e.preventDefault();
                console.log('Example clicked');
              }
            }
          ]}
        />
        <NetworkStatus />
        <ExampleContent />
      </div>
    </LanguageProvider>
  );
};

export default App;
