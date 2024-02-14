import React from 'react';
import { ComplexRadioButtonProps } from './types';
import styles from './ComplexRadioButton.module.css';

export const ComplexRadioButton = ({
  name,
  onChange,
  value,
}: ComplexRadioButtonProps) => {
  return (
    <>
      <input
        id={value}
        type="radio"
        name={name}
        value={value}
        onChange={onChange}
        className={styles.input}
      />
    </>
  );
};
