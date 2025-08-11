import React from 'react';
import './Button.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Button variant */
  variant?: 'primary' | 'secondary' | 'gradient' | 'ghost' | 'danger';
  /** Button size */
  size?: 'sm' | 'md' | 'lg';
  /** Whether the button is in a loading state */
  loading?: boolean;
  /** Whether the button should take full width */
  fullWidth?: boolean;
  /** Icon to display before the text */
  startIcon?: React.ReactNode;
  /** Icon to display after the text */
  endIcon?: React.ReactNode;
  /** Custom class name */
  className?: string;
  /** Children content */
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  loading = false,
  fullWidth = false,
  startIcon,
  endIcon,
  className = '',
  children,
  disabled,
  ...props
}) => {
  const baseClass = 'nuvocode-btn';
  const variantClass = `nuvocode-btn--${variant}`;
  const sizeClass = `nuvocode-btn--${size}`;
  const fullWidthClass = fullWidth ? 'nuvocode-btn--full-width' : '';
  const loadingClass = loading ? 'nuvocode-btn--loading' : '';
  const disabledClass = disabled || loading ? 'nuvocode-btn--disabled' : '';

  const classes = [
    baseClass,
    variantClass,
    sizeClass,
    fullWidthClass,
    loadingClass,
    disabledClass,
    className
  ].filter(Boolean).join(' ');

  return (
    <button
      className={classes}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <span className="nuvocode-btn__spinner">
          <svg
            className="nuvocode-btn__spinner-icon"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="31.416"
              strokeDashoffset="31.416"
            />
          </svg>
        </span>
      )}
      
      {!loading && startIcon && (
        <span className="nuvocode-btn__icon nuvocode-btn__icon--start">
          {startIcon}
        </span>
      )}
      
      {children && (
        <span className="nuvocode-btn__text">
          {children}
        </span>
      )}
      
      {!loading && endIcon && (
        <span className="nuvocode-btn__icon nuvocode-btn__icon--end">
          {endIcon}
        </span>
      )}
    </button>
  );
};

export default Button;
