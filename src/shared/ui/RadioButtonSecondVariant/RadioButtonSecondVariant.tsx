import React from 'react';
import { RadioButtonSecondVariantProps } from './types';
import styles from './RadioButtonSecondVariant.module.css';

export const RadioButtonSecondVariant = ({
  name,
  onChange,
  value,
}: RadioButtonSecondVariantProps) => {
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
