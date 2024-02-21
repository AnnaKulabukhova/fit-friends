import React from 'react';
import { SimpleRadioButtonProps } from './types';
import styles from './SimpleRadioButton.module.css';

export const SimpleRadioButton = ({
  label,
  name,
  value,
  onChange,
}: SimpleRadioButtonProps) => {
  return (
    <label className={styles.label}>
      <input
        type="radio"
        name={name}
        value={value}
        onChange={onChange}
        className={styles.input}
      />
      <div className={styles.buttonContainer}></div>
      <span className={styles.labelText}>{label}</span>
    </label>
  );
};
