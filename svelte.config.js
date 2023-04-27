import adapter from '@sveltejs/adapter-vercel'
import svpp from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			edge: false
		}),
		files: {
			lib: "src/lib",
			assets: "src/assets"
		}
	},

	preprocess: svpp()
};

export default config;
