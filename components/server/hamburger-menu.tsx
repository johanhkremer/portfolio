
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Menu } from "lucide-react"
import Link from "next/link"

export default function HamburgerMenu() {

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Menu className="text-primary-200 size-14" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="flex flex-col py-4 gap-y-4">
        <DropdownMenuItem>
          <Link
            href="https://github.com/johanhkremer"
            target="_blank"
            className="w-full">
            <p>Github</p>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link
            href="https://www.linkedin.com/in/johan-kremer/"
            className="w-full">
            <p>LinkedIn</p>
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}