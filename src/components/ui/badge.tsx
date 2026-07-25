import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition-colors',
  {
    variants: {
      variant: {
        default: 'glass text-ink-100',
        primary: 'bg-electric-500/15 border border-electric-400/30 text-electric-300',
        accent: 'bg-volt-500/15 border border-volt-400/30 text-volt-300',
        outline: 'border border-white/15 text-ink-200',
        solid: 'bg-gradient-to-r from-electric-500 to-electric-400 text-ink-950',
      },
    },
    defaultVariants: { variant: 'default' },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
