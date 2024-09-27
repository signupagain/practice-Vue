import { onMounted, onUnmounted } from "vue";

export function useClassnameObserver(
	classname: string,
	threshold: number = 0.25
) {
	const callback: IntersectionObserverCallback = (entries, observer) => {
		entries.forEach((v) => {
			if (v.isIntersecting && v.intersectionRatio >= threshold) {
				v.target.classList.remove(classname);
				observer.unobserve(v.target);
			}
		});
	};
	const option: IntersectionObserverInit = {
		root: null,
		threshold,
	};
	const observer = new IntersectionObserver(callback, option);
	onMounted(() =>
		document
			.querySelectorAll(`.${classname}`)
			.forEach((el) => observer.observe(el))
	);

	onUnmounted(() => observer.disconnect());

	return (targets: Array<Element> | NodeListOf<Element>) =>
		targets.forEach((el) => observer.observe(el));
}
