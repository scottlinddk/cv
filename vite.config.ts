import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

// Set VITE_BASE (e.g. "/cv/") when hosting under a sub-path such as GitHub Pages.
export default defineConfig({
  base: process.env.VITE_BASE ?? '/',
  plugins: [react()],
  test: {
    environment: 'node',
    include: ['src/**/*.test.ts'],
  },
});
