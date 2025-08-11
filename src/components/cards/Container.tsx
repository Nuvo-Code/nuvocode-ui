import React from 'react';
import './Container.css';

export interface ContainerProps {
  /** Container size */
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  /** Whether to center the container */
  centered?: boolean;
  /** Container padding */
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  /** Custom class name */
  className?: string;
  /** Children content */
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({
  size = 'lg',
  centered = true,
  padding = 'md',
  className = '',
  children,
}) => {
  const baseClass = 'nuvocode-container';
  const sizeClass = `nuvocode-container--${size}`;
  const centeredClass = centered ? 'nuvocode-container--centered' : '';
  const paddingClass = padding !== 'none' ? `nuvocode-container--padding-${padding}` : '';

  const containerClasses = [
    baseClass,
    sizeClass,
    centeredClass,
    paddingClass,
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={containerClasses}>
      {children}
    </div>
  );
};

export default Container;
