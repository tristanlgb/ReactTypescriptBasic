import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: parseInt(process.env.PORT) || 5173, // Use the environment-provided PORT or fallback to 5173
    host: '0.0.0.0', // Listen on all network interfaces
  },
})
