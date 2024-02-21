import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { LinkProps } from './types';
import styles from './Link.module.css';

export const Link = ({ children, path, variant = 'simple' }: LinkProps) => {
  const variantStyles = styles[variant];

  return (
    <RouterLink to={path} className={`${styles.link} ${variantStyles}`}>
      {children}
    </RouterLink>
  );
};
