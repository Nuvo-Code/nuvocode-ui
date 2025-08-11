import React from 'react';
import './Card.css';

export interface CardProps {
  /** Card variant */
  variant?: 'default' | 'gradient' | 'outlined' | 'elevated';
  /** Card size */
  size?: 'sm' | 'md' | 'lg';
  /** Whether the card is clickable */
  clickable?: boolean;
  /** Click handler for clickable cards */
  onClick?: () => void;
  /** Whether the card should have hover effects */
  hoverable?: boolean;
  /** Custom class name */
  className?: string;
  /** Children content */
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  variant = 'default',
  size = 'md',
  clickable = false,
  onClick,
  hoverable = false,
  className = '',
  children,
}) => {
  const baseClass = 'nuvocode-card';
  const variantClass = `nuvocode-card--${variant}`;
  const sizeClass = `nuvocode-card--${size}`;
  const clickableClass = clickable ? 'nuvocode-card--clickable' : '';
  const hoverableClass = hoverable ? 'nuvocode-card--hoverable' : '';

  const cardClasses = [
    baseClass,
    variantClass,
    sizeClass,
    clickableClass,
    hoverableClass,
    className
  ].filter(Boolean).join(' ');

  const CardComponent = clickable ? 'button' : 'div';

  return (
    <CardComponent
      className={cardClasses}
      onClick={clickable ? onClick : undefined}
      type={clickable ? 'button' : undefined}
    >
      {children}
    </CardComponent>
  );
};

// Card Header Component
export interface CardHeaderProps {
  /** Header title */
  title?: string;
  /** Header subtitle */
  subtitle?: string;
  /** Header action */
  action?: React.ReactNode;
  /** Custom class name */
  className?: string;
  /** Children content */
  children?: React.ReactNode;
}

export const CardHeader: React.FC<CardHeaderProps> = ({
  title,
  subtitle,
  action,
  className = '',
  children,
}) => {
  const headerClasses = ['nuvocode-card__header', className].filter(Boolean).join(' ');

  return (
    <div className={headerClasses}>
      <div className="nuvocode-card__header-content">
        {title && (
          <h3 className="nuvocode-card__title">
            {title}
          </h3>
        )}
        {subtitle && (
          <p className="nuvocode-card__subtitle">
            {subtitle}
          </p>
        )}
        {children}
      </div>
      {action && (
        <div className="nuvocode-card__header-action">
          {action}
        </div>
      )}
    </div>
  );
};

// Card Content Component
export interface CardContentProps {
  /** Custom class name */
  className?: string;
  /** Children content */
  children: React.ReactNode;
}

export const CardContent: React.FC<CardContentProps> = ({
  className = '',
  children,
}) => {
  const contentClasses = ['nuvocode-card__content', className].filter(Boolean).join(' ');

  return (
    <div className={contentClasses}>
      {children}
    </div>
  );
};

// Card Footer Component
export interface CardFooterProps {
  /** Custom class name */
  className?: string;
  /** Children content */
  children: React.ReactNode;
}

export const CardFooter: React.FC<CardFooterProps> = ({
  className = '',
  children,
}) => {
  const footerClasses = ['nuvocode-card__footer', className].filter(Boolean).join(' ');

  return (
    <div className={footerClasses}>
      {children}
    </div>
  );
};

export default Card;
