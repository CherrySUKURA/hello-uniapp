<template>
	<view class="seckill-content content">
		<view class="seckill-text">
			<text>商城秒杀</text>
		</view>

		<view>
			<scroll-view class="seckill-scroll" show-scrollbar="true" scroll-x="true" scroll-left="120">
			    <view id="demo1" v-for="(item,index) in seckill.seckill_shop" class="seckill-shop">
					<image :src="item.img"></image>
					<br/>
					<text class="SPYJ">${{ item.SPYJ }}</text>
					<br/>
					<text class="SPXJ">${{ item.SPXJ }}</text>
				</view>
			</scroll-view>
		</view>

	</view>
</template>

<script>
	import http from "../../commons/http.js"
	export default {
		props: {
			Vseckill: {
				type: Object
			}
		},

		data() {
			return {
				seckill: this.Vseckill.seckill
			}
		},
		methods: {
			
			
		}
	}
</script>

<style>
	.seckill-content{
		background-color: #FFFFFF;
		font-size: 30rpx;
		border-radius: 15rpx;

	}
	.seckill-text{
		padding-top: 10rpx ;
		margin: 0 0 0 20rpx;
		float: left;
		
	}
	.seckill-scroll{
		width: 100%;
		height: 250rpx;
		white-space: nowrap;
		padding: 0 15rpx;
	}
	
	.seckill-shop{
		width: 150rpx;
		height: 150rpx;
		padding: 0 10rpx;
		margin-top: 20rpx;
		box-sizing: border-box;
		display: inline-block;
		text-align: center;
		font-size: 20rpx;
	}
	.seckill-shop image{
		width: 100%;
		height: 100%;
	}
	.SPYJ{
		text-decoration:line-through
	}
	.SPXJ{
		color: red;
	}
</style>
