"use client"

import type React from "react"

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from "@/components/ui/dropdown-menu"
import { Menu } from "lucide-react"
import Link from "next/link"

export default function HamburgerMenu() {
  const smoothScroll = (e: React.MouseEvent, targetId: string) => {
    e.preventDefault()
    const target = document.getElementById(targetId)
    if (target) {
      target.scrollIntoView({ behavior: "smooth" })
      window.history.pushState(null, "", `/#${targetId}`)
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Menu className="text-primary-200 size-14" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="flex flex-col py-4 gap-y-4">
        {["projects", "about", "contact"].map((section) => (
          <DropdownMenuItem key={section}>
            <Link href={`#${section}`} onClick={(e) => smoothScroll(e, section)} scroll={false} className="w-full">
              <p className="capitalize">{section}</p>
            </Link>
          </DropdownMenuItem>
        ))}
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link href="https://github.com/johanhkremer" className="w-full">
            <p>Github</p>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="https://www.linkedin.com/in/johan-kremer/" className="w-full">
            <p>LinkedIn</p>
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}