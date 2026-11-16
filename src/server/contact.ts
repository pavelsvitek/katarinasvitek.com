import { createServerFn } from '@tanstack/react-start'
import { env } from 'cloudflare:workers'

const TO = 'svitek.katarina@gmail.com'
const BCC = 'svitek.pavel+katarina@gmail.com'
const FROM = 'Website contact form <noreply@katarinasvitek.com>'

export type ContactInput = {
  name: string
  email: string
  interest: 'personal' | 'business'
  company: string
  goal: string
  /** Honeypot: real visitors never fill this in. */
  website: string
}

const clean = (value: unknown, max: number) =>
  String(value ?? '')
    .replace(/\r/g, '')
    .trim()
    .slice(0, max)

const escapeHtml = (text: string) =>
  text.replace(/[&<>"']/g, (c) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!,
  )

export const sendContact = createServerFn({ method: 'POST' })
  .validator((input: ContactInput) => ({
    name: clean(input.name, 120),
    email: clean(input.email, 200),
    interest: input.interest === 'business' ? 'business' : 'personal',
    company: clean(input.company, 200),
    goal: clean(input.goal, 4000),
    website: clean(input.website, 200),
  }))
  .handler(async ({ data }) => {
    // Bots fill the hidden field. Pretend success and drop the message.
    if (data.website) return { ok: true as const }

    if (!data.name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      return { ok: false as const, error: 'Please enter your name and a valid email.' }
    }

    const label = data.interest === 'business' ? 'Business GTM' : 'Personal GTM'
    const lines = [
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Interested in: ${label}`,
      `Company or role: ${data.company || '-'}`,
      '',
      data.goal || '(no message)',
    ]

    try {
      await env.EMAIL.send({
        to: TO,
        bcc: BCC,
        from: FROM,
        replyTo: data.email,
        subject: `[${label}] New enquiry from ${data.name}`,
        text: lines.join('\n'),
        html: `<div style="font-family:system-ui,sans-serif;line-height:1.5">${lines
          .map((l) => (l ? `<div>${escapeHtml(l)}</div>` : '<br>'))
          .join('')}</div>`,
      })
      return { ok: true as const }
    } catch (error) {
      console.error('Contact email failed', error)
      return {
        ok: false as const,
        error: 'Could not send your message. Please email me directly instead.',
      }
    }
  })
