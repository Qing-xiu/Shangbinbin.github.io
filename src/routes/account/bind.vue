<template>
	<section class="page account-bind-page">
		<nav-bar></nav-bar>
		<div class="page-title">绑定手机号，以接受中奖通知</div>

		<div class="input-cell">
			<div class="cell-hd">
				<input class="mobile-input" placeholder="请输入手机号" type="text" name="">
			</div>

			<i class="iconfont cell-ft">&#xe610;</i>
		</div>

		<div class="btns-action">
			<btns>
				<btn type="primary">下一步</btn>
			</btns>
		</div>
	</section>
</template>

<script>
	import NavBar from 'components/nav_bar.vue'
	import Btns from 'components/ui/btns/index.vue'
	import Btn from 'components/ui/btn/index.vue'

	export default {
		components: {
			NavBar,
			Btns,
			Btn
		}
	}
</script>	

<style>
	.account-bind-page{
		padding-top: 91px;
		background: #fff;
		.nav-bar-comp{
			background: #fff;
			border-bottom: none;
		}

		.page-title{
			font-size: 48px;
			color: #000;
			text-align: center;
			margin-top: 40px;
		}

		.input-cell{
			display: flex;
			align-items: center;
			border-bottom: 1px solid #ebebeb;
			border-top: 1px solid #ebebeb;
			height: 98px;
			padding: 0 30px;
			margin-top: 60px;

		}
		.cell-hd{
			flex:1;
		}
		.mobile-input{
			width: 100%;
			font-size: 36px;
			color: #000;
		}

		.cell-ft{
			font-size: 27px;
			color: #cccccc;
		}

		.btns-action{
			margin-top: 70px;
		}
	}
</style>