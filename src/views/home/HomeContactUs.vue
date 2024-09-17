<template>
	<div class="jy-hcu">
		<div class="jy-hcu-x">
			<HomeHeading
				class="jy-hhg"
				title-tag="h2"
				:word1="t('title.word1')"
				:word2="t('title.word2')"
			>
				<template #shorthand="{ slotWith }">
					<p :class="slotWith" v-text="t('subtitle')"></p>
				</template>
			</HomeHeading>
			<GlobalAnchor name="contact" />
		</div>
		<img
			class="jy-hcu-img"
			v-bind="t('images.building', { returnObjects: true })"
		/>
	</div>
</template>
<script setup lang="ts">
	import GlobalAnchor from "@/components/global/GlobalAnchor.vue";
	import HomeHeading from "@/components/home/HomeHeading.vue";
	import { useTranslation } from "i18next-vue";
	const { t } = useTranslation("homecontact");
</script>
<style lang="scss">
	.jy-hcu {
		position: relative;
		margin: 150px 20px 120px;

		@media (max-width: 1180px) {
			margin: 60px 0;
			display: flex;
			flex-flow: column-reverse;
		}

		&-x {
			width: fit-content;
			padding: 50px 80px;
			border-radius: $radius;
			background: $c-96a;
			display: flex;
			flex-flow: column;
			gap: 30px;
			position: absolute;
			right: calc(10% - 20px);

			@media (max-width: 1180px) {
				position: static;
				width: auto;
				margin: -50px 5% 0;
			}

			@media (max-width: 640px) {
				padding: 40px 20px;
				margin: -40px 5% 0;
				align-items: center;
			}

			& .jy-hhg-deco {
				background: $c-a7b;

				&__box {
					background: $c-eae;
				}
			}

			& .jy-a-border {
				background: $c-4f6;
			}
		}

		&-img {
			width: 100%;
		}
	}
</style>
