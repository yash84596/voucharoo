import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react']
  },
  server: {
    host: true, // allows external access (e.g., ngrok)
    port: 5173, // change if needed
    allowedHosts: ['.ngrok-free.app'] // allow all ngrok subdomains
  }
});