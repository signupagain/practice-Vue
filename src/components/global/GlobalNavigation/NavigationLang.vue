<template>
	<div class="jy-nl" ref="curBtnWrap">
		<div class="jy-nl-cur" ref="curBtn">繁中</div>
		<ul class="jy-nl-ul" ref="curBtnControl">
			<li class="jy-nl-li" v-for="{ value } in lang" :key="value">
				<a href="javascript:;" class="jy-nl-a" :class="active">
					<span class="jy-nl-span">{{ value }}</span>
				</a>
			</li>
		</ul>
	</div>
</template>
<script setup lang="ts">
	import { useToggleActive } from "@/use/useToggleActive";
	import { reactive, ref } from "vue";

	const lang = reactive({
		繁中: {
			value: "繁",
			active: true,
		},
		English: {
			value: "EN",
			active: false,
		},
	});

	const active = ref(true);

	const curBtn = ref(null);
	const curBtnWrap = ref(null);
	const curBtnControl = ref(null);

	useToggleActive(curBtn, curBtnWrap, curBtnControl);
</script>
<style lang="scss">
	.jy-nl {
		width: 155px;
		text-align: center;

		&-cur {
			cursor: pointer;
			background: $c-4f6;
			padding: 0 40px;
			color: $c-fff;
			font-size: $fs-15;
			line-height: 80px;
			position: relative;

			@media (max-width: 1204px) {
				color: $c-4f6;
				line-height: $mbNavHeight;
				background: inherit;
			}

			&::before,
			&::after {
				content: "";
				position: absolute;
				inset: 0;
				margin: auto;
			}

			&::before {
				margin-left: 40px;
				width: 16px;
				height: 16px;
				background: url(@icon/world.png) center / contain;

				@media (max-width: 1204px) {
					background: url(@icon/world_blue.png) center / contain;
				}
			}

			&::after {
				margin-right: 43px;
				width: 10px;
				height: 6px;
				background: url(@icon/arrow.png) center / contain;
				filter: brightness(0) invert(1);
				transform: rotate(180deg);

				@media (max-width: 1204px) {
					filter: initial;
				}
			}
		}

		&-ul {
			visibility: hidden;
			opacity: 0;
			transform: translateY(-10px);
			transition: 0.5s;

			position: absolute;
			width: inherit;
			background: $c-fff;
		}

		&-cur.active ~ &-ul {
			visibility: visible;
			opacity: 1;
			transform: translateY(0);
		}

		&-a {
			display: block;
			font-size: $fs-14;
			color: $c-96a;
			line-height: 1;
			letter-spacing: 0.5px;
			padding: 10px;

			&.active,
			&:hover {
				color: $c-fff;
				background: $c-4f6;
			}
		}
	}
</style>
