// components/Heading.tsx
import { ComponentPropsWithoutRef, ElementType } from "react"

type HeadingProps<T extends ElementType> = {
  as?: T
} & ComponentPropsWithoutRef<T>

export function Heading<T extends ElementType = "h2">({
  as,
  className = "",
  ...props
}: HeadingProps<T>) {
  const Component = as || "h2"
  return (
    <Component
      className={`font-mono font-semibold text-foreground ${className}`}
      {...props}
    />
  )
}
