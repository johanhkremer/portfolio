import { Avatar, Flex } from '@radix-ui/themes'
import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className='flex flex-row py-4 justify-between items-center'>
            <Flex align="center" gap="4">
                <Link href="/">
                    <Avatar
                        size="5"
                        src="/profile.png"
                        fallback="A"
                        radius='full'
                    />
                </Link>
            </Flex>
            <ul className='flex flex-row items-center gap-8 text-primary-200'>
                <li>
                    <h6>Projects</h6>
                </li>
                <li>
                    <h6>About</h6>
                </li>
                <li>
                    <h6>Contact</h6>
                </li>
            </ul>
        </nav>
    )
}
