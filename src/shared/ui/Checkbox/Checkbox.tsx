import React from 'react';
import styles from './Checkbox.module.css';
import { CheckboxProps } from './types';

export const Checkbox = ({ name, label, value, onChange }: CheckboxProps) => {
  const userAgreementStyle =
    name === 'userAgreement' ? styles.userAgreement : '';
  return (
    <>
      <label className={styles.label}>
        <input
          name={name}
          type="checkbox"
          onChange={onChange}
          value={value}
          className={`${styles.input} ${userAgreementStyle}`}
        />
        <div className={styles.buttonContainer}></div>
        <span className={`${styles.labelText} ${userAgreementStyle}`}>
          {label}
        </span>
      </label>
    </>
  );
};
