import React from 'react';
import { useController, useFormContext } from 'react-hook-form';
import styles from './CheckboxWrapperSecondVariant.module.css';
import { CheckboxSecondVariant } from '../CheckboxSecondVariant';
import { CheckboxWrapperSecondVariantProps } from './types';

export const CheckboxWrapperSecondVariant = ({
  name: fieldName,
  list,
}: CheckboxWrapperSecondVariantProps) => {
  const { control } = useFormContext();

  const {
    field: { onChange, name, value },
    fieldState: { error },
  } = useController({
    control,
    name: fieldName,
    defaultValue: [],
  });

  return (
    <>
      <ul className={styles.list}>
        {list.map((item) => (
          <CheckboxSecondVariant
            key={item.value}
            label={item.label}
            name={name}
            value={item.value}
            onChange={(event) => {
              onChange(
                event.target.checked
                  ? [...value, event.target.value]
                  : undefined
              );
            }}
          />
        ))}
      </ul>
      {error && <p className={styles.errorText}>{error.message}</p>}
    </>
  );
};
