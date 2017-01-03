<template>
    <transition name="fade">
        <section class="page index-page">
            <nav-bar>
                <div slot="hd"></div>
                <img class="title-img" src="../img/title.png" />
                <i @click="showSafe" class="iconfont safe-icon" slot="ft">&#xe611;</i>
            </nav-bar>
            <div class="content">
                <div class="card">
                    <router-link to="/issue/123" class="card-img">
                        <img src="http://wdwd-prod.wdwdcdn.com/5530f1913265e.jpg" class="img" alt="">
                    </router-link>
                    <router-link to="/issue/123" class="card-title">澳大利亚进口蜂蜜</router-link>
                    <div class="card-cell">
                        <router-link to="/issue/123" class="cell-hd">
                            <wk-progress :value="30" :max="150"></wk-progress>
                        </router-link>
                        <div class="cell-ft">
                            <btn @click.native="showBuyModal" type="primary" size="secondary">立即参与</btn>
                        </div>
                    </div>
                </div>
            </div>
            
            <tab-bar></tab-bar>
        </section>
    </transition>
</template>

<script>
import Btn from 'components/ui/btn/index.vue'
import WkProgress from 'components/ui/progress/index.vue'
import TabBar from 'components/tab_bar.vue'
import NavBar from 'components/nav_bar.vue'
import SafeModal from 'components/safe_modal'
import BuyModal from 'components/buy_modal'

export default {
  name: 'app',
  data () {
    return {
      
    }
  },
  methods: {
    showSafe () {
        SafeModal()
    },
    showBuyModal () {
        BuyModal()
    }
  },
  components: {
    Btn,
    WkProgress,
    TabBar,
    NavBar
  }
}
</script>

<style>
@import "layout.css";
@import "reset.css";
@import "vars.css";
@import "iconfont.css";

.index-page{
    padding-top: 91px;
    box-sizing: border-box;
    .safe-icon{
        color: $color_primary;
        font-size: 40px;
    }

    .title-img{
        width: 188px;
        height: 35px;
    }

    .card{
        background: #fff;
        padding: 0 30px 25px 30px;
        margin-bottom: 15px;
    }
    .card-img{
        font-size: 0px;
        text-align: center;
        .img{
            max-width: 100%;
        }
    }
    .card-title{
        font-size: 34px;
        color: #373737;
    }
    .card-cell{
        display: flex;
        align-items:center;
        margin-top: 20px;
    }
    .cell-hd{
        flex:1;
        margin-right: 48px;
    }
    .cell-ft{
        width: 200px;
    }
    .content{
        padding-bottom: 99px;
        box-sizing: border-box;
        height: 100%;
        overflow:auto;
        -webkit-overflow-scrolling: touch;
    }
}
</style>
