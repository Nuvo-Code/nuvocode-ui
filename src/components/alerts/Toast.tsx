import React, { useEffect, useState } from 'react';
import Alert from './Alert';
import './Toast.css';

export interface ToastProps {
  /** Toast ID for management */
  id?: string;
  /** Toast severity/type */
  severity?: 'success' | 'info' | 'warning' | 'error';
  /** Toast title */
  title?: string;
  /** Toast message */
  message: string;
  /** Auto-hide duration in milliseconds (0 to disable) */
  duration?: number;
  /** Toast position */
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center';
  /** Whether to show close button */
  closable?: boolean;
  /** Function to call when toast is closed */
  onClose?: () => void;
  /** Custom class name */
  className?: string;
}

const Toast: React.FC<ToastProps> = ({
  id,
  severity = 'info',
  title,
  message,
  duration = 5000,
  position = 'top-right',
  closable = true,
  onClose,
  className = '',
}) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        handleClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [duration]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      onClose?.();
    }, 300); // Wait for exit animation
  };

  if (!isVisible) {
    return null;
  }

  const baseClass = 'nuvocode-toast';
  const positionClass = `nuvocode-toast--${position}`;
  const toastClasses = [baseClass, positionClass, className].filter(Boolean).join(' ');

  return (
    <div className={toastClasses}>
      <Alert
        severity={severity}
        title={title}
        closable={closable}
        onClose={handleClose}
        variant="filled"
      >
        {message}
      </Alert>
    </div>
  );
};

// Toast Container Component
export interface ToastContainerProps {
  /** Toast position */
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center';
  /** Maximum number of toasts to show */
  maxToasts?: number;
  /** Custom class name */
  className?: string;
  /** Toast items */
  toasts: ToastProps[];
}

export const ToastContainer: React.FC<ToastContainerProps> = ({
  position = 'top-right',
  maxToasts = 5,
  className = '',
  toasts,
}) => {
  const baseClass = 'nuvocode-toast-container';
  const positionClass = `nuvocode-toast-container--${position}`;
  const containerClasses = [baseClass, positionClass, className].filter(Boolean).join(' ');

  const visibleToasts = toasts.slice(0, maxToasts);

  if (visibleToasts.length === 0) {
    return null;
  }

  return (
    <div className={containerClasses}>
      {visibleToasts.map((toast) => (
        <Toast
          key={toast.id || Math.random()}
          {...toast}
        />
      ))}
    </div>
  );
};

export default Toast;
