import { defineConfig } from 'vite'

import { tanstackStart } from '@tanstack/react-start/plugin/vite'

import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { nitro } from 'nitro/vite'

const config = defineConfig({
  resolve: { tsconfigPaths: true },
  plugins: [
    nitro(),
    tailwindcss(),
    // Sidorna förrenderas till statisk HTML vid bygget. Kontaktformulärets
    // server function körs fortfarande som en serverless-funktion.
    tanstackStart({
      prerender: { enabled: true, crawlLinks: true },
    }),
    viteReact(),
  ],
})

export default config
