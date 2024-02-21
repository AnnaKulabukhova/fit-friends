import React from 'react';
import { useFormContext, useController } from 'react-hook-form';
import styles from './ControlledUploadFile.module.css';
import { UploadPhotoProps } from './types';
import { UploadFile } from '../../UploadFile';

export const ControlledUploadFile = ({
  variant,
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
    <>
      {variant === 'prime' ? (
        <label className={styles.innerPhoto}>
          <img className={styles.image} src={image} alt={title} />
          <div>
            <h3 className={styles.title}>{title}</h3>
            <span className={`${styles.photoInfo} ${styles.photoInfoPrime}`}>{text}</span>
          </div>
          <UploadFile name={name} onChange={onChange} />
        </label>
      ) : (
        <label className={styles.innerPhotoSecond}>
          <span className={`${styles.photoInfo} ${styles.photoInfoSecond}`}>{text}</span>
          <img className={styles.image} src={image} alt={title} />
          <UploadFile name={name} onChange={onChange} />
        </label>
      )}
      {error && <p className={styles.errorText}>{error.message}</p>}
    </>
  );
};
