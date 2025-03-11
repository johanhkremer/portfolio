import { Box, Card, Inset } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";

export default function ProjectsCard() {
    return (
        <Box maxWidth="300px">
            <Link href="/project/{id}">
                <Card size="2">
                    <Inset clip="padding-box" side="top" pb="current">
                        <Image
                            src="/placeholder.png"
                            alt="project image"
                            width={240}
                            height={140}
                            layout="responsive"
                        />
                    </Inset>
                    <h6 className="font-medium">Project name</h6>
                    <p className="font-light">Project description</p>
                </Card>
            </Link>
        </Box>
    )
}
