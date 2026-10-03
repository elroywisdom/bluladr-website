import { cn } from "@/shared/utils/cn";

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  style?: React.CSSProperties;
  id?: string;
}

export function Card({ children, className, href, style, id }: CardProps) {
  const classes = cn(
    "bg-[var(--raised)] border border-[var(--border)] rounded-[var(--r-md)] p-8",
    "flex flex-col gap-3 shadow-[var(--sh1)]",
    "transition-[transform,box-shadow] duration-[450ms] [transition-timing-function:var(--ease)]",
    "hover:-translate-y-1 hover:shadow-[var(--sh3)]",
    className
  );

  if (href) {
    return (
      <a href={href} className={cn(classes, "no-underline text-inherit")} style={style} id={id}>
        {children}
      </a>
    );
  }

  return (
    <div className={classes} style={style} id={id}>
      {children}
    </div>
  );
}
