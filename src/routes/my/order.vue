<template>
	<section class="my-order-page">
		<div class="order-list">
			<router-link to="/issue/123" class="item">
				<div class="item-header">
					<div class="header-hd">苹果iPhone 7S 128G 随机颜色</div>
					<div class="header-ft">10832期</div>
				</div>
				<div class="item-content">
					<img class="content-hd" src="http://wdwd-prod.wdwdcdn.com/5822c48380f4f.jpg?imageView2/1/w/140/h/140" />
					<div class="content-ft">
						<wk-progress :value="100" :max="1000"></wk-progress>
						<div class="ft-desc">我已参与：<span class="primary">1</span>次</div>
					</div>
				</div>
				<div class="item-footer">
					<div class="footer-bd">
						本期得主: <span class="secondary">春天里的熊</span>(<span class="primary">10</span>次)
					</div>
				</div>
			</router-link>
			<router-link to="/issue/123" class="item">
				<div class="item-header">
					<div class="header-hd">苹果iPhone 7S 128G 随机颜色</div>
					<div class="header-ft">10832期</div>
				</div>
				<div class="item-content">
					<img class="content-hd" src="http://wdwd-prod.wdwdcdn.com/5822c48380f4f.jpg?imageView2/1/w/140/h/140" />
					<div class="content-ft">
						<wk-progress :value="100" :max="1000"></wk-progress>
						<div class="ft-desc">我已参与：<span class="primary">1</span>次</div>
					</div>
				</div>
				<div class="item-footer">
					<div class="footer-bd">
						等待“时时彩”开奖中: <span class="primary">06:04:32</span>
					</div>
				</div>
			</router-link>
			<router-link to="/issue/123" class="item">
				<div class="item-header">
					<div class="header-hd">苹果iPhone 7S 128G 随机颜色</div>
					<div class="header-ft">10832期</div>
				</div>
				<div class="item-content">
					<img class="content-hd" src="http://wdwd-prod.wdwdcdn.com/5822c48380f4f.jpg?imageView2/1/w/140/h/140" />
					<div class="content-ft">
						<wk-progress :value="100" :max="1000"></wk-progress>
						<div class="ft-desc">我已参与：<span class="primary">1</span>次</div>
					</div>
				</div>
				<div class="item-footer">
					<div class="footer-bd">
						等待“时时彩”开奖中: <span class="primary">06:04:32</span>
					</div>
				</div>
			</router-link>
			<router-link to="/issue/123" class="item">
				<div class="item-header">
					<div class="header-hd">苹果iPhone 7S 128G 随机颜色</div>
					<div class="header-ft">10832期</div>
				</div>
				<div class="item-content">
					<img class="content-hd" src="http://wdwd-prod.wdwdcdn.com/5822c48380f4f.jpg?imageView2/1/w/140/h/140" />
					<div class="content-ft">
						<wk-progress :value="100" :max="1000"></wk-progress>
						<div class="ft-desc">我已参与：<span class="primary">1</span>次</div>
					</div>
				</div>
				<div class="item-footer">
					<div class="footer-bd">
						等待“时时彩”开奖中: <span class="primary">06:04:32</span>
					</div>
				</div>
			</router-link>
		</div>
	</section>
</template>

<script>
 	import WkProgress from 'components/ui/progress/index.vue'

	export default {
		components: {
			WkProgress
		}
	}
</script>

<style>
	@import "vars.css";

	.my-order-page{
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
			height: 214px;
			padding-right: 30px;
			border-bottom: 1px solid #f2f2f2;
		}

		.content-hd{
			max-width: 120px;
			max-height: 160px;
		}
		.content-ft{
			flex:1;
			margin-left: 50px;
		}

		.ft-desc{
			font-size: 26px;
			color: #333;
			margin-top: 15px;
		}
		.primary{
			color: $color_primary;
		}

		.item-footer{
			height: 88px;
			display: flex;
			align-items: center;
		}
		.footer-bd{
			flex:1;
			font-size: 24px;
			color:#999;
			.secondary{
				color: #333;
			}
		}

	}
</style>