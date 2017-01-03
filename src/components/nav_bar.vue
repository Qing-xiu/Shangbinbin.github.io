<template>
	<header class="nav-bar-comp">
		<div class="comp-hd">
			<slot name="hd">
				<a slot="hd" @click="goBack" href="javascript:;" class="go-back"><i class="iconfont">&#xe601;</i></a>
			</slot>
		</div>
		<slot></slot>
		<div class="comp-ft">
			<slot name="ft"></slot>
		</div>
	</header>
</template>

<script>
	export default {
		name: 'nav-bar',
		props: {
			back: String
		},
		methods: {
			goBack () {
				this.back ? (location.href = back) : this.$router.back()
			}
		}
	}
</script>

<style>
	@import "vars.css";

	.nav-bar-comp{
        height: 90px;
        display: flex;
        align-items: center;
        justify-content: center;

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

        .comp-hd{
        	position: absolute;
	        z-index: 9;
	        left: 30px;
	        top:  50%;
	        transform: translate(0, -50%);
        }
        .go-back{
	        .iconfont{
	            color: $color_primary;
	            font-size: 45px;    
	        }
	    }

	    .comp-ft{
	    	position: absolute;
	    	z-index: 9;
	    	right: 30px;
	    	top:  50%;
	        transform: translate(0, -50%);
	    }
    }	
</style>	