import React from "react"
import cx from "classnames"
import { theme } from "utils"

export interface MagusButtonTheme {
  base: string
  variant: {
    primary: string
    secondary: string
    danger: string
    ghost: string
  }
  size: {
    sm: string
    md: string
    lg: string
  }
  block: string
  disabled: string
}

export interface ButtonProps {
  variant?: "primary" | "secondary" | "danger" | "ghost"
  size?: "sm" | "md" | "lg"
  block?: boolean
  disabled?: boolean
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  className?: string
  children?: React.ReactNode
}

export function Button({
  variant = "secondary",
  size = "md",
  block,
  disabled,
  children,
  className,
  onClick,
}: ButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) {
      e.preventDefault()
      return
    }
    onClick && onClick(e)
  }

  const classes = cx(
    theme.button.base,
    theme.button.variant[variant],
    theme.button.size[size],
    {
      [theme.button.block]: block,
      [theme.button.disabled]: disabled,
    },
    className,
  )

  return (
    <button className={classes} onClick={handleClick}>
      {children}
    </button>
  )
}

Button.displayName = "Button"
