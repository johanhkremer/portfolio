import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

export default async function ProjectPage() {

    const tags: string[] = ["Next.js", "React", "Typescript", "Git", "Github", "Tailwind", "HTML", "Figma", "Shadcn", "Auth.js"]

    return (
        <>
            <div className="pb-6">
                <Link href={"/#projects"} className="flex flex-row gap-2 hover:underline">
                    <ArrowLeft className="w-6 h-6" />
                    <p>Back</p>
                </Link>
            </div>
            <h3>Kitchen Quick</h3>
            <div className='py-8'>
                <Separator />
            </div>
            <div className="flex flex-col justify-between pb-14 gap-14">
                <div className="flex flex-col gap-6 ">
                    <ul className="flex flex-row gap-4">
                        {tags.map(tag => (
                            <li key={tag}><Badge>{tag}</Badge></li>
                        ))}
                    </ul>
                    <h5>Description</h5>
                    <p>
                        This project was developed during my internship at Omegapoint in collaboration with another frontend developer and four Java backend developers. The backend team implemented the service using Spring Boot, WebFlux, and a SQL database. We initiated the process by creating a style guide to standardize design decisions and maintain visual consistency.
                    </p>

                    <figure>
                        <Image
                            src="/projects/kitchen-quick/kitchen-quick-1.png"
                            alt="Design system documentation"
                            width={600}
                            height={500}
                            className="outline outline-[0.5px] outline-text-100"
                        />
                        <figcaption className="font-light text-text-100">Style guide documentation in Figma</figcaption>
                    </figure>

                    <p>
                        The design phase included creating detailed user flows to establish clear navigation paths and interaction patterns. This foundational work helped define feature requirements and system architecture.
                    </p>

                    <figure>
                        <Image
                            src="/projects/kitchen-quick/kitchen-quick-2.png"
                            alt="User journey mapping"
                            width={600}
                            height={500}
                            className="outline outline-[0.5px] outline-text-100"
                        />
                        <figcaption className="font-light text-text-100">User flow diagram in Figma</figcaption>
                    </figure>

                    <p>
                        Low-fidelity wireframes were developed to explore layout variations and responsive behaviors. The mobile-first approach ensured device compatibility from initial concept stages.
                    </p>

                    <figure>
                        <Image
                            src="/projects/kitchen-quick/kitchen-quick-3.png"
                            alt="Layout prototypes"
                            width={600}
                            height={500}
                            className="outline outline-[0.5px] outline-text-100"
                        />
                        <figcaption className="font-light text-text-100">Responsive wireframe concepts</figcaption>
                    </figure>

                    <p>
                        High-fidelity mockups were produced for client review, enabling iterative feedback before development. The final prototypes included interactive elements to demonstrate user journeys.
                    </p>

                    <figure>
                        <Image
                            src="/projects/kitchen-quick/kitchen-quick-6.png"
                            alt="Final interface design"
                            width={600}
                            height={500}
                            className="outline outline-[0.5px] outline-text-100"
                        />
                        <figcaption className="font-light text-text-100">High-fidelity interface prototype</figcaption>
                    </figure>

                    <p>
                        The technical implementation utilized Next.js with TypeScript for frontend development, integrated with Auth.js for authentication. Tailwind CSS and shadcn/ui components ensured design system adherence. Git and GitHub facilitated version control and collaborative development.
                    </p>

                    <figure className="flex flex-col gap-4">
                        <Image
                            src="/projects/kitchen-quick/kitchen-quick-7.png"
                            alt="Application interface overview"
                            width={600}
                            height={500}
                            className="outline outline-[0.5px] outline-text-100"
                        />
                        <Image
                            src="/projects/kitchen-quick/kitchen-quick-9.png"
                            alt="Mobile view demonstration"
                            width={600}
                            height={500}
                            className="outline outline-[0.5px] outline-text-100"
                        />
                        <Image
                            src="/projects/kitchen-quick/kitchen-quick-10.png"
                            alt="User interaction flow"
                            width={600}
                            height={500}
                            className="outline outline-[0.5px] outline-text-100"
                        />
                        <Image
                            src="/projects/kitchen-quick/kitchen-quick-11.png"
                            alt="Data visualization components"
                            width={600}
                            height={500}
                            className="outline outline-[0.5px] outline-text-100"
                        />
                        <figcaption className="font-light text-text-100">Key application interfaces</figcaption>
                    </figure>
                </div>
                <Link href={"/#projects"} className="flex flex-row gap-2 hover:underline">
                    <ArrowLeft className="w-6 h-6" />
                    <p>Back</p>
                </Link>
            </div>

        </>
    )
}