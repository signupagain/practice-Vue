<template>
	<div class="jy-nav__wrap">
		<div class="jy-nav">
			<GlobalLogo is-h1 is-on-home />
			<div class="jy-nav-x">
				<NavigationMenu />
				<NavigationLang />
			</div>
		</div>
	</div>
</template>
<script setup lang="ts" name="GlobalNavigation">
	import GlobalLogo from "../GlobalLogo.vue";
	import NavigationLang from "./NavigationLang.vue";
	import NavigationMenu from "./NavigationMenu.vue";
</script>
<style lang="scss">
	.jy-nav {
		&__wrap {
			position: fixed;
			inset: 0 0 auto;
			z-index: 3;
			margin: 0 auto;
			max-width: $viewMaxWidth;
			user-select: none;
		}

		margin-left: 20px;
		padding-left: 30px;
		border-bottom-left-radius: $radius;
		background: $c-fff;
		box-shadow: 0 0 15px $c-0001a;

		display: flex;
		justify-content: space-between;
		align-items: center;

		@media (max-width: 1180px) {
			margin-left: initial;
			padding-left: 20px;
			border-bottom-left-radius: initial;
		}

		&-x {
			display: flex;
			gap: 30px;
			font-size: $fs-17;

			@media (max-width: 1210px) {
				gap: 5px;
			}

			@media (max-width: 1180px) {
				flex-direction: row-reverse;
				gap: 0;
			}
		}
	}
</style>
