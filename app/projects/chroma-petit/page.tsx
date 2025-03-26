import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

export default async function ChromaPetitPage() {

    const tags: string[] = ["Next.js", "React", "Typescript", "Git", "Github", "Tailwind", "HTML", "Figma", "Shadcn", "Prisma", "SQL"]

    return (
        <>
            <div className="pb-6">
                <Link href={"/#projects"} className="flex flex-row gap-2 hover:underline">
                    <ArrowLeft className="w-6 h-6" />
                    <p>Back</p>
                </Link>
            </div>
            <h3>ChromaPetit</h3>
            <div className='py-8'>
                <Separator />
            </div>
            <div className="flex flex-col gap-14 items-center w-full pb-6">
                <div className="flex flex-col gap-8 w-full max-w-[600px]">
                    <h5>Tools used</h5>
                    <ul className="flex flex-row flex-wrap gap-4">
                        {tags.map(tag => (
                            <li key={tag}><Badge>{tag}</Badge></li>
                        ))}
                    </ul>
                    <div>
                        <h5>Description</h5>
                        <Link
                            href="https://github.com/johanhkremer/portfolio"
                            target="_blank"
                        >
                            <p className="text-secondary-200 hover:underline">Project on Github</p>
                        </Link>
                    </div>
                    <p>I designed this portfolio to showcase skills I&apos;ve acquired in web development while maintaining a minimalist aesthetic with intentional white space. The project began in Figma with a style guide, which streamlined design decisions and ensured visual consistency throughout the development process.</p>
                    <figure>
                        <Image
                            src="/projects/portfolio/portfolio-1.png"
                            alt="portfolio"
                            width={600}
                            height={500}
                            className="outline outline-[0.5px] outline-text-100 rounded-md"
                        />
                        <figcaption className="font-light text-text-100">Styleguide in Figma</figcaption>
                    </figure>
                </div>
            </div>
            <div className="pb-6">
                <Link href={"/#projects"} className="flex flex-row gap-2 hover:underline">
                    <ArrowLeft className="w-6 h-6" />
                    <p>Back</p>
                </Link>
            </div>
        </>
    )
}