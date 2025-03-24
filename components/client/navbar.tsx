'use client'

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from 'next/link'
import HamburgerMenu from '../server/hamburger-menu';

export default function Navbar() {
    const pathname = usePathname();
    const isHomePage = pathname === '/';

    const smoothScroll = (e: React.MouseEvent, targetId: string) => {
        e.preventDefault();

        if (isHomePage) {
            // If the user is already on the homepage, scroll directly
            const target = document.getElementById(targetId);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
                window.history.pushState(null, '', `/#${targetId}`);
            }
        } else {
            // If the user is not on the homepage, add the target to the URL and let
            // useEffect handle the scrolling when we land on the homepage
            window.location.href = `/#${targetId}`;
        }
    };

    useEffect(() => {
        // Check if there is a hash in the URL when the page loads
        const hash = window.location.hash.replace('#', '');
        if (hash && isHomePage) {
            const target = document.getElementById(hash);
            if (target) {
                // Small timeout to ensure the DOM is fully loaded
                setTimeout(() => {
                    target.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }

        const handleIntersection = (entries: IntersectionObserverEntry[]) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
                    const id = entry.target.id;
                    window.history.replaceState(null, '', `/#${id}`);
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, {
            threshold: 0.5,
        });

        const sections = ['projects', 'about', 'contact', 'hero'];
        sections.forEach(id => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, [isHomePage]);

    return (
        <nav className='flex flex-row py-4 justify-between items-center'>
            <Link href="/">
                <Avatar>
                    <AvatarImage src="/profile.png" />
                    <AvatarFallback>JK</AvatarFallback>
                </Avatar>
            </Link>
            <ul className='hidden md:flex flex-row items-center gap-8 text-primary-200'>
                {['projects', 'about', 'contact'].map((section) => (
                    <li key={section}>
                        <Link
                            href={isHomePage ? `#${section}` : `/#${section}`}
                            onClick={(e) => smoothScroll(e, section)}
                            scroll={false}
                        >
                            <h6 className='hover:underline capitalize'>{section}</h6>
                        </Link>
                    </li>
                ))}
            </ul>
            <div className='md:hidden'>
                <HamburgerMenu />
            </div>
        </nav>
    )
}