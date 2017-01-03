<template>
	<section class="page bills-page">
		<nav-bar>悟空币明细</nav-bar>

		<ul class="bills-list">
			<li class="item increase">
				<div class="item-hd">
					<div class="hd-title">参与欢乐购</div>
					<div class="hd-desc">2016-05-11 12:23:22</div>
				</div>
				<div class="item-ft">-1.00</div>
			</li>
			<li class="item decrease">
				<div class="item-hd">
					<div class="hd-title">微信充值</div>
					<div class="hd-desc">2016-05-11 12:23:22</div>
				</div>
				<div class="item-ft">+45.00</div>
			</li>
		</ul>
	</section>
</template>

<script>
	import NavBar from 'components/nav_bar.vue'

	export default {
		components: {
			NavBar
		}
	}
</script>

<style>
	.bills-page{
		padding-top: 91px;

		.bills-list{
			background: #fff;
			padding-left: 42px;
			border-bottom: 1px solid #ddd
		}
		.item{
			display: flex;
			align-items: center;
			height: 108px;
			padding-right: 42px;
			padding-left: 8px;
			&:not(:last-child){
				border-bottom: 1px solid #ddd;
			}
		}
		.item-hd{
			flex:1;
		}

		.hd-title{
			font-size: 26px;
			color: #333;
		}
		.hd-desc{
			font-size: 20px;
			color: #999999;
			margin-top: 10px;
		}

		.item-ft{
			font-size: 30px;
		}
		.increase{
			.item-ft{
				color: #ff620d;
			}
		}
		.decrease{
			.item-ft{
				color: #22b417;
			}
		}
	}
</style>