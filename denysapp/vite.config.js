import react from '@vitejs/plugin-react'
import { ServerRouter } from 'react-router-dom'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  }
})
  

