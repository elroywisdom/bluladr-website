export function SkipLink() {
  return (
    <a
      href="#main"
      className={[
        "fixed top-0 left-0 z-[9999] px-4 py-2",
        "bg-[var(--navy)] text-white font-bold text-sm",
        "-translate-y-full focus:translate-y-0",
        "transition-transform duration-200",
      ].join(" ")}
    >
      Skip to content
    </a>
  );
}
