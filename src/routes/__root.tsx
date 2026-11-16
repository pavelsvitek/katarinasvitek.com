import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'

import appCss from '../styles.css?url'

const SITE_URL = 'https://katarinasvitek.com'
const TITLE = 'Katarina Svitek — GTM Engineering in the age of AI'
const DESCRIPTION =
  'Freelance marketer for teams that need growth with numbers attached. I frame the launch, run the funnel and build the AI agents that make it faster.'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: TITLE },
      { name: 'description', content: DESCRIPTION },
      { name: 'theme-color', content: '#151b1c' },
      { name: 'color-scheme', content: 'dark' },

      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'Katarina Svitek' },
      { property: 'og:title', content: TITLE },
      { property: 'og:description', content: DESCRIPTION },
      { property: 'og:url', content: SITE_URL },
      { property: 'og:image', content: `${SITE_URL}/og-image.jpg?v=2` },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:image:alt', content: 'Katarina Svitek, freelance GTM marketer' },

      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: TITLE },
      { name: 'twitter:description', content: DESCRIPTION },
      { name: 'twitter:image', content: `${SITE_URL}/og-image.jpg?v=2` },
    ],
    links: [
      { rel: 'canonical', href: SITE_URL },
      { rel: 'icon', href: '/favicon.ico', sizes: '48x48' },
      { rel: 'icon', href: '/favicon-32.png', type: 'image/png', sizes: '32x32' },
      { rel: 'icon', href: '/favicon-192.png', type: 'image/png', sizes: '192x192' },
      { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossOrigin: 'anonymous',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Outfit:wght@400;500;600;700&display=swap',
      },
      { rel: 'stylesheet', href: appCss },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
