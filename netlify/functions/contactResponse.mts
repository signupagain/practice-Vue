import { Config } from "@netlify/functions";

export default async () =>
	new Response(
		JSON.stringify({
			feedback: "已收到表單，感謝填表!",
		})
	);

export const config: Config = {
	path: "/api/contact-us",
};
