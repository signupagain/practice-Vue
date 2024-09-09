<template>
	<div class="jy-hc">
		<HomeHeading
			class="jy-hhg"
			title-tag="h2"
			:word1="t('title.word1')"
			:word2="t('title.word2')"
			center
		>
			<template #shorthand="{ slotWith }">
				<p :class="slotWith" v-text="t('subtitle')"></p>
			</template>
		</HomeHeading>
		<HomeCoreCarousel />
	</div>
</template>
<script setup lang="ts">
	import HomeHeading from "@/components/home/HomeHeading.vue";
	import HomeCoreCarousel from "@/components/home/HomeCoreCarousel.vue";
	import { useTranslation } from "i18next-vue";

	const { t } = useTranslation("homecore");
</script>
<style lang="scss">
	.jy {
		&-hc {
			height: 915px;

			@media (max-width: 640px) {
				height: 640px;
			}
		}

		&-hc &-hhg {
			position: absolute;
			z-index: 2;
			inset: auto 0;
			width: fit-content;
			margin: 8% auto 0;
		}
	}
</style>
