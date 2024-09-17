<template>
	<main class="jy-abvm">
		<h2 class="jy-abvm-h2" v-text="target?.title"></h2>
		<hr class="jy-abvm-hr" />
		<article class="jy-abvm-section jy-abvm-article">
			<h3 class="jy-abvm-h3" v-text="target?.article.title"></h3>
			<p class="jy-abvm-p" v-text="target?.article.paragraph"></p>
			<img v-bind="target?.article.image" class="jy-abvm-img" />
		</article>
		<article class="jy-abvm-section jy-abvm-figs" v-if="target?.details">
			<h3 class="jy-abvm-h3" v-text="target.details?.title"></h3>
			<template v-for="{ image, caption, paragraph } of target.details.figures">
				<figure class="jy-abvm-fig">
					<img v-bind="image" class="jy-abvm-fig-img" />
					<figcaption class="jy-abvm-fig-cap" v-text="caption"></figcaption>
					<p class="jy-abvm-fig-p" v-text="paragraph"></p>
				</figure>
			</template>
		</article>
	</main>
</template>

<script setup lang="ts">
	import { useTranslation } from "i18next-vue";
	import { computed } from "vue";
	import { useRoute } from "vue-router";

	const route = useRoute();
	const { t } = useTranslation("about");
	const contents = t("contents", { returnObjects: true });
	const target = computed(() =>
		contents.find(({ page }) => page === route.params.page)
	);
</script>

<style lang="scss">
	.jy-abvm {
		&-h2 {
			color: $c-232;
			font-size: $fs-25;
			font-weight: 500;
		}

		&-hr {
			margin: 12px 0 40px;
		}

		&-section {
			margin: 0 20px;

			& + & {
				margin-top: 30px;
			}
		}

		&-article {
			display: grid;
			grid: auto 1fr / auto-flow auto 48%;
			gap: 20px 40px;

			@media (max-width: 840px) {
				display: flex;
				flex-flow: column;
			}
		}

		&-h3 {
			font-size: $fs-26;
			grid-area: 1 / 1 / 2 / -1;
		}

		&-p {
			font-size: $fs-18;
		}

		&-img {
			grid-area: 1 / 2 / 3 / 3;
			width: 100%;

			@media (max-width: 840px) {
				order: -1;
			}
		}

		&-figs {
			text-align: center;

			display: grid;
			grid: auto-flow / 1fr 1fr 1fr;
			gap: 20px 50px;

			@media (max-width: 770px) {
				display: flex;
				flex-flow: column;
			}
		}

		&-fig {
			display: flex;
			flex-flow: column;
			align-items: center;
			gap: 10px;

			&-img {
				max-width: 400px;
				width: 100%;
				border-radius: 50%;
			}

			&-cap {
				font-size: $fs-24;
				font-weight: 700;
			}

			&-p {
				text-align: left;
			}
		}
	}
</style>
