import { cva } from "class-variance-authority"

export const typographyVariants = cva("", {
  variants: {
    variant: {
      pageTitle: "text-2xl md:text-4xl font-bold",
      itemTitle: "text-xl md:text-2xl font-bold",
      pageSubtitle: "text-base md:text-xl font-medium",
      copy: "text-sm md:text-base",
      caption: "text-sm",
    },
  },
  defaultVariants: {
    variant: "copy",
  },
})
