"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "../ui/button";

export default function HeroSection() {
    const pathname = usePathname();
    const isHomePage = pathname === "/";

    if (!isHomePage) return null;

    return (
        <section
            id="hero"
            className="relative h-screen flex items-center justify-center"
        >
            <div className="absolute inset-0 px-2 py-2">
                <div className="w-full h-full bg-gradient-to-br from-primary-100 via-[#f1e1f5] to-secondary-100 opacity-50 rounded-lg" />
            </div>

            <div className="flex flex-col items-center text-center gap-10 -mt-20 relative z-10 w-full">
                <h1 className="text-4xl sm:text-6xl md:text-8xl 2xl:text-9xl bg-gradient-to-r from-secondary-100 via-[#AFBDBF] to-primary-100 text-transparent bg-clip-text">
                    Johan Kremer
                </h1>
                <h2 className="h6 font-extralight text-xs sm:text-md md:text-xl 2xl:text-2xl bg-background-100 border border-text-100 rounded-xl py-2 px-4">
                    Passionate Developer & Proud Geek
                </h2>
                <Link href="#projects">
                    <Button variant="default" className="px-4 py-2 text-sm sm:px-6 sm:py-2.5 sm:text-base md:px-8 md:py-3 md:text-lg">
                        <p>Check Out My Work</p>
                    </Button>
                </Link>
            </div>
        </section>
    );
}
