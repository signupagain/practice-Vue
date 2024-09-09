<template>
	<div class="jy-follow">
		<p class="jy-follow-p" v-text="t('apps.follow')"></p>
		<ul class="jy-follow-ul">
			<li
				class="jy-follow-li"
				v-for="{ logo: src, vendor: alt } of t('apps.list', {
					returnObjects: true,
				})"
			>
				<a
					href="javascript:console.log('GlobalFollow觸發Teleport')"
					class="jy-follow-a"
					><img :src :alt class="jy-follow-img"
				/></a>
			</li>
		</ul>
	</div>
</template>
<script setup lang="ts">
	import { useTranslation } from "i18next-vue";

	const { t } = useTranslation("common");
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
