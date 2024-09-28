import { createRouter, createWebHistory } from "vue-router";
import { routes } from "./routes";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
	scrollBehavior(to, from, savedPosition) {
		return savedPosition ? savedPosition : { top: 0 };
	},
});

export default router;
