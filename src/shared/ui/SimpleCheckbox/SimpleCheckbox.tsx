import React from 'react';
import styles from './SimpleCheckbox.module.css';
import { SimpleCheckboxProps } from './types';

export const SimpleCheckbox = ({
  name,
  label,
  onChange,
  checked,
  style,
}: SimpleCheckboxProps) => {
  const otherStyles = style ? styles[style] : '';

  console.log('otherStyles', otherStyles);

  return (
    <>
      <label className={styles.label}>
        <input
          name={name}
          type="checkbox"
          onChange={onChange}
          checked={checked}
          className={styles.input}
        />
        <div className={styles.buttonContainer}></div>
        <span className={styles.labelText}>
          <span className={`${styles.labelText} ${otherStyles}`}>{label}</span>
        </span>
      </label>
    </>
  );
};
