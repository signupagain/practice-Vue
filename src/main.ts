import "@scss/style.scss";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { register } from "swiper/element/bundle";
import { i18n } from "./i18n";

register();

async function enableMocking() {
	if (import.meta.env.MODE === "production") return;

	const { worker } = await import("./mock");
	return worker.start({
		onUnhandledRequest: "bypass",
	});
}

enableMocking().then(() => i18n(createApp(App)).use(router).mount("#app"));
