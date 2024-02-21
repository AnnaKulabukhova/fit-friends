import { PropsWithChildren } from 'react';

export type ButtonProps = PropsWithChildren<{
  onClick?: () => void;
  variant: 'primary' | 'secondary' | 'flatButton';
}>;
