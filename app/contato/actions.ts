"use server"

export type ContactState = {
  success: boolean
  error?: string
} | null

export async function sendMessage(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  const name    = formData.get("name")?.toString().trim()
  const email   = formData.get("email")?.toString().trim()
  const message = formData.get("message")?.toString().trim()

  if (!name || !email || !message) {
    return { success: false, error: "Preencha todos os campos." }
  }

  // TODO: integrar serviço de e-mail — exemplo com Resend:
  // import { Resend } from "resend"
  // const resend = new Resend(process.env.RESEND_API_KEY)
  // await resend.emails.send({
  //   from: "portfolio@gabrielwalendolf.is-a.dev",
  //   to:   "gabriel.g.walendolf@gmail.com",
  //   subject: `[Portfólio] Mensagem de ${name}`,
  //   text: `De: ${name} <${email}>\n\n${message}`,
  // })

  return { success: true }
}
