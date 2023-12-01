import React, { useState } from 'react';
import { useController, useFormContext } from 'react-hook-form';
import styles from './Toggle.module.css';
import { ToggleProps } from './types';

export const Toggle = ({ name }: ToggleProps) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const { control } = useFormContext();
  const {
    field: { onChange },
  } = useController({ control, name });

  const styleWrapper = isChecked
    ? styles.wrapperChecked
    : styles.wrapperUnchecked;
  const styleInner = isChecked ? styles.innerChecked : styles.innerUnchecked;

  return (
    <button
      onClick={() => {
        setIsChecked((value) => !value);
        onChange(isChecked);
      }}
      className={styles.button}
    >
      <div className={`${styles.wrapper} ${styleWrapper}`}>
        <div className={`${styles.inner} ${styleInner}`}></div>
      </div>
    </button>
  );
};
