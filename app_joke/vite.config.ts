import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000
  },
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],    },
    
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src')
    }
  }
})