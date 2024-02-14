import React from 'react';
import { useController } from 'react-hook-form';
import { ComplexCheckbox } from '../../ComplexCheckbox';
import { ControlledComplexCheckboxProps } from './types';

export const ControlledComplexCheckbox = ({
  name: fieldName,
  control,
  label,
}: ControlledComplexCheckboxProps) => {
  const {
    field: { onChange, name, value },
  } = useController({
    control,
    name: fieldName,
  });

  return (
    <ComplexCheckbox label={label} name={name} onChange={onChange} isChecked={value} />
  );
};
