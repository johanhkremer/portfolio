import Image from "next/image";
import Link from "next/link";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

export default function Footer() {
    return (
        <div className='flex flex-col justify-between items-center py-8 bg-primary-200 text-background-100'>
            <div className='flex flex-row items-center gap-4 pb-4'>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger>
                            <Link
                                href='https://github.com/johanhkremer'
                                target="_blank"
                            >
                                <Image
                                    src='/logos/github-mark-white.svg'
                                    alt='logo'
                                    width={100}
                                    height={100}
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
                                target="_blank"
                            >
                                <Image
                                    src='/logos/inBug-White.png'
                                    alt='logo'
                                    width={100}
                                    height={100}
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
