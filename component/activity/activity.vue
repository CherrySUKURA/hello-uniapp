<template>
	<view class="activity-content content">
		<swiper class="activity-swiper" :previous-margin="swiper.margin" autoplay="true" interval="3000" :next-margin='swiper.margin' circular="true" current="true" @change="swiperChange">
			<swiper-item class="activity-swiper-item" v-for="(item,index) in activity"  :key="index" >
				<navigator :url="item.url" class="a1">
					<image :src="item.image" class='le-img' :class="{'le-active':swiper.index == index}"></image>
				</navigator>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				swiper: {
					margin: "240rpx",
					index: 0
				},
				activity: [
					{
						image: "../../static/activity.png",
						url: "../../pagess/index/index"
					},
					{
						image: "../../static/activity.png",
						url: "../../pagess/index/index"
					},
					{
						image: "../../static/activity.png",
						url: "../../pagess/index/index"
					},
					{
						image: "../../static/activity.png",
						url: "../../pagess/index/index"
					}
				]
			}
		},
		methods: {
			swiperChange(e){
				this.swiper.index = e.detail.current 
			}
		}
	}
</script>

<style scoped>
	.activity-swiper-item{
		height: 200rpx;
	} 
	.a1{
		width: 100%;
		height: 200rpx;
	}
	.le-img {
		width: 200rpx;
		height: 200rpx;
		display: block;
		border-radius: 4px;
		margin: auto;
		transform: scale(0.8);
		transition: transform 0.3s ease-in-out 0s;
	}
	.le-active{
		transform: scale(1);
		transition: transform 0.3s ease-in-out 0s;
	}
</style>
