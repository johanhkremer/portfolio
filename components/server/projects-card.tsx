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
import { ArrowRight } from "lucide-react"

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
        <Card className="relative overflow-visible border-[0.5px] border-text-100 rounded-md">
            {inProgress && (
                <div className="absolute top-8 right-12 translate-x-1/2 -translate-y-1/2 bg-background-100 border border-secondary-100 text-secondary-100 rounded-md py-1 px-4 whitespace-nowrap">
                    <p>In progress</p>
                </div>
            )}
            <Link href={link} target={githublink ? "_blank" : undefined}>
                <Image
                    src={image}
                    alt={`Image of project ${title}`}
                    placeholder="blur"
                    blurDataURL={image}
                    width={960}
                    height={560}
                    className="w-full h-auto rounded-t-md"
                />
            </Link>
            <div className="flex flex-col py-4 px-4 gap-4 h-full">
                <CardContent className="flex flex-col gap-2 flex-1">
                    <CardTitle><h4 className="h6">{title}</h4></CardTitle>
                    <CardDescription>
                        <p>{shortDescription}</p>
                    </CardDescription>
                </CardContent>
                <CardFooter>
                    <div className="flex flex-row gap-2">
                        {githublink && <Link
                            href={link}
                            target="_blank">
                            <Button variant={"default"} className="w-auto">
                                Visit Site<ArrowRight />
                            </Button>
                        </Link>}
                        {githublink
                            ? <Link
                                href={githublink}
                                target="_blank">
                                <Button variant={"accent"} className="w-auto">
                                    Visit Github<ArrowRight />
                                </Button>
                            </Link>
                            : <Link href={link}>
                                <Button variant={"default"} className="w-auto">
                                    Visit project<ArrowRight />
                                </Button>
                            </Link>
                        }
                    </div>
                </CardFooter>
            </div>
        </Card>
    )
}
