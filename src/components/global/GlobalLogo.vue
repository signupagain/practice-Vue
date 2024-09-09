<template>
	<a
		href="/"
		class="jy-logo"
		:class="{ active: isH1 }"
		:title="t('company')"
		@click="router.push({ name: 'home' })"
	>
		<img
			class="jy-logo-img"
			:class="{ active: isH1 }"
			v-bind="t('images.logo', { returnObjects: true })"
		/>
		<h1
			v-if="isOnHome && isH1"
			class="jy-logo-name"
			:class="{ active: isH1 }"
			v-text="t('company')"
		></h1>
		<span v-if="!isH1" class="jy-logo-name" v-text="t('company')"></span>
	</a>
</template>
<script setup lang="ts">
	import { useRouter } from "vue-router";
	import { useTranslation } from "i18next-vue";

	withDefaults(
		defineProps<{
			isH1?: boolean;
			isOnHome?: boolean;
		}>(),
		{
			isH1: false,
			isOnHome: false,
		}
	);
	const router = useRouter();
	const { t } = useTranslation("common");
</script>
<style lang="scss">
	.jy-logo {
		display: flex;
		align-items: center;
		gap: 15px;

		&.active {
			display: grid;
			place-items: center;
			overflow: hidden;
		}

		&-img {
			width: 60px;

			@media (max-width: 1180px) {
				&.active {
					width: 50px;
				}
			}
		}

		&-name {
			color: $c-333;
			font-size: $fs-20;
			font-weight: 500;
			letter-spacing: 1px;
		}

		&-name.active {
			color: transparent;
			font-size: $fs-12;
		}

		&-img.active,
		&-name.active {
			grid-area: 1/1/2/2;
		}
	}
</style>
