import React from 'react';
import { useController, useFormContext } from 'react-hook-form';
import { ControlledInputProps } from './types';
import { Input } from '../../Input';
import styles from './ControlledInput.module.css';

export const ControlledInput = ({
  name: fieldName,
  label,
  type,
  icon,
  text,
}: ControlledInputProps) => {
  const { control } = useFormContext();
  const {
    field: { value, name, onChange },
    fieldState: { error },
  } = useController({ control, name: fieldName });

  const innerStyle = !error ? styles.inner : styles.errorInner;

  return (
    <div className={styles.wrapper}>
      {label && <label className={styles.label}>{label}</label>}
      <div className={innerStyle}>
        <Input type={type} value={value} onChange={onChange} name={name} />
        <span className={styles.text}>{text}</span>
        {icon}
      </div>
      {error && <p className={styles.errorText}>{error.message}</p>}
    </div>
  );
};
