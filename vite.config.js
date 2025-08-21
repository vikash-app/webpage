import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
	plugins: [react()],
	base: '/', // Set base path for custom domain
	server: {
		open: true,
	},
});
