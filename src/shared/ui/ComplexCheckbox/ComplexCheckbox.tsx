import React from 'react';
import styles from './ComplexCheckbox.module.css';
import { ComplexCheckboxProps } from './types';

export const ComplexCheckbox = ({
  name,
  label,
  isChecked,
  onChange,
}: ComplexCheckboxProps) => {
  return (
    <label className={styles.label}>
      <input
        name={name}
        type="checkbox"
        onChange={onChange}
        checked={isChecked}
        className={styles.input}
      />
      <span className={styles.labelText}>{label}</span>
    </label>
  );
};
