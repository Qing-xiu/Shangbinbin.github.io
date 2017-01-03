<template>
	<div class="wk-btns" :class="{'wk-btns-inline': mode == 'inline'}"><slot></slot></div>
</template>

<script>
	export default {
		props: {
			mode: String // 'inline'
		}
	}
</script>

<style>
	.wk-btns {
		padding:0 30px;
		.wk-btn{
			&:not(:first-child){
				margin-top: 30px;
			}
		}

		&.wk-btns-inline{
			display: flex;
			align-items: center;
			.wk-btn:not(:last-child){
				margin-right: 30px;
			}
		}
	}
</style>