<template>
	<section class="page order-success-page">
		<nav-bar>参与成功，获得欢乐号</nav-bar>

		<div class="num-panel">
			<div class="icon-box">
				<i class="iconfont">&#xe631;</i>
			</div>

			<div class="num-list">
				<div class="num-item"><b>1000586</b></div>
				<div class="num-item"><b>1000586</b></div>
				<div class="num-item"><b>1000586</b></div>
				<div class="num-item"><b>1000586</b></div>
			</div>

			<div class="list-desc">共20个欢乐号，上滑查看更多...</div>
			<div class="num-desc">满额后立即开奖，请等待系统为您揭晓</div>
		</div>

		<div class="btns-panel">
			<btns>
				<btn type="primary">继续逛逛</btn>
				<btn>查看详情</btn>
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
	.order-success-page{
		background: #ffae00;
		padding-top: 90px;
		box-sizing: border-box;

		.nav-bar-comp{
			background: #ffae00;
			border-bottom: none;
			color: #fff;
			.go-back .iconfont{
				color: #fff
			}
		}

		.num-panel{
			position: relative;
			margin: 50px 46px 0;
			background: #fff;
			border-radius: 10px 10px 0 0;
			padding-top: 95px;
			padding-bottom: 30px;
			border-bottom: 1px dashed #edecec
		}

		.icon-box{
			position: absolute;
			z-index: 99;
			left: 50%;
			top:-50px;
			transform: translate(-50%, 0);
			background: #ffae00;
			border-radius: 50%;
			border: 8px solid #fff;
			width: 84px;
			height: 84px;
			text-align: center;
			line-height: 84px;
			font-size: 0px;

			.iconfont{
				font-size: 60px;
				color: #fff;
			}
		}

		.num-list{
			max-height: 590px;
			overflow:auto;
			-webkit-overflow-scrolling: touch;
		}

		.num-item{
			text-align: center;
			font-size: 116px;
			color: #ffae00;
			&:not(:last-child){
				margin-bottom: 30px;
			}
		}

		.list-desc{
			font-size: 26px;
			color: #ffae00;
			text-align: center;
			margin-top: 20px;
		}
		.num-desc{
			font-size: 24px;
			color: #c7c7c7;
			text-align: center;
			margin-top: 45px;
			
		}

		.btns-panel{
			position: relative;
			background: #fff;
			padding: 60px 50px;
			margin: 0 46px;
			border-radius: 0 0 10px 10px;

			&:before, &:after{
				content: '';
				position:absolute;
				z-index: 99;
				width: 30px;
				height: 30px;
				border-radius: 50%;
				background: #ffae00;
				top: -15px;
			}
			&:before{
				left: -15px;
			}
			&:after{
				right: -15px;
			}

		}
	}
</style>