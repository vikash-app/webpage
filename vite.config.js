import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// For GitHub Pages project site: https://vikash-app.github.io/webpage/
// Set base to '/webpage/'. If using a custom domain at root, change base to '/'.
export default defineConfig({
  plugins: [react()],
  base: '/webpage/',
});
