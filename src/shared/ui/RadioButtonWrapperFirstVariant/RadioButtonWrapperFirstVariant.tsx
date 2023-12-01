import React from 'react';
import { useController, useFormContext } from 'react-hook-form';
import { RadioButtonFirstVariant } from '../RadioButtonFirstVariant';
import { RadioButtonWrapperFirstVariantProps } from './types';
import styles from './RadioButtonWrapperFirstVariant.module.css';

export const RadioButtonWrapperFirstVariant = ({
  list,
  name: fieldName,
}: RadioButtonWrapperFirstVariantProps) => {
  const { control } = useFormContext();

  const {
    field: { name, onChange },
    fieldState: { error },
  } = useController({ control, name: fieldName });

  return (
    <>
      <ul className={styles.list}>
        {list.map((item) => (
          <li className={styles.item} key={item.value}>
            <RadioButtonFirstVariant
              label={item.label}
              name={name}
              value={item.value}
              onChange={onChange}
            />
          </li>
        ))}
      </ul>
      {error && <p className={styles.errorText}>{error.message}</p>}
    </>
  );
};
