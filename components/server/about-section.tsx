import React from 'react'
import { Separator } from '../ui/separator'
import { Badge } from '../ui/badge'
import Image from 'next/image'
import profilePicture from '@/public/profile-large.jpg'

export default function AboutSection() {
    const skills = [
        'Next.js',
        'React',
        'JavaScript',
        'TypeScript',
        'HTML',
        'CSS',
        'Tailwind',
        'Figma',
        'UX',
        'Prisma',
        'Node.js',
        'Express',
        'SQL',
        'NoSQL',
        'Scrum',
        'Agile',
    ]

    return (
        <section id="about" className="min-h-screen px-2 py-8 md:p-8">
            <h3>About</h3>
            <div className="py-8">
                <Separator />
            </div>
            <div className="flex flex-col items-center justify-center lg:flex-row lg:items-start">
                <div className='pb-8 md:pr-8'>
                    <div className="flex flex-col gap-4">
                        <p>
                            I am a junior front-end developer with a background in teaching. My focus is on developing user-friendly web applications using modern technologies such as TypeScript, React, and Next.js. I also have experience working with back-end solutions, including authentication, database management, and API integrations.
                        </p>
                        <p>
                            In addition to coding, I have a strong interest in UX design and enjoy working with tools like Figma to create user-centered interfaces. I combine my technical skills with an understanding of design principles to deliver functional and intuitive solutions.
                        </p>
                        <p>
                            I am particularly interested in exploring new technologies and methodologies in web development and strive to build efficient and sustainable solutions. My GitHub features projects that showcase my ability to work with both front-end and back-end technologies, as well as my commitment to continuous learning and growth in the field.
                        </p>
                    </div>
                    <h4 className='h5 py-4'>Skills</h4>
                    <ul className="flex flex-wrap gap-4">
                        {skills.map((skill) => (
                            <li key={skill}>
                                <Badge>{skill}</Badge>
                            </li>
                        ))}
                    </ul>
                </div>
                <Image
                    src={profilePicture}
                    className="w-[400px] md:w-[350px] lg:w-[400px] h-auto rounded-md object-cover"
                    alt="About me"
                    sizes='(max-width: 768px) 300px, 250px, 400px'
                    placeholder='blur'
                />
            </div>
        </section>
    )
}
