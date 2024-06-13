import HomeHeader from "@/components/home/HomeHeader.vue";
import type { RouteRecordRaw } from "vue-router";

export const routes: RouteRecordRaw[] = [
	{
		path: "",
		name: "home",
		components: {
			Header: HomeHeader,
		},
	},
	{
		path: "/about",
		children: [
			{
				path: "who-we-are",
				name: "who",
				components: {},
			},
		],
	},
	{
		path: "/:exclude*",
		name: "notfound",
		components: {},
	},
];
