<template>
	<article class="jy-hs">
		<div class="jy-hs-head">
			<HomeHeading
				class="jy-hhg"
				title-tag="h2"
				:word1="t('title.word1')"
				:word2="t('title.word2')"
				color
			>
				<template #shorthand="{ slotWith }">
					<p :class="slotWith" v-text="t('subtitle')"></p>
				</template>
				<template #description="{ slotWith }">
					<p :class="slotWith" v-text="t('description')"></p>
				</template>
			</HomeHeading>
			<GlobalAnchor class="jy-a" name="about" page="technology" />
		</div>
		<section class="jy-hs-section">
			<swiper-container class="jy-hs-ul" ref="ul" init="false">
				<swiper-slide
					class="jy-hs-li"
					v-for="detail of t('list', { returnObjects: true })"
					><GlobalCard class="jy-card" v-bind="detail" />
				</swiper-slide>
			</swiper-container>
			<div class="jy-hs-btn__wrap">
				<button class="jy-hs-btn jy-hs-btn__prev">
					<span class="jy-hs-btn__span" v-text="$t('button.prev')"></span>
				</button>
				<button class="jy-hs-btn jy-hs-btn__next">
					<span class="jy-hs-btn__span" v-text="$t('button.next')"></span>
				</button>
			</div>
		</section>
	</article>
</template>
<script setup lang="ts">
	import GlobalAnchor from "@/components/global/GlobalAnchor.vue";
	import GlobalCard from "@/components/global/GlobalCard.vue";
	import HomeHeading from "@/components/home/HomeHeading.vue";
	import { useTranslation } from "i18next-vue";
	import type { SwiperContainer } from "swiper/element";
	import { Navigation } from "swiper/modules";
	import type { SwiperOptions } from "swiper/types";
	import { onMounted, ref } from "vue";

	const { t: $t } = useTranslation("common");
	const { t } = useTranslation("homeservice");
	const serviceOption: SwiperOptions = {
		slidesPerView: 1,
		loop: true,
		breakpoints: {
			641: {
				slidesPerView: 2,
				spaceBetween: 40,
			},
			955: {
				slidesPerView: 3,
				spaceBetween: 40,
			},
			1204: {
				slidesPerView: 3,
				spaceBetween: 25,
			},
		},
		modules: [Navigation],
		navigation: {
			prevEl: ".jy-hs-btn__prev",
			nextEl: ".jy-hs-btn__next",
		},
	};

	const ul = ref<SwiperContainer | null>(null);

	onMounted(() => {
		if (ul.value) {
			Object.assign(ul.value, serviceOption);
			ul.value.initialize();
		}
	});
</script>
<style lang="scss">
	.jy-hs {
		max-width: 83%;
		padding: 0 20px 130px;
		margin: 0 auto;
		overflow: hidden;

		@media (max-width: 1180px) {
			overflow: visible;
			padding: 0;
		}

		&-head {
			display: flex;
			align-items: start;
			gap: 77px;

			@media (max-width: 1180px) {
				display: block;

				& .jy-a {
					margin-top: 37px;
				}
			}
		}

		&-section {
			position: relative;
			width: 110%;
			left: -5%;
			@media (max-width: 1180px) {
				width: auto;
				position: static;
			}
		}

		&-ul {
			transform: rotate(-8deg);

			@media (max-width: 1180px) {
				transform: none;
			}
		}

		&-li {
			height: auto;
			transform: rotate(8deg);
			margin: 35px 0;

			& .jy-card {
				margin: 20px 40px;
			}

			@media (max-width: 1180px) {
				transform: none;
				& .jy-card {
					margin: 0;
				}
			}
		}

		&-ul,
		&-li {
			@media (max-width: 1180px) {
				transform: none;
			}
		}

		&-btn {
			&__wrap {
				position: absolute;
				z-index: 1;
				top: 35%;
				right: 3%;
				height: 150px;
				display: flex;
				flex-flow: column-reverse;
				justify-content: space-between;
				@media (max-width: 1180px) {
					position: static;
					height: auto;
					flex-flow: row;
					justify-content: center;
					gap: 70px;
				}
			}

			& {
				width: 40px;
				height: 40px;
				display: grid;
				place-items: center;
				background: $c-4f6;
				border: none;
				border-radius: 50%;
				cursor: pointer;
			}

			&::after {
				content: "";
				display: block;
				width: 10px;
				height: 6px;
				background: url("@icon/arrow.png") center no-repeat;
				filter: brightness(0) invert(1);
			}

			&__prev::after {
				transform: rotate(180deg);
				@media (max-width: 1180px) {
					transform: rotate(-90deg);
				}
			}

			&__next::after {
				@media (max-width: 1180px) {
					transform: rotate(90deg);
				}
			}

			&__span {
				clip-path: inset(100%);
			}

			&::after,
			&__span {
				grid-area: 1/1/2/2;
			}
		}
	}
</style>
