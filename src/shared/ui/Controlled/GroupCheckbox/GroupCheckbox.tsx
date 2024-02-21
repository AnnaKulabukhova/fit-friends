import React from 'react';
import { useFormContext } from 'react-hook-form';
import { ControlledSimpleCheckbox } from '../ControlledSimpleCheckbox';
import { GroupCheckboxProps } from './types';
import { ControlledComplexCheckbox } from '../ControlledComplexCheckbox';
import styles from './GroupCheckbox.module.css';

export const GroupCheckbox = ({
  list,
  title,
  variant,
  stateOfList,
  style,
}: GroupCheckboxProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const errorMessage = errors[stateOfList]?.root?.message;

  return (
    <>
      <legend>{title}</legend>
      <div className={styles.list}>
        {list.map((item: { name: string; label: string }) =>
          variant === 'simple' ? (
            <ControlledSimpleCheckbox
              key={item.name}
              control={control}
              name={`${stateOfList}.${item.name}`}
              label={item.label}
              style={style}
            />
          ) : (
            <ControlledComplexCheckbox
              key={item.name}
              control={control}
              name={`${stateOfList}.${item.name}`}
              label={item.label}
            />
          ),
        )}
      </div>
      {typeof errorMessage === 'string' && (
        <p className={styles.errorText}>{errorMessage}</p>
      )}
    </>
  );
};
