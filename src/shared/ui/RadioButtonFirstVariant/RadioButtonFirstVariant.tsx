import React from 'react';
import { RadioButtonFirstVariantProps } from './types';
import styles from './RadioButtonFirstVariant.module.css';

export const RadioButtonFirstVariant = ({
  label,
  name,
  value,
  onChange,
}: RadioButtonFirstVariantProps) => {
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
