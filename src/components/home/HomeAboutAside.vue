<template>
	<aside class="jy-hab-aside">
		<div class="jy-hab-wrapper">
			<swiper-container class="jy-hab-ul" ref="ul" init="false">
				<div slot="container-start" class="jy-hab-ul__start"></div>
				<div slot="container-end" class="jy-hab-ul__end"></div>
				<swiper-slide
					class="jy-hab-li"
					:class="{ default: hasBorder }"
					v-for="{ alt, src } of paths"
				>
					<figure class="jy-hab-fig">
						<img :src :alt class="jy-hab-fig-img" />
						<figcaption class="jy-hab-figcaption" v-text="alt"></figcaption>
					</figure>
				</swiper-slide>
			</swiper-container>
			<button class="jy-hab-btn jy-hab-btn__prev" :class="{ default: !hasBtn }">
				<span class="jy-hab-btn__span" v-text="$t('button.prev')"></span>
			</button>
			<button class="jy-hab-btn jy-hab-btn__next" :class="{ default: !hasBtn }">
				<span class="jy-hab-btn__span" v-text="$t('button.next')"></span>
			</button>
		</div>
	</aside>
</template>
<script setup lang="ts">
	import { computed, onMounted, ref } from "vue";
	import tool1 from "@img/tool1.png";
	import tool2 from "@img/tool2.png";
	import tool3 from "@img/tool3.png";
	import type { SwiperOptions } from "swiper/types";
	import type { SwiperContainer } from "swiper/element";
	import { Autoplay, Navigation } from "swiper/modules";
	import { useTranslation } from "i18next-vue";

	const { t: $t } = useTranslation("common");
	const { t } = useTranslation("homeabout");
	const captions = t("list", { returnObjects: true });
	const imgs = [tool1, tool2, tool3];
	const paths = computed(() =>
		captions.map((str, i) => ({ alt: str, src: imgs[i] }))
	);

	const ul = ref<SwiperContainer | null>(null);
	const hasBorder = ref();
	const hasBtn = ref();
	const swiperParams: SwiperOptions = {
		modules: [Navigation, Autoplay],
		navigation: {
			prevEl: ".jy-hab-btn__prev",
			nextEl: ".jy-hab-btn__next",
		},
		on: {
			navigationPrev: ({ slidePrev }) => slidePrev,
			navigationNext: ({ slideNext }) => slideNext,
			breakpoint: (_, { slidesPerView }) => {
				initStatus();
				if (slidesPerView === 1) hasBorder.value = false;
				if (slidesPerView !== 3) hasBtn.value = true;
			},
		},
		slidesPerView: 1,
		breakpoints: {
			752: {
				slidesPerView: 3,
				loop: false,
			},
			463: {
				slidesPerView: 2,
				loop: true,
				autoplay: {
					delay: 3000,
				},
			},
		},
		loop: true,
		autoplay: {
			delay: 3000,
		},
	};

	onMounted(() => {
		initStatus();

		if (ul.value) {
			Object.assign(ul.value, swiperParams);

			ul.value.initialize();
		}
	});

	function initStatus() {
		hasBorder.value = true;
		hasBtn.value = false;
	}
</script>
<style lang="scss">
	.jy-hab {
		&-wrapper {
			position: relative;
		}

		&-ul {
			padding: 70px 0;

			&__start,
			&__end {
				position: absolute;
				width: 1px;
				height: 100%;
				background: $c-fff;
				z-index: 2;
			}

			&__end {
				top: 0;
				right: 0;
			}
		}

		&-btn {
			width: 40px;
			height: 40px;
			position: absolute;
			inset: 0;
			z-index: 1;
			margin: auto;
			display: grid;
			place-items: center;
			background: none;
			border: none;

			&.default {
				display: none;
			}

			&::after {
				content: "";
				display: block;
				width: 10px;
				height: 6px;
				background: url("@icon/arrow.png") center no-repeat;
			}

			&__span {
				clip-path: inset(100%);
			}

			&__prev {
				transform: rotate(-90deg);
				margin-left: 0;
			}

			&__next {
				transform: rotate(90deg);
				margin-right: 0;
			}

			&::after,
			&__span {
				grid-area: 1/1/2/2;
			}
		}

		&-li.default {
			& + & {
				border-left: 1px solid $c-ccc;
			}
		}

		&-fig {
			font-size: $fs-18;
			margin: 0;
			font-weight: 500;
			color: $c-0d0;
			text-align: center;

			&-img {
				display: block;
				width: 50px;
				height: 50px;
			}

			&-img + &caption {
				margin-top: 15px;
			}

			&-img,
			&caption {
				margin: 0 auto;
			}
		}
	}
</style>
