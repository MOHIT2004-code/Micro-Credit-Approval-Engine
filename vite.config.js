import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// In development the UI runs on :5173 and proxies /api to the Express server,
// so the browser sees one origin (no CORS setup needed, and EventSource just works).
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: { '/api': { target: 'http://localhost:5000', changeOrigin: true } },
  },
});
