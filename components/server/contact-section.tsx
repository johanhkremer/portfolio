import React from 'react'
import ContactForm from '../client/contact-form'
import { Separator } from '../ui/separator'

export default function ContactSection() {
    return (
        <section id="contact" className='min-h-screen px-2 py-8 md: p-8'>
            <h3>Contact</h3>
            <div className='py-8'>
                <Separator />
                <div className="pt-8 w-full max-w-md mx-auto">
                    <ContactForm />
                </div>
            </div>
        </section >
    )
}
