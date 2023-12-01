import React from 'react';
import { useFormContext, useController } from 'react-hook-form';
import styles from './Textarea.module.css';
import { TextareaProps } from './types';

export const Textarea = ({ name, rows }: TextareaProps) => {
  const { control } = useFormContext();
  const {
    field: { onChange, value },
    fieldState: { error },
  } = useController({ control, name });

  const wrapperStyle = !error ? styles.wrapper : styles.errorWrapper;

  return (
    <>
      <div className={wrapperStyle}>
        <textarea
          rows={rows}
          onChange={onChange}
          name={name}
          value={value}
          className={styles.textarea}
        />
      </div>
      {error && <p className={styles.errorText}>{error.message}</p>}
    </>
  );
};
