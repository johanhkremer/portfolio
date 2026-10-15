import { createServerFn } from '@tanstack/react-start'
import { Resend } from 'resend'
import { z } from 'zod'

export const contactSchema = z.object({
  name: z.string().trim().min(2, 'Skriv ditt namn'),
  email: z.email('Ange en giltig e-postadress'),
  message: z.string().trim().min(10, 'Meddelandet behöver vara minst 10 tecken'),
  // Honeypot: ett dolt fält som bara bottar fyller i
  company: z.string().optional(),
})

export type ContactInput = z.infer<typeof contactSchema>

export const sendContactEmail = createServerFn({ method: 'POST' })
  .validator(contactSchema)
  .handler(async ({ data }) => {
    // Låtsas att det gick bra för bottar, men skicka inget
    if (data.company) {
      return { ok: true }
    }

    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      throw new Error('RESEND_API_KEY saknas')
    }

    const resend = new Resend(apiKey)
    const { error } = await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: process.env.CONTACT_TO_EMAIL ?? 'johan.h.kremer@gmail.com',
      replyTo: data.email,
      subject: `Nytt meddelande från ${data.name}`,
      text: `Namn: ${data.name}\nE-post: ${data.email}\n\n${data.message}`,
    })

    if (error) {
      console.error('Resend error:', error)
      throw new Error('Kunde inte skicka meddelandet')
    }

    return { ok: true }
  })
