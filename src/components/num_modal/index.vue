<template>
	<transition name="fade-in">
		<section v-if="state.visible" class="num-modal-comp">
			<header class="comp-header">
				本期得主的欢乐号
				<div @click="close" class="del-btn">
					<i class="iconfont">&#xe60a;</i>
				</div>
			</header>

			<div class="comp-cont">
				<div class="nums-list">
					<span class="item" v-for="item in nums" :class="{primary: item == luckyNum}">
						{{item}}
					</span>
				</div>
			</div>
				
		</section>
	</transition>
</template>

<script>
	import Mask from 'components/ui/mask'

	export default {
		data () {
			return {
				state: {
					visible: true
				}
			}
		},
		props: {
			nums:Array,
			luckyNum: String
		},

		mounted () {
			this.maskInstance = Mask(true, () => {
				this.state.visible = false
			})	
		},
		methods: {
			close () {
				this.maskInstance.close()
				this.state.visible = false
			}
		}
	}
</script>

<style>
	@import "vars.css";

	.num-modal-comp{
		position: fixed;
		z-index: 1001;
		top: 50%;
		left: 50%;
		width: 660px;
		background: #fff;
		transform: translate(-50%, -50%);

		.comp-header{
			height: 120px;
			text-align: center;
			line-height: 120px;
			background: #f6f6f6;
			color: #666;
			font-size: 36px;
			position: relative;
			.del-btn {
				position: absolute;
				z-index: 99;
				top: 25px;
				right: 30px;
				font-size: 0px;
				line-height: 1.2;
			}
			.iconfont {
				font-size: 30px;
				color: $color_primary;
			}
		}
		.comp-cont{
			padding: 60px 0;
		}
		.nums-list{

			padding:0 60px;
			margin-right: -15px;
			max-height: 450px;
			overflow-x:hidden;
			overflow-y: auto;
			-webkit-overflow-scrolling: touch;
		}
		.item{
			font-size: 30px;
			color: #999;
			line-height: 2.23333;
			margin-right: 15px;
			&.primary{
				color: $color_primary
			}
		}
	}
</style>