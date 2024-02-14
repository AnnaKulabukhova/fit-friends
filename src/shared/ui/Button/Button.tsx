import React from 'react';
import styles from './Button.module.css';
import { ButtonProps } from './types';

export const Button = ({ onClick, children, variant = 'primary' }: ButtonProps) => {
  const variantStyles = styles[variant];

  return (
    <>
      <button onClick={onClick} className={`${styles.button} ${variantStyles}`}>
        {children}
      </button>
    </>
  );
};
