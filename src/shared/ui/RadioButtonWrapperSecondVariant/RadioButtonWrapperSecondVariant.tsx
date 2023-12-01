import React from 'react';
import { useController, useFormContext } from 'react-hook-form';
import { RadioButtonWrapperSecondVariantProps } from './types';
import styles from './RadioButtonWrapperSecondVariant.module.css';
import { RadioButtonSecondVariant } from '../RadioButtonSecondVariant';

export const RadioButtonWrapperSecondVariant = ({
  name: fieldName,
  list,
}: RadioButtonWrapperSecondVariantProps) => {
  const { control } = useFormContext();
  const {
    field: { name, onChange },
    fieldState: { error },
  } = useController({ control, name: fieldName });

  return (
    <div>
      <ul className={styles.list}>
        {list.map((item) => (
          <label className={styles.item} key={item.value}>
            <RadioButtonSecondVariant
              onChange={onChange}
              value={item.value}
              name={name}
            />
            <div className={styles.imageBox}>
              <div className={styles.image}>{item.image}</div>
            </div>
            <span>{item.label}</span>
          </label>
        ))}
      </ul>
      {error && <p className={styles.errorText}>{error.message}</p>}
    </div>
  );
};
