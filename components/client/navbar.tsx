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

        const sections = ['hero', 'my Work', 'about', 'contact'];
        sections.forEach(id => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, [isHomePage]);

    return (
        <nav className={`z-50 ${isHomePage ? 'absolute top-8 left-1/2 transform -translate-x-1/2' : 'relative mt-4 mx-auto'} 
    flex flex-row justify-between items-center border border-text-100 rounded-full py-2 px-4 gap-6 md:gap-16 bg-white/70 backdrop-blur-md shadow-sm`}>
            <div className='min-w-[40px]'>
                <Link href="/" className="flex justify-center items-center rounded-full w-6 h-6 border border-text-100">
                    <span className="text-[0.5rem] md:text-xs leading-none">JK</span>
                </Link>
            </div>
            <ul className='flex flex-row gap-4 md:gap-6 lg:gap-8 xl:gap-10 flex-grow text-center text-text-200'>
                {['my Work', 'about', 'contact'].map((section) => (
                    <li key={section}>
                        <Link
                            href={`/#${section}`}
                            {...(isHomePage
                                ? {
                                    onClick: (e) => smoothScroll(e, section),
                                    scroll: false,
                                }
                                : {})}
                        >
                            <p className='hover:underline capitalize text-xs sm:text-base whitespace-nowrap'>{section}</p>
                        </Link>
                    </li>
                ))}

            </ul>
            <div className='min-w-[40px] flex justify-end gap-4'>
                <Link href="https://github.com/johanhkremer" target="_blank">
                    <div className="relative w-6 h-6">
                        <Image
                            src="/logos/github-black.svg"
                            alt="GitHub logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                </Link>
                <Link href={"https://www.linkedin.com/in/johan-kremer/"} target="_blank">
                    <div className="relative w-6 h-6">
                        <Image
                            src="/logos/linkedin-black.svg"
                            alt="LinkedIn logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                </Link>
            </div>
        </nav>
    )
}