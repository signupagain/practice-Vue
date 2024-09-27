<template>
	<div class="jy-nav-d">
		<nav class="jy-nav-d-nav">
			<ul class="jy-nav-d-ul from">
				<li
					class="jy-nav-d-li"
					v-for="{ label, name, page } of t('menu', {
						returnObjects: true,
					})"
				>
					<a
						href="/"
						class="jy-nav-d-a"
						:class="{ active: $route.meta.subtitle === label }"
						@click.prevent="router.push({ name, params: { page: page ?? '' } })"
						v-text="label"
					></a>
				</li>
			</ul>
		</nav>
		<hr class="jy-nav-hr from" />
		<GlobalFollow :fn />
		<GlobalCopyright :fn />
	</div>
</template>
<script setup lang="ts">
	import { useTranslation } from "i18next-vue";
	import { useRouter } from "vue-router";
	import GlobalCopyright from "../GlobalCopyright.vue";
	import GlobalFollow from "../GlobalFollow.vue";
	import { useFromToggleWithActive } from "@/use/useFromToggleWithActive";

	const { t } = useTranslation("nav");
	const router = useRouter();
	const fn = useFromToggleWithActive("jy-nav-d");
</script>
<style lang="scss">
	.jy-nav {
		html:has(&-d.active) {
			overflow-y: hidden;
		}

		&-d {
			position: fixed;
			z-index: -1;
			inset: $mbNavHeight 0 0;
			padding: 0 20px;
			background: $c-fff;
			visibility: hidden;
			transform: translate(100%);
			transition: 0.8s ease-in-out;

			&.active {
				visibility: visible;
				transform: translate(0);
			}

			&-ul {
				border-top: 15px solid transparent;
				color: $c-0d0;
				letter-spacing: 1.7px;
				opacity: 1;
				transform: translateY(0);
				transition: 0.7s 0.8s ease-in-out;

				&.from {
					opacity: 0;
					transform: translateY(-10px);
				}
			}

			&-li {
				margin-bottom: 20px;
			}

			&-a {
				display: block;
				padding: 10px;
				text-align: center;

				&.active {
					color: $c-4f6;
					position: relative;

					&::after {
						content: "";
						position: absolute;
						inset: 0;
						margin: auto auto 0;
						background: $c-4f6;
						width: 30px;
						height: 2px;
					}
				}
			}
		}

		&-hr {
			margin-right: 0;
			transition: 1.3s ease-out;
			margin-bottom: 40px;
			border-top: 2px solid $c-ccc80;

			&::after {
				content: "";
				width: 100px;
				height: 100px;
				position: absolute;
				margin-top: -52.5px;
				background: no-repeat center/contain url(@icon/logo_icon.png);
				right: 5%;
				opacity: 1;
				transition: 2s 0.4s ease-out;
			}

			&.from {
				margin-right: 100%;

				&::after {
					right: 70%;
					opacity: 0;
				}
			}
		}
	}
</style>
