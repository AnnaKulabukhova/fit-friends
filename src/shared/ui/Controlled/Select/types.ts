type Option = {
  value: string | undefined;
  label: string;
};

export type SelectProps = {
  options: Option[];
  name: string;
};
