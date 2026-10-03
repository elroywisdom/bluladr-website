import { cn } from "@/shared/utils/cn";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
  alt?: boolean;
  grain?: boolean;
}

export function Section({ children, className, id, dark, alt, grain }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "section relative",
        dark && "bg-[var(--navy)] text-white",
        alt && "bg-[var(--alt)]",
        grain && "grain",
        className
      )}
    >
      {children}
    </section>
  );
}
