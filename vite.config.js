import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://abdullah-majeed.github.io/React-3d-Portfolio/',
  plugins: [react()],
})
