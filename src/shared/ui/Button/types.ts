import { PropsWithChildren } from 'react';

export type ButtonProps = PropsWithChildren<{
  onClick?: () => void;
  variant: string;
}>;
