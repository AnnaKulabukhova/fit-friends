import React from 'react';
import styles from './UploadFile.module.css';
import { UploadFileProps } from './types';

export const UploadFile = ({ name, onChange }: UploadFileProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.files);
  };

  return (
    <>
      <input type="file" className={styles.input} onChange={handleChange} name={name} />
    </>
  );
};
