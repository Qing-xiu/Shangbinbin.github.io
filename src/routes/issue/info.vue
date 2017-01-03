<template>
	<section class="issue-info-page">
		<div class="goods-panel">
            <div class="goods-img">
                <img class="img" src="http://wdwd-prod.wdwdcdn.com/5530f1913265e.jpg" alt="">
            </div>
            <div class="goods-title">
                澳大利亚进口蜂蜜
            </div>
            <wk-progress :value="30" :max="100">期号：103907</wk-progress>
        </div>

        <div class="countdown-card">
            <div class="card-title">开奖倒计时</div>
            <div class="card-list">
                <div v-for="item in countDown.m" class="item">{{item}}</div>
                
                <div class="dot"></div>
                <div v-for="item in countDown.s" class="item">{{item}}</div>
                <div class="dot"></div>
                <div v-for="item in countDown.ms" class="item">{{item}}</div>
            </div>
        </div>

        <div class="my-card" :class="{hidden: !state.myNumVisible}">
            <div class="card-title">我的欢乐号(15个): </div>
            <div class="card-list" >
                <span class="item">10000001</span>
                <span class="item">10000001</span>
                <span class="item">10000001</span>
                <span class="item">10000001</span>
                <span class="item">10000001</span>
                <span class="item">10000001</span>
                <span class="item">10000001</span>
                <span class="item">10000001</span>
                <span class="item">10000001</span>
                <span class="item">10000001</span>
                <span class="item">10000001</span>
                <span class="item">10000001</span>
                <span class="item">10000001</span>
                <span class="item">10000001</span>

            </div>
            <div @click="showMyNums" class="card-more"><i class="iconfont">&#xe622;</i></div>
        </div>

        <div class="winner-card">
            <div @click="showNumModal" class="card-user">
                <img src="http://wdwd-prod.wdwdcdn.com/5530f1913265e.jpg?imageView2/1/w/156/h/156" alt="" class="user-avatar">
                <div class="user-hd">
                    <div class="hd-title">10008</div>
                    <div class="hd-desc">幸运号</div>
                </div>
                <div class="user-bd">
                    
                </div>
                <div class="user-ft">
                    <div class="hd-title">Even</div>
                    <div class="hd-desc">中奖用户</div>
                </div>
            </div>
            <div class="card-info">
                <div class="info-wrapper">
                    <div @click="showNumModal" class="info-item">
                        <span class="item-label">开奖时间: </span>
                        2016-04-17 12:22:22
                    </div>
                    <div @click="showNumModal" class="info-item">
                        <span class="item-label">TA的欢乐号: </span>
                        <span class="primary">180</span>个
                    </div>
                </div>
                    
                <router-link to="/issue/result/123123" class="info-detail">计算详情 ></router-link>
            </div>
        </div>

        <div class="cell-title">
            全部参与
        </div>

        <div class="buyer-list">
            <a href="javascript:;" class="buyer-item">
                <div class="item-hd">
                    <img src="http://wdwd-prod.wdwdcdn.com/5530f1913265e.jpg?imageView2/1/w/96/h/96" alt="" class="img">
                </div>
                <div class="item-bd">
                    <div class="bd-title">Solin</div>
                    <div class="bd-desc">参与了<span class="primary">10</span>次</div>
                </div>
                <div class="item-ft">
                    <div>2015-09-99</div>
                    <div>12:22:22</div>
                </div>
            </a>
            <a href="javascript:;" class="buyer-item">
                <div class="item-hd">
                    <img src="http://wdwd-prod.wdwdcdn.com/5530f1913265e.jpg?imageView2/1/w/96/h/96" alt="" class="img">
                </div>
                <div class="item-bd">
                    <div class="bd-title">Solin</div>
                    <div class="bd-desc">参与了<span class="primary">10</span>次</div>
                </div>
                <div class="item-ft">
                    <div>2015-09-99</div>
                    <div>12:22:22</div>
                </div>
            </a>
        </div>

        <div class="btn-actions">
            <!-- <btn type="primary">立即参与欢乐购</btn> -->
            <div class="actions-hd">新一期正火热进行中...</div>
            <div class="actions-ft"><btn type="plain-primary">立即前往</btn></div>
        </div>
	</section>
</template>

<script>
    import _ from 'lodash'
    import Btn from 'components/ui/btn/index.vue'
	import WkProgress from 'components/ui/progress/index.vue'
    import NumModal from 'components/num_modal'

	export default {
        data () {
            return {
                ms: 0,
                duration:  2000,
                state: {
                    myNumVisible: false
                }

            }
        },

        mounted () {
            this.ms = this.duration * 1000

            // const timer = setInterval(() => {
            //     this.ms -= 16
            //     if (this.ms <= 0) {
            //         clearInterval(timer)
            //     }
            // }, 16)
        },

        computed: {
            
            countDown () {

                return {
                    m: _.padStart(Math.floor(this.ms / 1000 / 60), 2, '0').split(''),
                    s: _.padStart(Math.floor(this.ms % (1000 * 60) / 1000), 2, '0').split(''),
                    ms: _.padStart(Math.floor(this.ms % 1000 / 10 ), 2, '0').split('')
                }
            }
        },

	    created () {
	       
	    },
	    components: {
	        WkProgress,
            Btn
	    },
        methods: {
            showMyNums () {
                this.state.myNumVisible = !this.state.myNumVisible
            },
            showNumModal () {
                NumModal([1000001, 1000002,1000003,1000004,1000005,1000001, 1000002,1000003,1000004,1000005,1000001, 1000002,1000003,1000004,1000005,1000001, 1000002,1000003,1000004,1000005,1000001, 1000002,1000003,1000004,1000005,1000001, 1000002,1000003,1000004,1000005,1000001, 1000002,1000003,1000004,1000005,1000001, 1000002,1000003,1000004,1000005,1000001, 1000002,1000003,1000004,1000005,1000001, 1000002,1000003,1000004,1000005,1000001, 1000002,1000003,1000004,1000005,1000001, 1000002,1000003,1000004,1000005], '1000005')
            }
        }
	}
</script>

<style>
    @import "vars.css";

	.issue-info-page{
        padding-bottom: 170px;
		.goods-panel{
            padding: 0px 30px 30px 30px;
            background: #fff;
        }
        .goods-img{
            font-size: 0px;
            text-align: center;
        }
        .img{
            max-width: 100%;
        }
        .goods-title{
            color: #373737;
            font-size: 37px;
            margin: 20px 0;
        }

        .cell-title{
            font-size: 24px;
            color: #9e9e9e;
            padding-left: 18px;
            margin-top: 30px;
            line-height: 60px;
        }
        .buyer-list{
            background: #fff;
            padding-left: 30px;
        }
        .buyer-item{
            display: flex;
            align-items: center;
            height: 146px;
            padding-right: 25px;
            &:not(:last-child){
                border-bottom: 1px solid #dddddd;
            }
            .item-hd{
                font-size: 0px;
            }
            .img{
                border-radius: 50%;
                width: 96px;
                height: 96px;
            }
            .item-bd{
                flex: 1;
                margin-left: 12px;
            }
            .bd-title{
                font-size: 24px;
                color: #333;
            }
            .bd-desc{
                font-size: 24px;
                color: #6e6e6e;
                margin-top:10px;
            }
            .primary{
                color: $color_primary;
            }
            .item-ft{
                font-size: 24px;
                color: #b3b3b3;
                line-height: 34px;
            }
        }

        .winner-card{
            position: relative;
            margin: 78px 24px 0;
            background: #ffc445;
            border-radius: 8px;
            padding-bottom: 4px;
            .user-avatar{
                width:156px;
                height: 156px;
                position: absolute;
                z-index:9;
                left: 50%;
                transform: translate(-50%, 0);
                border: 8px solid #ffc445;
                border-radius: 50%;
                top: -46px;
            }

            .card-user{
                display: flex;
                align-items: center;
                height: 154px;
            }
            .user-hd, .user-ft{
                flex:1;
                text-align: center;
            }
            .user-bd{
                width: 172px;
            }

            .hd-title, .ft-title{
                color: #835a01;
                font-size: 40px;
            }
            .hd-desc, .ft-desc{
                font-size: 24px;
                color: #cc9622;
                margin-top: 10px;
            }

            .card-info{
                margin: 0 4px;
                background: #fff;
                border-radius: 0 0 8px 8px;
                position: relative;
                display: flex;
                align-items: center;
                height: 145px;
                padding-left: 40px;
            }

            .info-wrapper{
                line-height: 47px;
            }
            .info-item{
                font-size: 30px;
                color: #a1a1a1;                
            }

            .primary{
                color: $color_primary;
            }
            
            .item-label{
                font-size: 30px;
                color: #666;
            }
            .info-detail{
                position: absolute;
                z-index:9;
                right: 24px;
                bottom: 24px;
                color: $color_primary;
                font-size: 30px;

            }
        }

        .countdown-card{
            margin: 30px 24px 0;
            background: #ffc445;
            border-radius: 8px;
            padding: 0 25px 27px;
            .card-title{
                font-size: 26px;
                color: #835a01;
                text-align: center;
                line-height: 78px;
            }
            .card-list{
                display: flex;
                align-items: center;
            }
            .item{
                width: 94px;
                height: 107px;
                line-height: 107px;
                
                border-radius: 4px;
                text-align: center;
                color: #ff7f3a;
                vertical-align: middle;
                font-size: 80px;
                background: linear-gradient(top, #ffe6b0 0%, #fff 20%, #fffbf2 80%,  #ffe6b0 100%);
                &:not(:last-child){
                    margin-right: 5px;
                }
            }
            .dot{
                width: 36px;
                position: relative;
                height: 35px;
                margin-left: -5px;
                &:before, &:after{
                    position: absolute;
                    top:0px;
                    left: 50%;
                    transform: translate(-50%, 0);
                    content: '';
                    width: 13px;
                    height: 13px;
                    border-radius: 50%;
                    background: #ecb43b;

                };
                &:after{
                    top: 23px;
                }
            }

        }
        .my-card{
            background: #fff;
            margin: 30px 25px 0;
            padding: 35px 36px 0;

            &.hidden{
                .card-list{
                    max-height: 86px;
                }
                .card-more{
                    transform: rotate(0);
                }
            }

            .card-title{
                color: #5f5f5f;
                font-size: 30px;
            }
            .card-list{
                font-size: 0px;
                margin-top: 20px;
                margin-right: -30px;
                overflow:hidden;
            }

            .item{
                display: inline-block;
                vertical-align: middle;
                line-height: 1.2;
                font-size: 28px;
                color: #999;
                margin:0 30px 16px 0; 
            }
            .card-more{
                line-height: 55px;
                text-align: center;
                transform: rotate(180deg);
            }
            .iconfont{
                color: #5f5f5f;
                font-size: 30px;
                
            }
        }
        .btn-actions{
            height: 160px;
            position: fixed;
            z-index:99;
            bottom:0px;
            left:0px;
            right: 0px;
            background: #fff;
            display: flex;
            align-items: center;
            padding: 0 38px;
            border-top: 1px solid #ddd;
            .actions-hd{
                font-size: 32px;
                color:#999;
                flex:1;
            }
            .actions-ft{
                width: 260px;
            }
        }
	}
</style>