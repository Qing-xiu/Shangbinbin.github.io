<template>
    <transition name="slide-in-left">
        <section class="page issue-page">
            <header class="nav-bar">
                <router-link to="/" class="go-back"><i class="iconfont">&#xe601;</i></router-link>
                <router-link :to="'/issue/' + id " class="bar-item" :class="{current: currentPage == 'index'}">商品</router-link>
                <router-link :to="'/issue/' + id + '/detail'" class="bar-item" :class="{current: currentPage == 'detail'}">详情</router-link>
                <router-link :to="'/issue/' + id + '/past'" class="bar-item" :class="{current: currentPage == 'past'}">往期</router-link>
            </header>

            <div class="container">
                <router-view></router-view>
            </div>
        </section>
    </transition>
</template>

<script>
import WkProgress from 'components/ui/progress/index.vue'

export default {
    data () {
        return {
            id:  this.$route.params.id
        }
    },
    created () {
        console.log('created')
    },

    computed: {
        currentPage () {
            if (/past/.test(this.$route.path)) {
                return 'past'
            }
            if (/detail/.test(this.$route.path)) {
                return 'detail'
            }

            return 'index'
        }
    },
    
    components: {
        WkProgress
    }
}
</script>



<style>
    @import "vars.css";
    @import "animate/slide_in_left.css";

    .issue-page{
        .nav-bar{
            height: 90px;
            background: #fafafa;
            border-bottom: 1px solid #acacac;
            text-align: center;
            font-size: 0px;
            position: fixed;
            top:0px;
            left:0px;
            right: 0px;
            z-index: 99
        }
        .bar-item{
            font-size: 32px;
            color: #999999;
            display: inline-block;
            height:86px;
            border-bottom: 4px solid #fafafa;
            line-height: 86px;
            padding: 0 2px;
            &:not(:last-child){
                margin-right: 45px;
            };
            &.current{
                border-bottom-color: #000
            }
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
        .container{
            margin-top: 90px;
        }
    }
</style>