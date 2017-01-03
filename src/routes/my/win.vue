<template>
	<section class="my-win-page">
		<div class="win-list">
			<router-link to="/product/123" class="item">
				<div class="item-header">
					<div class="header-hd">苹果iPhone 7S 128G 随机颜色</div>
					<div class="header-ft">10832期</div>
				</div>
				<div class="item-content">
					<img class="content-hd" src="http://wdwd-prod.wdwdcdn.com/5822c48380f4f.jpg?imageView2/1/w/140/h/140" />
					<div class="content-bd">
						<div class="bd-item">本期参与：<span class="primary">88</span> 次</div>
						<div class="bd-item">幸运号码：<span class="primary">1000086</span></div>
						<div class="bd-item">揭晓时间：<span class="tertiary">2016-04-20 10:20:59</span></div>
					</div>
					<div class="content-ft">
						<i class="iconfont">&#xe60c;</i>
						<div class="ft-desc">中奖啦</div>
					</div>
				</div>
			</router-link>
			<router-link to="/product/123" class="item">
				<div class="item-header">
					<div class="header-hd">苹果iPhone 7S 128G 随机颜色</div>
					<div class="header-ft">10832期</div>
				</div>
				<div class="item-content">
					<img class="content-hd" src="http://wdwd-prod.wdwdcdn.com/5822c48380f4f.jpg?imageView2/1/w/140/h/140" />
					<div class="content-bd">
						<div class="bd-item">本期参与：<span class="primary">88</span> 次</div>
						<div class="bd-item">幸运号码：<span class="primary">1000086</span></div>
						<div class="bd-item">揭晓时间：<span class="tertiary">2016-04-20 10:20:59</span></div>
					</div>
					<div class="content-ft">
						<i class="iconfont">&#xe60c;</i>
						<div class="ft-desc">中奖啦</div>
					</div>
				</div>
			</router-link>
			<router-link to="/product/123" class="item">
				<div class="item-header">
					<div class="header-hd">苹果iPhone 7S 128G 随机颜色</div>
					<div class="header-ft">10832期</div>
				</div>
				<div class="item-content">
					<img class="content-hd" src="http://wdwd-prod.wdwdcdn.com/5822c48380f4f.jpg?imageView2/1/w/140/h/140" />
					<div class="content-bd">
						<div class="bd-item">本期参与：<span class="primary">88</span> 次</div>
						<div class="bd-item">幸运号码：<span class="primary">1000086</span></div>
						<div class="bd-item">揭晓时间：<span class="tertiary">2016-04-20 10:20:59</span></div>
					</div>
					<div class="content-ft">
						<i class="iconfont">&#xe60c;</i>
						<div class="ft-desc">中奖啦</div>
					</div>
				</div>
			</router-link>
		</div>
	</section>
</template>

<script>
 	

	export default {
		components: {
			
		}
	}
</script>

<style>
	@import "vars.css";

	.my-win-page{
		.item{
			display: block;
			background: #fff;
			border-top:1px solid #ddd;
			border-bottom:1px solid #ddd;
			padding-left: 50px;
			margin-top: 15px;
		}
		.item-header{
			height: 82px;
			border-bottom: 1px solid #f2f2f2;
			display: flex;
			align-items:center;
			padding-right: 30px;
		}

		.header-hd{
			flex:1;
			font-size: 26px;
			color: #333333;
		}
		.header-ft{
			font-size: 26px;
			color: #999;
		}

		.item-content{
			display: flex;
			align-items: center;
			
			height: 135px;
			padding:40px 30px 40px 0;
			border-bottom: 1px solid #f2f2f2;
		}

		.content-hd{
			max-width: 120px;
			max-height: 160px;
		}
		.content-bd{
			flex:1;
			margin-left: 50px;
			color: #333;
			font-size: 26px;
			line-height: 45px;
		}
		.tertiary{
			color:#999;
		}

		.bd-item{

		}
		.content-ft{
			color: #ff8d17;
			font-size: 20px;
			align-self: flex-start;
			.iconfont{
				font-size: 60px;
				color: #ff8d17;
			}
		}
		.primary{
			color: $color_primary;
		}

	}
</style>