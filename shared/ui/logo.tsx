import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  variant?: "gradient" | "white" | "dark" | "black";
  href?: string;
  asLink?: boolean;
  width?: number;
  height?: number;
  className?: string;
}

const logoSrcMap: Record<NonNullable<LogoProps["variant"]>, string> = {
  gradient: "/logo/bluladr-dark.svg",
  white:    "/logo/bluladr-white.svg",
  dark:     "/logo/bluladr-dark.svg",
  black:    "/logo/bluladr-black.svg",
};

export function Logo({
  variant = "dark",
  href = "/",
  asLink = true,
  width = 148,
  height = 30,
  className,
}: LogoProps) {
  const src = logoSrcMap[variant];

  const imageElement = (
    <Image
      src={src}
      alt="BluLadr"
      width={width}
      height={height}
      priority
      style={{ width: `${width}px`, height: "auto", display: "block" }}
      className={`shrink-0 ${className ?? ""}`}
    />
  );

  if (!asLink) {
    return imageElement;
  }

  return (
    <Link href={href} aria-label="BluLadr — home" className={`no-underline inline-block ${className ?? ""}`}>
      {imageElement}
    </Link>
  );
}
