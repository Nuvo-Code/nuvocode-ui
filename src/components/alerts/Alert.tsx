import React from 'react';
import './Alert.css';

export interface AlertProps {
  /** Alert severity/type */
  severity?: 'success' | 'info' | 'warning' | 'error';
  /** Alert variant */
  variant?: 'filled' | 'outlined' | 'standard';
  /** Alert title */
  title?: string;
  /** Whether to show close button */
  closable?: boolean;
  /** Function to call when alert is closed */
  onClose?: () => void;
  /** Custom icon */
  icon?: React.ReactNode;
  /** Whether to show default icon */
  showIcon?: boolean;
  /** Custom class name */
  className?: string;
  /** Children content */
  children: React.ReactNode;
}

const Alert: React.FC<AlertProps> = ({
  severity = 'info',
  variant = 'standard',
  title,
  closable = false,
  onClose,
  icon,
  showIcon = true,
  className = '',
  children,
}) => {
  const baseClass = 'nuvocode-alert';
  const severityClass = `nuvocode-alert--${severity}`;
  const variantClass = `nuvocode-alert--${variant}`;
  const alertClasses = [baseClass, severityClass, variantClass, className].filter(Boolean).join(' ');

  const getDefaultIcon = () => {
    switch (severity) {
      case 'success':
        return (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.25 5.625L7.5 14.375L3.75 10.625" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case 'warning':
        return (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 6.25V10.625M10 14.375H10.0083M18.125 10C18.125 14.4873 14.4873 18.125 10 18.125C5.51269 18.125 1.875 14.4873 1.875 10C1.875 5.51269 5.51269 1.875 10 1.875C14.4873 1.875 18.125 5.51269 18.125 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case 'error':
        return (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.5 7.5L7.5 12.5M7.5 7.5L12.5 12.5M18.125 10C18.125 14.4873 14.4873 18.125 10 18.125C5.51269 18.125 1.875 14.4873 1.875 10C1.875 5.51269 5.51269 1.875 10 1.875C14.4873 1.875 18.125 5.51269 18.125 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case 'info':
      default:
        return (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 13.125V10M10 6.875H10.0083M18.125 10C18.125 14.4873 14.4873 18.125 10 18.125C5.51269 18.125 1.875 14.4873 1.875 10C1.875 5.51269 5.51269 1.875 10 1.875C14.4873 1.875 18.125 5.51269 18.125 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
    }
  };

  return (
    <div className={alertClasses} role="alert">
      <div className="nuvocode-alert__content">
        {showIcon && (
          <div className="nuvocode-alert__icon">
            {icon || getDefaultIcon()}
          </div>
        )}
        
        <div className="nuvocode-alert__message">
          {title && (
            <div className="nuvocode-alert__title">
              {title}
            </div>
          )}
          <div className="nuvocode-alert__text">
            {children}
          </div>
        </div>
      </div>
      
      {closable && onClose && (
        <button
          className="nuvocode-alert__close"
          onClick={onClose}
          aria-label="Close alert"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      )}
    </div>
  );
};

export default Alert;
