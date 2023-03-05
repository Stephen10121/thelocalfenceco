import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		port: 7401,
		strictPort: false
	},
		preview: {
		port: 7401,
		strictPort: false
	}
});
