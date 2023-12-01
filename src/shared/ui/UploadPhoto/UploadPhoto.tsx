import React from 'react';
import { useFormContext, useController } from 'react-hook-form';
import styles from './UploadPhoto.module.css';
import { UploadPhotoProps } from './types';
import { UploadFile } from '../UploadFile';

export const UploadPhoto = ({
  text,
  image,
  title,
  name: fieldName,
}: UploadPhotoProps) => {
  const { control } = useFormContext();
  const {
    field: { onChange, name },
    fieldState: { error },
  } = useController({ control, name: fieldName });

  return (
    <div>
      <label className={styles.innerPhoto}>
        <img className={styles.image} src={image} alt={title} />
        <div>
          <h3 className={styles.title}>{title}</h3>
          <span className={styles.photoInfo}>{text}</span>
        </div>
        <UploadFile name={name} onChange={onChange} />
      </label>
      {error && <p className={styles.errorText}>{error.message}</p>}
    </div>
  );
};
