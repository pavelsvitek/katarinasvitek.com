declare module 'cloudflare:workers' {
  export const env: {
    EMAIL: {
      send(message: {
        to: string | string[]
        bcc?: string | string[]
        from: string
        replyTo?: string
        subject: string
        text?: string
        html?: string
      }): Promise<unknown>
    }
  }
}
