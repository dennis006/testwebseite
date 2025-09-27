import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1 rounded-full border border-white/20 px-3 py-1 text-xs font-medium uppercase tracking-wide",
  {
    variants: {
      variant: {
        default: "bg-white/10 text-white",
        glow: "bg-gradient-to-r from-secondary to-accent-600 text-secondary-foreground shadow-neon",
        outline: "bg-transparent text-white/80",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> &
  VariantProps<typeof badgeVariants>;

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, ...props }, ref) => (
    <span ref={ref} className={cn(badgeVariants({ variant, className }))} {...props} />
  )
);
Badge.displayName = "Badge";

export { Badge, badgeVariants };
