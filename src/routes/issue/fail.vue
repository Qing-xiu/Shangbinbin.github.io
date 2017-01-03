<template>
	<section class="page fail-page">
		<div class="page-icon">
			<i class="iconfont">&#xe606;</i>
		</div>
		<div class="page-title">本期剩余欢乐号不足</div>
		<div class="page-desc">支付金额已自动经存入您的悟空币账户</div>
		<btns>
			<btn type="primary">去参与下一期</btn>
			<btn>返回首页</btn>
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
	.fail-page{
		background: #fff;

		.page-icon{
			text-align: center;
			margin-top: 84px;
		}

		.iconfont{
			font-size: 115px;
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

