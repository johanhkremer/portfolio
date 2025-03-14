import Image from "next/image"
import Link from "next/link"
import projects from "../../../projects/projects.json"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface ProjectPageProps {
    params: {
        id: string
    }
}

export default async function ProjectPage({ params }: ProjectPageProps) {

    const { id } = await params
    const project = projects.find(project => project.id === id)

    if (!project) {
        return <div>Project not found</div>
    }

    const { title, description, images, tags, link, githublink } = project

    return (
        <>
            <h3>{title}</h3>
            <div className='py-8'>
                <Separator />
            </div>
            <div className="flex flexrow justify-between pb-8 gap-14">
                <div className="flex flex-col gap-4 max-w-[50vw]">
                    <h5>Description</h5>
                    <Link href={githublink}>
                        <p className="text-secondary-200">Project on Github</p>
                    </Link>
                    <p>{description}</p>
                    <h5>Tools used</h5>
                    <ul className="flex flex-row gap-4">
                        {tags.map(tag => (
                            <li key={tag}><Badge>{tag}</Badge></li>
                        ))}
                    </ul>
                    <Link href={link}>
                        <Button variant={"secondary"} className="w-auto">
                            <p>Visit site</p>
                        </Button>
                    </Link>
                </div>
                <div className="flex flex-col gap-4">
                    {images.map(image => (
                        <Image key={image} src={image} alt={title} width={200} height={200} />
                    ))}
                </div>
            </div>
        </>
    )
}