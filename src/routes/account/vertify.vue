<template>
	<section class="page account-vertify-page">
		<nav-bar></nav-bar>
		<div class="page-title">短信验证码已发送，请输入验证码</div>

		<div class="mobile-desc">136 9999 8888</div>

		<div class="input-cell">
			<div class="cell-hd">
				<input class="mobile-input" placeholder="请输入验证码" type="text" name="">
			</div>
			<i class="iconfont cell-ft">&#xe610;</i>
		</div>

		<div class="btns-action">
			<btns>
				<btn type="primary">下一步</btn>
			</btns>
		</div>

		<div v-if="countDown > 0" class="code-message">{{countDown}}秒后重新发送</div>
		<div v-else class="send-btn">重发验证码</div>

	</section>
</template>

<script>
	import NavBar from 'components/nav_bar.vue'
	import Btns from 'components/ui/btns/index.vue'
	import Btn from 'components/ui/btn/index.vue'

	export default {
		data () {
			return {
				countDown: 60
			}
		},	
		components: {
			NavBar,
			Btns,
			Btn
		},
		mounted (){
			let timer

			timer = setInterval(() => {
				this.countDown -= 1
				if (this.countDown == 0) {
					clearInterval(timer)
				}
			}, 1000)
		}
	}
</script>	

<style>
	.account-vertify-page{
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
			padding: 0 85px;
		}

		.mobile-desc{
			text-align: center;
			color: #d2d2d2;
			font-size: 36px;
			margin-top: 36px;
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

		.code-message{
			color: #999999;
			font-size: 26px;
			text-align: center;
			margin-top: 45px;
		}

		.send-btn{
			font-size: 26px;
			color: #ff9359;
			text-align: center;
			margin-top: 45px;
		}
	}
</style>