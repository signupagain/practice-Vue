<template>
	<footer class="jy-footer">
		<div class="jy-footer-x">
			<GlobalLogo class="from" />
			<GlobalInfo class="from" />
			<ul class="jy-footer-ul from">
				<li
					class="jy-footer-li"
					v-for="{ label, name, page } of t('menu', {
						returnObjects: true,
					})"
				>
					<a
						href="/"
						class="jy-footer-a"
						@click.prevent="router.push({ name, params: { page } })"
						v-text="label"
					></a>
				</li>
			</ul>
			<GlobalFollow class="from" />
		</div>
		<GlobalCopyright class="from" />
	</footer>
</template>
<script setup lang="ts">
	import { useTranslation } from "i18next-vue";
	import GlobalCopyright from "./GlobalCopyright.vue";
	import GlobalFollow from "./GlobalFollow.vue";
	import GlobalInfo from "./GlobalInfo.vue";
	import GlobalLogo from "./GlobalLogo.vue";
	import { useRouter } from "vue-router";
	import { useProvideSubscribeFrom } from "@/use/useProvideSubscribeFrom";

	const { t } = useTranslation("nav");
	const router = useRouter();
	useProvideSubscribeFrom();
</script>
<style lang="scss">
	.jy-footer {
		&-x {
			background: $c-e9e;
			display: grid;
			grid: repeat(2, auto) / auto-flow 3fr 7fr;
			place-items: center start;
			gap: 40px 70px;
			padding: 40px calc(17% / 2);

			@media (max-width: 1284px) {
				grid: auto/auto;
				place-items: center;
			}

			& .jy-logo {
				opacity: 1;
				transform: translateY(0);
				transition: 0.6s 0.3s linear;

				&.from {
					opacity: 0;
					transform: translateY(50%);
				}
			}

			& .jy-info {
				opacity: 1;
				transform: translateY(0);
				transition: 0.6s 0.4s linear;

				&.from {
					opacity: 0;
					transform: translateY(50%);
				}
			}

			& .jy-follow {
				place-self: end;
				margin: 0 30px;
				opacity: 1;
				transform: translateY(0);
				transition: 0.6s 0.4s linear;
				&.from {
					opacity: 0;
					transform: translateY(50%);
				}

				@media (max-width: 1284px) {
					place-self: center;
				}
			}
		}

		&-ul {
			place-self: center end;
			opacity: 1;
			transform: translateY(0);
			transition: 0.6s 0.35s linear;
			&.from {
				opacity: 0;
				transform: translateY(50%);
			}

			@media (max-width: 1284px) {
				place-self: center;
			}

			@media (max-width: 960px) {
				display: grid;
				grid: auto-flow / auto auto auto;
				gap: 40px 0;
			}

			@media (max-width: 465px) {
				grid: auto-flow / auto auto;
			}
		}

		&-li {
			display: inline;

			& + & {
				border-left: 1px solid $c-616;

				@media (max-width: 960px) {
					border: none;
				}
			}
		}

		&-a {
			padding: 20px 30px;
		}

		& .jy-copyright {
			justify-content: center;
			opacity: 1;
			transform: translateY(0);
			transition: 0.6s 0.5s linear;
			&.from {
				opacity: 0;
				transform: translateY(25%);
			}
		}
	}
</style>
