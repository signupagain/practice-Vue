<template>
	<HomeAbout class="jy-ha" />
	<HomeCore class="jy-hc" />
	<HomeService class="jy-hs" />
	<HomeContactUs class="jy-hcu" />
</template>
<script setup lang="ts">
	import HomeAbout from "./HomeAbout.vue";
	import HomeContactUs from "./HomeContactUs.vue";
	import HomeCore from "./HomeCore.vue";
	import HomeService from "./HomeService.vue";
</script>
<style lang="scss">
	.jy {
		&-hc + &-hs {
			margin-top: 104px;
		}
	}
</style>
