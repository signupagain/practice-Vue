import {
	onMounted,
	onUnmounted,
	ref,
	watch,
	type ComponentPublicInstance,
	type Ref,
} from "vue";
import { debounce, type DebouncedFunc } from "lodash-es";
import { useRoute } from "vue-router";

export function useToggleActive(
	btnEl: Ref<HTMLElement | null>,
	stopPropEl: Ref<HTMLElement | null>,
	...controls: (Ref<HTMLElement | ComponentPublicInstance | null> | undefined)[]
) {
	type debounceFunc = DebouncedFunc<(e?: Event) => void>;

	let debounceToggleActive: debounceFunc | null = debounce(toggleActive, 100, {
		trailing: true,
	});
	let debounceInActiveEl: debounceFunc | null = debounce(inActiveEl, 100, {
		trailing: true,
	});

	onMounted(() => {
		btnEl.value?.setAttribute(useToggleTag, "");

		controls.forEach((el) =>
			el?.value instanceof HTMLElement
				? el.value.setAttribute(useToggleTag, "")
				: el?.value?.$el.setAttribute(useToggleTag, "")
		);

		btnEl.value?.addEventListener("click", debounceToggleActive);
		stopPropEl.value?.addEventListener("click", stopPropagation);
		document.addEventListener("click", debounceInActiveEl);

		btnEl.value?.addEventListener("keydown", debounceToggleActive);
		stopPropEl.value?.addEventListener("keydown", stopPropagation);
		document.addEventListener("keydown", debounceInActiveEl);
	});

	onUnmounted(() => {
		btnEl.value?.removeEventListener("click", debounceToggleActive);
		stopPropEl.value?.removeEventListener("click", stopPropagation);
		document.removeEventListener("click", debounceInActiveEl);

		btnEl.value?.removeEventListener("keydown", debounceToggleActive);
		stopPropEl.value?.removeEventListener("keydown", stopPropagation);
		document.removeEventListener("keydown", debounceInActiveEl);
	});

	const useToggleTag = "data-usetoggle";
	const order = ref<Ref<HTMLElement | ComponentPublicInstance>[]>([]);

	watch(order, (newVal) => {
		if (newVal.length !== 0) {
			newVal.forEach((activeEl) =>
				activeEl.value instanceof HTMLElement
					? activeEl.value.classList.add("active")
					: activeEl.value.$el.classList.add("active")
			);

			document
				.querySelectorAll(`[${useToggleTag}].active`)
				.forEach((activeEl) => {
					const hasActiveEl = newVal
						.map((v) =>
							v.value instanceof HTMLElement ? v.value : v.value.$el
						)
						.includes(activeEl);

					if (!hasActiveEl) activeEl.classList.remove("active");
				});

			order.value.length = 0;
		}
	});

	const route = useRoute();

	watch(
		() => route.path,
		() => debounceInActiveEl()
	);

	function toggleActive(e: Event): void {
		if (e instanceof KeyboardEvent && e.key !== "Enter") return;

		const el = e.target as HTMLElement;
		el.classList.contains("active")
			? document
					.querySelectorAll(`[${useToggleTag}].active`)
					.forEach((activeEl) => activeEl.classList.remove("active"))
			: (order.value = [btnEl, ...controls] as Ref<
					HTMLElement | ComponentPublicInstance
			  >[]);
	}

	function inActiveEl() {
		if (btnEl.value?.classList.contains("active")) {
			btnEl.value?.classList.remove("active");

			controls.forEach((el) =>
				el?.value instanceof HTMLElement
					? el?.value.classList.remove("active")
					: el?.value?.$el.classList.remove("active")
			);
		}
	}
}

function stopPropagation(e: Event): void {
	e.stopPropagation();
}
