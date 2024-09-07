<template>
	<a href="/" class="jy-logo" :class="{ active }" title="久允螺絲">
		<img :src="logo" alt="久允螺絲" class="jy-logo-img" :class="{ active }" />
		<h1 v-if="isOnHome && active" class="jy-logo-name" :class="{ active }">
			久允螺絲
		</h1>
		<span v-if="!active" class="jy-logo-name">久允螺絲</span>
	</a>
</template>
<script setup lang="ts">
	import logo from "/public/images/logo.svg";

	withDefaults(
		defineProps<{
			active?: boolean;
			isOnHome?: boolean;
		}>(),
		{
			active: false,
			isOnHome: false,
		}
	);
</script>
<style lang="scss">
	.jy-logo {
		display: flex;
		align-items: center;
		gap: 15px;

		&.active {
			display: grid;
			place-items: center;
			overflow: hidden;
		}

		&-img {
			width: 60px;

			@media (max-width: 1204px) {
				&.active {
					width: 50px;
				}
			}
		}

		&-name {
			color: $c-333;
			font-size: $fs-20;
			font-weight: 500;
			letter-spacing: 1px;
		}

		&-name.active {
			color: transparent;
			font-size: $fs-12;
		}

		&-img.active,
		&-name.active {
			grid-area: 1/1/2/2;
		}
	}
</style>
