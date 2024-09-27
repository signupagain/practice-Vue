<template>
	<hgroup class="jy-hhg from">
		<div class="jy-hhg-x">
			<div class="jy-hhg-deco from">
				<div class="jy-hhg-deco__box"></div>
			</div>
			<component :is="titleTag" class="jy-hhg-h from">
				<span class="jy-hhg-h__first" :id>{{ word1 }}</span
				><span class="jy-hhg-h__second">{{ word2 }}</span>
			</component>
		</div>
		<slot name="shorthand" :slot-with="['jy-hhg-subtitle', 'from']"></slot>
		<slot name="description" :slot-with="['jy-hhg-subtitle', 'from']"></slot>
	</hgroup>
</template>
<script setup lang="ts">
	import { useProvideSubscribeFrom } from "@/use/useProvideSubscribeFrom";
	import { computed } from "vue";

	const { color, center } = defineProps<{
		titleTag: string;
		word1: string;
		word2: string;
		id?: string;
		color?: boolean;
		center?: boolean;
	}>();
	useProvideSubscribeFrom();

	const decoBox = computed(() => (color ? "#4f638f" : "#fff"));
	const first = computed(() => (color ? "#4f638f" : "#fff"));
	const second = computed(() => (color ? "#96a9b3" : "#fff"));
	const subtitle = computed(() => (color ? "inherit" : "#fff"));
	const marginValue = computed(() => (center ? "0 auto" : "0"));
	const textAlign = computed(() => (center ? "center" : "left"));
</script>
<style lang="scss">
	.jy-hhg {
		text-align: v-bind(textAlign);

		&-x {
			width: fit-content;
		}

		&-h {
			font-size: $fs-45;
			padding: 25px 0;
			line-height: 1;
			transition: 0.6s 0.3s linear;
			opacity: 1;
			transform: translateY(0);

			&.from {
				opacity: 0;
				transform: translateY(50%);
			}

			@media (max-width: 1180px) {
				font-size: $fs-40;
			}

			@media (max-width: 640px) {
				font-size: $fs-30;
				padding: 15px 0;
			}
		}

		&-h__first {
			color: v-bind(first);
			font-weight: 700;
			padding-top: 120px;
		}

		&-h__second {
			color: v-bind(second);
			font-weight: 400;
			margin-left: 15px;
		}

		&-deco {
			background: $c-96a33;
			transition: 0.6s linear;
			opacity: 1;
			transform: translateY(0);

			&.from {
				opacity: 0;
				transform: translateY(10px);
			}

			&__box {
				background: v-bind(decoBox);
				width: 30px;
				height: 3px;
				margin: v-bind(marginValue);
			}
		}

		&-subtitle {
			color: v-bind(subtitle);
			transition: 0.6s 0.6s linear;
			opacity: 1;
			transform: translateY(0);

			&.from {
				opacity: 0;
				transform: translateY(100%);
			}

			& + & {
				margin-top: 30px;
				transition-delay: 0.8s;
			}
		}
	}
</style>
