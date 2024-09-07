<template>
	<div class="jy-nav-m" ref="navBtnWrap">
		<ul class="jy-nav-m-ul">
			<li class="jy-nav-m-li" v-for="{ id, value, children, href } of menu" :id>
				<a :href class="jy-nav-m-a">{{ value }}</a>
				<div class="jy-nav-m__line"></div>
				<ul class="jy-nav-m-li-ul" v-if="children.length">
					<li class="jy-nav-m-li-li" v-for="{ id, value } of children" :id>
						<a :href class="jy-nav-m-li-a">{{ value }}</a>
					</li>
				</ul>
			</li>
		</ul>
		<button class="jy-nav-btn" ref="navBtn">
			<div class="jy-nav-i jy-nav-i__top"></div>
			<div class="jy-nav-i jy-nav-i__center"></div>
			<div class="jy-nav-i jy-nav-i__bottom"></div>
		</button>
		<NavigationDialog :list ref="navBtnControl" />
	</div>
</template>
<script setup lang="ts">
	import { reactive, ref, type ComponentPublicInstance } from "vue";
	import NavigationDialog from "./NavigationDialog.vue";
	import { useToggleActive } from "@/use/useToggleActive";
	import { computed } from "@vue/reactivity";

	const menu = reactive([
		{
			id: "dGK9p",
			value: "關於我們",
			href: "/about/who-we-are",
			children: [
				{ id: "PJQKC", value: "公司簡介", href: "/about/who-we-are" },
				{ id: "RUEnX", value: "掌握生產技術", href: "/about/technology" },
				{ id: "DmENS", value: "品質政策", href: "/about/policy" },
				{
					id: "pSS0U",
					value: "專業檢具開發",
					href: "/about/inspection-tools",
				},
			],
		},
		{
			id: "bzFcD",
			value: "產品介紹",
			href: "/product/all",
			children: [
				{
					id: "S5Fo7",
					value: "客製化產品",
					href: "/product/customization",
				},
				{ id: "OHQdn", value: "規格品", href: "regular" },
				{ id: "GcEZm", value: "專業檢具", href: "inspection-tools" },
			],
		},
		{
			id: "JZNex",
			value: "產業知識",
			href: "/knowledge",
			children: [],
		},
		{ id: "0VJy-", value: "檔案下載", href: "/download", children: [] },
		{ id: "ik7fT", value: "最新消息", href: "/latest", children: [] },
		{
			id: "lQ4vs",
			value: "聯絡我們",
			href: "/contact-us",
			children: [],
		},
	]);
	const list = computed(() =>
		menu.map((v) => ({ value: v.value, href: v.href }))
	);

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

				@media (max-width: 1204px) {
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
			display: none;

			@media (max-width: 1204px) {
				display: block;
				position: relative;
				width: $mbNavHeight;
				height: $mbNavHeight;
				padding: 19.5px;
				border: none;
				background-color: $c-4f6;
			}

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
