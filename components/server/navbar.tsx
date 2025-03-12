import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className='flex flex-row py-4 justify-between items-center'>
            <Link href="/">
                <Avatar>
                    <AvatarImage src="/profile.png" />
                    <AvatarFallback>JK</AvatarFallback>
                </Avatar>
            </Link>
            <ul className='flex flex-row items-center gap-8 text-primary-200'>
                <li>
                    <Link href="#projects">
                        <h6 className='hover:underline'>Projects</h6>
                    </Link>
                </li>
                <li>
                    <Link href="#about">
                        <h6 className='hover:underline'>About</h6>
                    </Link>
                </li>
                <li>
                    <Link href="#contact">
                        <h6 className='hover:underline'>Contact</h6>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
