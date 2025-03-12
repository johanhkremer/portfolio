import { ArrowDown } from 'lucide-react'
import Link from 'next/link';

export default function HeroSection() {
    return (
        <section id="hero" className="flex flex-col justify-between h-[calc(100vh-6rem)]">
            <div className="p-14">
                <h1>Johan Kremer</h1>
                <h4>Front End Developer</h4>
                <Link href="#projects">
                    <h5 className="text-secondary-200 hover:underline">Projects</h5>
                </Link>
            </div>
            <div className="flex justify-center">
                <ArrowDown
                    size={48}
                    className="animate-bounce text-primary-200"
                />
            </div>
        </section>
    );
}