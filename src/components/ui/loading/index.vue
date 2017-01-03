<template>
	<section class="loading-comp">
		<div class="comp-img">
			<img class="loading-img" src="../../../img/loading.png" />
			<img class="logo-img" src="../../../img/logo.png" />
		</div>
		<div class="comp-desc">努力加载中...</div>
	</section>
</template>

<script>
	export default {

	}
</script>

<style>
	.loading-comp{
		text-align: center;
		.comp-img{
			position: relative;
			height: 212px;
		}
		.loading-img{
			position: absolute;
			z-index: 9;
			left: 50%;
			top:0px;
			margin-left: -52px;
			width: 208px;
			
			animation: circle linear 1s infinite;
		}
		.logo-img{
			position: absolute;
			z-index: 99;
			left: 50%;
			top: 50%;
			transform: translate(-50%, -50%);
			width: 120px;
		}

		.comp-desc{
			font-size: 30px;
			color: #999999;
			margin-top: 35px;
		}
	}

	@keyframes circle
	{
		from {transform: rotate(0deg) ;}
		to {transform: rotate(360deg);}
	}
</style>