<template>
	<div class="jy-nl" ref="curBtnWrap">
		<span
			class="jy-nl-cur"
			ref="curBtn"
			v-text="t('lang.current.title')"
			tabindex="0"
		></span>
		<ul class="jy-nl-ul" ref="curBtnControl">
			<li
				class="jy-nl-li"
				v-for="{ key, value } in t('lang.list', { returnObjects: true })"
				:key="value"
			>
				<a
					href="/"
					class="jy-nl-a"
					:class="{ active: value === t('lang.current.value') }"
					@click.prevent="changeLang(value)"
				>
					<span class="jy-nl-span" v-text="key"></span>
				</a>
			</li>
		</ul>
	</div>
</template>
<script setup lang="ts">
	import { useToggleActive } from "@/use/useToggleActive";
	import { useTranslation } from "i18next-vue";
	import { ref } from "vue";

	const { t, i18next } = useTranslation("nav");
	function changeLang(lang: string) {
		if (t("lang.current.value") !== lang)
			i18next.changeLanguage(lang, () =>
				console.log("觸發TelePort，尚不提供多種語言")
			);
	}

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

			@media (max-width: 1180px) {
				color: $c-4f6;
				line-height: $mbNavHeight;
				background: inherit;
			}

			&::before {
				content: "";
				width: 16px;
				height: 16px;
				background: url(@icon/world.png) center / contain;

				@media (max-width: 1180px) {
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

				@media (max-width: 1180px) {
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
