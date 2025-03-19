import Image from "next/image";
import Link from "next/link";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "../ui/button";

interface ProjectsCardProps {
    id: string
    title: string
    image: string
    link: string
    githublink: string
    shortDescription: string
}

export default function ProjectsCard({
    title,
    image,
    link,
    githublink,
    shortDescription,
}: ProjectsCardProps) {
    return (
        <Card>
            <Image
                src={image}
                alt="project image"
                width={240}
                height={140}
                layout="responsive"
                className="outline outline-[0.5px] outline-text-100"
            />
            <div className="flex flex-col py-4 px-4 gap-4 h-full">
                <CardContent className="flex flex-col gap-2 flex-1">
                    <CardTitle><h6>{title}</h6></CardTitle>
                    <CardDescription><p>{shortDescription}</p></CardDescription>
                </CardContent>
                <CardFooter>
                    <div className="flex flex-row justify-end gap-2 pt-2">
                        {githublink
                            ? <Link
                                href={githublink}
                                target="_blank">
                                <Button variant={"default"} className="w-auto">
                                    Visit Github
                                </Button>
                            </Link>
                            : <Link href={link}>
                                <Button variant={"secondary"} className="w-auto">
                                    Visit project page
                                </Button>
                            </Link>
                        }
                        {githublink && <Link
                            href={link}
                            target="_blank">
                            <Button variant={"secondary"} className="w-auto">
                                Visit Site
                            </Button>
                        </Link>}
                    </div>
                </CardFooter>
            </div>
        </Card>
    )
}
