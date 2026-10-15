import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { MotionConfig } from 'motion/react'

import { site } from '../content'
import appCss from '../styles.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: `${site.name} – ${site.role}` },
      { name: 'description', content: site.description },
      { name: 'theme-color', content: '#281c33' },
      { property: 'og:title', content: `${site.name} – ${site.role}` },
      { property: 'og:description', content: site.description },
      { property: 'og:type', content: 'website' },
      { property: 'og:locale', content: 'sv_SE' },
      { property: 'og:url', content: site.url },
      { property: 'og:image', content: `${site.url}/og.jpg` },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      {
        property: 'og:image:alt',
        content: `${site.name}, ${site.role}, med Malmö i skymning i bakgrunden`,
      },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
    links: [
      { rel: 'canonical', href: site.url },
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
        {/* reducedMotion="user" stänger av rörelse (inte toning) när besökaren valt det,
            även i den förrenderade HTML:en där useReducedMotion inte kan veta det */}
        <MotionConfig reducedMotion="user">{children}</MotionConfig>
        <Scripts />
      </body>
    </html>
  )
}
