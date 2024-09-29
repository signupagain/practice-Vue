<template>
	<header class="jy-header">
		<hgroup class="jy-header-hg">
			<h1 class="jy-header-h1" v-text="curTitle"></h1>
			<p class="jy-header-subtitle" v-text="curSubtitle"></p>
			<div class="jy-header-deco">
				<div class="jy-header-deco__img"></div>
				<div class="jy-header-deco__box"></div>
			</div>
		</hgroup>
		<nav class="jy-header-nav">
			<ol class="jy-header-ol">
				<li class="jy-header-li" v-for="{ title, name } of breadcrumb">
					<a
						href="/"
						class="jy-header-a"
						:class="{ disabled: !name }"
						v-text="title"
						@click.prevent="name ? $router.push({ name }) : null"
					></a>
				</li>
			</ol>
		</nav>
		<img
			class="jy-header-img"
			v-bind="t('images.header', { returnObjects: true })"
		/>
	</header>
	<GlobalNavigation />
</template>

<script setup lang="ts">
	import { useTranslation } from "i18next-vue";
	import { useRoute } from "vue-router";
	import GlobalNavigation from "@/components/global/GlobalNavigation/index.vue";
	import { computed } from "vue";

	const { t } = useTranslation("common");
	const route = useRoute();
	const curTitle = computed(() => route.meta.title ?? t("company"));
	const curSubtitle = computed(
		() => route.meta.subtitle ?? t("copyright.personal")
	);
	const breadcrumb = [{ title: "首頁", name: "home" }, { title: curSubtitle }];
</script>

<style lang="scss">
	.jy-header {
		position: relative;
		text-align: center;
		color: $c-fff;

		&-hg {
			position: absolute;
			inset: 40px 0 0;
			width: fit-content;
			height: fit-content;
			margin: auto;
			display: flex;
			flex-flow: column;
			gap: 15px;
		}

		&-h1 {
			font-size: $fs-60;
			font-weight: 700;
			line-height: 1;

			@media (max-width: 1180px) {
				font-size: $fs-40;
			}
		}

		&-subtitle {
			font-size: $fs-24;
		}

		&-deco {
			order: -1;

			&__img {
				width: 150px;
				height: 150px;
				margin: 0 auto -38px;
				background: url("@icon/header_logo.png") no-repeat center / contain;

				@media (max-width: 1180px) {
					margin-bottom: -110px;
				}
			}

			&__box {
				background: $c-fff33;

				&::after {
					content: "";
					display: block;
					width: 30px;
					height: 3px;
					background: $c-fff;
					margin: auto;
				}
			}
		}

		&-nav {
			position: absolute;
			inset: auto 60% 0 0;
			background: $c-4f6cc;
			border-radius: 0 $radius 0 0;

			@media (max-width: 770px) {
				display: none;
			}
		}

		&-ol {
			display: flex;
			justify-content: center;
		}

		&-li {
			& + & {
				margin-left: 25px;

				&::before {
					content: "";
					width: 7px;
					height: 7px;
					position: absolute;
					margin-top: 23.5px;
					margin-left: -17.5px;
					border-right: 1px solid $c-fff;
					border-bottom: 1px solid $c-fff;
					transform: rotate(-45deg);
				}
			}
		}

		&-a {
			font-size: $fs-14;
			line-height: 54px;

			&.disabled {
				cursor: default;
			}
		}

		& &-img {
			width: 100%;
			vertical-align: top;

			@media (max-width: 1050px) {
				object-fit: cover;
				height: 300px;
			}
		}
	}
</style>
