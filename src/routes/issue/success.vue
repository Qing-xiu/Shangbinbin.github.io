<template>
	<section class="page issue-success-page">
		<div class="page-icon">
			<i class="iconfont">&#xe603;</i>
		</div>
		<div class="page-title">参与成功，获得欢乐号</div>
		<div class="page-desc">满额后立即开奖，请等待系统为您揭晓</div>
		<btns>
			<btn type="primary">查看欢乐号</btn>
			<btn>继续逛逛</btn>
		</btns>
	</section>
</template>

<script>
	import Btn from 'components/ui/btn/index.vue'
	import Btns from 'components/ui/btns/index.vue'

	export default {
		components: {
			Btn, 
			Btns
		}
	}
</script>

<style>
	.issue-success-page{
		background: #fff;

		.page-icon{
			text-align: center;
			margin-top: 84px;
		}

		.iconfont{
			font-size: 115px;
			color: #ffae00;
		}

		.page-title{
			text-align: center;
			font-size: 48px;
			color: #333;
			margin-top: 35px;
		}
		.page-desc{
			font-size: 30px;
			color: #b4b3b3;
			text-align: center;
			margin-top: 20px;
			margin-bottom: 60px;
		}
	}
</style>

