import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

export default async function ChromaPetitPage() {

    const tags: string[] = ["Next.js", "React", "Typescript", "Git", "Github", "Tailwind", "HTML", "Figma", "Shadcn", "Prisma", "SQL"]

    return (
        <>
            <div className="py-6">
                <Link href={"/#mywork"} className="flex flex-row gap-2 hover:underline">
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

                    <div>
                        <h5>Description</h5>
                        <Link
                            href="https://github.com/johanhkremer/chromapetit"
                            target="_blank"
                        >
                            <p className="text-secondary-200 hover:underline">Project on Github</p>
                        </Link>
                    </div>
                    <p>I developed this project as my final thesis during my Front End Developer program at Medieinstitutet. My goal was to incorporate as many of the skills we had learned throughout the course as possible.</p>

                    <p>The project addresses a common challenge faced by miniature painting enthusiasts. Typically, painters use colors from various manufacturers—each with its own unique naming conventions—instead of standardized color values like HEX or RGB. I aimed to create a web application that allows users to quickly and easily compare colors across different brands. While similar services already exist, I found them either too simplistic or overly complicated, and the more advanced options are often locked behind paywalls.</p>

                    <p>Throughout the project, I encountered several challenges. It was my first time developing a project that combined a frontend with user authentication and a backend with an integrated database. One of the toughest hurdles was sourcing high-quality data for the colors. To speed up the process, I employed AI to generate color data for my database. Although the results were varied and mostly rough estimates, I ultimately determined that they were sufficiently accurate for practical use.</p>

                    <p>I previously hosted the project on Vercel but decided to take it down temporarily. This was due to the fact that my database was hosted on Railway, and I have since resolved that I want the entire project—including the database—to be hosted on Vercel. Additionally, I plan to refine the project&apos;s styling as I have significantly improved my skills with shadcn and Tailwind.</p>
                    <figure>
                        <Image
                            src="/projects/chroma-petit.png"
                            alt="portfolio"
                            width={600}
                            height={500}
                            className="outline outline-[0.5px] outline-text-100 rounded-md"
                        />
                        <figcaption className="font-light text-text-100">Paint table in ChromaPetit</figcaption>
                    </figure>
                    <h5>Tools used</h5>
                    <ul className="flex flex-row flex-wrap gap-4">
                        {tags.map(tag => (
                            <li key={tag}><Badge>{tag}</Badge></li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="pb-6">
                <Link href={"/#mywork"} className="flex flex-row gap-2 hover:underline">
                    <ArrowLeft className="w-6 h-6" />
                    <p>Back</p>
                </Link>
            </div>
        </>
    )
}