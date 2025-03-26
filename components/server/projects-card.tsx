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
    date: string
    inProgress: boolean
    title: string
    image: string
    link: string
    githublink: string
    shortDescription: string
}

export default function ProjectsCard({
    inProgress,
    title,
    image,
    link,
    githublink,
    shortDescription,
}: ProjectsCardProps) {
    return (
        <Card className="relative overflow-visible">
            {inProgress && (
                <div className="absolute top-8 right-12 translate-x-1/2 -translate-y-1/2 bg-background-100 border border-secondary-200 text-secondary-200 rounded-md py-1 px-4 whitespace-nowrap">
                    <p>In progress</p>
                </div>
            )}
            <Image
                src={image}
                alt={`Image of project ${title}`}
                placeholder="blur"
                blurDataURL={image}
                width={240}
                height={140}
                layout="responsive"
                className="outline outline-[0.5px] outline-text-100"
            />
            <div className="flex flex-col py-4 px-4 gap-4 h-full">
                <CardContent className="flex flex-col gap-2 flex-1">
                    <CardTitle><h4 className="h6">{title}</h4></CardTitle>
                    <CardDescription>
                        <p>{shortDescription}</p>
                    </CardDescription>
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
                                <Button variant={"default"} className="w-auto">
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
