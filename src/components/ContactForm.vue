<template>
	<p class="jy-cuvf-p" v-text="t('description')"></p>
	<hr class="jy-cuvf-hr" />
	<form class="jy-cuvf-form" novalidate @submit.prevent="onSubmit">
		<div class="jy-cuvf-div jy-cuvf-type">
			<label
				for="type"
				class="jy-cuvf-label"
				v-text="t('formtype.title')"
			></label
			><select class="jy-cuvf-input jy-cuvf-select" name="type" id="type">
				<option
					class="jy-cuvf-option"
					v-for="(value, index) of t('formtype.options', {
						returnObjects: true,
					})"
					:value="index === 0 ? '' : value"
					v-text="value"
				></option>
			</select>
		</div>
		<div class="jy-cuvf-div jy-cuvf-name">
			<label
				for="name"
				class="jy-cuvf-label jy-cuvf-required"
				v-text="t('name')"
			></label
			><input
				class="jy-cuvf-input"
				name="name"
				id="name"
				type="text"
				required
			/>
			<div class="jy-cuvf-sex">
				<template
					v-for="(key, value, index) of t('gender', { returnObjects: true })"
				>
					<input
						type="radio"
						class="jy-cuvf-radio"
						name="gender"
						:id="key"
						:value
						:checked="index === 0"
					/><label :for="key" class="jy-cuvf-label" v-text="key"></label>
				</template>
			</div>
		</div>
		<div class="jy-cuvf-div jy-cuvf-email">
			<label
				for="email"
				class="jy-cuvf-label jy-cuvf-required"
				v-text="t('email')"
			></label
			><input
				type="text"
				class="jy-cuvf-input"
				id="email"
				name="email"
				required
			/>
		</div>
		<div class="jy-cuvf-div jy-cuvf-tel">
			<label for="tel" class="jy-cuvf-label" v-text="t('tel.title')"></label
			><input
				type="text"
				class="jy-cuvf-input"
				id="tel"
				name="tel"
				pattern="\d{10}"
			/>
			<p class="jy-cuvf-p" v-text="t('tel.example')"></p>
		</div>
		<div class="jy-cuvf-div jy-cuvf-mob">
			<label
				for="mobile"
				class="jy-cuvf-label jy-cuvf-required"
				v-text="t('mobile.title')"
			></label
			><input
				type="text"
				class="jy-cuvf-input"
				id="mobile"
				name="mobile"
				required
				pattern="\d{10}"
			/>
			<p class="jy-cuvf-p" v-text="t('mobile.example')"></p>
		</div>
		<div class="jy-cuvf-div jy-cuvf-need">
			<label
				for="need"
				class="jy-cuvf-label jy-cuvf-required"
				v-text="t('need')"
			></label
			><textarea
				name="need"
				id="need"
				class="jy-cuvf-textarea"
				required
			></textarea>
		</div>
		<div class="jy-cuvf-div">
			<GlobalAnchor :text="t('submit')" />
		</div>
	</form>
</template>

<script setup lang="ts">
	import { useTranslation } from "i18next-vue";
	import GlobalAnchor from "./global/GlobalAnchor.vue";
	import { contactFormRequest } from "@/api/request";

	const { t } = useTranslation("contact");
	async function onSubmit(e: Event) {
		const el = e.target as HTMLFormElement;
		const inputs = el.querySelectorAll("[name]");
		inputs.forEach((el) => el.classList.add("valid"));

		if (el.checkValidity && el.checkValidity()) {
			const formData = new FormData(el);
			console.log(typeof formData);
			const result = await contactFormRequest(formData);
			console.log(`trigger Teleport and send ${JSON.stringify(result.data)}`);
		}
	}
</script>

<style lang="scss">
	.jy-cuvf {
		&-hr {
			margin: 20px 0 25px;
		}

		&-form {
			display: grid;
			grid: auto-flow / 1fr 1fr;
			gap: 30px 20px;

			font-size: $fs-16;
			color: $c-2f2;
			overflow: hidden;

			& .valid:invalid {
				border-color: red;
			}

			@media (max-width: 960px) {
				display: flex;
				flex-flow: column;
			}
		}

		&-div {
			display: flex;
			flex-flow: column;
			gap: 10px;
		}

		&-div &-p {
			color: $c-999;
			font-size: $fs-14;
			line-height: 1.5;
			letter-spacing: 0.02rem;
		}

		&-div .jy-a {
			transition: 0.5s;
			@media (max-width: 480px) {
				width: 100%;
			}
		}

		&-label {
			font-weight: 500;
			line-height: 1.25;
			letter-spacing: 0.2rem;
		}

		&-required {
			&::before {
				content: "*";
				color: $c-f00;
				position: absolute;
				margin-left: -0.8em;
			}
		}

		&-type {
			grid-area: 1/1/2/3;
		}

		&-input {
			height: 45px;
			font-size: inherit;
			padding: 0 10px;
			border: 1px solid $c-96a;
			border-radius: $radius-3;
		}

		&-name {
			display: grid;
			grid: auto-flow / auto 1fr;
		}

		&-name &-input {
			order: 1;
			grid-area: 2 / 1 / 3 / 3;
		}

		&-sex {
			display: flex;
			gap: 5px;
		}

		&-radio {
			position: relative;
			appearance: none;
			width: 15px;
			height: 15px;

			&::before {
				border: 1px solid $c-cec;
			}

			&::after {
				width: 48%;
				height: 48%;
				margin: auto;
				background: transparent;
			}

			&:checked::after {
				background: $c-333;
			}

			&::before,
			&::after {
				content: "";
				position: absolute;
				inset: 0;
				border-radius: 50%;
			}
		}

		&-radio + &-label {
			font-size: $fs-15;
			font-weight: 400;
		}

		&-need {
			grid-area: 4 / 1 / 5 / 3;
		}

		&-textarea {
			resize: vertical;
			height: 200px;
			padding: 10px;
			border: 1px solid $c-96a;
			border-radius: $radius-3;
			color: $c-737;
			font-size: $fs-16;
			font-weight: 500;
			font-family: "Noto Sans TC", "Microsoft JhengHei", sans-serif;
		}
	}
</style>
