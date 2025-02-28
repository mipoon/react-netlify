import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Listen on all addresses, equivalent to 0.0.0.0
    port: 5173, // Optional, default is 5173
  },
})
