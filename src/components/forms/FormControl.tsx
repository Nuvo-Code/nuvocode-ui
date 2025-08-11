import React from 'react';
import './FormControl.css';

export interface FormControlProps {
  /** Form control label */
  label?: string;
  /** Error message */
  error?: string;
  /** Helper text */
  helperText?: string;
  /** Whether the field is required */
  required?: boolean;
  /** Whether the field is disabled */
  disabled?: boolean;
  /** Whether the control should take full width */
  fullWidth?: boolean;
  /** Custom class name */
  className?: string;
  /** Children content */
  children: React.ReactNode;
  /** HTML for attribute for the label */
  htmlFor?: string;
}

const FormControl: React.FC<FormControlProps> = ({
  label,
  error,
  helperText,
  required = false,
  disabled = false,
  fullWidth = false,
  className = '',
  children,
  htmlFor,
}) => {
  const hasError = Boolean(error);
  
  const baseClass = 'nuvocode-form-control';
  const fullWidthClass = fullWidth ? 'nuvocode-form-control--full-width' : '';
  const errorClass = hasError ? 'nuvocode-form-control--error' : '';
  const disabledClass = disabled ? 'nuvocode-form-control--disabled' : '';

  const wrapperClasses = [
    baseClass,
    fullWidthClass,
    errorClass,
    disabledClass,
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={wrapperClasses}>
      {label && (
        <label htmlFor={htmlFor} className="nuvocode-form-control__label">
          {label}
          {required && (
            <span className="nuvocode-form-control__required" aria-label="required">
              *
            </span>
          )}
        </label>
      )}
      
      <div className="nuvocode-form-control__content">
        {children}
      </div>
      
      {(error || helperText) && (
        <div className="nuvocode-form-control__helper-text">
          {error || helperText}
        </div>
      )}
    </div>
  );
};

export default FormControl;
