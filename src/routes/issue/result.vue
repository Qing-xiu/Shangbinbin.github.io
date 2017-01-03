<template>
	<transition name="slide-in-left">
		<section class="page issue-result-page">
			<header class="nav-bar">
				<a @click="goBack" href="javascript:;" class="go-back"><i class="iconfont">&#xe601;</i></a>
				计算详情
			</header>

			<div class="lucky-panel">
				<div class="panel-title">
					<i class="iconfont">&#xe60c;</i>
					本期幸运号
				</div>

				<div class="panel-text">1000006</div>
			</div>

			<div class="rule-panel">
				<div class="rule-title">计算公式：</div>
				<div class="primary">[(数值A + 数值B)÷ 商品所需次数]取余数 + 100000</div>
			</div>
			<div class="rule-panel">
				<div class="rule-title">数值A：</div>
				<div class="rule-desc">最近一期中国福利彩票“老时时彩”的揭晓结果</div>
				<div class="rule-detail">= <span class="primary">75820</span><span class="secondary">(第23032032032期)</span></div>
			</div>
			<div class="rule-panel">
				<div class="rule-title">数值B：</div>
				<div class="rule-desc">该商品最后10条参与时间的数值之和</div>
				<div class="rule-detail">= <span class="primary">76767767676</span></div>

				<div @click="state.listVisible = !state.listVisible" class="more-btn">
					{{state.listVisible ? '收起' : '展开'}}
					<i class="iconfont" v-if="state.listVisible">&#xe633;</i>
					<i class="iconfont" v-else>&#xe622;</i>
				</div>

				<div v-if="state.listVisible" class="date-list">
					<div class="list-header">
						<div class="header-hd">参与实践</div>
						<div class="header-ft">参与用户</div>
					</div>

					<div class="list-cont">
						<div class="item-cell">
							<div class="cell-hd">
								2017-01-02 12:34:45.911 
								<i class="iconfont">&#xe61a;</i>
								<span class="primary">123445911</span>
							</div>
							<div class="cell-ft">春天的</div>
						</div>
						<div class="item-cell">
							<div class="cell-hd">
								2017-01-02 12:34:45.911 
								<i class="iconfont">&#xe61a;</i>
								<span class="primary">123445911</span>
							</div>
							<div class="cell-ft">春天的</div>
						</div>
						<div class="item-cell">
							<div class="cell-hd">
								2017-01-02 12:34:45.911 
								<i class="iconfont">&#xe61a;</i>
								<span class="primary">123445911</span>
							</div>
							<div class="cell-ft">春天的</div>
						</div>
						<div class="item-cell">
							<div class="cell-hd">
								2017-01-02 12:34:45.911 
								<i class="iconfont">&#xe61a;</i>
								<span class="primary">123445911</span>
							</div>
							<div class="cell-ft">春天的</div>
						</div>
					</div>
					
				</div>
			</div>

		</section>
	</transition>
</template>

<script>
	export default {
		data () {
			return {
				state: {
					listVisible: false
				}
			}
		},
		methods: {
			goBack () {
				this.$router.back()
			}
		}
	}
</script>

<style>
	@import "vars.css";

	.issue-result-page {
		padding-top: 95px;
		box-sizing: border-box;
		.nav-bar{
            height: 90px;
            line-height: 90px;
            background: #fafafa;
            border-bottom: 1px solid #acacac;
            text-align: center;
            font-size: 38px;
            color: #010101;
            position: fixed;
            top:0px;
            left:0px;
            right: 0px;
            z-index: 99;
        }

        .go-back{
            position: absolute;
            z-index: 9;
            left: 30px;
            top:  50%;
            transform: translate(0, -50%);
            
            .iconfont{
                color: $color_primary;
                font-size: 45px;    
            }
        }
		.lucky-panel{
			overflow: hidden;
			text-align: center;
			padding-bottom: 80px;
			background:#fff url(../../img/computed-detail.png) repeat-x 0 bottom;
			margin-bottom: 70px;
			.panel-title{
				color: #ffc445;
				font-size: 30px;
				margin-top: 60px;
			}
			.iconfont{
				font-size: 40px;
			}
			.panel-text{
				font-size: 110px;
				color: #ff7f3a;
				margin-top: 40px;
			}
		}

		.rule-panel{
			border-top: 1px solid #ddd;
			border-bottom: 1px solid #ddd;
			background: #fff;
			padding: 40px 30px 30px 30px;
			margin-bottom: 20px;
			position: relative;
			.rule-title{
				font-size: 30px;
				color: #333;
				margin-bottom: 18px;
			}
			.rule-desc{
				font-size: 26px;
				color: #666;
			}
			.rule-detail{
				margin-top: 26px;
			}

			.primary{
				color: #ffc445;
				font-size: 30px;
			}
			.secondary{
				font-size: 20px;
				color: #999;
			}

			.more-btn{
				position: absolute;
				font-size: 24px;
				color: #ff7f3a;
				right: 30px;
				top: 155px;
			}
		}

		.date-list{
			background: #f8f8f8;
			margin-top: 30px;
			.list-header{
				display: flex;
				align-items: center;
				padding: 5px 30px 0;
				height: 66px;
				font-size: 24px;
				color: #333;
				border-bottom: 1px solid #cbcbcb;
			}

			.header-hd{
				flex:1;
			}

			.header-ft{
				width: 170px;
			}

			.list-cont{
				padding: 0 30px;
			}

			.item-cell{
				display: flex;
				align-items: center;
				height: 64px;
				font-size: 20px;
				color: #9a9a9a;
				&:not(:last-child){
					border-bottom: 1px solid #e1e1e1;
				}
			}
			.cell-hd{
				flex:1;
			}
			.cell-ft{
				width: 170px;
			}
			.iconfont{
				font-size: 18px;
				color: #ffc445
			}
			.primary{
				color: #ffc445;
				font-size: 20px;
			}
		}
	}
</style>