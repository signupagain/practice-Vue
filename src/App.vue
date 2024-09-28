<template>
	<RouterView name="header" />
	<RouterView />
	<RouterView name="footer" />
	<MyIntro />
</template>
<script setup lang="ts">
	import { RouterView } from "vue-router";
	import { useClassnameObserver } from "./use/useClassnameObserver";
	import { provide } from "vue";
	import MyIntro from "./components/MyIntro.vue";

	provide("subscribeFrom", useClassnameObserver("from"));
</script>
