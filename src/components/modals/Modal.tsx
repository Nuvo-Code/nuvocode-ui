import React, { useEffect } from 'react';
import './Modal.css';

export interface ModalProps {
  /** Whether the modal is open */
  open: boolean;
  /** Function to call when the modal should be closed */
  onClose: () => void;
  /** Modal title */
  title?: string;
  /** Modal size */
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  /** Whether to show the close button */
  showCloseButton?: boolean;
  /** Whether clicking the backdrop should close the modal */
  closeOnBackdropClick?: boolean;
  /** Whether pressing escape should close the modal */
  closeOnEscape?: boolean;
  /** Custom class name */
  className?: string;
  /** Children content */
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  open,
  onClose,
  title,
  size = 'md',
  showCloseButton = true,
  closeOnBackdropClick = true,
  closeOnEscape = true,
  className = '',
  children,
}) => {
  // Handle escape key
  useEffect(() => {
    if (!open || !closeOnEscape) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [open, closeOnEscape, onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [open]);

  if (!open) return null;

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (closeOnBackdropClick && event.target === event.currentTarget) {
      onClose();
    }
  };

  const baseClass = 'nuvocode-modal';
  const sizeClass = `nuvocode-modal--${size}`;
  const modalClasses = [baseClass, sizeClass, className].filter(Boolean).join(' ');

  return (
    <div className="nuvocode-modal-backdrop" onClick={handleBackdropClick}>
      <div className={modalClasses} role="dialog" aria-modal="true">
        {(title || showCloseButton) && (
          <div className="nuvocode-modal__header">
            {title && (
              <h2 className="nuvocode-modal__title">
                {title}
              </h2>
            )}
            
            {showCloseButton && (
              <button
                className="nuvocode-modal__close-button"
                onClick={onClose}
                aria-label="Close modal"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 6L6 18M6 6L18 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            )}
          </div>
        )}
        
        <div className="nuvocode-modal__content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
