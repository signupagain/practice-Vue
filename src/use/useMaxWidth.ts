import { throttle } from "lodash-es";
import { computed, onUnmounted, ref } from "vue";

export function useMaxWidth(maxWidth: number = 1180) {
	const width = ref(innerWidth);
	const toggle = computed(() => width.value <= maxWidth);
	const resizeThrottle = throttle(function () {
		width.value = innerWidth;
	}, 200);

	addEventListener("resize", resizeThrottle);
	onUnmounted(() => removeEventListener("resize", resizeThrottle));

	return toggle;
}
