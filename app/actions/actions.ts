"use server"

import { z } from "zod"
import { Resend } from "resend"

const formSchema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    message: z.string().min(10),
})

export async function sendContactEmail(formData: z.infer<typeof formSchema>) {
    // Validate the form data
    const validatedFields = formSchema.safeParse(formData)

    if (!validatedFields.success) {
        throw new Error("Invalid form data")
    }

    const { name, email, message } = validatedFields.data

    try {
        // Initialize Resend (you'll need to add RESEND_API_KEY to your environment variables)
        const resend = new Resend(process.env.RESEND_API_KEY)

        // Send the email
        await resend.emails.send({
            from: "Contact Form from portfolio <onboarding@resend.dev>",
            to: "johan.h.kremer@gmail.com",
            subject: `New contact form submission from ${name}`,
            text: `
Name: ${name}
Email: ${email}

Message:
${message}
      `,
            replyTo: email,
        })

        return { success: true }
    } catch (error) {
        console.error("Failed to send email:", error)
        throw new Error("Failed to send email")
    }
}

