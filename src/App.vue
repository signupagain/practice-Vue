<template>
	<RouterView name="Header" />
	<RouterView />
</template>
<script setup lang="ts">
	import { provide } from "vue";
	import { RouterView } from "vue-router";
	import { clientDataRequest, navigationDataRequest } from "@/api/requests";

	provide("ClientData", clientDataRequest());
	provide("NavigationData", navigationDataRequest());
</script>
