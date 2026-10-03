import React from "react";
import { cn } from "@/shared/utils/cn";

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: string | number;
  height?: string | number;
  rounded?: "sm" | "md" | "lg" | "full";
}

export function Skeleton({
  width,
  height,
  rounded = "md",
  className,
  style,
  ...props
}: SkeletonProps) {
  const roundedClass = {
    sm: "rounded-[var(--r-sm)]",
    md: "rounded-lg",
    lg: "rounded-[var(--r-lg)]",
    full: "rounded-full",
  }[rounded];

  return (
    <div
      aria-hidden="true"
      className={cn(
        "bg-gradient-to-r from-[var(--border)] via-[var(--alt)] to-[var(--border)]",
        "bg-[length:200%_100%] animate-[shimmer_1.5s_linear_infinite]",
        roundedClass,
        className
      )}
      style={{
        width,
        height: height ?? "1rem",
        ...style,
      }}
      {...props}
    />
  );
}
