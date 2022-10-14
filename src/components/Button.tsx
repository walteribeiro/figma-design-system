import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  asChild?: boolean;
  className?: string;
}

export function Button({ children, asChild, className, ...rest }: ButtonProps) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp {...rest} className={clsx(
      'py-3 px-4 bg-cyan-500 hover:bg-cyan-300 transition-colors rounded font-semibold text-black text-sm w-full focus:ring-2 ring-white',
      className
    )}>
      {children}
    </Comp>
  );
}
