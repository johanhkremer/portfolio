import Link from 'next/link';
import { Button } from '../ui/button';

export default function HeroSection() {
    return (
        <section
            id="hero"
            className="relative h-screen overflow-hidden flex items-center justify-center"
        >
            {/* Bakgrund */}
            <div className="absolute inset-0 px-4 py-2">
                <div className="w-full h-full bg-gradient-to-br from-primary-100 via-[#f1e1f5] to-secondary-100 opacity-70 rounded-xl" />
            </div>

            {/* Innehåll */}
            <div className="relative z-10 w-full max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 lg:px-40 2xl:px-96 text-center flex flex-col items-center space-y-4 md:pt-24 2xl:pt-52">
                <h1 className="sm:text-6xl md:text-8xl 2xl:text-9xl bg-gradient-to-r from-secondary-100 via-[#AFBDBF] to-primary-100 text-transparent bg-clip-text">
                    Johan Kremer
                </h1>
                <h2 className="h6 font-extralight text-sm sm:text-md md:text-xl 2xl:text-2xl bg-background-100 border border-text-100 rounded-xl py-2 px-4">
                    Passionate Developer & Proud Geek
                </h2>
                <Link href="#projects">
                    <Button variant="defaultLight" size="lg" className="mt-4">
                        <p>Check Out My Work</p>
                    </Button>
                </Link>
            </div>
        </section>
    );
}
