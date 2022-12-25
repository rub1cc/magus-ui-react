import { MagusTheme } from "components/MagusTheme"

export const theme: MagusTheme = {
  stack: {
    base: "mgs-flex",
    direction: {
      row: "flex-row",
      column: "flex-col",
    },
    spacing: {
      x: {
        none: "mgs-space-x-0",
        xs: "mgs-space-x-1",
        sm: "mgs-space-x-2",
        md: "mgs-space-x-4",
        lg: "mgs-space-x-6",
        xl: "mgs-space-x-8",
      },
      y: {
        none: "mgs-space-y-0",
        xs: "mgs-space-y-1",
        sm: "mgs-space-y-2",
        md: "mgs-space-y-4",
        lg: "mgs-space-y-6",
        xl: "mgs-space-y-8",
      },
    },
  },
  button: {
    base: "mgs-px-3 mgs-py-1 mgs-rounded-lg mgs-text-sm mgs-shadow-md mgs-font-medium mgs-border mgs-self-start",
    block: "mgs-w-full",
    disabled: "mgs-opacity-50 mgs-cursor-default",
    variant: {
      primary: "mgs-bg-indigo-500 mgs-text-white mgs-border-indigo-600",
      secondary: "mgs-bg-white mgs-text-gray-600 mgs-border-gray-200",
      danger: "mgs-bg-red-500 mgs-text-white mgs-border-red-600",
      ghost:
        "mgs-bg-transparent mgs-shadow-none mgs-text-gray-600 mgs-border-transparent",
    },
    size: {
      sm: "mgs-px-2 mgs-py-1 mgs-text-xs",
      md: "mgs-px-3 mgs-py-1 mgs-text-sm",
      lg: "mgs-px-5 mgs-py-1.5 mgs-text-base",
    },
  },
  badge: {
    base: "mgs-px-2 mgs-py-1 mgs-rounded-full mgs-text-xs mgs-font-semibold mgs-flex mgs-items-center mgs-space-x-1",
    icon: "mgs-w-4 mgs-h-4",
    variant: {
      neutral: "mgs-bg-gray-100 mgs-text-gray-600",
      info: "mgs-bg-blue-100 mgs-text-blue-600",
      positive: "mgs-bg-green-100 mgs-text-green-700",
      negative: "mgs-bg-red-50 mgs-text-red-700",
      warning: "mgs-bg-orange-100 mgs-text-orange-700",
      danger: "mgs-bg-red-500 mgs-text-red-100",
    },
  },
}
