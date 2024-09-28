import type { RouteRecordRaw } from "vue-router";

import GlobalFooter from "@/components/global/GlobalFooter.vue";
import GlobalHeader from "@/components/global/GlobalHeader.vue";
import HomeHeader from "@/components/home/HomeHeader.vue";
import HomeView from "@/views/home/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import ProductView from "@/views/ProductView.vue";
import ContactUsView from "@/views/ContactUsView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import { useTranslation } from "i18next-vue";

export const routes: RouteRecordRaw[] = [
	{
		path: "",
		name: "home",
		components: {
			header: HomeHeader,
			default: HomeView,
			footer: GlobalFooter,
		},
		beforeEnter: () => {
			document.title = import.meta.env.VITE_COMPANY_NAME;
		},
	},
	{
		name: "about",
		path: "/about/:page",
		meta: { title: "ABOUT US", subtitle: "關於我們" },
		components: {
			header: GlobalHeader,
			default: AboutView,
			footer: GlobalFooter,
		},
		props: { header: false, default: true, footer: false },
	},
	{
		name: "product",
		path: "/product/:page?",
		meta: { title: "PRODUCTS", subtitle: "產品介紹" },
		components: {
			header: GlobalHeader,
			default: ProductView,
			footer: GlobalFooter,
		},
		props: { header: false, default: true, footer: false },
		beforeEnter: (to) => {
			document.title = `${to.meta.subtitle}-${
				import.meta.env.VITE_COMPANY_NAME
			}`;
		},
	},
	{
		name: "know",
		path: "/knowledge/:page?",
		meta: { title: "KNOWLEDGE", subtitle: "產業知識" },
		components: {
			header: GlobalHeader,
			footer: GlobalFooter,
		},
		beforeEnter: (to) => {
			document.title = `${to.meta.subtitle}-${
				import.meta.env.VITE_COMPANY_NAME
			}`;
		},
	},
	{
		name: "download",
		path: "/download/:page?",
		meta: { title: "DOWNLOAD", subtitle: "檔案下載" },
		components: {
			header: GlobalHeader,
			footer: GlobalFooter,
		},
		beforeEnter: (to) => {
			document.title = `${to.meta.subtitle}-${
				import.meta.env.VITE_COMPANY_NAME
			}`;
		},
	},
	{
		name: "latest",
		path: "/latest/:page?",
		meta: { title: "LATEST", subtitle: "最新消息" },
		components: {
			header: GlobalHeader,
			footer: GlobalFooter,
		},
		beforeEnter: (to) => {
			document.title = `${to.meta.subtitle}-${
				import.meta.env.VITE_COMPANY_NAME
			}`;
		},
	},
	{
		name: "contact",
		path: "/contact-us/:page?",
		meta: { title: "CONTACT US", subtitle: "聯絡我們" },
		components: {
			header: GlobalHeader,
			default: ContactUsView,
			footer: GlobalFooter,
		},
		beforeEnter: (to) => {
			document.title = `${to.meta.subtitle}-${
				import.meta.env.VITE_COMPANY_NAME
			}`;
		},
	},
	{
		name: "notfound",
		path: "/:exclude(.*)*",
		components: {
			header: GlobalHeader,
			default: NotFoundView,
			footer: GlobalFooter,
		},
		beforeEnter: () => {
			const { t } = useTranslation("common");
			document.title = `${t("copyright.personal")}-${
				import.meta.env.VITE_COMPANY_NAME
			}`;
		},
	},
];
