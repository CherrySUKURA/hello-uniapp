<template>
	<view class="searchbar-content">
		<view class="button-btn button-left">
			<image src="../../static/list.png"></image>
		</view>
		<view class="search">
			<image src="../../static/search.png" class="searchimag" @click="a()"></image>
			<input type="text" confirm-type="search">
		</view>
		<view class="button-btn button-right">
			<image src="../../static/SM.png"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				
			}
		},
		methods:{
			a(){
				alert(1)
			}
		}
	}
</script>

<style>
	.searchbar-content{
		width: 100%;
		height: 100%;
		display: flex;
		flex-flow: row nowrap;
		justify-content: space-between;
		background-color: #FFFFFF;
	}
	.button-btn{
		width: 60rpx;
		height: 60rpx;
		position: relative;
	}
	.button-left image{
		width: 100%;
		height: 100%;
		position: absolute;
		top: 50%;
		left: 50%;
	}
	.button-right image{
		width: 100%;
		height: 100%;
		position: absolute;
		top: 50%;
		right: 50%;
	}
	.search{
		width: 500rpx;
		height: 100%;
		position: relative;
	}
	.search input{
		width: 420rpx;
		height: 60rpx;
		margin-top: 28rpx;
		border: 1rpx solid black;
		border-radius: 25rpx;
		padding: 0 50rpx 0 30rpx;
	}
	.searchimag {
		width: 40rpx;
		height: 40rpx;
		position: absolute;
		top: 38rpx;
		right: 20rpx;
	}
</style>