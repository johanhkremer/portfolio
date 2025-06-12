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
            <div className="flex flex-col items-center lg:flex-row lg:items-start lg:gap-20">
                <div className='pb-8 pr-4'>
                    <div className="flex flex-col gap-4">
                        <p>I&rsquo;m a junior front-end developer based in Malmö, Sweden. I have a background in education and a lifelong passion for technology. I build user-friendly web applications using TypeScript, React, and Next.js, and I also work with authentication, APIs, and databases using tools like Prisma and PostgreSQL.</p>

                        <p>I have a strong interest in UX design and often use Figma to create clear and functional interfaces, from wireframes to finished components.</p>

                        <p>Before becoming a developer, I worked for over ten years as a teacher, developing courses and helping students grow. I introduced 3D printing into the classroom, and those experiences have shaped how I collaborate, communicate, and approach problem-solving with structure and clarity.</p>

                        <p>I&rsquo;m driven by curiosity, continuous learning, and working with others to find smart and meaningful solutions. Whether it&rsquo;s writing clean code, designing user flows, or improving accessibility, I enjoy making things that work and make sense.</p>
                    </div>
                </div>
                <div className='relative mt-12 pb-8 md:pb-0 min-w-60'>
                    <div className="relative w-60 h-60">
                        <Image
                            src={profilePicture}
                            className="object-contain rounded-md"
                            alt="About me"
                            fill
                            placeholder='blur'
                        />
                    </div>
                    {/* Square with dots */}
                    <div className="w-32 h-32 -z-10 absolute -top-10 -right-14 bg-[radial-gradient(#000_1px,transparent_1px)] bg-[length:20px_20px]"></div>
                    {/* Square with dots */}
                    <div className="w-32 h-32 -z-10 absolute top-40 right-40 bg-[radial-gradient(#000_1px,transparent_1px)] bg-[length:20px_20px]"></div>
                    {/* Topp larger cirkle */}
                    <div className='w-48 h-48 -z-20 absolute -top-8 right-24 bg-primary-100 rounded-full'></div>
                    {/* Bottom smaller circle */}
                    <div className='w-32 h-32 -z-30 absolute top-24 -right-8 bg-secondary-100 rounded-full'></div>
                    {/*Background Cirkle with gradient and extreme blur */}
                    <div className='w-96 h-96 -z-40 absolute -top-20 -right-20 bg-gradient-to-tl from-secondary-100 via-[#f1e1f5] to-primary-100 rounded-full blur-xl opacity-50'></div>
                </div>
            </div>
        </section>
    )
}
