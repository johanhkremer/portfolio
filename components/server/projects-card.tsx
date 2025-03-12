import Image from "next/image";
import Link from "next/link";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardTitle,
} from "@/components/ui/card"

export default function ProjectsCard() {
    return (
        <Link href="/project/{id}">
            <Card>
                <CardContent>
                    <Image
                        src="/placeholder.png"
                        alt="project image"
                        width={240}
                        height={140}
                        layout="responsive"
                        className="rounded-lg"
                    />
                </CardContent>
                <CardFooter>
                    <CardTitle><h6>Card Title</h6></CardTitle>
                    <CardDescription><p>Card Description</p></CardDescription>
                </CardFooter>
            </Card>
        </Link>
    )
}
