import { PropsWithChildren } from 'react';

export type LinkProps = PropsWithChildren<{
  path: string;
  variant: 'primary' | 'secondary' | 'flatButton' | 'simple';
}>;
