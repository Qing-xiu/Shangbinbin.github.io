<template>
	<section class="issue-past-page">
		<router-link class="past-item" to="/">
			<div class="item-header">
				<div class="header-hd">10000期</div>
				<div class="header-ft">
					开奖时间: <span class="primary">2015-02-02 88:88:88</span>
				</div>
			</div>
			<div class="item-wrapper">
				<div class="wrapper-hd">
					<img src="http://wdwd-prod.wdwdcdn.com/5530f1913265e.jpg?imageView2/1/w/150/h/150" alt="" class="img">
				</div>
				<div class="wrapper-bd">
					<div>本期得主: <span class="primary">张三丰</span></div>
					<div>幸运号码: <span class="secondary">1000086</span></div>
					<div>参与次数: <span class="secondary">10</span>次</div>
				</div>
				<div class="wrapper-ft">
					<i class="iconfont">&#xe604;</i>
				</div>
			</div>
		</router-link>
	</section>
</template>

<script>
	export default {

	}
</script>

<style>
	@import "vars.css";

	.issue-past-page{
		.past-item{
			border-top: 1px solid #ddd;
			border-bottom: 1px solid #ddd;
			background: #fff;
			padding-left: 50px;
			display: block;
			margin-top: 20px;
		}

		.item-header{
			display: flex;
			align-items: center;
			line-height: 82px;
			padding-right: 20px;
			border-bottom: 1px solid #f2f2f2;
		}
		.header-hd{
			font-size: 26px;
			color: #999;
			flex:1;
		}
		.header-ft{
			font-size: 24px;
			color: #999;
			.primary{
				color: #333;
			}
		}

		.item-wrapper{
			display: flex;
			align-items: center;
			padding-right: 30px;
			height: 218px;
		}

		.wrapper-hd{
			font-size: 0px;
		}

		.img{
			width: 150px;
			height: 150px;
			border-radius: 50%;
			border-radius: 1px solid #f5f5f5;
		}
		.wrapper-bd{
			margin-left: 16px;
			font-size: 26px;
			color: #999;
			line-height: 45px;
			flex:1;
			.primary{
				color: $color_primary;
			}

			.secondary{
				color: #333;
			}
		}
		.wrapper-ft{
			.iconfont{
				color: #e8e8e8;
				font-size: 30px;
			}
		}
	}
</style>