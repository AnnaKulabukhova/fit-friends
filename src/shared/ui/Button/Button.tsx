import React from 'react';
import styles from './Button.module.css';
import { ButtonProps } from './types';

export const Button = ({ onClick, children, variant }: ButtonProps) => {
  let variantButton;
  if (variant === 'primary') {
    variantButton = styles.primary;
  }
  if (variant === 'secondary') {
    variantButton = styles.secondary;
  }
  if (variant === 'flatButton') {
    variantButton = styles.flatButton;
  }

  return (
    <>
      <button onClick={onClick} className={`${styles.button} ${variantButton}`}>
        {children}
      </button>
    </>
  );
};
