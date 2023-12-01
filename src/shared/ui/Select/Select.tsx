import React, { useState } from 'react';
import { useController, useFormContext } from 'react-hook-form';
import { SelectProps } from './types';
import arrowDown from '../../images/arrowDown.svg';
import styles from './Select.module.css';

export const Select = ({ options, name }: SelectProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { control } = useFormContext();

  const {
    field: { value, onChange },
    fieldState: { error },
  } = useController({ control, name });

  const innerStyle = !error ? styles.inner : styles.errorInner;

  return (
    <div className={styles.container}>
      <div className={innerStyle} onClick={() => setIsOpen((value) => !value)}>
        <span className={styles.selectedElement}>{value}</span>
        <img className={styles.arrow} src={arrowDown}></img>
      </div>
      {isOpen && (
        <ul className={styles.options}>
          {options.map((option) => {
            const handleSelect = () => {
              onChange(option.value);
              setIsOpen(false);
            };
            return (
              <li key={option.label}>
                <button onClick={handleSelect} className={styles.option}>
                  {option.label}
                </button>
              </li>
            );
          })}
        </ul>
      )}
      {error && <p className={styles.errorText}>{error.message}</p>}
    </div>
  );
};
