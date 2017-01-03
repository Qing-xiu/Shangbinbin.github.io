<template>
	<section class="page settings-about-page">
		<nav-bar>关于我们</nav-bar>

		<div class="logo">
			<img class="logo-img" src="../../img/logo.png" />
		</div>
		<div class="title">
			<img class="title-img" src="../../img/about-title.png" />
		</div>

		<div class="slogan">
			<img class="slogan-img" src="http://wkh5-1251987965.cossh.myqcloud.com/about.png?sign=oVzUjutmORqA21WwF3AsDMhBPtdhPTEyNTE5ODc5NjUmaz1BS0lEUFg5U0EyNzZHTlNYb1VlY2l0c3JLZUhCM1NMd2lUcWkmZT0xNDg1OTM0MTEwJnQ9MTQ4MzM0MjExMCZyPTEzMTg0Nzc2MzYmZj0vYWJvdXQucG5nJmI9d2toNQ==" />
		</div>

		<div class="name">悟娱（上海）科技有限公司</div>
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
	.settings-about-page{
		padding-top: 91px;
		box-sizing: border-box;

		.logo{
			font-size: 0px;
			text-align: center;
			margin-top: 90px;
		}

		.logo-img{
			width: 96px;
		}
		.title{
			font-size: 0px;
			text-align: center;
			margin-top: 20px;			
		}
		.title-img{
			width: 159px;
		}

		.slogan{
			font-size: 0px;
			text-align: center;
			margin-top: 148px;
		}
		.slogan-img{
			width: 620px;
		}

		.name{
			position: fixed;
			bottom: 50px;
			left: 0px;
			right: 0px;
			text-align: center;
			font-size: 24px;
			color: #bcbcbc
		}
	}
</style>