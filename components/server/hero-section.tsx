import { ArrowDown } from 'lucide-react'
import Link from 'next/link';

export default function HeroSection() {
    return (
        <section id="hero" className="flex flex-col justify-between h-[calc(100dvh-6rem)]">
            <div className="flex flex-col space-y-4 pt-14 md:pt-24 lg:pt-30 sm:gap-6">
                <h1 className='sm:text-6xls md:text-8xl'>Johan Kremer</h1>
                <h2 className='h4 sm:text-4xl md:text-5xl'>Front End Developer</h2>
                <Link href="#projects">
                    <h3 className="h5 sm:text-3xl md:text-4xl text-secondary-200 hover:underline">Projects</h3>
                </Link>
            </div >
            <div className="flex justify-center">
                <Link href="#projects" aria-label='Scroll down to projects'>
                    <ArrowDown
                        size={48}
                        className="animate-bounce text-primary-200"
                    />
                </Link>
            </div>
        </section >
    );
}