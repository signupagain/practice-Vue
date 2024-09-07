import "@scss/style.scss";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import GlobalAnchor from "./components/global/GlobalAnchor.vue";
import GlobalNavigation from "./components/global/GlobalNavigation/index.vue";
import GlobalCopyright from "./components/global/GlobalCopyright.vue";
import GlobalFollow from "./components/global/GlobalFollow.vue";

createApp(App)
	.use(router)
	.component("GlobalAnchor", GlobalAnchor)
	.component("GlobalNavigation", GlobalNavigation)
	.component("GlobalCopyright", GlobalCopyright)
	.component("GlobalFollow", GlobalFollow)
	.mount("#app");
