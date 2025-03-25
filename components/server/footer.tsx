import Image from "next/image";
import Link from "next/link";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import linkedIn from "@/public/logos/InBug-White.png"
import gitHub from "@/public/logos/github-mark-white.png"

export default function Footer() {
    return (
        <div className='flex flex-col justify-between items-center py-8 bg-primary-200 text-background-100'>
            <div className='flex flex-row items-center gap-4 pb-4'>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger>
                            <Link
                                href='https://github.com/johanhkremer'
                                aria-label="Visit my Github profile"
                                target="_blank"
                            >
                                <Image
                                    src={gitHub}
                                    alt='logo'
                                    width={40}
                                    height={40}
                                    placeholder="blur"
                                    className="w-10 h-auto"
                                />
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Visit my Github profile</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>

                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger>
                            <Link
                                href='https://www.linkedin.com/in/johan-kremer/'
                                aria-label="Visit my LinkedIn profile"
                                target="_blank"
                            >
                                <Image
                                    src={linkedIn}
                                    alt='logo'
                                    width={40}
                                    height={40}
                                    placeholder="blur"
                                    className="w-10 h-auto"
                                />
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Visit my LinkedIn profile</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div>
            <p>© 2025 Johan Kremer</p>
        </div>
    )
}
