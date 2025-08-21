import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
	plugins: [react()],
	base: '/webpage/', // Set base path for GitHub Pages
	server: {
		open: true,
	},
});
