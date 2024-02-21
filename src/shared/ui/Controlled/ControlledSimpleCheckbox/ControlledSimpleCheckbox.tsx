import React from 'react';
import { useController } from 'react-hook-form';
import { SimpleCheckbox } from '../../SimpleCheckbox';
import { ControlledSimpleCheckboxProps } from './types';

export const ControlledSimpleCheckbox = ({
  name: fieldName,
  control,
  label,
  style,
}: ControlledSimpleCheckboxProps) => {
  const {
    field: { onChange, name, value },
  } = useController({
    control,
    name: fieldName,
  });

  return (
    <SimpleCheckbox
      label={label}
      name={name}
      onChange={onChange}
      checked={value}
      style={style}
    />
  );
};
