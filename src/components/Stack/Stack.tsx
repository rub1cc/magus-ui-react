import React from "react"
import cx from "classnames"
import { theme } from "utils"
import { MagusSizes } from "components/MagusTheme"

export interface MagusStackTheme {
  base: string
  direction: {
    row: string
    column: string
  }
  spacing: {
    x: MagusSizes & {
      none: string
    }
    y: MagusSizes & {
      none: string
    }
  }
}

export interface StackProps {
  direction: "row" | "column"
  children: React.ReactNode
  spacing: "none" | "xs" | "sm" | "md" | "lg" | "xl"
  justifyContent?: "start" | "center" | "end" | "between" | "around"
  alignItems?: "start" | "center" | "end" | "stretch"
  className?: string
}

export function Stack({
  children,
  direction = "row",
  spacing = "md",
  justifyContent,
  alignItems,
  className,
}: StackProps) {
  const classes = cx(
    theme.stack.base,
    theme.stack.direction[direction],
    {
      [theme.stack.spacing.x[spacing]]: direction === "row",
      [theme.stack.spacing.y[spacing]]: direction === "column",
      [`mgs-justify-${justifyContent}`]: justifyContent,
      [`mgs-items-${alignItems}`]: alignItems,
    },
    className,
  )
  return <div className={classes}>{children}</div>
}

Stack.displayName = "Stack"
