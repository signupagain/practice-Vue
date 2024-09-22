<template>
	<a
		v-if="name"
		class="jy-a"
		:class="$attrs.class"
		href="/"
		@click.prevent="router.push({ name, params: { page } })"
	>
		<div class="jy-a-border">
			<div class="jy-a-text" v-text="t('button.anchor')"></div>
		</div>
	</a>
	<button v-if="text" class="jy-a" :class="$attrs.class">
		<div class="jy-a-border">
			<div class="jy-a-text" v-text="text"></div>
		</div>
	</button>
</template>
<script setup lang="ts">
	import { useTranslation } from "i18next-vue";
	import { useRouter } from "vue-router";

	defineProps<{
		name?: string;
		page?: string;
		text?: string;
	}>();
	const router = useRouter();
	const { t } = useTranslation("common");
</script>
<style lang="scss">
	.jy-a {
		display: block;
		width: 200px;
		background-color: $c-c6d;
		overflow: hidden;

		&:hover {
			background-color: $c-96a;
		}

		@media (max-width: 1180px) {
			background-color: $c-96a;
		}

		&-border {
			margin: 4px;
			background-color: $c-4f6;
			overflow: hidden;

			&:hover {
				background-color: $c-fff;
			}

			@media (max-width: 1180px) {
				background-color: $c-4f6;
			}
		}

		&-text {
			margin: 0.8px;
			padding: 0 20px;
			position: relative;

			color: $c-4f6;
			font-size: $fs-14;
			font-weight: 600;
			letter-spacing: 1px;
			line-height: 45px;
			background-color: $c-fff;

			&::after {
				content: "";
				background: url(@icon/link-arrow.png) center / contain;
				position: absolute;
				inset: 0;
				width: 13px;
				height: 10px;
				margin: auto;
				margin-right: 20px;
			}

			&:hover {
				color: $c-fff;
				background-color: $c-4f6;

				&::after {
					filter: brightness(0) invert(1);
				}
			}

			@media (max-width: 1180px) {
				color: $c-fff;
				background-color: $c-4f6;

				&::after {
					filter: brightness(0) invert(1);
				}
			}
		}

		&,
		&-border,
		&-text {
			border-radius: 25px;
		}
	}
</style>
