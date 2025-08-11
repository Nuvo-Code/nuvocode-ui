// Helper function for smooth scrolling
export const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
  e.preventDefault();

  // Check if we're on the home page
  const isHomePage = window.location.pathname.endsWith('/en') ||
                     window.location.pathname.endsWith('/tr') ||
                     window.location.pathname.endsWith('/et') ||
                     window.location.pathname === '/';

  if (isHomePage) {
    // We're on the home page, scroll to the section
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      // Remove hash from URL
      if (window.history.pushState) {
        window.history.pushState('', document.title, window.location.pathname + window.location.search);
      } else {
        // For older browsers
        window.location.hash = '';
      }
    }
  } else {
    // We're on another page, navigate to home page with the section hash
    const language = window.location.pathname.split('/')[1] || 'en';
    window.location.href = `/${language}#${sectionId}`;
  }
};

// Utility function to detect if user is online
export const isOnline = (): boolean => {
  return navigator.onLine;
};

// Utility function to format date
export const formatDate = (date: Date, locale: string = 'en-US'): string => {
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
};

// Utility function to debounce function calls
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

// Utility function to throttle function calls
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

// Utility function to generate unique IDs
export const generateId = (prefix: string = 'id'): string => {
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
};

// Utility function to validate email
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Utility function to get language from URL or browser
export const getLanguageFromUrl = (): 'en' | 'tr' | 'et' => {
  const pathLang = window.location.pathname.split('/')[1];
  if (pathLang === 'en' || pathLang === 'tr' || pathLang === 'et') {
    return pathLang;
  }
  
  const browserLang = navigator.language.split('-')[0];
  if (browserLang === 'tr') return 'tr';
  if (browserLang === 'et') return 'et';
  return 'en';
};
