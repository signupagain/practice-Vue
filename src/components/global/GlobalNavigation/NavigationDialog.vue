<template>
	<div class="jy-nav-d">
		<ul class="jy-nav-d-ul">
			<li class="jy-nav-d-li" v-for="value of list">
				<a href="/" class="jy-nav-d-a">{{ value }}</a>
			</li>
		</ul>
		<hr class="jy-nav-hr" />
		<GlobalFollow />
		<GlobalCopyright />
	</div>
</template>
<script setup lang="ts">
	defineProps<{
		list: {
			value:string;
			href:string;
		}[];
	}>();
</script>
<style lang="scss">
	.jy-nav {
		&-d {
			display: none;

			@media (max-width: 1180px) {
				display: block;
				position: fixed;
				inset: $mbNavHeight 0 0;
				padding: 0 20px;
				background: $c-fff;
				visibility: hidden;
				&.active {
					visibility: visible;
				}
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
