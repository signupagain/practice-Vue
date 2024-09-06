<template>
	<hgroup class="jy-hhg">
		<div class="jy-hhg-deco">
			<div class="jy-hhg-deco__box"></div>
		</div>
		<component :is="titleTag" class="jy-hhg-h">
			<span class="jy-hhg-h__first">{{ words[0] }}</span
			><span class="jy-hhg-h__second">{{ words[1] }}</span>
		</component>
		<slot name="shorthand" :slot-with="'jy-hhg-subtitle'"></slot>
		<slot
			name="description"
			:slot-with="'jy-hhg-subtitle'"
			:is-stretch="'active'"
		></slot>
	</hgroup>
</template>
<script setup lang="ts">
	import { computed } from "vue";

	const { color, center, stretch } = withDefaults(
		defineProps<{
			titleTag: string;
			words: [string, string];
			color?: boolean;
			center?: boolean;
			stretch?: number;
		}>(),
		{
			color: false,
			center: false,
			stretch: 0,
		}
	);

	const decoBox = computed(() => (color ? "#4f638f" : "#fff"));
	const first = computed(() => (color ? "#4f638f" : "#fff"));
	const second = computed(() => (color ? "#96a9b3" : "#fff"));
	const subtitle = computed(() => (color ? "inherit" : "#fff"));

	const marginValue = computed(() => (center ? "0 auto" : "0"));
	const textAlign = computed(() => (center ? "center" : "left"));

	const paddingBottom = computed(() => (stretch === 0 ? "" : `${stretch}px`));
</script>
<style lang="scss">
	.jy-hhg {
		width: fit-content;
		text-align: v-bind(textAlign);

		&:has(.active) {
			padding-bottom: v-bind(paddingBottom);
		}

		&-h {
			font-size: $fs-45;
			padding: 25px 0;
			line-height: 1;

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
		}

		&-h__second {
			color: v-bind(second);
			font-weight: 400;
			margin-left: 15px;
		}

		&-deco {
			background: $c-96a33;

			&__box {
				background: v-bind(decoBox);
				width: 30px;
				height: 3px;
				margin: v-bind(marginValue);
			}
		}

		&-subtitle {
			color: v-bind(subtitle);

			& + & {
				margin-top: 30px;
				position: absolute;
			}
		}
	}
</style>
