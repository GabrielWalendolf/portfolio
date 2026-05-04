"use server"

import { z } from "zod"
import { Resend } from "resend"

export type ContactState = {
  success: boolean
  error?: string
} | null

const schema = z.object({
  name:    z.string().min(2, "Nome muito curto.").max(100),
  email:   z.string().email("E-mail inválido."),
  message: z.string().min(10, "Mensagem muito curta (mínimo 10 caracteres).").max(2000),
})

export async function sendMessage(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  const result = schema.safeParse({
    name:    formData.get("name"),
    email:   formData.get("email"),
    message: formData.get("message"),
  })

  if (!result.success) {
    return { success: false, error: result.error.issues[0].message }
  }

  const { name, email, message } = result.data

  if (!process.env.RESEND_API_KEY) {
    return { success: false, error: "Serviço de mensagens temporariamente indisponível." }
  }

  const resend = new Resend(process.env.RESEND_API_KEY)

  const { error } = await resend.emails.send({
    from:    "portfolio@gabrielwalendolf.is-a.dev",
    to:      "gabriel.g.walendolf@gmail.com",
    subject: `[Portfólio] Mensagem de ${name}`,
    text:    `De: ${name} <${email}>\n\n${message}`,
  })

  if (error) {
    return { success: false, error: "Falha ao enviar mensagem. Tente novamente mais tarde." }
  }

  return { success: true }
}
