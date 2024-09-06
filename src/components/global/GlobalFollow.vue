<template>
	<div class="jy-follow">
		<p class="jy-follow-p">follow us.</p>
		<ul class="jy-follow-ul">
			<li
				class="jy-follow-li"
				v-for="{ path: href, logo: src, name: alt } of apps"
			>
				<a :href class="jy-follow-a"><img :src :alt class="jy-follow-img" /></a>
			</li>
		</ul>
	</div>
</template>
<script setup lang="ts">
	import type { ClientData } from "@/api/types/clientData";
	import type { AxiosResponse } from "axios";
	import { inject, ref } from "vue";

	const apps = ref();
	inject<Promise<AxiosResponse<ClientData>>>("ClientData")?.then(
		(res) => (apps.value = res.data.apps)
	);
</script>
<style lang="scss">
	.jy-follow {
		display: flex;
		align-items: center;
		gap: 20px;

		&-p {
			color: $c-8c8;
			font-size: $fs-15;
			font-weight: 500;
			letter-spacing: 1px;
		}

		&-ul {
			display: flex;
			align-items: center;
			gap: 10px;
			margin-left: 5px;
		}

		&-a {
			display: block;
			width: 40px;
			height: 40px;
		}

		&-img {
			width: inherit;
			height: inherit;
			object-fit: contain;
		}
	}
</style>
