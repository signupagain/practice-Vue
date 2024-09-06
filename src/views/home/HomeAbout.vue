<template>
	<div class="jy-hab">
		<div class="jy-hab-x__left">
			<HomeHeading
				class="jy-hhg"
				title-tag="h2"
				:words
				color
				is-about-page
				:stretch="61.667"
			>
				<template #shorthand="{ slotWith }">
					<p :class="[slotWith]">{{ sub }}</p>
				</template>
				<template #description="{ slotWith, isStretch }">
					<p :class="[slotWith, isStretch]">
						<strong class="jy-hab-strong"
							>{{ breadCrumbsArr[0] }}<em class="jy-hab-em">/</em
							>{{ breadCrumbsArr[1] }}<em class="jy-hab-em">/</em
							>{{ breadCrumbsArr[2] }}</strong
						>
					</p>
				</template>
			</HomeHeading>
			<p class="jy-hab-p" v-text="p"></p>
			<GlobalAnchor class="jy-a" />
			<HomeAboutAside class="jy-hab-aside" />
			<img class="jy-hab-logo" v-bind="aboutLogo" />
		</div>
		<div class="jy-hab-x__right">
			<img class="jy-hab-img" v-bind="passion" />
		</div>
	</div>
</template>
<script setup lang="ts">
	import HomeHeading from "@/components/home/HomeHeading.vue";
	import HomeAboutAside from "@/components/home/HomeAboutAside.vue";
	import { computed, reactive, unref } from "vue";

	const about = reactive({
		title: "ABOUT US",
		sub: "關於我們",
		crumbs: "專業/誠信/持續精進",
		p: `累積超過35年扣件製造與加工經驗，遵循國際規範，致力於生產市場所需求的螺絲、螺栓等規格化產品。
並以「為客戶解決問題」為服務宗旨與自我要求，以技術克服成本與品質的矛盾，擁有少量多樣的客製化生產競爭優勢，以專業為客戶找到最佳製造方案。`,
		aboutLogo: { alt: "久允螺絲", src: "/images/JeouYeun_logo_ab.png" },
		passion: { alt: "熱愛技術", src: "/images/JeouYeun_passion.jpg" },
	});

	const { title, sub, crumbs, p, aboutLogo, passion } = unref(about);

	const words = computed(() => title.split(" ") as [string, string]);
	const breadCrumbsArr = computed(() => crumbs.split("/"));
</script>
<style lang="scss">
	.jy-hab {
		height: 484px;
		padding: 120px 0 210px;
		position: relative;
		display: flex;

		@media (max-width: 1180px) {
			display: revert;
			height: unset;
			padding: 60px 0 60px;
		}

		&::after {
			content: "";
			position: absolute;
			left: 0;
			bottom: 0;
			width: 1170px;
			height: 232px;
			background: url("@img/about_bg.png") center / contain no-repeat;

			@media (max-width: 1180px) {
				content: none;
			}
		}

		&-x {
			&__left {
				flex-basis: 37.2%;

				display: flex;
				flex-flow: column;
				gap: 30px;

				position: relative;
				padding: 0 20px;
			}
			&__right {
				flex: 1;
			}
		}

		&-strong {
			color: $c-4f6;
			font-size: $fs-20;
			font-weight: 500;
			letter-spacing: 1px;
		}

		&-em {
			font-size: $fs-16;
			color: $c-b5b;
			margin: 0 10px;
		}

		&-p {
			font-size: $fs-15;
			line-height: 1.6;
			letter-spacing: 0.75px;

			& + .jy-a {
				margin-top: 20px;
				position: relative;
				z-index: 2;
			}
		}

		&-aside {
			position: absolute;
			z-index: 1;
			left: 70px;
			bottom: 0;
			margin-bottom: -30%;
			width: 790px;
			background: $c-fff;
			border-radius: $radius-20;

			@media (max-width: 1180px) {
				width: unset;
				position: initial;
				margin: -30px 0 30px;

				&::after {
					content: "";
					position: absolute;
					left: 0;
					bottom: -162px;
					width: 1170px;
					height: 232px;
					background: url("@img/about_bg.png") center / contain no-repeat;
				}
			}
		}

		&-logo {
			width: 252px;
			height: 252px;
			position: absolute;
			inset: 0;
			margin: auto;
			margin-right: -26.8%;

			@media (max-width: 1180px) {
				width: 160px;
				height: 160px;
				margin: auto;
				margin-bottom: -80px;
				z-index: 2;
			}
		}

		&-img {
			width: 100%;
			border-radius: $radius-20 0 0 $radius-20;

			@media (max-width: 1180px) {
				width: 95%;
				display: block;
				margin-left: auto;
				position: relative;
				z-index: 1;
			}
		}
	}
</style>
