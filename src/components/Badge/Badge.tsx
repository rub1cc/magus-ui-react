import React from "react"
import cx from "classnames"
import { theme } from "utils"

export interface MagusBadgeTheme {
  base: string
  icon: string
  variant: {
    neutral: string
    info: string
    positive: string
    negative: string
    warning: string
    danger: string
  }
}

export interface BadgeProps {
  variant?: "neutral" | "info" | "positive" | "negative" | "warning" | "danger"
  icon?: React.ElementType
  className?: string
  label?: string
}

export function Badge({
  variant = "neutral",
  icon,
  label,
  className,
}: BadgeProps) {
  const classes = cx(theme.badge.base, theme.badge.variant[variant], className)
  const iconClasses = cx(theme.badge.icon)
  const Icon = icon ? icon : null

  return (
    <div className={classes}>
      {Icon && <Icon className={iconClasses} />}
      <p>{label}</p>
    </div>
  )
}

Badge.displayName = "Badge"
