<template>
	<div class="jy-nav-m">
		<ul class="jy-nav-m-ul">
			<li
				class="jy-nav-m-li"
				v-for="{ label, name, children, page } of t('menu', {
					returnObjects: true,
				})"
				:id="label"
			>
				<a
					href="/"
					class="jy-nav-m-a"
					@click.prevent="router.push({ name, params: { page: page ?? '' } })"
					v-text="label"
				></a>
				<div class="jy-nav-m__line"></div>
				<ul class="jy-nav-m-li-ul" v-if="children">
					<li
						class="jy-nav-m-li-li"
						v-for="{ label, page } of children"
						:id="label"
					>
						<a
							href="/"
							class="jy-nav-m-li-a"
							@click.prevent="
								router.push({
									name,
									params: { page: page ? page : '' },
								})
							"
							v-text="label"
						></a>
					</li>
				</ul>
			</li>
		</ul>
		<div class="jy-nav-btn__wrap" ref="navBtnWrap">
			<button class="jy-nav-btn" ref="navBtn">
				<div class="jy-nav-i jy-nav-i__top"></div>
				<div class="jy-nav-i jy-nav-i__center"></div>
				<div class="jy-nav-i jy-nav-i__bottom"></div>
			</button>
			<NavigationDialog ref="navBtnControl" />
		</div>
	</div>
</template>
<script setup lang="ts">
	import { ref, type ComponentPublicInstance } from "vue";
	import NavigationDialog from "./NavigationDialog.vue";
	import { useToggleActive } from "@/use/useToggleActive";
	import { useRouter } from "vue-router";
	import { useTranslation } from "i18next-vue";

	const { t } = useTranslation("nav");
	const router = useRouter();
	const navBtn = ref(null);
	const navBtnWrap = ref(null);
	const navBtnControl = ref<ComponentPublicInstance | null>(null);
	useToggleActive(navBtn, navBtnWrap, navBtnControl);
</script>
<style lang="scss">
	.jy-nav {
		&-m {
			&-ul {
				color: $c-222;
				display: flex;
				gap: 4.28px;

				@media (max-width: 1180px) {
					display: none;
				}
			}

			&-li {
				text-align: center;
				position: relative;

				&-ul {
					position: absolute;
					inset: auto 0;
					background: $c-fff;
					transition: 0.3s 0.2s linear;
					visibility: hidden;
					max-height: 0;
					overflow: hidden;
				}

				&-li {
					& + & {
						border-top: 1px solid $c-dad;
					}
				}

				&-a {
					display: block;
					padding: 10px;

					&:hover {
						background: $c-4f6;
						color: $c-fff;
					}
				}
			}

			&-a {
				display: block;
				line-height: 80px;
				padding: 0 40px;
			}

			&-a:hover ~ .jy-nav-m-li-ul,
			&-li-ul:hover {
				visibility: visible;
				max-height: 350px;
			}

			&__line {
				width: 30px;
				transform: scaleX(0);
				transition: 0.3s 0.2s linear;
				height: 3px;
				background: $c-4f6;
				position: absolute;
				margin: -3px calc(50% - 15px) 0;
			}

			&-a:hover ~ &__line {
				transform: scaleX(1);
			}
		}

		&-btn {
			&__wrap {
				display: none;
				@media (max-width: 1180px) {
					display: block;
				}
			}

			display: block;
			position: relative;
			width: $mbNavHeight;
			height: $mbNavHeight;
			padding: 19.5px;
			border: none;
			background-color: $c-4f6;

			&.active {
				.jy-nav-i__top {
					transform: translateY(8px) rotate(45deg);
				}
				.jy-nav-i__center {
					opacity: 0;
				}
				.jy-nav-i__bottom {
					transform: translateY(-8px) rotate(-45deg);
				}
			}
		}

		&-i {
			position: absolute;
			inset: auto 19.5px;
			height: 2px;
			background-color: $c-fff;
			transition: 0.5s;

			&__top {
				margin-top: -8px;
			}

			&__bottom {
				margin-top: 8px;
			}
		}
	}
</style>
