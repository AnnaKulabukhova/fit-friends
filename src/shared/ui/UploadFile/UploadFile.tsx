import React from 'react';
import styles from './UploadFile.module.css';
import { UploadFileProps } from './types';

export const UploadFile = ({ name, onChange }: UploadFileProps) => {
  return (
    <>
      <input
        type="file"
        className={styles.input}
        onChange={(event) => {
          onChange(event.target.files);
        }}
        name={name}
      />
    </>
  );
};
