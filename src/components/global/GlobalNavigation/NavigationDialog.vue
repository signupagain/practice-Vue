<template>
	<div class="jy-nav-d">
		<nav class="jy-nav-d-nav">
			<ul class="jy-nav-d-ul">
				<li
					class="jy-nav-d-li"
					v-for="{ label, pathName: name } of t('menu', {
						returnObjects: true,
					})"
				>
					<a
						href="/"
						class="jy-nav-d-a"
						@click.prevent="router.push({ name })"
						v-text="label"
					></a>
				</li>
			</ul>
		</nav>
		<hr class="jy-nav-hr" />
		<GlobalFollow />
		<GlobalCopyright />
	</div>
</template>
<script setup lang="ts">
	import { useTranslation } from "i18next-vue";
	import { useRouter } from "vue-router";
	import GlobalCopyright from "../GlobalCopyright.vue";
	import GlobalFollow from "../GlobalFollow.vue";

	const { t } = useTranslation("nav");
	const router = useRouter();
</script>
<style lang="scss">
	.jy-nav {
		&-d {
			display: block;
			position: fixed;
			inset: $mbNavHeight 0 0;
			padding: 0 20px;
			background: $c-fff;
			visibility: hidden;

			&.active {
				visibility: visible;
			}

			&-ul {
				border-top: 15px solid transparent;
				color: $c-0d0;
				letter-spacing: 1.7px;
			}

			&-li {
				margin-bottom: 20px;
			}

			&-a {
				display: block;
				padding: 10px;
				text-align: center;
			}
		}

		&-hr {
			margin-bottom: 40px;
			border-top: 1px solid $c-ccc80;

			&::after {
				content: "";
				width: 100px;
				height: 100px;
				position: absolute;
				margin-top: -52.5px;
				margin-left: 532px;
				background: no-repeat center/contain url(@icon/logo_icon.png);
			}
		}
	}
</style>
