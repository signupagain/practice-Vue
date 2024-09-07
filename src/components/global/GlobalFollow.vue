<template>
	<div class="jy-follow">
		<p class="jy-follow-p">follow us.</p>
		<ul class="jy-follow-ul">
			<li class="jy-follow-li">
				<a href="javascript://練習用網站;" class="jy-follow-a"
					><img
						src="@icon/LINE_APP_Android.png"
						alt="LINE"
						class="jy-follow-img"
				/></a>
			</li>
		</ul>
	</div>
</template>
<style lang="scss">
	.jy-follow {
		display: flex;
		gap: 20px;
		align-items: center;

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
