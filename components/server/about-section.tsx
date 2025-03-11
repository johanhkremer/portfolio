import { Separator } from '@radix-ui/themes'
import React from 'react'

export default function AboutSection() {
    return (
        <section id="about" className='min-h-screen p-8'>
            <h3>About</h3>
            <div className='py-8'>
                <Separator orientation="horizontal" size="4" />
            </div>
        </section>
    )
}
