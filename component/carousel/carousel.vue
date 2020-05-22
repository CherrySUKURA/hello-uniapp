<template>
	<view class="carousel-content content">
		<swiper class="swiper content" indicator-dots="true" circular="true">
			<swiper-item v-for="(item,index) in carousel.background" class="swiper-item">
				<image class="carousel-image" :src="item.img"></image>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>

	export default {
		props:{
			Vcarousel: Object
		},
		data() {
			return {
				carousel: this.Vcarousel.carousel
			}
		},
		computed: {
			
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