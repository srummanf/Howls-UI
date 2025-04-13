"use client"

import type * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"

interface PageNavProps extends React.HTMLAttributes<HTMLDivElement> {
  items: {
    title: string
    href: string
  }[]
}

export function PageNav({ className, items, ...props }: PageNavProps) {
  const pathname = usePathname()

  return (
    <div className={cn("flex flex-col space-y-1", className)} {...props}>
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "text-sm transition-colors hover:text-foreground",
            pathname === item.href ? "font-medium text-foreground" : "text-muted-foreground",
          )}
        >
          {item.title}
        </Link>
      ))}
    </div>
  )
}
