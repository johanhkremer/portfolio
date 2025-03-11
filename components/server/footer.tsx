import { Tooltip } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <div className='flex flex-col justify-between items-center py-8 bg-primary-200 text-background-100'>
            <div className='flex flex-row items-center gap-4 pb-4'>
                <Tooltip content="Visit my Github profile">
                    <Link href='https://github.com/johanhkremer'>
                        <Image
                            src='/logos/github-mark-white.svg'
                            alt='logo'
                            width={100}
                            height={100}
                            className="w-10 h-auto"
                        />
                    </Link>
                </Tooltip>
                <Tooltip content="Visit my LinkedIn profile">
                    <Link href='https://www.linkedin.com/in/johan-kremer/'>
                        <Image
                            src='/logos/inBug-White.png'
                            alt='logo'
                            width={100}
                            height={100}
                            className="w-10 h-auto"
                        />
                    </Link>
                </Tooltip>
            </div>
            <p>© 2025 Johan Kremer</p>
        </div>
    )
}
