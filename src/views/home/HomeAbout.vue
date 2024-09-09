<template>
	<div class="jy-hab">
		<div class="jy-hab-x__left">
			<HomeHeading
				class="jy-hhg"
				title-tag="h2"
				:word1="t('title.word1')"
				:word2="t('title.word2')"
				color
			>
				<template #shorthand="{ slotWith }">
					<p :class="slotWith" v-text="t('subtitle')"></p>
				</template>
				<template #description="{ slotWith }">
					<p :class="slotWith">
						<strong class="jy-hab-strong"
							>{{ t("keyword.pro") }}<em class="jy-hab-em">/</em
							>{{ t("keyword.honest") }}<em class="jy-hab-em">/</em
							>{{ t("keyword.better") }}</strong
						>
					</p>
				</template>
			</HomeHeading>
			<template v-for="p of t('paragraph', { returnObjects: true })">
				<p class="jy-hab-p" v-text="p"></p>
			</template>
			<GlobalAnchor class="jy-a" name="who" />
			<HomeAboutAside class="jy-hab-aside" />
			<img
				class="jy-hab-logo"
				v-bind="t('images.logo', { returnObjects: true })"
			/>
		</div>
		<div class="jy-hab-x__right">
			<img
				class="jy-hab-img"
				v-bind="t('images.passion', { returnObjects: true })"
			/>
		</div>
	</div>
</template>
<script setup lang="ts">
	import HomeHeading from "@/components/home/HomeHeading.vue";
	import HomeAboutAside from "@/components/home/HomeAboutAside.vue";
	import { useTranslation } from "i18next-vue";
	import GlobalAnchor from "@/components/global/GlobalAnchor.vue";

	const { t } = useTranslation("homeabout");
</script>
<style lang="scss">
	.jy-hab {
		height: 484px;
		padding: 120px 0 210px;
		position: relative;
		display: flex;

		@media (max-width: 1180px) {
			display: revert;
			height: unset;
			padding: 60px 0 60px;
		}

		&::after {
			content: "";
			position: absolute;
			left: 0;
			bottom: 0;
			width: 1170px;
			height: 232px;
			background: url("@img/about_bg.png") center / contain no-repeat;

			@media (max-width: 1180px) {
				content: none;
			}
		}

		&-x {
			&__left {
				flex-basis: 37.2%;

				display: flex;
				flex-flow: column;
				gap: 30px;

				position: relative;
				padding: 0 20px;
			}
			&__right {
				flex: 1;
			}
		}

		&-strong {
			color: $c-4f6;
			font-size: $fs-20;
			font-weight: 500;
			letter-spacing: 1px;
		}

		&-em {
			font-size: $fs-16;
			color: $c-b5b;
			margin: 0 10px;
		}

		&-p {
			font-size: $fs-15;
			line-height: 1.6;
			letter-spacing: 0.75px;

			& + & {
				margin-top: -30px;
			}

			& + .jy-a {
				margin-top: 20px;
				position: relative;
				z-index: 2;
			}
		}

		&-aside {
			position: absolute;
			z-index: 1;
			left: 70px;
			bottom: 0;
			margin-bottom: -30%;
			width: 790px;
			background: $c-fff;
			border-radius: $radius;

			@media (max-width: 1180px) {
				width: unset;
				position: initial;
				margin: -30px 0 30px;

				&::after {
					content: "";
					position: absolute;
					left: 0;
					bottom: -162px;
					width: 1170px;
					height: 232px;
					background: url("@img/about_bg.png") center / contain no-repeat;
				}
			}
		}

		&-logo {
			width: 252px;
			height: 252px;
			position: absolute;
			inset: 0;
			margin: auto;
			margin-right: -26.8%;

			@media (max-width: 1180px) {
				width: 160px;
				height: 160px;
				margin: auto;
				margin-bottom: -80px;
				z-index: 2;
			}
		}

		&-img {
			width: 100%;
			border-radius: $radius 0 0 $radius;

			@media (max-width: 1180px) {
				width: 95%;
				display: block;
				margin-left: auto;
				position: relative;
				z-index: 1;
			}
		}
	}
</style>
