// vite.config.js
/// <reference types="vite/client" />

import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "")

	let proxy;
	if(mode !== "production") {
		proxy = {
			"/api": "http://localhost:4000"
		}
	}

  return {
    server: {
			port: env.PORT || 4000,
			proxy
		},
		resolve: {
			alias: [
				{
					find: "@assets/",
					replacement: "/src/assets/"
				}
			]
		},
    plugins: [react()],
    mode: 'development'
  }
});
