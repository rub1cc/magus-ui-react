import { MagusBadgeTheme } from "./Badge"
import { MagusButtonTheme } from "./Button"
import { MagusStackTheme } from "./Stack"

export interface MagusTheme extends Record<string, unknown> {
  stack: MagusStackTheme
  button: MagusButtonTheme
  badge: MagusBadgeTheme
}

export interface MagusSizes {
  xs: string
  sm: string
  md: string
  lg: string
  xl: string
}
