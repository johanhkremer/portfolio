import React from 'react'
import ProjectsCard from './projects-card'
import { Separator } from '../ui/separator'
import projects from '../../projects/projects.json'

export default function ProjectSection() {

    const sortedProjects = [...projects].sort((a, b) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    return (
        <section id="projects" className='px-2 py-8'>
            <h3>Projects</h3>
            <div className='py-8'>
                <Separator />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8'>
                {sortedProjects.map(project => (
                    <ProjectsCard
                        key={project.id}
                        id={project.id}
                        date={project.date}
                        inProgress={project.inProgress}
                        title={project.title}
                        image={project.image}
                        link={project.link}
                        githublink={project.githublink}
                        shortDescription={project.shortDescription}
                    />
                ))}
            </div>
        </section>
    )
}
