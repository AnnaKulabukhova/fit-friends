import React from 'react';
import { useController, useFormContext } from 'react-hook-form';
import { SimpleRadioButton } from '../../SimpleRadioButton';
import { ControlledRadioButtonProps } from './types';
import styles from './ControlledRadioButton.module.css';
import { ComplexRadioButton } from '../../ComplexRadioButton';

export const ControlledRadioButton = ({
  list,
  name: fieldName,
  variant,
}: ControlledRadioButtonProps) => {
  const { control } = useFormContext();

  const {
    field: { name, onChange },
    fieldState: { error },
  } = useController({ control, name: fieldName });

  const styleList =
    variant === 'simple' ? styles.listSimpleRadioButton : styles.listComplexRadioButton;

  return (
    <>
      <div className={styleList}>
        {list.map((item) => (
          <div className={styles.itemSimpleRadioButton} key={item.value}>
            {variant === 'simple' ? (
              <SimpleRadioButton
                label={item.label}
                name={name}
                value={item.value}
                onChange={onChange}
              />
            ) : (
              <label className={styles.itemComplexRadioButton} key={item.value}>
                <ComplexRadioButton onChange={onChange} value={item.value} name={name} />
                <div className={styles.imageBox}>
                  <div className={styles.image}>{item.image}</div>
                </div>
                <span>{item.label}</span>
              </label>
            )}
          </div>
        ))}
      </div>
      {error && <p className={styles.errorText}>{error.message}</p>}
    </>
  );
};
