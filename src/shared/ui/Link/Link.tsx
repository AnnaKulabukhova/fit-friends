import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { LinkProps } from './types';
import styles from './Link.module.css';

export const Link = ({ children, path, variant }: LinkProps) => {
  let variantLink;
  if (variant === 'primary') {
    variantLink = styles.primary;
  }
  if (variant === 'secondary') {
    variantLink = styles.secondary;
  }
  if (variant === 'flatButton') {
    variantLink = styles.flatButton;
  }

  return (
    <RouterLink to={path} className={`${styles.link} ${variantLink}`}>
      {children}
    </RouterLink>
  );
};
