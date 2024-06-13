import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import "@scss/style.scss";
import GlobalAnchor from "./components/GlobalAnchor.vue";
// import GlobalNavigation from "./components/GlobalNavigation/index.vue";
// import GlobalCopyright from "./components/GlobalCopyright.vue";
// import GlobalFollow from "./components/GlobalFollow.vue";

createApp(App)
	.use(router)
	.component("GlobalAnchor", GlobalAnchor)
	// .component("GlobalNavigation", GlobalNavigation)
	// .component("GlobalCopyright", GlobalCopyright)
	// .component("GlobalFollow", GlobalFollow)
	.mount("#app");
