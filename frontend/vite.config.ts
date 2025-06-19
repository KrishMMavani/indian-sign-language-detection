import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // ✅ THIS LINE IS IMPORTANT for correct asset paths on Vercel
});
