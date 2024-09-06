import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueSetupExtend from "vite-plugin-vue-setup-extend";
import autoprefixer from "autoprefixer";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue({
			template: {
				compilerOptions: { isCustomElement: (tag) => tag.includes("-") },
			},
		}),
		vueSetupExtend(),
	],
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@use "@scss/vars" as *;`,
			},
		},
		postcss: {
			plugins: [autoprefixer()],
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
	envDir: fileURLToPath(new URL("./src/env", import.meta.url)),
});
