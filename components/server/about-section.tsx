import React from 'react'
import { Separator } from '../ui/separator'
import Image from 'next/image'
import profilePicture from '@/public/profile-paint.png'

export default function AboutSection() {

    return (
        <section id="about" className="py-8">
            <h3>About Me</h3>
            <div className="py-8">
                <Separator />
            </div>
            <div className="flex flex-col items-center lg:flex-row lg:items-start">
                <div className='pb-8 pr-4'>
                    <div className="flex flex-col gap-4">
                        <p>
                            I&apos;ve loved technology and IT for as long as I can remember. In high school, I was passionate about film studies and web development, and after graduation, I built my first desktop computer. Initially intimidated by the idea of an IT career, I chose teaching humanities and social sciences instead. After ten years in education, including starting a 3D printing course, I realized teaching wasn&apos;t enough—I needed to follow my passion.
                        </p>
                        <p>
                            Today, I&apos;m a junior front-end developer, creating user-friendly web applications with TypeScript, React, and Next.js. I also have backend experience with authentication, databases, and APIs, and a strong interest in UX design using Figma.
                        </p>
                        <p>
                            What I enjoy most is continuous learning, discovering new technologies, and collaborating with others to solve challenges.
                        </p>
                    </div>
                </div>
                <div className='relative mt-16 pb-8 md:pb-0 min-w-60'>
                    <Image
                        src={profilePicture}
                        className="rounded-md w-36 h-36 md:w-48 md:h-48 lg:w-64 lg:h-64 object-contain"
                        alt="About me"
                        width={400}
                        height={400}
                        placeholder='blur'
                    />
                    {/* Square with dots */}
                    <div className="w-32 h-32 -z-10 absolute -top-12 -right-16 bg-[radial-gradient(#000_1px,transparent_1px)] bg-[length:20px_20px]"></div>
                    {/* Square with dots */}
                    <div className="w-32 h-32 -z-10 absolute top-28 right-48 bg-[radial-gradient(#000_1px,transparent_1px)] bg-[length:20px_20px]"></div>
                    {/* Topp larger cirkle */}
                    <div className='w-48 h-48 -z-20 absolute -top-8 right-8 bg-primary-100 rounded-full'></div>
                    {/* Bottom smaller circle */}
                    <div className='w-32 h-32 -z-30 absolute top-24 -right-8 bg-secondary-100 rounded-full'></div>
                    {/*Background Cirkle with gradient and extreme blur */}
                    <div className='w-96 h-96 -z-40 absolute -top-16 -right-20 bg-gradient-to-tl from-secondary-100 via-[#f1e1f5] to-primary-100 rounded-full blur-md opacity-50'></div>
                </div>
            </div>
        </section>
    )
}
