import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'

const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'dist')

// https://vitejs.dev/config/
export default defineConfig({
  root,
  plugins: [react()],
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about', 'index.html'),
        project1: resolve(__dirname, 'project1', 'index.html'),
        project2: resolve(__dirname, 'project2', 'index.html'),
        project3: resolve(__dirname, 'project3', 'index.html'),
      }
    }
  }
})
