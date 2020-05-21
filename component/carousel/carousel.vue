<template>
	<view class="carousel-content content">
		<swiper class="swiper content" indicator-dots="true" circular="true">
			<swiper-item v-for="(item,index) in background" class="swiper-item">
				<image class="carousel-image" :src="item.img"></image>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// background: [['color1','A'],['color2','B'],['color3','C']]
				background:[
					{
						img: "../../static/carousel.jpg"
					},
					{
						img: "../../static/carousel1.jpg"
					},
					{
						img: "../../static/carousel2.jpg"
					}
					
				]
			}
		}
	}
</script>

<style scoped>
	.swiper{
		width: 100%;
		height: 100%;

	}
	.carousel-image{
		width:100%;
		height: 100%;
		border-radius: 15rpx;
	}
</style>