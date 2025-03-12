import Image from "next/image"
import Link from "next/link"
import projects from "../../../projects/projects.json"
import { Separator } from "@/components/ui/separator"

interface ProjectPageProps {
    params: {
        id: string
    }
}

export default function ProjectPage({ params }: ProjectPageProps) {

    const projectId = params.id
    const project = projects.find(project => project.id === projectId)

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
            <div className="flex flexrow">
                <div className="flex flex-col">
                    <h5>Description</h5>
                    <Link href={githublink}>
                        <p className="text-secondary-200">Project on Github</p>
                    </Link>
                    <p>{description}</p>
                    <h5>Tools used</h5>
                    <ul>
                        {tags.map(tag => (
                            <li key={tag}>{tag}</li>
                        ))}
                    </ul>
                    <button className="button-secondary">
                        <Link href={link}>
                            <p>Visit site</p>
                        </Link>
                    </button>
                </div>
                <div className="flex flex-col">
                    {images.map(image => (
                        <Image key={image} src={image} alt={title} width={200} height={200} />
                    ))}
                </div>
            </div>
        </>
    )
}