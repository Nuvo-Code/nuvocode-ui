import React, { forwardRef } from 'react';
import './TextField.css';

export interface TextFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Input label */
  label?: string;
  /** Error message */
  error?: string;
  /** Helper text */
  helperText?: string;
  /** Input size */
  size?: 'sm' | 'md' | 'lg';
  /** Whether the input should take full width */
  fullWidth?: boolean;
  /** Icon to display at the start of the input */
  startIcon?: React.ReactNode;
  /** Icon to display at the end of the input */
  endIcon?: React.ReactNode;
  /** Custom class name */
  className?: string;
  /** Input variant */
  variant?: 'outlined' | 'filled';
}

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(({
  label,
  error,
  helperText,
  size = 'md',
  fullWidth = false,
  startIcon,
  endIcon,
  className = '',
  variant = 'outlined',
  id,
  ...props
}, ref) => {
  const inputId = id || `textfield-${Math.random().toString(36).substr(2, 9)}`;
  const hasError = Boolean(error);
  
  const baseClass = 'nuvocode-textfield';
  const sizeClass = `nuvocode-textfield--${size}`;
  const variantClass = `nuvocode-textfield--${variant}`;
  const fullWidthClass = fullWidth ? 'nuvocode-textfield--full-width' : '';
  const errorClass = hasError ? 'nuvocode-textfield--error' : '';
  const hasIconsClass = (startIcon || endIcon) ? 'nuvocode-textfield--has-icons' : '';

  const wrapperClasses = [
    baseClass,
    sizeClass,
    variantClass,
    fullWidthClass,
    errorClass,
    hasIconsClass,
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={wrapperClasses}>
      {label && (
        <label htmlFor={inputId} className="nuvocode-textfield__label">
          {label}
        </label>
      )}
      
      <div className="nuvocode-textfield__input-wrapper">
        {startIcon && (
          <span className="nuvocode-textfield__icon nuvocode-textfield__icon--start">
            {startIcon}
          </span>
        )}
        
        <input
          ref={ref}
          id={inputId}
          className="nuvocode-textfield__input"
          {...props}
        />
        
        {endIcon && (
          <span className="nuvocode-textfield__icon nuvocode-textfield__icon--end">
            {endIcon}
          </span>
        )}
      </div>
      
      {(error || helperText) && (
        <div className="nuvocode-textfield__helper-text">
          {error || helperText}
        </div>
      )}
    </div>
  );
});

TextField.displayName = 'TextField';

export default TextField;
