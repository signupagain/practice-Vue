<template>
	<div class="jy-nl" ref="curBtnWrap">
		<span class="jy-nl-cur" ref="curBtn">{{ curLang }}</span>
		<ul class="jy-nl-ul" ref="curBtnControl">
			<li
				class="jy-nl-li"
				v-for="{ title, value, active } in langs"
				:key="title"
			>
				<a
					href="javascript://尚不提供多種語言;"
					class="jy-nl-a"
					:class="{ active }"
				>
					<span class="jy-nl-span">{{ value }}</span>
				</a>
			</li>
		</ul>
	</div>
</template>
<script setup lang="ts">
	import { langDataRequest } from "@/api/requests";
	import type { LangsData } from "@/api/types/langData";
	import { useToggleActive } from "@/use/useToggleActive";
	import { computed, ref, reactive } from "vue";

	const defaultLang = ref("繁");
	const langs = reactive<LangsData>([]);
	const curLang = computed(
		() => langs.find((lang) => lang.active === true)?.title
	);

	langDataRequest().then((res) =>
		langs.push(
			...res.data.map((obj) =>
				obj.value === defaultLang.value
					? Object.assign(obj, { active: true })
					: obj
			)
		)
	);

	const curBtn = ref(null);
	const curBtnWrap = ref(null);
	const curBtnControl = ref(null);

	useToggleActive(curBtn, curBtnWrap, curBtnControl);
</script>
<style lang="scss">
	.jy-nl {
		width: fit-content;
		text-align: center;
		position: relative;

		&-cur {
			cursor: pointer;
			background: $c-4f6;
			padding: 0 29px;
			color: $c-fff;
			font-size: $fs-15;
			line-height: 80px;
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 10px;

			@media (max-width: 1204px) {
				color: $c-4f6;
				line-height: $mbNavHeight;
				background: inherit;
			}

			&::before {
				content: "";
				width: 16px;
				height: 16px;
				background: url(@icon/world.png) center / contain;

				@media (max-width: 1204px) {
					background: url(@icon/world_blue.png) center / contain;
				}
			}

			&::after {
				content: "";
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
			inset: auto 0;
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
