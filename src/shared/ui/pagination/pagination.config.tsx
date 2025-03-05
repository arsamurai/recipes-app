import { ChevronLeftIcon, ChevronRightIcon, MoreHorizontalIcon } from "lucide-react"
import * as React from "react"

import { cn } from "@shared/lib/css"

import { Button } from "../button"
import { buttonVariants } from "../button/button.variants"
import { ButtonProps } from "../button/buttons.types"

function PaginationWrapper({ className, ...props }: React.ComponentProps<"nav">) {
  return (
    <nav
      role="navigation"
      aria-label="pagination"
      data-slot="pagination"
      className={cn("mx-auto flex w-full justify-center", className)}
      {...props}
    />
  )
}

function PaginationContent({ className, ...props }: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="pagination-content"
      className={cn("flex w-full flex-row items-center justify-between gap-1", className)}
      {...props}
    />
  )
}

type PaginationItemProps = {
  isActive?: boolean
} & Pick<ButtonProps, "size"> &
  React.ComponentProps<"li">

function PaginationItem({ isActive, ...props }: PaginationItemProps) {
  return (
    <li
      data-slot="pagination-item"
      className={cn(
        "flex h-10 w-fit cursor-pointer items-center justify-center rounded-lg border border-slate-200 px-4 text-sm font-medium text-blue-700 transition-colors hover:bg-blue-100",
        {
          ["border-blue-700"]: isActive,
        },
      )}
      {...props}
    />
  )
}

type PaginationLinkProps = {
  isActive?: boolean
} & Pick<React.ComponentProps<typeof Button>, "size"> &
  React.ComponentProps<"a">

function PaginationLink({ className, isActive, size = "icon", ...props }: PaginationLinkProps) {
  return (
    <a
      aria-current={isActive ? "page" : undefined}
      data-slot="pagination-link"
      data-active={isActive}
      className={cn(
        buttonVariants({
          variant: isActive ? "outline" : "ghost",
          size,
        }),
        className,
      )}
      {...props}
    />
  )
}

type PaginationNavProps = {
  isDisabled?: boolean
} & Pick<ButtonProps, "size"> &
  React.ComponentProps<typeof PaginationItem>

function PaginationPrevious({ className, isDisabled, ...props }: PaginationNavProps) {
  return (
    <PaginationItem
      aria-label="Go to previous page"
      size="default"
      className={cn(
        "gap-1 px-2.5 text-blue-700 sm:pl-2.5",
        { ["pointer-events-none cursor-default opacity-30"]: isDisabled },
        className,
      )}
      {...props}
    >
      <ChevronLeftIcon />
    </PaginationItem>
  )
}

function PaginationNext({ className, isDisabled, ...props }: PaginationNavProps) {
  return (
    <PaginationItem
      aria-label="Go to next page"
      size="default"
      className={cn(
        "gap-1 px-2.5 text-blue-700 sm:pr-2.5",
        { ["pointer-events-none cursor-default opacity-30"]: isDisabled },
        className,
      )}
      {...props}
    >
      <ChevronRightIcon />
    </PaginationItem>
  )
}

function PaginationEllipsis({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      aria-hidden
      data-slot="pagination-ellipsis"
      className={cn("flex size-9 items-center justify-center", className)}
      {...props}
    >
      <MoreHorizontalIcon className="size-4" />
      <span className="sr-only">More pages</span>
    </span>
  )
}

export {
  PaginationWrapper,
  PaginationContent,
  PaginationLink,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
}
