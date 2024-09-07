import {
	onMounted,
	onUnmounted,
	type ComponentPublicInstance,
	type Ref,
} from "vue";
import { debounce, type DebouncedFunc } from "lodash-es";

export function useToggleActive(
	btnEl: Ref<HTMLElement | null>,
	stopPropEl: Ref<HTMLElement | null>,
	...controls: (Ref<HTMLElement | ComponentPublicInstance | null> | undefined)[]
) {
	type debounceFunc = DebouncedFunc<(e: Event) => void>;

	const attribute = "data-usetoggle";
	let debounceToggleActive: debounceFunc | null = debounce(toggleActive, 50, {
		trailing: true,
	});
	let debounceInActiveEl: debounceFunc | null = debounce(inActiveEl, 50, {
		trailing: true,
	});

	onMounted(() => {
		btnEl.value?.setAttribute(attribute, "");
		controls.forEach((el) =>
			el?.value instanceof HTMLElement
				? el.value.setAttribute(attribute, "")
				: el?.value?.$el.setAttribute(attribute, "")
		);

		btnEl.value?.addEventListener("click", debounceToggleActive);
		stopPropEl.value?.addEventListener("click", stopPropagation);
		document.addEventListener("click", debounceInActiveEl);
	});

	onUnmounted(() => {
		btnEl.value?.removeEventListener("click", debounceToggleActive);
		stopPropEl.value?.removeEventListener("click", stopPropagation);
		document.removeEventListener("click", debounceInActiveEl);
	});

	function toggleActive(e: Event): void {
		const el = e.target as HTMLElement;
		const isActive = el.classList.toggle("active");

		document
			.querySelectorAll(".active")
			.forEach((activeEl) =>
				activeEl !== el && activeEl.getAttribute(attribute)
					? activeEl.classList.toggle("active", false)
					: null
			);

		controls.forEach((el) =>
			el?.value instanceof HTMLElement
				? el.value.classList.toggle("active", isActive)
				: el?.value?.$el.classList.toggle("active", isActive)
		);
	}

	function inActiveEl() {
		if (btnEl.value?.classList.contains("active")) {
			btnEl.value?.classList.toggle("active", false);

			controls.forEach((el) =>
				el?.value instanceof HTMLElement
					? el?.value.classList.toggle("active", false)
					: el?.value?.$el.classList.toggle("active", false)
			);
		}
	}
}

function stopPropagation(e: Event): void {
	e.stopPropagation();
}
