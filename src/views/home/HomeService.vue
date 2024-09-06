<template>
	<article class="jy-hs">
		<div class="jy-hs-head">
			<HomeHeading
				class="jy-hhg"
				title-tag="h2"
				:words="['SERVICE', 'ITEMS']"
				color
				:stretch="55"
			>
				<template #shorthand="{ slotWith }">
					<p :class="[slotWith]">服務項目</p>
				</template>
				<template #description="{ slotWith, isStretch }">
					<p :class="[slotWith, isStretch]">
						致力於生產市場所需求的螺絲、螺栓等規格化產品。
					</p>
				</template>
			</HomeHeading>
			<GlobalAnchor class="jy-a" name="tech" />
		</div>
		<section class="jy-hs-section">
			<swiper-container class="jy-hs-ul" ref="ul" init="false">
				<swiper-slide class="jy-hs-li" v-for="detail of service">
					<GlobalCard class="jy-card" v-bind="detail" />
				</swiper-slide>
			</swiper-container>
			<div class="jy-hs-btn__wrap">
				<button class="jy-hs-btn jy-hs-btn__prev">
					<span class="jy-hs-btn__span">左滑</span>
				</button>
				<button class="jy-hs-btn jy-hs-btn__next">
					<span class="jy-hs-btn__span">右滑</span>
				</button>
			</div>
		</section>
	</article>
</template>
<script setup lang="ts">
	import { serviceDataRequest } from "@/api/requests";
	import type { ServiceData } from "@/api/types/serviceData";
	import GlobalCard from "@/components/global/GlobalCard.vue";
	import HomeHeading from "@/components/home/HomeHeading.vue";
	import type { SwiperContainer } from "swiper/element";
	import { Navigation } from "swiper/modules";
	import type { SwiperOptions } from "swiper/types";
	import { onMounted, reactive, ref } from "vue";

	const service = reactive<ServiceData>([]);
	const servicePromise = serviceDataRequest().then((res) =>
		service.push(...res.data)
	);
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

	onMounted(() =>
		servicePromise.then(() => {
			if (ul.value) {
				Object.assign(ul.value, serviceOption);
				ul.value.initialize();
			}
		})
	);
</script>
<style lang="scss">
	.jy-hs {
		max-width: 83%;
		padding: 0 20px 130px;
		margin: 0 auto;
		overflow: hidden;

		@media (max-width: 1204px) {
			overflow: visible;
			padding: 0;
		}

		&-head {
			display: flex;
			align-items: start;
			gap: 77px;

			@media (max-width: 1204px) {
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
			@media (max-width: 1204px) {
				width: auto;
				position: static;
			}
		}

		&-ul {
			transform: rotate(-8deg);

			@media (max-width: 1204px) {
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

			@media (max-width: 1204px) {
				transform: none;
				& .jy-card {
					margin: 0;
				}
			}
		}

		&-ul,
		&-li {
			@media (max-width: 1204px) {
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
				@media (max-width: 1204px) {
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
				@media (max-width: 1204px) {
					transform: rotate(-90deg);
				}
			}

			&__next::after {
				@media (max-width: 1204px) {
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
