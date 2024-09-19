<template>
	<figure class="jy-card">
		<img class="jy-card-img" v-bind="img" />
		<figcaption class="jy-card-title" v-text="title"></figcaption>
		<p class="jy-card-p" v-if="paragraph" v-text="paragraph"></p>
	</figure>
</template>
<script setup lang="ts">
	import { useTranslation } from "i18next-vue";
	import { computed } from "vue";

	const { image } = defineProps<{
		image?: { src: string; alt: string };
		title: string;
		paragraph?: string;
	}>();

	const { t } = useTranslation("common");
	const img = computed(() =>
		image ? image : t("images.draw", { returnObjects: true })
	);
</script>
<style lang="scss">
	.jy-card {
		position: relative;
		height: 88%;
		padding: 30px 20px;
		display: flex;
		flex-flow: column;
		gap: 17px;
		overflow: hidden;

		@media (max-width: 1180px) {
			margin: 0;
		}

		&::after {
			content: "";
			position: absolute;
			inset: 0;
			z-index: -1;
			border-radius: $radius;
			border: 1px solid $c-4f6;
			outline: 4px solid $c-96a80;
			outline-offset: -5px;
			margin-top: 20%;
			transition: 0.5s;
		}

		&:hover::after {
			margin-top: 0;
		}

		&-img {
			width: 100%;
			border-radius: $radius;
		}

		&-title {
			font-size: $fs-20;
			font-weight: 500;
			letter-spacing: 1px;
			color: $c-0d0;
			border-left: 2px solid $c-4f6;
			padding-left: 20px;
			line-height: 1;
		}

		&-p {
			flex: 1;
			color: $c-191;
			font-size: $fs-15;
			line-height: 1.6;
			letter-spacing: 0.75px;
		}
	}
</style>
