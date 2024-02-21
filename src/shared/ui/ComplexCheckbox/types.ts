export type ComplexCheckboxProps = {
  name: string;
  label: string;
  isChecked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
