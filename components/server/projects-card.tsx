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
            <CardContent>
                <Image
                    src={image}
                    alt="project image"
                    width={240}
                    height={140}
                    layout="responsive"
                    className="outline outline-[0.5px] outline-text-100"
                />
            </CardContent>
            <CardFooter>
                <CardTitle><h6>{title}</h6></CardTitle>
                <CardDescription><p>{shortDescription}</p></CardDescription>
                <div className="flex flex-row justify-end gap-2 pt-2">
                    <Link href={githublink}>
                        <Button variant={"default"} className="w-auto">
                            Visit Github
                        </Button>
                    </Link>
                    <Link href={link}>
                        <Button variant={"secondary"} className="w-auto">
                            Visit Site
                        </Button>
                    </Link>
                </div>
            </CardFooter>
        </Card>
    )
}
