<template>
	<div class="jy-abv">
		<AboutMain class="jy-abvm" />
		<aside class="jy-abv-aside">
			<p
				class="jy-abv-label"
				id="listlabel"
				:aria-label="isScreenInMaxWidth ? t('select') : undefined"
			></p>
			<ul
				class="jy-abv-ul"
				:class="{ active: isUlActive }"
				v-bind="isScreenInMaxWidth ? ulAttr : undefined"
			>
				<li
					class="jy-abv-li"
					role="listitem"
					v-for="({ title, page }, index) of isScreenInMaxWidth
						? options
						: contents"
					:id="title"
					:class="{ 'jy-abv-li__start': index === 0 }"
				>
					<a
						href="/"
						class="jy-abv-a"
						v-text="title"
						:class="{ active: page === curPage }"
						@click.prevent="
							index === 0 && isScreenInMaxWidth
								? (isUlActive = true)
								: router.push({ name: 'about', params: { page } })
						"
					></a>
				</li>
			</ul>
		</aside>
	</div>
</template>

<script setup lang="ts">
	import AboutMain from "@/components/AboutMain.vue";
	import { useMaxWidth } from "@/use/useMaxWidth";
	import { useTranslation } from "i18next-vue";
	import { computed, ref, watch } from "vue";
	import { onBeforeRouteUpdate, useRouter } from "vue-router";

	const { page: curPage } = defineProps<{
		page: string;
	}>();
	const router = useRouter();
	const { t } = useTranslation("about");
	const contents = t("contents", { returnObjects: true });
	const options = computed(() =>
		contents.sort(({ page: a }, { page: b }) =>
			a === curPage ? -1 : b === curPage ? 1 : 0
		)
	);
	const isScreenInMaxWidth = useMaxWidth();
	const isUlActive = ref(false);
	const ulAttr = computed(() => ({
		role: "listbox",
		"aria-labelledby": "listlabel",
		"aria-activedescendant": contents.find(({ page }) => page === curPage)
			?.title,
	}));
	onBeforeRouteUpdate(() => {
		isUlActive.value = false;
	});
</script>

<style lang="scss">
	.jy-abv {
		margin: 100px auto 80px;
		display: flex;
		flex-flow: row-reverse;
		justify-content: center;
		gap: 50px;

		@media (max-width: 1180px) {
			flex-flow: column-reverse;
			gap: 30px;
			width: 90%;
		}

		&m {
			flex-basis: 63%;

			@media (max-width: 1180px) {
				flex-basis: auto;
			}
		}

		&-aside {
			flex-basis: 18%;

			@media (max-width: 1180px) {
				flex-basis: auto;
				position: relative;
				height: 53px;
			}
		}

		&-ul {
			@media (max-width: 1180px) {
				overflow: hidden;
				position: absolute;
				inset: auto 0;
				background: $c-fff;
				max-height: 53px;
				transition: 0.5s;

				&.active {
					max-height: 215px;
					box-shadow: 0 5px 15px $c-0001a;
				}
			}
		}

		&-li {
			& + & {
				border-top: 1px solid $c-96a;
			}

			@media (max-width: 1180px) {
				&__start {
					position: relative;

					::after {
						content: "";
						position: absolute;
						inset: 0;
						margin: auto 20px auto auto;
						width: 5px;
						height: 5px;
						border-top: solid $c-fff;
						border-left: solid $c-fff;
						transform: rotate(-135deg);
					}
				}
			}
		}

		&-a {
			display: block;
			padding: 18px 15px;
			letter-spacing: 0.2rem;
			line-height: 1.2;
			transition: 0.7s;

			&:hover,
			&.active {
				color: $c-fff;
				background: $c-4f6;
			}

			@media (max-width: 1180px) {
				color: $c-2f2;
				font-size: $fs-16;
				line-height: revert;
				padding: 14px 15px;
			}
		}
	}
</style>
