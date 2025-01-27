import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: parseInt(process.env.PORT || "5173"), // Asegura que siempre se pase un string

    host: '0.0.0.0', // Listen on all network interfaces
  },
})
