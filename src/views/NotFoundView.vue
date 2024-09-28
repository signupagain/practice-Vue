<template>
	<div class="jy-notfound">
		<p class="jy-notfound-p" v-text="t('sentence1')"></p>
		<p class="jy-notfound-p">
			<span class="jy-notfound-span" v-text="t('sentence2')"></span
			><a
				href="/"
				class="jy-notfound-a"
				v-text="t('link.word')"
				@click.prevent="$router.push({ name: t('link.name') })"
			></a
			><span class="jy-notfound-span" v-text="t('sentence3')"></span>
		</p>
	</div>
</template>

<script setup lang="ts">
	import { useTranslation } from "i18next-vue";

	const { t } = useTranslation("notfound");
</script>

<style lang="scss">
	.jy-notfound {
		padding: 100px 0;
		text-align: center;

		&-p {
			color: $c-4f6;
			font-size: $fs-28;
			font-weight: 500;
			line-height: 1.5;
		}

		&-a {
			color: $c-96a;
		}
	}
</style>
