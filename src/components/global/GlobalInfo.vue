<template>
	<address class="jy-info">
		<dl class="jy-info-dl">
			<template v-for="(val, key) of t('info', { returnObjects: true })">
				<dt class="jy-info-dt" v-bind="{ [`data-${key}`]: '' }">
					<span class="jy-info-span" v-text="`${key}.`"></span>
				</dt>
				<dd class="jy-info-dd" v-text="val"></dd>
			</template>
		</dl>
	</address>
</template>
<script setup lang="ts">
	import { useTranslation } from "i18next-vue";

	const { t } = useTranslation("common");
</script>
<style lang="scss">
	.jy-info {
		font-style: normal;

		&-dl {
			display: grid;
			grid: auto-flow / auto auto;

			@media (max-width: 400px) {
				grid: auto-flow / auto;
			}
		}

		&-dt {
			display: flex;
			align-items: center;
			gap: 5px;
			font-size: $fs-17;

			&::before {
				content: "";
				width: 20px;
				height: 20px;
			}
		}

		&-span::first-letter {
			text-transform: uppercase;
		}

		&-dd {
			white-space: nowrap;
			text-indent: -1.2rem;
		}
	}

	[data-add]::before {
		background: url("@icon/add.png");
	}

	[data-tel]::before {
		background: url("@icon/tel.png");
	}

	[data-fax]::before {
		background: url("@icon/fax.png");
	}

	[data-email]::before {
		background: url("@icon/mail.png");
	}
</style>
