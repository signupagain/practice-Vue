<template>
	<div class="jy-cuv">
		<main class="jy-cuv-main">
			<ContactForm />
		</main>
		<aside class="jy-cuv-aside">
			<iframe
				class="jy-cuv-map"
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4330.0292011777965!2d120.70334477561484!3d24.132914129940808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693d70e251d673%3A0x199fb6db9c15859b!2z5LmF5YWB6J6657Wy5pyJ6ZmQ5YWs5Y-4!5e0!3m2!1szh-TW!2stw!4v1726802633754!5m2!1szh-TW!2stw"
				style="border: 0"
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"
			></iframe>
			<GlobalInfo />
		</aside>
	</div>
</template>

<script setup lang="ts">
	import ContactForm from "@/components/ContactForm.vue";
	import GlobalInfo from "@/components/global/GlobalInfo.vue";
</script>

<style lang="scss">
	.jy-cuv {
		width: 82vw;
		margin: 100px auto 60px;
		display: flex;
		justify-content: center;
		gap: 50px;

		@media (max-width: 1023px) {
			flex-flow: column;
		}

		&-main {
			flex-basis: 66%;
		}

		&-aside {
			flex-basis: 33%;

			display: flex;
			flex-flow: column;
			gap: 20px;
		}

		&-map {
			aspect-ratio: 1.9;
		}
	}
</style>
