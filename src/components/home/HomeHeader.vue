<template>
	<header class="jy-hhead">
		<GlobalNavigation />
		<div class="jy-hhead-x">
			<hgroup class="jy-hhead-hg">
				<h2 class="jy-hhead-title">
					<span class="jy-hhead-title__start">{{ t("title.word1") }}</span>
					<span class="jy-hhead-title__end">{{ t("title.word2") }}</span>
				</h2>
				<div class="jy-hhead-deco">
					<div class="jy-hhead-deco__logo"></div>
					<div class="jy-hhead-deco__line"></div>
				</div>
				<p class="jy-hhead-sub">{{ t("subtitle") }}</p>
				<p class="jy-hhead-descr">{{ t("description") }}</p>
				<GlobalAnchor name="about" page="who-we-are" class="jy-a" />
			</hgroup>
		</div>
		<img
			class="jy-hhead-img"
			:src="t('images.bg.pc.src')"
			:alt="t('images.bg.alt')"
		/>
		<img
			class="jy-hhead-img jy-hhead-img__mb"
			:src="t('images.bg.mb.src')"
			:alt="t('images.bg.alt')"
		/>
		<a class="jy-hhead-a" href="#about">
			<span class="jy-hhead-a-span" v-text="t('link')"></span>
		</a>
	</header>
</template>
<script setup lang="ts">
	import { useTranslation } from "i18next-vue";
	import GlobalAnchor from "../global/GlobalAnchor.vue";
	import GlobalNavigation from "../global/GlobalNavigation/index.vue";

	const { t } = useTranslation("homeheader");
</script>
<style lang="scss">
	.jy {
		&-hhead {
			position: relative;
			color: $c-fff;
			overflow: hidden;

			@media (max-width: 1180px) {
				margin-top: 65px;
			}

			&-img {
				width: 100%;
				animation: bigger 5s linear forwards;

				@media (max-width: 1180px) {
					height: 820px;
					object-fit: cover;
				}

				@media (max-width: 640px) {
					&:not(&__mb) {
						display: none;
					}
				}

				&__mb {
					height: 620px;
					object-fit: cover;

					@media (min-width: 641px) {
						display: none;
					}
				}
			}

			&-x {
				position: absolute;
				z-index: 1;
				inset: 0 20px;
				height: fit-content;
				margin: 190px 0 auto;

				@media (max-width: 1180px) {
					margin-top: 297px;
				}

				@media (max-width: 960px) {
					margin-top: 313.5px;
				}

				@media (max-width: 640px) {
					margin-top: 248px;
				}
			}

			&-hg {
				width: 420px;
				margin-left: auto;

				@media (max-width: 1180px) {
					margin-left: revert;
				}

				@media (max-width: 960px) {
					font-size: $fs-15;
				}
			}

			&-a {
				position: absolute;
				inset: 0 0 56.6px 0;
				width: fit-content;
				height: fit-content;
				margin: auto auto 0;
				font-size: $fs-14;
				letter-spacing: 0.5px;

				@media (max-width: 1180px) {
					display: none;
				}

				&::after {
					content: "";
					display: block;
					background: url(@icon/scroll.png) center/auto;
					width: 37px;
					height: 55px;
					margin: 0 auto;
					margin-top: 15px;
				}

				&:hover {
					& .jy-hhead-a-span {
						text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.8);
					}
					&::after {
						animation: goUp 0.4s ease-in-out alternate infinite;
					}
				}
			}

			&-title {
				font-size: $fs-60;
				font-weight: 400;
				line-height: 1;

				&__start {
					color: $c-4f6;
					font-weight: 700;
				}

				&__end {
					text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.45);
				}

				&__start,
				&__end {
					display: block;

					@media (max-width: 1180px) {
						font-size: $fs-50;
					}

					@media (max-width: 960px) {
						font-size: $fs-40;
					}
				}
			}

			&-deco {
				position: relative;
				margin: 30px 0 30.5px;

				@media (max-width: 1180px) {
					display: none;
				}

				&__line {
					border-top: 1.2px solid;
					color: $c-ccc80;
				}

				&__logo {
					background: url(@icon/logo2.png);
					position: absolute;
					top: calc(-175px / 2);
					left: -28%;
					width: 175px;
					height: 175px;
					animation: rotate 2s linear infinite;
				}
			}

			&-sub {
				font-size: $fs-30;
				font-weight: 500;
				letter-spacing: 1.5px;
				text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.45);
				opacity: 0;

				@media (max-width: 960px) {
					font-size: $fs-20;
					margin-top: 3px;
				}
			}

			&-descr {
				font-size: $fs-19;
				margin-top: 2.5px;
				margin-bottom: 30px;
				letter-spacing: 1px;
				line-height: 1;
				opacity: 0;

				@media (max-width: 960px) {
					font-size: $fs-16;
					margin-top: 5px;
				}
			}

			&-hg .jy-a {
				opacity: 0;
			}

			&-title,
			&-sub,
			&-descr,
			&-a,
			&-hg .jy-a {
				animation: goDown 0.8s ease-in-out forwards,
					fadeIn 0.8s ease-in-out forwards;
			}

			&-sub {
				animation-delay: 0.4s, 0.4s;
			}

			&-descr {
				animation-delay: 0.8s, 0.8s;
			}

			&-hg .jy-a {
				animation-delay: 1.2s, 1.2s;
			}

			&-deco-line {
				animation: strechWidth 1s linear forwards;
			}
		}
	}
</style>
