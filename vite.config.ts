import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@assets': '/src/assets',
      '@components': '/src/components',
      '@config': '/src/config',
      '@constants': '/src/constants',
      '@context': '/src/context',
      '@hooks': '/src/hooks',
      '@layouts': '/src/layouts',
      '@pages': '/src/pages',
      '@services': '/src/services',
      '@store': '/src/store',
      '@styles': '/src/styles',
      '@types': '/src/types',
      '@utils': '/src/utils'
    }
  }
})
