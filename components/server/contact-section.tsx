import { Separator } from '@radix-ui/themes'
import React from 'react'

export default function ContactSection() {
    return (
        <section id="contact" className='min-h-screen p-8'>
            <h3>Contact</h3>
            <div className='py-8'>
                <Separator orientation="horizontal" size="4" />
            </div>
        </section>
    )
}
