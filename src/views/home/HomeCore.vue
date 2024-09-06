<template>
	<div class="jy-hc">
		<HomeHeading
			class="jy-hhg"
			title-tag="h2"
			:words="['CORE', 'COMPTENCES']"
			center
		/>
		<HomeCoreCarousel />
	</div>
</template>
<script setup lang="ts">
	import HomeHeading from "@/components/home/HomeHeading.vue";
	import HomeCoreCarousel from "@/components/home/HomeCoreCarousel.vue";
</script>
<style lang="scss">
	.jy {
		&-hc {
			height: 915px;

			@media (max-width: 640px) {
				height: 640px;
			}
		}

		&-hc &-hhg {
			position: absolute;
			z-index: 2;
			inset: auto 0;
			margin: 8% auto 0;
		}
	}
</style>
