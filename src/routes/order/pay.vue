<template>
	<section class="page order-pay-page">
		<nav-bar>支付</nav-bar>

		<div class="order-title">需要悟空币</div>
		<div class="order-desc">5个</div>

		<div class="cells-title">选择支付方式</div>
		<div class="pay-cells">
			<div class="cell">
				<div class="cell-hd">
					<div class="wk-icon">
						<i class="iconfont">&#xe60b;</i>
					</div>
				</div>
					
				<div class="cell-title">悟空币</div>
				<div class="cell-desc">余额：<span class="primary">200</span>个</div>
				<i class="iconfont cell-ft">&#xe62e;</i>
			</div>
			<div class="cell checked">
				<div class="cell-hd">
					<i class="iconfont wxpay-icon">&#xe62a;</i>
				</div>
				<div class="cell-title">微信支付</div>
				<div class="cell-desc"></div>
				<i class="iconfont cell-ft">&#xe603;</i>
			</div>
		</div>
		<div class="cells-footer">需支付：<span class="primary">5元</span></div>

		<btns>
			<btn type="primary">立即支付</btn>
		</btns>
	</section>
</template>

<script>
	import Btns from 'components/ui/btns/index.vue'
	import Btn from 'components/ui/btn/index.vue'
	import NavBar from 'components/nav_bar.vue'

	export default {
		components: {
			NavBar,
			Btns,
			Btn
		}
	}
</script>

<style>
	.order-pay-page{
		padding-top: 91px;

		.order-title{
			font-size: 26px;
			color: #999;
			text-align: center;
			margin-top: 80px;
		}

		.order-desc{
			text-align: center;
			font-size: 100px;
			color: #333;
			margin-top: 35px;
			margin-bottom: 40px;
		}

		.cells-title{
			text-indent: 50px;
			font-size: 24px;
			color: #999;
			line-height: 80px;
		}
		.pay-cells{
			background: #fff;
			padding-left: 50px;
			border-top: 1px solid #ddd;
			border-bottom: 1px solid #ddd;
		}

		.cell{
			display: flex;
			align-items: center;
			height: 95px;
			padding-right: 36px;
			&:not(:last-child){
				border-bottom: 1px solid #ddd
			}
			&.checked{
				.cell-ft{
					color: #ff7f3a;
				}
			}
		}

		.wk-icon{
			width: 46px;
			height: 46px;
			line-height: 46px;
			border-radius: 50%;
			border: 5px solid #ffc212;
			background: #ffe857;
			text-align: center;
			font-size: 0px;
			.iconfont{
				color: #ffc212;
				font-size: 28px;
			}
		}
		.cell-title{
			
			font-size: 32px;
			color: #333;
		}
		.cell-desc{
			margin-left: 28px;
			font-size: 24px;
			color:#b1b1b1;
			flex:1;
			.primary{
				color: #ffc212;
			}
		}
		.cell-ft{
		
			font-size: 40px;
			color: #dfdfdf;
			
		}

		.cell-hd{
			width: 70px;
		}

		.wxpay-icon{
			
			font-size: 55px;
			color: #00c800;
		}

		.cells-footer{
			text-indent: 50px;
			font-size: 26px;
			color: #999;
			line-height: 80px;
			.primary{
				color: #ff5a00;
			}
		}
	}
</style>