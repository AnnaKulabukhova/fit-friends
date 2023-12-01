import React from 'react';
import { useController, useFormContext } from 'react-hook-form';
import { Checkbox } from '../Checkbox';
import { CheckboxWrapperProps } from './types';
import styles from './CheckboxWrapper.module.css';

export const CheckboxWrapper = ({
  name: fieldName,
  title,
  list,
}: CheckboxWrapperProps) => {
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
      <legend>{title}</legend>
      <ul className={styles.list}>
        {list.map((item) => (
          <li key={item.value}>
            <Checkbox
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
          </li>
        ))}
      </ul>
      {error && <p className={styles.errorText}>{error.message}</p>}
    </>
  );
};
