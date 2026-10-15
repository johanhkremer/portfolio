import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'

import { site } from '../content'
import appCss from '../styles.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: `${site.name} – ${site.role}` },
      { name: 'description', content: site.description },
      { name: 'theme-color', content: '#0b0614' },
      { property: 'og:title', content: `${site.name} – ${site.role}` },
      { property: 'og:description', content: site.description },
      { property: 'og:type', content: 'website' },
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv">
      <head>
        <HeadContent />
      </head>
      <body className="grain">
        {children}
        <Scripts />
      </body>
    </html>
  )
}
