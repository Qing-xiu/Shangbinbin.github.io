<template>
	<section class="page my-deposit-page">
		<nav-bar>悟空币充值</nav-bar>
		<div class="detail-panel">
			<div class="panel-title">悟空币余额（个）</div>
			<div class="panel-desc">29.00</div>
			<router-link class="panel-link" to="/my/bills">查看明细</router-link>
		</div>

		<div class="select-title">
			<span class="title-content">选择充值个数</span>
		</div>

		<div class="select-panel">
			<div class="item">
				<btn size="h70">充 10 个</btn>
			</div>
			<div class="item">
				<btn size="h70">充 20 个</btn>
			</div>
			<div class="item">
				<btn size="h70">充 50 个</btn>
			</div>
		</div>

		<div class="select-panel">
			<div class="item">
				<btn size="h70">充 100 个</btn>
			</div>
			<div class="item">
				<btn size="h70">充 200 个</btn>
			</div>
			<div class="item">
				<btn size="h70">充 500 个</btn>
			</div>
		</div>
		<div class="btns">
			<btn type="primary">立即充值</btn>
		</div>
	</section>
</template>

<script>
	import NavBar from 'components/nav_bar.vue'
	import Btn from 'components/ui/btn/index.vue'
	export default {
		components: {
			NavBar,
			Btn
		}
	}
</script>

<style>
	.my-deposit-page{
		background: #fff;
		padding-top: 91px;
		.detail-panel{
			background: #ffc445;
			padding: 0 30px;
			height: 210px;
			position: relative;
			overflow:hidden;


			.panel-title{
				font-size: 26px;
				color: #fff;
				margin-top: 50px;
			}

			.panel-desc{
				color: #fff;
				font-size: 77px;
				margin-top: 25px;
			}

			.panel-link{
				color: #fff;
				border: 1px solid #fff;
				position: absolute;
				z-index:9;
				right: 30px;
				bottom: 40px;
				font-size: 24px;
				width: 140px;
				text-align: center;
				line-height: 37px;
				border-radius: 37px;
			}
		}
		.select-title{
			font-size: 22px;
			color: #cecdcd;
			text-align: center;
			padding: 0 30px;
			position: relative;
			height: 22px;
			line-height: 22px;	
			margin-top: 45px;
			.title-content{
				position: absolute;
				padding: 0 16px;
				background: #fff;
				z-index:99;
				left: 50%;
				top:0px;
				transform: translate(-50%, 0);
			}
			&:before{
				content: '';
				position:absolute;
				z-index:2;
				left:30px;
				right: 30px;
				height: 1px;
				background: #cecdcd;
				top: 50%;
				transform: translate(0, -50%);
			}
		}

		.select-panel{
			margin-top: 40px;
			display: flex;
			padding: 0 30px;
			align-items:center;
			justify-content: space-between;

			.item{
				width: 195px;
				
			}
			.wk-btn{
				color: #999;
			}
		}

		.btns{
			padding: 0 30px;
			position: fixed;
			bottom:40px;
			left:0px;
			right:0px;
		}

	}
</style>