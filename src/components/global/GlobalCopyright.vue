<template>
	<p class="jy-copyright from" ref="copyright">
		{{ t("copyright.text", { year: new Date().getFullYear() }) }}
		<a href="/" @click.prevent v-text="t('copyright.designBy')"></a>
		{{ t("copyright.personal") }}
	</p>
</template>
<script setup lang="ts">
	import { useTranslation } from "i18next-vue";
	import { onMounted, ref } from "vue";

	const { fn } = defineProps<{
		fn?: nestedFrom;
	}>();
	const { t } = useTranslation("common");
	const copyright = ref<Element | null>(null);
	if (fn)
		onMounted(() => {
			if (copyright.value) fn([copyright.value]);
		});
</script>
<style lang="scss">
	.jy-copyright {
		color: $c-999;
		font-size: $fs-13;
		text-align: center;
		margin: 20px 0;
		display: flex;
		gap: 5px;
		opacity: 1;
		transform: translateY(0);
		transition: 0.7s 1.5s ease-in-out;

		@media (max-width: 465px) {
			flex-flow: column;
			align-items: center;
		}

		&.from {
			opacity: 0;
			transform: translateY(-10px);
		}
	}
</style>
