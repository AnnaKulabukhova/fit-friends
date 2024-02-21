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

  const wrapperClassName = !error ? styles.wrapper : styles.errorWrapper;

  return (
    <>
      <div className={wrapperClassName}>
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
