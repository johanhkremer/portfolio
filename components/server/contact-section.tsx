import React from 'react'
import ContactForm from '../client/contact-form'
import { Separator } from '../ui/separator'

export default function ContactSection() {
    return (
        <section id="contact" className='min-h-screen p-8'>
            <h3>Contact</h3>
            <div className='py-8'>
                <Separator />
                <div className='pt-8 max-w-[30vw] mx-auto'>
                    <ContactForm />
                </div>
            </div>
        </section >
    )
}
