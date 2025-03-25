import { ArrowDown } from 'lucide-react'
import Link from 'next/link';

export default function HeroSection() {
    return (
        <section id="hero" className="flex flex-col justify-between h-[calc(100dvh-6rem)]">
            <div className="flex flex-col space-y-4 pl-0 pt-14 md:pl-36 md:pt-24">
                <h1>Johan Kremer</h1>
                <h2 className='h4'>Front End Developer</h2>
                <Link href="#projects">
                    <h3 className="h5 text-secondary-200 hover:underline">Projects</h3>
                </Link>
            </div>
            <div className="flex justify-center">
                <Link href="#projects" aria-label='Scroll down to projects'>
                    <ArrowDown
                        size={48}
                        className="animate-bounce text-primary-200"
                    />
                </Link>
            </div>
        </section>
    );
}