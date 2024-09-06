<template>
	<HomeAbout class="jy-ha" />
	<HomeCore class="jy-hc" />
	<HomeService class="jy-hs" />
</template>
<script setup lang="ts">
	import HomeAbout from "./HomeAbout.vue";
	import HomeCore from "./HomeCore.vue";
	import HomeService from "./HomeService.vue";
</script>
<style lang="scss">
	.jy {
		&-hc + &-hs {
			margin-top: 120px;
		}
	}
</style>
