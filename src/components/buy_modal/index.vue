<template>
	<transition name="slide-in-up" appear>
		<section v-if="state.visible" class="buy-modal-comp">
			<header class="comp-header">
				确认参与次数
				<i @click="close" class="iconfont header-del">&#xe60a;</i>
			</header>
			<div class="comp-content">
				<div class="input-cell">
					<div @click="decrease" class="cell-item">
						<i class="iconfont">&#xe60e;</i>
					</div>
					<div class="cell-bd">{{quantity}}</div>
					<div @click="increase" class="cell-item">
						<i class="iconfont">&#xe60d;</i>
					</div>
				</div>

				<div class="shortcuts-cell">
					<div @click="setQuantity(10)" class="cell-item">10</div>
					<div @click="setQuantity(20)" class="cell-item">20</div>
					<div @click="setQuantity(50)" class="cell-item">50</div>
				</div>

				<div class="input-desc">需<span class="primary">{{quantity}}</span>悟空币</div>

				<btns>
					<btn type="primary">确定</btn>
				</btns>
			</div>
		</section>
	</transition>
</template>

<script>
	import Mask from 'components/ui/mask'
	import Btns from 'components/ui/btns/index.vue'
	import Btn from 'components/ui/btn/index.vue'
	import BuyModal from 'components/buy_modal'

	export default {
		data () {
			return {
				state: {
					visible: true
				}
			}
		},
		props: {
			quantity: {
				default: 1
			}
		},
		components: {
			Btns, Btn
		},
		mounted () {
			this.maskInstance = Mask(true, () => {
				this.state.visible = false
			})
		},
		methods: {
			decrease () {
				if (this.quantity <= 1) return;

				this.quantity -= 1
			},

			increase () {
				this.quantity += 1
			},

			setQuantity (num) {
				this.quantity = num
			},

			close () {
				this.state.visible = false
				this.maskInstance.close()
			}
		}
	}
</script>

<style>
	@import "animate/slide_in_up.css";

	.buy-modal-comp{
		position: fixed;
		z-index: 1001;
		bottom: 0px;
		left: 0px;
		right: 0px;

		.comp-header{
			height: 100px;
			line-height: 100px;
			text-align: center;
			position: relative;
			background: #fff;
			color: #999;
			font-size: 34px;
		}

		.header-del{
			position: absolute;
			z-index: 9;
			right: 34px;
			top: 50%;
			color: #e5e5e5;
			font-size: 28px;
			transform: translate(0, -50%);
		}

		.comp-content{
			background: #f5f5f5;
			padding: 40px 40px 36px;
		}

		.input-cell{
			display: flex;
			align-items:center;
			background: #fff;
			.cell-item{
				width: 90px;
				text-align: center;
				height: 98px;
				line-height: 98px;
				border: 1px solid #c8c8c8;
				&:first-child{
					border-radius: 10px 0 0 10px;
				}
				&:last-child{
					border-radius: 0 10px 10px 0;	
				}
			}

			.cell-bd{
				height: 98px;
				line-height: 98px;
				text-align: center;
				color: #ff7f3a;
				font-size: 50px;
				flex:1;
				border-top: 1px solid #c8c8c8;
				border-bottom: 1px solid #c8c8c8;
			}


			.iconfont{
				color: #999999;
				font-size: 36px;
			}
		}

		.shortcuts-cell {
			display: flex;
			align-items:center;
			justify-content: space-between;
			margin-top: 25px;

			.cell-item{
				width: 204px;
				height: 98px;
				line-height: 98px;
				text-align: center;
				background: #fff;
				border: 1px solid #c8c8c8;
				border-radius: 8px;
				font-size: 46px;
				color: #000;
			}
		}

		.input-desc{
			margin-top: 30px;
			margin-bottom: 35px;
			text-align: center;
			font-size: 30px;
			color: #999;
			.primary{
				color: #000;
			}
		}
	}
</style>