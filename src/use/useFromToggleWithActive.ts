import { inject, onMounted, onUnmounted } from "vue";

export function useFromToggleWithActive(classname: string) {
	const fn = inject<subscribeFrom>("subscribeFrom");
	if (fn) {
		let froms: Array<Element> = [];
		const callback: MutationCallback = (entries) => {
			entries.forEach((mutation) => {
				if (
					mutation.type === "attributes" &&
					mutation.target instanceof Element &&
					mutation.target.classList.contains("active")
				) {
					fn(froms);
					froms.forEach((el) => {
						if (el instanceof HTMLElement) el.style.transition = "";
					});
				}
				if (
					mutation.type === "attributes" &&
					mutation.target instanceof Element &&
					!mutation.target.classList.contains("active")
				) {
					froms.forEach((el) => {
						el.classList.add("from");
						if (el instanceof HTMLElement) el.style.transition = "0s";
					});
				}
			});
		};
		const observer = new MutationObserver(callback);

		onMounted(() => {
			const toggleActiveEl = document.querySelector(`.${classname}`);
			if (toggleActiveEl)
				froms.push(...Array.from(toggleActiveEl.querySelectorAll(".from")));
			fn(froms);
			if (toggleActiveEl instanceof Node)
				observer.observe(toggleActiveEl, {
					attributeFilter: ["class"],
				});
		});
		onUnmounted(() => observer.disconnect());

		return (nestedFroms: Element[]) => {
			fn(nestedFroms);
			froms.push(...nestedFroms);
		};
	}
}
