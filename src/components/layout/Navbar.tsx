import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NavbarProps } from '../../types';
import { useScroll, useLanguage } from '../../hooks';
import { scrollToSection } from '../../utils';
import LanguageSelector from './LanguageSelector';
import './Navbar.css';

const Navbar: React.FC<NavbarProps> = ({
  logoSrc = '/logo.png',
  logoAlt = 'Logo',
  onNavigate,
  showBlogLink = true,
  customLinks = []
}) => {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrolled = useScroll(50);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, section: string) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(section);
    } else {
      scrollToSection(e, section);
    }
    setIsMenuOpen(false);
  };

  const defaultLinks = [
    { href: '#home', label: t('navigation.home'), section: 'home' },
    { href: '#services', label: t('navigation.services'), section: 'services' },
    { href: '#about', label: t('navigation.about'), section: 'about' },
    ...(showBlogLink ? [{ href: `/${language}/blog`, label: t('navigation.blog'), section: 'blog' }] : []),
    { href: '#contact', label: t('navigation.contact'), section: 'contact' }
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container-custom navbar-container">
        <div className="navbar-content">
          {/* Logo */}
          <div className="navbar-logo">
            <a href="#home" onClick={(e) => handleNavClick(e, 'home')}>
              <img src={logoSrc} alt={logoAlt} className="logo-image" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="navbar-links-desktop">
            {defaultLinks.map((link) => (
              <a
                key={link.section}
                href={link.href}
                className="nav-link"
                onClick={(e) => handleNavClick(e, link.section)}
              >
                {link.label}
              </a>
            ))}
            {customLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="nav-link"
                onClick={link.onClick}
              >
                {link.label}
              </a>
            ))}
            <LanguageSelector />
          </div>

          {/* Mobile Menu Button */}
          <div className="navbar-mobile-toggle">
            <button
              onClick={toggleMenu}
              className="mobile-menu-button"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg className="menu-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="menu-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="navbar-links-mobile">
            {defaultLinks.map((link) => (
              <a
                key={link.section}
                href={link.href}
                className="nav-link"
                onClick={(e) => handleNavClick(e, link.section)}
              >
                {link.label}
              </a>
            ))}
            {customLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="nav-link"
                onClick={(e) => {
                  if (link.onClick) link.onClick(e);
                  setIsMenuOpen(false);
                }}
              >
                {link.label}
              </a>
            ))}
            <LanguageSelector />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
