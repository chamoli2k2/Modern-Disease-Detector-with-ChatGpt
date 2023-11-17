import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc'

// Function to get the backend URL or use a default value
const getBackendUrl = () => process.env.VITE_BACKEND_URL

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: getBackendUrl(),
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },

  plugins: [react()],
})
