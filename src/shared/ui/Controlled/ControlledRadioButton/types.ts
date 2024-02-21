type Item = {
  value: string;
  label: string;
  image?: React.ReactNode;
};

export type ControlledRadioButtonProps = {
  list: Item[];
  name: string;
  variant: 'simple' | 'complex';
};
