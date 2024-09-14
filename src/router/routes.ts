import type { RouteRecordRaw } from "vue-router";

import GlobalFooter from "@/components/global/GlobalFooter.vue";
import GlobalHeader from "@/components/global/GlobalHeader.vue";
import HomeHeader from "@/components/home/HomeHeader.vue";
import HomeView from "@/views/home/HomeView.vue";

const homeComponents = {
	Header: HomeHeader,
	default: HomeView,
	Footer: GlobalFooter,
} as const;
const components = { Header: GlobalHeader, Footer: GlobalFooter } as const;

export const routes: RouteRecordRaw[] = [
	{
		path: "",
		name: "home",
		components: {
			header: HomeHeader,
			default: HomeView,
			footer: GlobalFooter,
		},
	},
	{
		name: "about",
		path: "/about/:page",
		meta: { title: "ABOUT US", subtitle: "關於我們" },
		children: [
			{
				path: "who-we-are",
				name: "who",
				components,
			},
			{
				path: "technology",
				name: "tech",
				components,
			},
			{
				path: "policy",
				name: "policy",
				components,
			},
			{
				path: "inspection-tools-development",
				name: "dev",
				components,
			},
		],
	},
	{
		name: "product",
		path: "/product/:page?",
		meta: { title: "PRODUCTS", subtitle: "產品介紹" },
		components: {
			header: GlobalHeader,
			// default: ,
			footer: GlobalFooter,
		},
	},
	{
		name: "know",
		path: "/knowledge/:page?",
		meta: { title: "KNOWLEDGE", subtitle: "產業知識" },
		components: {
			header: GlobalHeader,
			// default: ,
			footer: GlobalFooter,
		},
	},
	{
		name: "download",
		path: "/download/:page?",
		meta: { title: "DOWNLOAD", subtitle: "檔案下載" },
		components: {
			header: GlobalHeader,
			// default: ,
			footer: GlobalFooter,
		},
	},
	{
		name: "latest",
		path: "/latest/:page?",
		meta: { title: "LATEST", subtitle: "最新消息" },
		components: {
			header: GlobalHeader,
			// default: ,
			footer: GlobalFooter,
		},
	},
	{
		name: "contact",
		path: "/contact-us/:page?",
		// meta: { title: "CONTACT US", default: ProductView, subtitle: "聯絡我們" },
		components: { header: GlobalHeader, footer: GlobalFooter },
	},
	{
		name: "notfound",
		path: "/:exclude(.*)*",
		components: {
			footer: GlobalFooter,
		},
	},
];
