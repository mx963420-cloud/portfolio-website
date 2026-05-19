import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/portfolio-website/',
  build: {
    outDir: 'docs'
  },
  plugins: [react()],
  server: {
    allowedHosts: [
      'localhost',
      '127.0.0.1',
      '*.trycloudflare.com'
    ]
  }
})
