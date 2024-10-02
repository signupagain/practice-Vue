<template>
	<dialog class="intro" ref="intro">
		<article class="declare">
			<h3 class="declare-h" v-text="t('declaration.title')"></h3>
			<p class="declare-p" v-for="desc of descs" v-text="desc"></p>
			<ul class="declare-ul">
				<li class="declare-li" v-for="{ word, company, link: href } of links">
					<span class="declare-span" v-text="word"></span
					><a :href target="_blank" class="declare-a" v-text="company"></a>
				</li>
			</ul>
		</article>
		<section class="skill">
			<h3 class="skill-h" v-text="t('skill.title')"></h3>
			<swiper-container init="false" class="skill-sc" ref="sc">
				<swiper-slide class="skill-sl" v-for="{ src, alt } of imgs"
					><img :src :alt class="skill-img"
				/></swiper-slide>
			</swiper-container>
			<a
				class="skill-p"
				href="https://github.com/signupagain/practice-vue"
				target="_blank"
				v-text="t('skill.github')"
			></a>
		</section>
		<button
			type="button"
			autofocus
			class="intro-btn intro-close"
			@click="intro?.close()"
		>
			X
		</button>
	</dialog>
	<button
		type="button"
		class="intro-btn intro-open"
		@click="intro?.showModal()"
	>
		i
	</button>
</template>

<script setup lang="ts">
	import { useTranslation } from "i18next-vue";
	import { onMounted, ref } from "vue";
	import typescript from "@img/ts.png";
	import sass from "@img/sass.png";
	import vue from "@img/vue.png";
	import swiper from "@img/swiper.png";
	import axios from "@img/axios.png";
	import i18next from "@img/i18next.png";
	import msw from "@img/msw.png";
	import postcss from "@img/postcss.png";
	import vite from "@img/vite.png";
	import type { SwiperContainer } from "swiper/element";
	import type { SwiperOptions } from "swiper/types";
	import { Autoplay, Navigation } from "swiper/modules";

	const { t } = useTranslation("intro");
	const descs = t("declaration.descriptions", { returnObjects: true });
	const links = t("declaration.links", { returnObjects: true });
	const intro = ref<HTMLDialogElement | null>(null);
	const imgs = [
		{ alt: "typescript", src: typescript },
		{ alt: "sass", src: sass },
		{ alt: "vue", src: vue },
		{ alt: "swiper", src: swiper },
		{ alt: "axios", src: axios },
		{ alt: "i18next", src: i18next },
		{ alt: "msw", src: msw },
		{ alt: "postcss", src: postcss },
		{ alt: "vite", src: vite },
	];
	const sc = ref<SwiperContainer | null>(null);
	const option: SwiperOptions = {
		// loop:true, // Slides not enough...
		slidesPerView: 3,
		modules: [Autoplay, Navigation],
		autoplay: {
			delay: 2000,
		},
		navigation: true,
	};
	onMounted(() => {
		if (sc.value) {
			Object.assign(sc.value, option);
			sc.value.initialize();
		}
		intro.value?.showModal();
	});
</script>

<style lang="scss">
	.intro {
		width: clamp(300px, 50%, 540px);
		max-height: 80%;
		border: none;
		text-align: center;
		&::backdrop {
			backdrop-filter: blur(10px);
		}

		&-btn {
			position: fixed;
			line-height: 1;
			font-size: $fs-30;
			text-align: center;
			background: none;
		}

		&-close {
			width: 50px;
			height: 50px;
			right: 5%;
			top: 5%;
			color: $c-fff;
			background-color: $c-000;
		}

		&-open {
			z-index: 9;
			right: 5%;
			bottom: 5%;
			width: 50px;
			height: 50px;
			color: $c-4f6;
			background: $c-fff;
			border-radius: 50%;
			box-shadow: 0 0 5px $c-000;

			&:hover {
				color: $c-fff;
				background: $c-4f6;
			}
		}
	}

	.declare,
	.skill {
		&-h {
			margin: revert;
		}
	}

	.declare {
		&-p {
			text-indent: 2rem;
			text-align: left;
		}
		&-span {
			font-weight: 500;
		}
		&-a {
			color: $c-4f6;
		}
	}

	.skill {
		&-img {
			width: 100px;
			height: 100px;

			@media (max-width: 400px) {
				width: 40px;
				height: 40px;
			}
		}
	}
</style>
