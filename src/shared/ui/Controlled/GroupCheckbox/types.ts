type Item = {
  name: string;
  label: string;
};

export type GroupCheckboxProps = {
  title?: string;
  list: Item[];
  variant: 'simple' | 'complex';
  stateOfList: string;
  style?: string;
};
