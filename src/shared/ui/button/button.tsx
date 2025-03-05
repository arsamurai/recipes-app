import { Slot } from "@radix-ui/react-slot"
import * as React from "react"

import { cn } from "@shared/lib/css"

import { buttonVariants } from "./button.variants"
import { ButtonProps } from "./buttons.types"

function Button({ className, variant, size, asChild = false, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export default Button
