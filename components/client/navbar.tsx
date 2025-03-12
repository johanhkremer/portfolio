'use client'

import { useEffect } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from 'next/link'

export default function Navbar() {
    // Scroll-hanterare
    const smoothScroll = (e: React.MouseEvent, targetId: string) => {
        e.preventDefault();
        const target = document.getElementById(targetId);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
            window.history.pushState(null, '', `/#${targetId}`);
        }
    };

    useEffect(() => {
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
    }, []);

    return (
        <nav className='flex flex-row py-4 justify-between items-center'>
            <Link href="/">
                <Avatar>
                    <AvatarImage src="/profile.png" />
                    <AvatarFallback>JK</AvatarFallback>
                </Avatar>
            </Link>
            <ul className='flex flex-row items-center gap-8 text-primary-200'>
                {['projects', 'about', 'contact'].map((section) => (
                    <li key={section}>
                        <Link
                            href={`#${section}`}
                            onClick={(e) => smoothScroll(e, section)}
                            scroll={false}
                        >
                            <h6 className='hover:underline capitalize'>{section}</h6>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}