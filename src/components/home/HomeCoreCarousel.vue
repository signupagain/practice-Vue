<template>
	<swiper-container class="jy-pc-txt-ul" ref="txtul" init="false">
		<swiper-slide
			class="jy-pc-txt-li"
			v-for="{ href, title, subtitle, p } of doubleFigures"
		>
			<a :href class="jy-pc-a">
				<hgroup class="jy-pc-hgroup">
					<h3 class="jy-pc-title">{{ title }}</h3>
					<p class="jy-pc-subtitle">{{ subtitle }}</p>
				</hgroup>
				<p class="jy-pc-p">{{ p }}</p>
			</a>
		</swiper-slide>
	</swiper-container>
	<div class="jy-pc-x">
		<swiper-container class="jy-pc-img-ul" ref="imgul" init="false">
			<swiper-slide class="jy-pc-img-li" v-for="{ src, title: alt } of figures">
				<img :src :alt class="jy-pc-img" />
			</swiper-slide>
		</swiper-container>
		<button class="jy-pc-btn jy-pc-btn__prev">
			<span class="jy-pc-btn__span">左滑</span>
		</button>
		<button class="jy-pc-btn jy-pc-btn__next">
			<span class="jy-pc-btn__span">右滑</span>
		</button>
	</div>
</template>
<script setup lang="ts">
	import { coreFiguresDataRequest } from "@/api/requests";
	import type { CoreFiguresData } from "@/api/types/coreFiguresData";
	import type { SwiperContainer } from "swiper/element";
	import { Autoplay, Navigation } from "swiper/modules";
	import type { Swiper, SwiperOptions } from "swiper/types";
	import { computed, onMounted, reactive, ref } from "vue";

	const figures = reactive<CoreFiguresData>([]);

	const setFigures = coreFiguresDataRequest().then((res) =>
		figures.push(...res.data)
	);

	const doubleFigures = computed(() =>
		Array(2)
			.fill(figures)
			.reduce((p, c) => [...p, ...c])
	);

	const imgul = ref<SwiperContainer | null>(null);
	const txtul = ref<SwiperContainer | null>(null);

	const imgulOption: SwiperOptions = {
		slidesPerView: 1,
	};

	const txtulOption: SwiperOptions = {
		...imgulOption,
		loop: true,
		centeredSlides: true,
		breakpoints: {
			1181: {
				slidesPerView: 3,
			},
		},
		modules: [Navigation, Autoplay],
		navigation: {
			prevEl: ".jy-pc-btn__prev",
			nextEl: ".jy-pc-btn__next",
		},
		autoplay: {
			delay: 5000,
		},
		on: {
			realIndexChange: ({ realIndex, slides }) => {
				const diff = slides.length / 2;
				const imgIndex = realIndex % diff;
				const imgSwiper = imgul.value?.swiper as Swiper;
				imgSwiper.slideTo(imgIndex, 0);
			},
		},
	};

	onMounted(() =>
		setFigures.then(() => {
			if (txtul.value) {
				Object.assign(txtul.value, txtulOption);
				txtul.value.initialize();
			}

			if (imgul.value) {
				Object.assign(imgul.value, imgulOption);
				imgul.value.initialize();
			}
		})
	);
</script>
<style lang="scss">
	.jy-pc {
		&-txt {
			&-ul {
				height: inherit;
				text-align: center;
			}

			&-li.swiper-slide-active {
				border: 1px solid $c-96a;
				border-radius: 0 0 20px 20px;

				@media (max-width: 640px) {
					border: none;
				}
			}
		}

		&-a {
			padding: 0 55px;
			height: 100%;
			display: flex;
			flex-flow: column;
			gap: 45px;
		}

		&-hgroup {
			flex-basis: 720px;

			@media (max-width: 640px) {
				flex-basis: 470px;
			}

			display: flex;
			flex-flow: column;
			align-items: center;
			gap: 10px;

			&::after {
				content: "";
				display: block;
				margin: 0 auto 0.5px;
				width: 100px;
				border-top: 3px solid $c-4f6;
			}
		}

		&-title {
			font-size: 24px;
			font-weight: 500;
			color: $c-fff;
			margin-top: auto;
		}

		&-subtitle {
			font-size: 15px;
			color: $c-fff80;
		}

		&-p {
			color: $c-191;
		}

		&-x {
			position: relative;
			top: -100%;
		}

		&-img {
			width: 100vw;
			height: 100%;
			object-fit: cover;

			.swiper-slide-active & {
				animation: bigger 5s linear forwards;
			}

			&-ul {
				position: absolute;
				inset: auto 0;
				z-index: -1;
				height: 720px;

				@media (max-width: 640px) {
					height: 470px;
				}
			}
		}

		&-btn {
			position: absolute;
			z-index: 1;
			width: 40px;
			height: 40px;
			border: none;
			border-radius: 50%;
			margin-top: 340px;

			@media (max-width: 640px) {
				margin-top: 215px;
			}

			display: grid;

			&__prev {
				left: 2.5%;
				transform: rotate(-90deg);
			}

			&__next {
				right: 2.5%;
				transform: rotate(90deg);
			}

			&__span {
				clip-path: inset(100%);
			}

			&::after {
				content: "";
				display: block;
				width: 10px;
				height: 6px;
				margin: auto;
				background: url("@icon/arrow.png") center no-repeat;
			}

			&::after,
			&__span {
				grid-area: 1/1/2/2;
			}
		}
	}
</style>
