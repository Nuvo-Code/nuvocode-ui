import React from 'react';
import Modal from './Modal';
import { Button } from '../buttons';
import './Dialog.css';

export interface DialogAction {
  /** Action label */
  label: string;
  /** Action handler */
  onClick: () => void;
  /** Action variant */
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
  /** Whether the action is disabled */
  disabled?: boolean;
  /** Whether the action is in loading state */
  loading?: boolean;
}

export interface DialogProps {
  /** Whether the dialog is open */
  open: boolean;
  /** Function to call when the dialog should be closed */
  onClose: () => void;
  /** Dialog title */
  title?: string;
  /** Dialog description */
  description?: string;
  /** Dialog size */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  /** Whether to show the close button */
  showCloseButton?: boolean;
  /** Whether clicking the backdrop should close the dialog */
  closeOnBackdropClick?: boolean;
  /** Whether pressing escape should close the dialog */
  closeOnEscape?: boolean;
  /** Dialog actions */
  actions?: DialogAction[];
  /** Custom class name */
  className?: string;
  /** Children content */
  children?: React.ReactNode;
}

const Dialog: React.FC<DialogProps> = ({
  open,
  onClose,
  title,
  description,
  size = 'md',
  showCloseButton = true,
  closeOnBackdropClick = true,
  closeOnEscape = true,
  actions = [],
  className = '',
  children,
}) => {
  const dialogClasses = ['nuvocode-dialog', className].filter(Boolean).join(' ');

  return (
    <Modal
      open={open}
      onClose={onClose}
      title={title}
      size={size}
      showCloseButton={showCloseButton}
      closeOnBackdropClick={closeOnBackdropClick}
      closeOnEscape={closeOnEscape}
      className={dialogClasses}
    >
      <div className="nuvocode-dialog__content">
        {description && (
          <p className="nuvocode-dialog__description">
            {description}
          </p>
        )}
        
        {children}
      </div>
      
      {actions.length > 0 && (
        <div className="nuvocode-dialog__actions">
          {actions.map((action, index) => (
            <Button
              key={index}
              variant={action.variant || 'secondary'}
              onClick={action.onClick}
              disabled={action.disabled}
              loading={action.loading}
            >
              {action.label}
            </Button>
          ))}
        </div>
      )}
    </Modal>
  );
};

export default Dialog;
