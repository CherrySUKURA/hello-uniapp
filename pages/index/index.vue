<template>
	<view class="index-content">
		<view class="carousel">
			<v-carousel :Vcarousel='Vcarousel'></v-carousel>
		</view>
		<view class="navigator">
			<v-navigators :Vnavigators='Vnavigators'></v-navigators>
		</view>
		<view class="seckill">
			<v-seckill  :Vseckill="Vseckill"></v-seckill>
		</view>
		<view class="newhuman">
			<v-newhuman :Vnewhuman="Vnewhuman"></v-newhuman>
		</view>
		<view class="activity">
			<v-activity :Vactivity='Vactivity' :activityurl="activityurl"></v-activity>
		</view>
		{{activityurl}}
		<view class="bottombar">
			<v-bottombar :indexnumber='indexnumber'></v-bottombar>
		</view>
	</view>
</template>

<script>
	import { mapState,mapAction,mapGetter,mapMutations } from 'vuex'
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
				activityurl: 'http://jsonplaceholder.typicode.com/users'
			}
		},
		methods:{

		},
		onReady: function() {
			
		},
		components: {
			"v-carousel": carousel,
			"v-navigators": navigators,
			"v-bottombar": bottombar ,
			"v-seckill": seckill,
			"v-newhuman": newhuman,
			"v-activity": activity
		},
		computed: {
			...mapState({
				activity: state => state.activity.activity,
				carousel: state => state.carousel.carousel,
				navigators: state => state.navigators.navigators,
				seckill: state => state.seckill.seckill,
				newhuman: state => state.newhuman.newhuman
			}),
			// ...mapState(['activity','carousel','navigators','seckill','newhuman']),
			Vactivity : function() {
				return {
					activity: this.activity,
				}
			},
			Vcarousel:  function() {
				return {
					carousel: this.carousel
				}
			},
			Vnavigators: function() {
				return {
					navigators: this.navigators
				}
			},
			Vseckill: function() {
				return {
					seckill: this.seckill
				}
			},
			Vnewhuman: function() {
				return {
					newhuman: this.newhuman
				}
			}
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