"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

type SocialLink = {
    name: string
    iconSrc: string
    href: string
}

export default function SocialSidebar() {
    const [isExpanded, setIsExpanded] = useState(false)

    const socialLinks: SocialLink[] = [
        {
            name: "GitHub",
            iconSrc: "/logos/github-mark-white.png",
            href: "https://github.com/yourusername",
        },
        {
            name: "LinkedIn",
            iconSrc: "/logos/InBug-White.png",
            href: "https://linkedin.com/in/yourusername",
        },
    ]

    return (
        <div
            className={cn(
                "fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4 p-3 bg-primary-200 border-l border-y border-primary-100/30 rounded-l-lg shadow-md transition-all duration-300",
                isExpanded ? "w-36" : "w-12",
            )}
            onMouseEnter={() => setIsExpanded(true)}
            onMouseLeave={() => setIsExpanded(false)}
        >
            {socialLinks.map((link) => (
                <Link
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-primary-foreground hover:text-white/70 transition-colors"
                >
                    <div className="flex-shrink-0 w-5 h-5 relative">
                        <Image
                            src={link.iconSrc || "/placeholder.svg"}
                            alt={link.name}
                            fill
                            className="object-contain brightness-0 invert" // Gör SVG-ikonerna vita
                        />
                    </div>
                    <span
                        className={cn(
                            "whitespace-nowrap transition-opacity duration-300 font-poppins font-medium",
                            isExpanded ? "opacity-100" : "opacity-0",
                        )}
                    >
                        {link.name}
                    </span>
                </Link>
            ))}
        </div>
    )
}