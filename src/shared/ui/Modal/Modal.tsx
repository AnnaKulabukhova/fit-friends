import React from 'react';
import styles from './Modal.module.css';
import { ModalProps } from './types';

export const Modal = ({ children, title }: ModalProps) => {
  const isTitle = title ? styles.innerWithTitle : '';
  return (
    <div className={styles.wrapper}>
      {title && (
        <div className={styles.headerModal}>
          <h2 className={styles.title}>{title}</h2>
        </div>
      )}
      <div className={`${styles.inner} ${isTitle}`}>
        <div>{children}</div>
      </div>
    </div>
  );
};