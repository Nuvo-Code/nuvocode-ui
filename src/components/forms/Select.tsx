import React, { forwardRef } from 'react';
import './Select.css';

export interface SelectOption {
  value: string | number;
  label: string;
  disabled?: boolean;
}

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  /** Select label */
  label?: string;
  /** Error message */
  error?: string;
  /** Helper text */
  helperText?: string;
  /** Select size */
  size?: 'sm' | 'md' | 'lg';
  /** Whether the select should take full width */
  fullWidth?: boolean;
  /** Options for the select */
  options?: SelectOption[];
  /** Placeholder text */
  placeholder?: string;
  /** Custom class name */
  className?: string;
  /** Select variant */
  variant?: 'outlined' | 'filled';
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(({
  label,
  error,
  helperText,
  size = 'md',
  fullWidth = false,
  options = [],
  placeholder,
  className = '',
  variant = 'outlined',
  id,
  children,
  ...props
}, ref) => {
  const selectId = id || `select-${Math.random().toString(36).substr(2, 9)}`;
  const hasError = Boolean(error);
  
  const baseClass = 'nuvocode-select';
  const sizeClass = `nuvocode-select--${size}`;
  const variantClass = `nuvocode-select--${variant}`;
  const fullWidthClass = fullWidth ? 'nuvocode-select--full-width' : '';
  const errorClass = hasError ? 'nuvocode-select--error' : '';

  const wrapperClasses = [
    baseClass,
    sizeClass,
    variantClass,
    fullWidthClass,
    errorClass,
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={wrapperClasses}>
      {label && (
        <label htmlFor={selectId} className="nuvocode-select__label">
          {label}
        </label>
      )}
      
      <div className="nuvocode-select__wrapper">
        <select
          ref={ref}
          id={selectId}
          className="nuvocode-select__input"
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </option>
          ))}
          
          {children}
        </select>
        
        <div className="nuvocode-select__icon">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 7.5L10 12.5L15 7.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      
      {(error || helperText) && (
        <div className="nuvocode-select__helper-text">
          {error || helperText}
        </div>
      )}
    </div>
  );
});

Select.displayName = 'Select';

export default Select;
