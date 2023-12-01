import { ReactNode } from 'react';

type Item = {
  value: string;
  label: string;
  image: ReactNode;
};

export type RadioButtonWrapperSecondVariantProps = {
  name: string;
  list: Item[];
};
