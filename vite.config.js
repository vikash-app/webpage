import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve, dirname } from 'path';
import { copyFileSync } from 'fs';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Copies index.html to 404.html after build so GitHub Pages
// serves the SPA for all routes instead of a static 404 page.
function copyIndexTo404() {
	return {
		name: 'copy-index-to-404',
		closeBundle() {
			const outDir = resolve(__dirname, 'dist');
			copyFileSync(resolve(outDir, 'index.html'), resolve(outDir, '404.html'));
		},
	};
}

export default defineConfig({
	plugins: [react(), copyIndexTo404()],
	base: '/', // Set base path for custom domain
	server: {
		open: true,
	},
});
