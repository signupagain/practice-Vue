import "@scss/style.scss";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import GlobalAnchor from "./components/global/GlobalAnchor.vue";
import GlobalNavigation from "./components/global/GlobalNavigation/index.vue";
import GlobalCopyright from "./components/global/GlobalCopyright.vue";
import GlobalFollow from "./components/global/GlobalFollow.vue";
import { register } from "swiper/element/bundle";

register();

async function enableMocking() {
	if (import.meta.env.MODE === "production") return;

	const { worker } = await import("./mock");
	return worker.start({
		onUnhandledRequest: "bypass",
	});
}

enableMocking().then(() =>
	createApp(App)
		.use(router)
		.component("GlobalAnchor", GlobalAnchor)
		.component("GlobalNavigation", GlobalNavigation)
		.component("GlobalCopyright", GlobalCopyright)
		.component("GlobalFollow", GlobalFollow)
		.mount("#app")
);
