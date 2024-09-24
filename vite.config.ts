import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueSetupExtend from "vite-plugin-vue-setup-extend";
import autoprefixer from "autoprefixer";
import nested from "postcss-nested";
import vueDevTools from "vite-plugin-vue-devtools";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue({
			template: {
				compilerOptions: { isCustomElement: (tag) => tag.includes("-") },
			},
		}),
		vueSetupExtend(),
		vueDevTools(),
	],
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@use "@scss/vars" as *;`,
			},
		},
		postcss: {
			plugins: [autoprefixer(), nested()],
		},
	},
	resolve: {
		alias: {
			"@": fileURLToPath(new URL("./src", import.meta.url)),
			"@icon": fileURLToPath(new URL("./src/assets/icon", import.meta.url)),
			"@img": fileURLToPath(new URL("./src/assets/img", import.meta.url)),
			"@scss": fileURLToPath(new URL("./src/assets/scss", import.meta.url)),
		},
	},
});
