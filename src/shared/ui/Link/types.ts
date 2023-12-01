import { PropsWithChildren } from 'react';

export type LinkProps = PropsWithChildren<{
  path: string;
  variant?: string;
}>;
