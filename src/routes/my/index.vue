<template>
	<section class="page my-index-page">
		<header class="my-header">
			<router-link to="/settings" class="setting-link">
				<i class="iconfont">&#xe608;</i>
			</router-link>
			<div class="my-header-title">宋仲基</div>
			<div class="my-header-avatar">
				<img class='img' src="http://wdwd-prod.wdwdcdn.com/5822c48380f4f.jpg?imageView2/1/w/140/h/140" alt="">
			</div>
			<router-link to="/my/deposit" class="my-header-wk">
				<div class="wk-hd">
					<i class="iconfont">&#xe60b;</i>
				</div>
				<div class="wk-bd">
					悟空币: 0 个
				</div>
				<i class="iconfont arrow-icon">&#xe604;</i>
			</div>
		</header>
		<nav class="nva-list">
			<router-link to="/my" class="item">
				<span class="item-content" :class="{current: current == 'order'}">全部参与</span>
			</router-link>
			<router-link to="/my/win" class="item" >
				<span class="item-content" :class="{current: current == 'win'}">中奖记录</span>
			</router-link>
		</nav>
		<div class="reorder-sec">
			<router-view></router-view>	
		</div>
		<tab-bar current="my"></tab-bar>
	</section>
</template>

<script>
	import TabBar from 'components/tab_bar.vue'

	export default {
		computed: {
			current () {
				if (/win/.test(this.$route.path)) {
					return 'win'
				}

				return 'order'
			}
		},
		components: {
			TabBar
		}
	}
</script>

<style>
	.my-index-page{
		position: relative;

		.my-header{
			height: 425px;
			overflow: hidden;
			background: #ff8544;
			position: relative;
		}

		.setting-link{
			position: absolute;
			z-index:9;
			padding:20px 30px;
			right: 0px;
			color: #fff;
			.iconfont{
				font-size: 35px;
			}
		}

		.my-header-title{
			font-size: 30px;
			color: #fff;
			margin-top: 20px;
			text-align: center;
		}
		.my-header-avatar{
			font-size: 0px;
			text-align: center;
			margin-top: 25px;
			.img{
				border: 1px solid #fff;
				border-radius: 50%;
				width: 138px;
				height: 138px;
			}
		}
		.my-header-wk{
			height: 100px;
			width: 510px;
			margin: 44px auto 0;
			border: 2px solid #f97027;
			border-radius: 100px;
			background: #ff9861;
			display: flex;
			align-items:center;
			justify-content: center;
			position: relative;
		}

		.wk-hd{
			position: relative;
			width: 66px;
			height: 66px;
			border-radius: 50%;
			background: #ffc212;

			&:before{
				position:absolute;
				content: '';
				z-index:2;
				border-radius: 50%;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
			}

			&:before{
				width: 54px;
				height: 54px;
				background: #ffe857;
			}

			.iconfont{
				font-size: 30px;
				color: #ffc212;
				position: absolute;
				z-index:5;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
			}
		}

		.wk-bd{
			font-size: 34px;
			color: #ffe857;
			margin-left: 13px;
		}

		.arrow-icon{
			color: #f97027;
			position: absolute;
			z-index:9;
			top:50%;
			right: 36px;
			font-size: 27px;
			transform: translate(0, -50%);

		}
		.nva-list{
			height: 95px;
			line-height: 95px;
			background: #fff;
			border-bottom: 1px solid #ddd;
			display: flex;
			align-items: center;
			.item{
				flex:1;
				text-align: center;
				height: 100%;
				font-size: 0px;
				position: relative;
				&:not(:last-child){
					&:before{
						position:absolute;
						content: '';
						right: 0px;
						top:50%;
						transform: translate(0, -50%);
						width: 1px;
						background: #ddd;
						height: 72px;
					};
				};
			}
			.item-content{
				display: inline-block;
				height: 100%;
				font-size: 34px;
				color: #333333;
				padding: 0 20px;
				box-sizing: border-box;
				&.current{
					border-bottom: 3px solid #ff7f3a;
				}
			}
		}

		.reorder-sec{
			position: absolute;
			z-index: 9;
			top: 521px;
			bottom: 100px;
			left:0px;
			right: 0px;
			overflow: auto;
			-webkit-overflow-scolling: touch;
		}
	}
</style>