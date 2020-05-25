<template>
	<view class="index-content">
		<view class="searchbar">
			<v-searchbar></v-searchbar>
		</view>
		<view class="carousel">
			<v-carousel :carouselurl="carouselurl"></v-carousel>
		</view>
		<view class="navigator">
			<v-navigators :navigatorsurl="navigatorsurl"></v-navigators>
		</view>
		<view class="seckill">
			<v-seckill :seckillurl="seckillurl"></v-seckill>
		</view>
		<view class="newhuman">
			<v-newhuman :newhumanurl="newhumanurl"></v-newhuman>
		</view>
		<view class="activity">
			<v-activity :activityurl="activityurl"></v-activity>
		</view>
		<view class=""></view>
		<view class="bottombar">
			<v-bottombar :indexnumber='indexnumber'></v-bottombar>
		</view>
	</view>
</template>

<script>
	import carousel from "../../component/carousel/carousel"
	import navigators from "../../component/navigators/navigators"
	import bottombar from "../../component/bottombar/bottombar"
	import seckill from "../../component/seckill/seckill"  
	import newhuman from "../../component/newhuman/newhuman"
	import activity from "../../component/activity/activity"
	import searchbar from "../../component/searchbar/searchbar"
	export default{
		data() {
			return {
				indexnumber : 0,
				carouselurl: '',
				navigatorsurl:'',
				seckillurl:'',
				bottombarurl:'',
				newhumanurl:'',
				activityurl: 'http://jsonplaceholder.typicode.com/users',
				
			}
		},
		methods:{

		},
		components: {
			"v-carousel": carousel,
			"v-navigators": navigators,
			"v-bottombar": bottombar ,
			"v-seckill": seckill,
			"v-newhuman": newhuman,
			"v-activity": activity,
			"v-searchbar": searchbar
		},
		computed: {
		
		}
	}
</script>

<style>
	.index-content{
		/* background-color: red; */
		width: 100%;
		box-sizing: border-box;
		padding: 0 20rpx;
		padding-bottom: 170rpx;
		padding-top: 100rpx;
	}
	.searchbar{
		width: 100%;
		height: 100rpx;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 100000;
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