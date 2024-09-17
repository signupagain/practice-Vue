import GlobalFooter from "@/components/global/GlobalFooter.vue";
import HomeHeader from "@/components/home/HomeHeader.vue";
import HomeView from "@/views/home/HomeView.vue";
import type { RouteRecordRaw } from "vue-router";

const homeComponents = {
	Header: HomeHeader,
	default: HomeView,
	Footer: GlobalFooter,
};
const components = { Footer: GlobalFooter };

export const routes: RouteRecordRaw[] = [
	{
		path: "",
		name: "home",
		components: homeComponents,
	},
	{
		path: "/about",
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
				path: "inspection-tools",
				name: "tools",
				components,
			},
		],
	},
	{
		path: "/product",
		children: [
			{
				path: "all",
				name: "all",
				components,
			},
			{
				path: "customization",
				name: "custom",
				components,
			},
			{
				path: "regular",
				name: "regular",
				components,
			},
			{
				path: "inspection-tools",
				name: "tools",
				components,
			},
		],
	},
	{
		path: "/knowledge",
		name: "know",
		children: [],
	},
	{
		path: "/download",
		name: "download",
		children: [],
	},
	{
		path: "/latest",
		name: "latest",
		children: [],
	},
	{
		path: "/contact-us",
		name: "contact",
		children: [],
	},
	{
		path: "/:exclude*",
		name: "notfound",
		components,
	},
];
