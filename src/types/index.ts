export type Language = 'en' | 'tr' | 'et';

export interface LanguageContextType {
  language: Language;
  changeLanguage: (lang: Language) => void;
}

export interface NavbarProps {
  logoSrc?: string;
  logoAlt?: string;
  onNavigate?: (section: string) => void;
  showBlogLink?: boolean;
  customLinks?: Array<{
    href: string;
    label: string;
    onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  }>;
}

export interface FooterProps {
  companyName?: string;
  socialLinks?: Array<{
    platform: string;
    url: string;
    icon: React.ReactNode;
  }>;
  showNewsletter?: boolean;
}

export interface LanguageSelectorProps {
  availableLanguages?: Language[];
  showFlags?: boolean;
}

export interface NetworkStatusProps {
  onlineMessage?: string;
  offlineMessage?: string;
  showIcon?: boolean;
}

export interface SubscribeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (email: string) => Promise<void>;
  title?: string;
  description?: string;
}

export interface HeroProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  onCtaClick?: () => void;
  backgroundImage?: string;
  showAnimation?: boolean;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  icon?: string;
  url?: string;
  tags?: string[];
  parent?: string;
  children?: Service[];
}

export interface ServicesProps {
  services: Service[];
  viewMode?: 'list' | 'grid';
  onServiceClick?: (service: Service) => void;
  showTags?: boolean;
  onTagClick?: (tag: string) => void;
}

export interface AboutProps {
  title?: string;
  description?: string;
  features?: Array<{
    title: string;
    description: string;
    icon?: React.ReactNode;
  }>;
}

export interface CTAProps {
  title?: string;
  description?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  variant?: 'primary' | 'secondary';
}

export interface StructuredDataProps {
  type: 'Organization' | 'WebSite' | 'Article' | 'BlogPosting';
  data: Record<string, any>;
}
