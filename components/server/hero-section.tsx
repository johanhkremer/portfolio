import { ArrowDown } from 'lucide-react'

export default function HeroSection() {
    return (
        <section className="flex flex-col justify-between h-[calc(100vh-8rem)]">
            <div className="p-14">
                <h1>Johan Kremer</h1>
                <h4>Front End Developer</h4>
                <h5 className="text-secondary-200 hover:underline">Projects</h5>
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