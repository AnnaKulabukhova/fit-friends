import React from 'react';
import { InputProps } from './types';
import styles from './Input.module.css';

export const Input = ({ name, value, onChange, type }: InputProps) => {
  return (
    <input
      type={type}
      value={value || ''}
      className={styles.input}
      onChange={onChange}
      name={name}
    />
  );
};
