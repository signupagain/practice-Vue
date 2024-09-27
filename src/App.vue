<template>
	<RouterView name="header" />
	<RouterView />
	<RouterView name="footer" />
</template>
<script setup lang="ts">
	import { RouterView } from "vue-router";
	import { useClassnameObserver } from "./use/useClassnameObserver";
	import { provide } from "vue";

	provide("subscribeFrom", useClassnameObserver("from"));
</script>
