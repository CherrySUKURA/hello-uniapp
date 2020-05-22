<template>
	<view class="navigator-content content">

			<swiper class="swiper content" indicator-dots="true" circular="false" indicator-color="gray" indicator-active-color="red">
				<swiper-item class="swiper-item">
					<view class="navigator-flex">
						<navigator class="navigator-list" v-for="(item,index) in navigators.navigator_list" :key="index">
							<image :src="item.img"></image>
							<text>{{item.name}}</text>
						</navigator>
					</view>
				</swiper-item>
				<swiper-item class="swiper-item">
					<view class="navigator-flex">
						<navigator class="navigator-list" v-for="(item,index) in navigators.navigator_list2" :key="index">
							<image :src="item.img"></image>
							<text>{{item.name}}</text>
						</navigator>
					</view>
				</swiper-item>
			</swiper>

		
	</view>
</template>

<script>
	export default {
		props: {
			Vnavigators: {
				type: Object
			}
		},
		data() {
			return {
				navigators: this.Vnavigators.navigators
			}
			
		},
		methods: {
			
		}
	}
</script>

<style scoped>
	.navigator-content{
		background-color: #FFFFFF;
		border-radius: 15rpx;
	}
	.navigator-flex{
		width: 100%;
		height: 150rpx;
		display: flex;
		flex-flow:row wrap;
		justify-content:space-around;
		align-content: space-between;
		text-align: center;
		font-size: 22rpx;

	}
	.navigator-list{
		width: 20%;
		height: 150rpx;
		margin-top: 20rpx;
	}
	.navigator-list image{
		width: 100rpx;
		height: 100rpx;
		margin: auto;
		display: block;
	}
</style>
