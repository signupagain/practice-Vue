<template>
	<RouterView name="Header" />
	<RouterView />
	<RouterView name="Footer" />
</template>
<script setup lang="ts">
	import { RouterView } from "vue-router";
</script>
