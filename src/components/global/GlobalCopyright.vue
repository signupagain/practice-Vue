<template>
	<p class="jy-copyright">
		{{ t("copyright.text", { year: new Date().getFullYear() }) }}
		<a
			href="javascript:console.log('GlobalCopyright觸發Teleport')//練習用網站;"
			v-text="t('copyright.designBy')"
		></a>
		{{ t("copyright.personal") }}
	</p>
</template>
<script setup lang="ts">
	import { useTranslation } from "i18next-vue";

	const { t } = useTranslation("common");
</script>
<style lang="scss">
	.jy-copyright {
		color: $c-999;
		font-size: $fs-13;
		text-align: center;
		margin: 20px 0;
		display: flex;
		gap: 5px;
	}
</style>
