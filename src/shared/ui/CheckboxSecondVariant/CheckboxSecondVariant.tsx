import React from 'react';
import styles from './CheckboxSecondVariant.module.css';
import { CheckboxSecondVariantProps } from './types';

export const CheckboxSecondVariant = ({
  name,
  label,
  value,
  onChange,
}: CheckboxSecondVariantProps) => {
  return (
    <>
      <label className={styles.label}>
        <input
          name={name}
          type="checkbox"
          onChange={onChange}
          value={value}
          className={styles.input}
        />
        <span className={styles.labelText}>{label}</span>
      </label>
    </>
  );
};
