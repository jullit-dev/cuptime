import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/cuptime',
  root: './src',
  publicDir: '../public',
  build: {
    outDir: '../dist',
  },
  plugins: [react()],
})
