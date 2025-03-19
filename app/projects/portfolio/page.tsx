import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default async function ProjectPage() {

    const tags: string[] = ["Next.js", "React", "Tailwind", "Auth.js", "figma"]

    return (
        <>
            <h3>title</h3>
            <div className='py-8'>
                <Separator />
            </div>
            <div className="flex flexrow justify-between pb-8 gap-14">
                <div className="flex flex-col gap-4 max-w-[50vw]">
                    <h5>Description</h5>
                    <Link href="githublink">
                        <p className="text-secondary-200 hover:underline">Project on Github</p>
                    </Link>
                    <p>description</p>
                    <h5>Tools used</h5>
                    <ul className="flex flex-row gap-4">
                        {tags.map(tag => (
                            <li key={tag}><Badge>{tag}</Badge></li>
                        ))}
                    </ul>
                    <div className="flex justify-center pt-4">
                        <Link href="link">
                            <Button variant={"secondary"} className="w-auto">
                                <p>Visit site</p>
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}