interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
}

export function Eyebrow({ children, className }: EyebrowProps) {
  return (
    <p className={["eyebrow", className].filter(Boolean).join(" ")}>
      {children}
    </p>
  );
}
