'use client'

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link'
import Image from 'next/image';

export default function Navbar() {
    const pathname = usePathname();
    const isHomePage = pathname === '/';

    const smoothScroll = (e: React.MouseEvent, targetId: string) => {
        e.preventDefault();

        if (isHomePage) {
            const target = document.getElementById(targetId);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
                window.history.pushState(null, '', `/#${targetId}`);
            }
        } else {
            window.location.href = `/#${targetId}`;
        }
    };

    useEffect(() => {
        const hash = window.location.hash.replace('#', '');
        if (hash && isHomePage) {
            const target = document.getElementById(hash);
            if (target) {
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

        const sections = ['hero', 'myWork', 'about', 'contact'];
        sections.forEach(id => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, [isHomePage]);

    return (
        <nav className={`z-50 ${isHomePage ? 'absolute top-8 left-1/2 transform -translate-x-1/2' : 'relative mt-4 mx-auto'} 
    flex flex-row justify-evenly items-center border border-text-100 rounded-full px-6 py-2 gap-24 bg-white/70 backdrop-blur-md shadow-sm`}>
            <Link href="/" className='flex justify-center items-center rounded-full w-6 h-auto border border-text-100'>
                <p>JK</p>
            </Link>
            <ul className='flex flex-row items-center gap-8 text-text-200'>
                {['myWork', 'about', 'contact'].map((section) => (
                    <li key={section}>
                        <Link
                            href={`/ #${section}`}
                            {...(isHomePage
                                ? {
                                    onClick: (e) => smoothScroll(e, section),
                                    scroll: false,
                                }
                                : {})}
                        >
                            <p className='hover:underline capitalize'>{section}</p>
                        </Link>
                    </li>
                ))}

            </ul>
            <div className='flex flex-row justify-end items-center gap-4'>
                <Link href="https://github.com/johanhkremer" target="_blank">
                    <Image
                        src="/logos/github-black.svg"
                        alt='logo'
                        width={40}
                        height={40}
                        className="w-6 h-6"
                    />
                </Link>
                <Link href={"https://www.linkedin.com/in/johan-kremer/"} target="_blank">
                    <Image
                        src="/logos/linkedin-black.svg"
                        alt='logo'
                        width={40}
                        height={40}
                        className="w-6 h-6"
                    />
                </Link>
            </div>
        </nav>
    )
}