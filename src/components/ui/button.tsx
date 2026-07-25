import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold ring-offset-ink-950 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary:
          'bg-gradient-to-r from-electric-500 to-electric-400 text-ink-950 shadow-glow hover:shadow-[0_0_50px_-8px_rgba(16,185,129,0.6)] hover:-translate-y-0.5',
        secondary: 'glass text-white hover:bg-white/10 hover:-translate-y-0.5',
        outline:
          'border border-white/15 bg-transparent text-white hover:bg-white/5 hover:border-electric-400/40',
        ghost: 'text-ink-200 hover:bg-white/5 hover:text-white',
        destructive:
          'bg-red-500/90 text-white hover:bg-red-500 hover:-translate-y-0.5',
        link: 'text-electric-400 underline-offset-4 hover:underline',
      },
      size: {
        default: 'px-7 py-3.5',
        sm: 'px-5 py-2.5 text-xs',
        lg: 'px-8 py-4 text-base',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: { variant: 'primary', size: 'default' },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
