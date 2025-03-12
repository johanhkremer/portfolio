import React from 'react'
import ProjectsCard from './projects-card'
import { Separator } from '../ui/separator'

export default function ProjectSection() {
    return (
        <section id="projects" className='min-h-screen p-8'>
            <h3>Projects</h3>
            <div className='py-8'>
                <Separator />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                <ProjectsCard />
                <ProjectsCard />
                <ProjectsCard />
                <ProjectsCard />
                <ProjectsCard />
                <ProjectsCard />
                <ProjectsCard />
                <ProjectsCard />
                <ProjectsCard />
            </div>
        </section>
    )
}
