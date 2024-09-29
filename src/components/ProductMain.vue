<template>
	<ul class="jy-pvm-ul">
		<li class="jy-pvm-li" v-for="{ title, page } of curProducts">
			<a
				href="/"
				class="jy-pvm-a"
				@click="$router.push({ name: 'detail', params: { page } })"
			>
				<GlobalCard class="jy-card" :title />
			</a>
		</li>
	</ul>
	<hr class="jy-pvm-hr" :class="{ active: isActive }" />
	<nav class="jy-pvm-nav" :class="{ active: isActive }">
		<ul class="jy-pvm-ul">
			<li class="jy-pvm-li">
				<a
					href="/"
					class="jy-pvm-a jy-pvm-a__start"
					:class="{ active: curIndex === 0 }"
					@click.prevent="curIndex = 0"
				></a>
			</li>
			<li class="jy-pvm-li">
				<a
					href="/"
					class="jy-pvm-a jy-pvm-a__prev"
					:class="{ active: curIndex === 0 }"
					@click.prevent="curIndex--"
				></a>
			</li>
			<li class="jy-pvm-li" v-for="index of indexArr">
				<a
					href="/"
					class="jy-pvm-a"
					:class="{ active: index - 1 === curIndex }"
					v-text="index"
					@click.prevent="curIndex = index - 1"
				></a>
			</li>
			<li class="jy-pvm-li">
				<a
					href="/"
					class="jy-pvm-a jy-pvm-a__next"
					:class="{ active: curIndex === exhibiteProducts.length - 1 }"
					@click.prevent="curIndex++"
				></a>
			</li>
			<li class="jy-pvm-li">
				<a
					href="/"
					class="jy-pvm-a jy-pvm-a__end"
					:class="{ active: curIndex === exhibiteProducts.length - 1 }"
					@click.prevent="curIndex = exhibiteProducts.length - 1"
				></a>
			</li>
		</ul>
	</nav>
</template>

<script setup lang="ts">
	import { useTranslation } from "i18next-vue";
	import { computed, reactive, ref, watch } from "vue";
	import GlobalCard from "./global/GlobalCard.vue";

	const { curPage } = defineProps<{ curPage: string }>();
	const { t } = useTranslation("product");
	const menuitem = t("menuitem", { returnObjects: true });

	/* pagenation */

	const isActive = ref(false);
	const curIndex = ref(0);
	const indexArr = computed(() => {
		const target = curIndex.value;
		let max = 3;
		if (exhibiteProducts.length < max) max = exhibiteProducts.length;

		if (target === 0)
			return Array(max)
				.fill(target + 1)
				.map((v, i) => (i !== 0 ? v + i : v));

		if (target === exhibiteProducts.length - 1)
			return Array(max)
				.fill(target + 1)
				.map((v, i) => (i !== 0 ? v - i : v))
				.reverse();

		return Array(max)
			.fill(target)
			.map((v, i) => v + i);
	});
	watch(curIndex, () => scroll({ top: 400 }));

	/* product */

	const products = computed(() =>
		curPage
			? menuitem.find((obj) => obj.page === curPage)?.children
			: menuitem.map((obj) => (obj.children ? obj.children : [])).flat()
	);
	const exhibiteProducts = reactive<item[][]>([]);
	const productsPerPageCap = 9;
	const curProducts = computed(() =>
		exhibiteProducts.length === 0
			? products.value
			: exhibiteProducts[curIndex.value]
	);
	watch(
		products,
		() => {
			if (products.value!.length >= productsPerPageCap) {
				isActive.value = true;

				const allList: item[][] = [];
				const arr: item[] = [];
				products.value!.forEach((val, index) => {
					if (arr.length === productsPerPageCap) {
						allList.push([...arr]);
						arr.length = 0;
					}

					arr.push(val);

					if (index === products.value!.length - 1) {
						allList.push([...arr]);
						arr.length = 0;
					}
				});

				exhibiteProducts.push(...allList);
				return;
			}

			exhibiteProducts.length = 0;
			isActive.value = false;
		},
		{ immediate: true }
	);

	type item = {
		title: string;
		page: string;
	};
</script>

<style lang="scss">
	.jy-pvm {
		&-ul {
			display: grid;
			grid: auto-flow / 1fr 1fr 1fr;
			gap: 30px;

			@media (max-width: 1023px) {
				grid: auto-flow / 1fr 1fr;
			}

			@media (max-width: 640px) {
				grid: auto-flow / 1fr;
			}
		}

		&-a {
			display: block;
		}

		&-hr {
			display: none;

			&.active {
				display: block;
				margin: 30px 0 40px;
			}
		}

		&-nav {
			display: none;

			&.active {
				display: block;
			}
		}

		&-nav &-ul {
			display: flex;
			justify-content: center;
			gap: 10px;
		}

		&-nav &-a {
			&,
			&__start,
			&__prev,
			&__next,
			&__end {
				width: 50px;
				height: 30px;
				color: $c-666;
				font-size: $fs-15;
				text-align: center;
				border: 1px solid $c-c2c;
				border-radius: $radius-30;

				display: flex;
				justify-content: center;
				align-items: center;
			}

			&.active {
				color: $c-fff;
				background: $c-4f6;
			}

			&__start,
			&__prev,
			&__next,
			&__end {
				&.active {
					display: none;
				}
			}

			&__start::before,
			&__start::after,
			&__end::before,
			&__end::after,
			&__prev::after,
			&__next::after {
				content: "";
				width: 10px;
				height: 10px;
				border-left: 1px solid $c-9e9;
				border-top: 1px solid $c-9e9;
			}

			&__start,
			&__prev {
				&::before,
				&::after {
					transform: rotate(-45deg);
					margin-right: -3.5px;
				}
			}

			&__end,
			&__next {
				&::before,
				&::after {
					transform: rotate(135deg);
					margin-left: -3.5px;
				}
			}
		}
	}
</style>
