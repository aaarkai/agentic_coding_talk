import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/agentic_coding_talk/',
  plugins: [react(), tailwindcss()],
  server: {
    host: true,
  },
})
