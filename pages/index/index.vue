<template>
	<view class="index-content">
		<view class="carousel">
			<v-carousel></v-carousel>
		</view>
		<view class="navigator">
			<v-navigators></v-navigators>
		</view>
		<view class="seckill">
			<v-seckill></v-seckill>
		</view>
		<view class="newhuman">
			<v-newhuman></v-newhuman>
		</view>
		<view class="activity">
			<v-activity></v-activity>
		</view>
		<view class="bottombar">
			<v-bottombar :indexnumber='indexnumber'></v-bottombar>
		</view>
	</view>
</template>

<script>
	import http from "../../commons/http.js"
	// Vue.prototype.$axios = axios
	import carousel from "../../component/carousel/carousel"
	import navigators from "../../component/navigators/navigators"
	import bottombar from "../../component/bottombar/bottombar"
	import seckill from "../../component/seckill/seckill"  
	import newhuman from "../../component/newhuman/newhuman"
	import activity from "../../component/activity/activity"
	export default{
		data() {
			return {
				indexnumber : 0,
				data: {
					
				}
			}
		},
		methods:{
			
		},
		onReady: function() {
			http.axios('Post','../../a.txt',this.data).then(
			(res) => {
				console.log(res)
			}).catch(
			(err) => {
				console.log(err)
			})
		},
		components: {
			"v-carousel": carousel,
			"v-navigators": navigators,
			"v-bottombar": bottombar ,
			"v-seckill": seckill,
			"v-newhuman": newhuman,
			"v-activity": activity
		}
	}
</script>

<style>
	.index-content{
		touch-action: none;
		/* background-color: red; */
		width: 100%;
		height: 100%;
		box-sizing: border-box;
		padding: 0 20rpx;
		padding-bottom: 170rpx;
	}
	.carousel{
		width: 100%;
		height: 300rpx;
	}
	.navigator{
		width: 100%;
		height: 380rpx;
	}
	.seckill{
		width: 100%;
		height: 300rpx;
	}
	.bottombar{
		width: 100%;
		height: 150rpx;
		position: fixed;
		bottom: 0;
		left: 0;
		padding-bottom: 20rpx;
		background-color: #FFFFFF;
		z-index: 100000;
	}
</style>