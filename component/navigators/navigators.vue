<template>
	<view class="navigator-content content">

			<swiper class="swiper content" indicator-dots="true" circular="false" indicator-color="gray" indicator-active-color="red">
				<swiper-item class="swiper-item">
					<view class="navigator-flex">
						<navigator class="navigator-list" v-for="(item,index) in navigator_list">
							<image :src="item"></image>
							<text>{{index}}</text>
						</navigator>
					</view>
					<view class="navigator-flex">
						<navigator class="navigator-list" v-for="(item,index) in navigator_list2">
							<image :src="item"></image>
							<text>{{index}}</text>
						</navigator>
					</view>
				</swiper-item>
				<swiper-item class="swiper-item">
					<view class="navigator-flex">
						<navigator class="navigator-list" v-for="(item,index) in navigator_list3">
							<image :src="item"></image>
							<text>{{index}}</text>
						</navigator>
					</view>
					<view class="navigator-flex">
						<navigator class="navigator-list" v-for="(item,index) in navigator_list4">
							<image :src="item"></image>
							<text>{{index}}</text>
						</navigator>
					</view>
				</swiper-item>
			</swiper>

		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				navigator_list: {
					"京东超市": "../../static/JDCS.png",
					"数码电器": "../../static/JDCS.png",
					"京东服饰": "../../static/JDCS.png",
					"叮咚生鲜": "../../static/JDCS.png",
					"京东到家": "../../static/JDCS.png",
				},
				navigator_list2: {
					"充值缴费": "../../static/JDCS.png",
					"9.9元拼": "../../static/JDCS.png",
					"领劵": "../../static/JDCS.png",
					"赚钱": "../../static/JDCS.png",
					"PLUS会员": "../../static/JDCS.png",
				},
				navigator_list3: {
					"京东超市": "../../static/JDCS.png",
					"数码电器": "../../static/JDCS.png",
					"京东服饰": "../../static/JDCS.png",
					"叮咚生鲜": "../../static/JDCS.png",
					"京东到家": "../../static/JDCS.png",
				},
				navigator_list4: {
					"充值缴费": "../../static/JDCS.png",
					"9.9元拼": "../../static/JDCS.png",
					"领劵": "../../static/JDCS.png",
					"赚钱": "../../static/JDCS.png",
					"PLUS会员": "../../static/JDCS.png",
				}
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
		display: flex;
		flex-flow:row wrap;
		justify-content:space-around;
		margin-bottom: 40rpx;
		text-align: center;
		font-size: 22rpx;

	}
	.navigator-list{
		width: 110rpx;
		height: 110rpx;
		margin-top:20rpx;
	}
	.navigator-list image{
		width: 100rpx;
		height: 100rpx;
	}
</style>
