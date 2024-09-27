import { inject, onMounted } from "vue";

export function useProvideSubscribeFrom() {
	const fn = inject<subscribeFrom>("subscribeFrom");
	onMounted(() => {
		const froms = Array.from(document.getElementsByClassName("from"));
		if (fn) fn(froms);
	});
}
