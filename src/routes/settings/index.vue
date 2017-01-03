<template>
	<section class="page settings-page">
		<nav-bar>设置</nav-bar>

		<div class="settings-list">
			<router-link class="item" to="/settings/contact">
				<div class="item-hd">联系我们</div>
				<div class="item-ft"><i class="iconfont">&#xe604;</i></div>
			</router-link>
			<router-link class="item" to="/settings/about">
				<div class="item-hd">关于我们</div>
				<div class="item-ft"><i class="iconfont">&#xe604;</i></div>
			</router-link>
		</div>
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
	.settings-page{
		padding-top: 90px;

		.settings-list{
			margin-top: 55px;
			border-bottom: 1px solid #ddd;
			border-top: 1px solid #ddd;
			padding-left: 40px;
			background: #fff;
		}

		.item{
			display: flex;
			align-items: center;
			height: 100px;
			padding-right: 30px;
			&:not(:last-child){
				border-bottom: 1px solid #ddd;
			};
		}

		.item-hd{
			flex:1;
			font-size: 34px;
			color: #333;
		}

		.item-ft{
			.iconfont{
				color: #dfdfdf;
				font-size: 38px;
			}
		}

	}
</style>