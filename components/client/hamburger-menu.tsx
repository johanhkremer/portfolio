"use client"

import type React from "react"

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
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
      <DropdownMenuContent>
        {["projects", "about", "contact"].map((section) => (
          <DropdownMenuItem key={section}>
            <Link href={`#${section}`} onClick={(e) => smoothScroll(e, section)} scroll={false} className="w-full">
              <span className="capitalize">{section}</span>
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}