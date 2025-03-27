import React from 'react'
import { Separator } from '../ui/separator'
import { Badge } from '../ui/badge'
import Image from 'next/image'
import profilePicture from '@/public/profile-paint.jpeg'

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
        <section id="about" className="px-2 py-8">
            <h3>About</h3>
            <div className="py-8">
                <Separator />
            </div>
            <div className="flex flex-col items-center justify-center lg:flex-row lg:items-start">
                <div className='pb-8 md:pr-8'>
                    <div className="flex flex-col gap-4">
                        <p>
                            Ever since I can remember, I have loved technology and IT. In high school, I was passionate about two subjects: film studies and web development. After receiving my first paycheck upon graduating, I bought a desktop computer and assembled it myself. Many people around me wondered if I should pursue a career in IT, but when I heard terms like “systems scientist,” I imagined math geniuses winning Nobel Prizes, so I hesitated to follow my passion. Instead, I chose to become a teacher and study humanities and social sciences. I spent 10 years teaching in both high schools and adult education, yet I found myself constantly drawn to IT and computers. During my last two years, I even started a 3D printing course at my school. Ultimately, I realized that teaching was not enough—I wanted to fully embrace my passion for computers and IT.
                        </p>
                        <p>
                            Today, I am a junior front-end developer, and I love my new career path. My focus is on developing user-friendly web applications using technologies such as TypeScript, React, and Next.js. I also have experience with back-end solutions, including authentication, database management, and API integrations. Beyond programming, I have a keen interest in UX design and enjoy using tools like Figma to create user-centered interfaces. I combine my technical skills with a understanding of design principles to deliver functional and intuitive solutions.
                        </p>
                        <p>
                            What I enjoy most about being a developer is the continuous personal growth and the excitement of discovering new ways to tackle challenges. I love exploring new frameworks, libraries, and languages, and I find it rewarding to work collaboratively with others to solve problems and drive projects forward.
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
