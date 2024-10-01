<template>
	<main class="jy-pv">
		<div class="jy-pv-div__left">
			<h2 class="jy-pv-h2" v-text="t('title')"></h2>
			<hr class="jy-pv-hr" />
			<p
				v-if="isScreenInMaxWidth"
				class="jy-pv-p"
				id="listlabel"
				:aria-label="t('select')"
			></p>
			<div class="jy-pv-list__wrap">
				<ul
					class="jy-pv-list"
					:class="{ active: isOpen }"
					tabindex="0"
					v-bind="isScreenInMaxWidth ? listBox : {}"
				>
					<li
						class="jy-pv-listitem"
						:class="{ 'jy-pv-listitem__start': index === 0 }"
						v-for="({ label, page }, index) of isScreenInMaxWidth
							? listArr
							: menuitem"
						:id="label"
						:role="isScreenInMaxWidth ? 'listitem' : undefined"
						:aria-selected="
							isScreenInMaxWidth && index === 0 ? true : undefined
						"
						:tabindex="isOpen ? -1 : 0"
					>
						<a
							href="/"
							class="jy-pv-link"
							:class="{
								active: page === curPage,
								'jy-pv-link__end': !isScreenInMaxWidth ? !page : false,
							}"
							v-text="label"
							@click.prevent="
								isScreenInMaxWidth && index === 0
									? (isOpen = !isOpen)
									: $router.push({
											name: 'product',
											params: { page: page ?? '' },
									  })
							"
						></a>
					</li>
				</ul>
			</div>
		</div>
		<div class="jy-pv-div__right">
			<ProductMain :cur-page />
		</div>
	</main>
</template>

<script setup lang="ts">
	import ProductMain from "@/components/ProductMain.vue";
	import { useMaxWidth } from "@/use/useMaxWidth";
	import { useTranslation } from "i18next-vue";
	import { computed, ref } from "vue";
	import { onBeforeRouteUpdate } from "vue-router";

	const { page: curPage } = defineProps<{ page: string }>();
	const { t } = useTranslation("product");
	const menuitem = t("menuitem", { returnObjects: true });
	const isScreenInMaxWidth = useMaxWidth();
	const isOpen = ref(false);
	const listBox = computed(() => ({
		role: "listbox",
		"aria-labelledby": "listlabel",
		"aria-activedescendant": menuitem.find((obj) => obj.page === curPage)
			?.label,
	}));
	const listArr = computed(() =>
		menuitem.sort(({ page: A }, { page: B }) =>
			(A ?? "") === curPage ? -1 : (B ?? "") === curPage ? 1 : 0
		)
	);

	onBeforeRouteUpdate(() => {
		isOpen.value = false;
	});
</script>

<style lang="scss">
	.jy-pv {
		margin: 100px auto 80px;
		display: flex;
		justify-content: center;
		gap: 50px;

		@media (max-width: 1180px) {
			width: 90vw;
			flex-flow: column;
			align-items: center;
			gap: 30px;
		}

		&-div__left {
			flex-basis: 18%;

			@media (max-width: 1180px) {
				flex-basis: auto;
				width: inherit;
			}
		}

		&-div__right {
			flex-basis: 63%;

			@media (max-width: 1180px) {
				flex-basis: auto;
			}
		}

		&-h2 {
			color: $c-232;
			font-size: $fs-25;
			font-weight: 500;
			margin: 12px 0;
		}

		&-h2 + &-hr {
			margin-bottom: 20px;
		}

		&-p {
			position: absolute;
			clip-path: inset(100%);
		}

		&-list:not(:has(.active)) &-link__end,
		&-listitem[aria-selected] &-link {
			color: $c-fff;
			background: $c-4f6;
		}

		&-list {
			height: 55px;

			@media (max-width: 1180px) {
				position: absolute;
				inset: auto 0;
				z-index: 1;
				overflow: hidden;
				box-shadow: 0 5px 15px $c-0001a;

				&__wrap {
					height: 55px;
					position: relative;
				}

				&.active {
					height: auto;
				}
			}
		}

		&-listitem {
			& + & {
				border-top: 1px solid $c-96a;
			}

			@media (max-width: 1180px) {
				&__start {
					position: relative;

					&::after {
						content: "";
						width: 5px;
						height: 5px;
						border-top: 1.5px solid $c-fff;
						border-left: 1.5px solid $c-fff;
						transform: rotate(225deg);
						position: absolute;
						inset: 0;
						margin: auto 20px auto auto;
					}
				}
			}
		}

		&-link {
			display: block;
			color: $c-2f2;
			background: $c-fff;
			line-height: 1.2;
			letter-spacing: 0.2rem;
			padding: 18px 15px;

			&:hover,
			&.active {
				color: $c-fff;
				background: $c-4f6;
			}
		}
	}
</style>
