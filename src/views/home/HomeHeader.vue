<template>
	<header class="jy-hhead">
		<!-- <GlobalNavigation /> -->
		<img class="jy-hhead-img" :src="home" :alt />
		<img class="jy-hhead-img jy-hhead-img__mb" :src="homeMB" :alt />
		<section class="jy-hhead-x">
			<div class="jy-hhead-main">
				<h2 class="jy-hhead-h2">
					<span class="jy-hhead-h2__blue">Professional</span>
					<span class="jy-hhead-h2__shadow">Manufacturer</span>
				</h2>
				<div class="jy-hhead-deco">
					<div class="jy-hhead-deco__logo"></div>
					<div class="jy-hhead-deco__line"></div>
				</div>
				<p class="jy-hhead-p1">台灣專業螺絲製造與檢具開發</p>
				<p class="jy-hhead-p2">持續精進，為客戶解決問題</p>
				<div class="jy-hhead-main-x">
					<GlobalAnchor />
				</div>
			</div>
		</section>
		<a class="jy-hhead-a" href="#about">
			<span class="jy-hhead-a-span">SCROLL DOWN</span>
		</a>
	</header>
</template>
<script setup lang="ts">
	import home from "/images/home1.jpg";
	import homeMB from "/images/home1Mobile.jpg";
	// import GlobalNavigation from "@/components/GlobalNavigation/index.vue";
	const alt = `${import.meta.env.VITE_WEB_TITLE}專業製造`;
</script>
<style lang="scss">
	.jy {
		&-hhead {
			position: relative;
			color: $c-fff;
			overflow: hidden;

			@media (max-width: 1180px) {
				margin-top: 65px;
			}

			&-img {
				width: 100%;
				animation: bigger 5s linear forwards;

				@media (max-width: 1180px) {
					height: 820px;
					object-fit: cover;
				}

				@media (max-width: 640px) {
					&:not(&__mb) {
						display: none;
					}
				}

				&__mb {
					height: 620px;
					object-fit: cover;

					@media (min-width: 641px) {
						display: none;
					}
				}
			}

			&-x {
				position: absolute;
				inset: 0 20px;
				height: fit-content;
				margin: 190px 0 auto;

				@media (max-width: 1180px) {
					margin-top: 297px;
				}

				@media (max-width: 960px) {
					margin-top: 313.5px;
				}

				@media (max-width: 640px) {
					margin-top: 248px;
				}
			}

			&-main {
				width: 420px;
				margin-left: auto;

				@media (max-width: 1180px) {
					margin-left: revert;
				}

				@media (max-width: 960px) {
					font-size: $fs-15;
				}
			}

			&-a {
				position: absolute;
				inset: 0 0 56.6px 0;
				width: fit-content;
				height: fit-content;
				margin: auto auto 0;
				font-size: $fs-14;
				letter-spacing: 0.5px;

				@media (max-width: 1180px) {
					display: none;
				}

				&::after {
					content: "";
					display: block;
					background: url(@icon/scroll.png) center/auto;
					width: 37px;
					height: 55px;
					margin: 0 auto;
					margin-top: 15px;
				}

				&:hover {
					& .jy-hhead-a-span {
						text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.8);
					}
					&::after {
						animation: goUp 0.4s ease-in-out alternate infinite;
					}
				}
			}

			&-h2 {
				font-size: $fs-60;
				font-weight: 400;
				line-height: 1;

				&__blue {
					color: $c-4f6;
					font-weight: 700;

					@media (max-width: 1180px) {
						font-size: $fs-50;
					}

					@media (max-width: 960px) {
						font-size: $fs-40;
					}
				}

				&__shadow {
					text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.45);

					@media (max-width: 1180px) {
						font-size: $fs-50;
					}

					@media (max-width: 960px) {
						font-size: $fs-40;
					}
				}

				&__blue,
				&__shadow {
					display: block;
				}
			}

			&-deco {
				position: relative;
				margin: 30px 0 30.5px;

				@media (max-width: 1180px) {
					display: none;
				}

				&__line {
					border-top: 1.2px solid;
					color: $c-ccc80;
				}

				&__logo {
					background: url(@icon/logo2.png);
					position: absolute;
					top: calc(-175px / 2);
					left: -28%;
					width: 175px;
					height: 175px;
					animation: rotate 2s linear infinite;
				}
			}

			&-p1 {
				font-size: $fs-30;
				font-weight: 500;
				letter-spacing: 1.5px;
				text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.45);
				opacity: 0;

				@media (max-width: 960px) {
					font-size: $fs-20;
					margin-top: 3px;
				}
			}

			&-p2 {
				font-size: $fs-19;
				margin-top: 2.5px;
				margin-bottom: 30px;
				letter-spacing: 1px;
				line-height: 1;
				opacity: 0;

				@media (max-width: 960px) {
					font-size: $fs-16;
					margin-top: 5px;
				}
			}

			&-main-x {
				opacity: 0;
			}

			&-h2,
			&-p1,
			&-p2,
			&-a,
			&-main-x {
				animation: goDown 0.8s ease-in-out forwards,
					fadeIn 0.8s ease-in-out forwards;
			}

			&-p1 {
				animation-delay: 0.4s, 0.4s;
			}

			&-p2 {
				animation-delay: 0.8s, 0.8s;
			}

			&-main-x {
				animation-delay: 1.2s, 1.2s;
			}

			&-deco-line {
				animation: strechWidth 1s linear forwards;
			}
		}
	}
</style>
