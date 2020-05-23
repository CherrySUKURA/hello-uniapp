<template>
	<view class="carousel-content content">
		<swiper class="swiper content" indicator-dots="true" circular="true">
			<swiper-item v-for="(item,index) in carousel.background" touchable="false" class="swiper-item">
				<image class="carousel-image" :src="item.img"></image>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import { mapState,mapAction,mapGetter,mapMutations } from 'vuex'
	import http from "../../commons/http.js"
	export default {
		props:{
			carouselurl: {
				type: String
			}
		},
		data() {
			return {
				carousel: ""
			}
		},
		computed: {
			...mapState({
				carousels: state =>  state.carousel.carousel,
				value: state => state.carousel.value
			}),
			Vcarousel: function() {
				return this.carousels
			}
		},
		created() {
			this.carousel = this.Vcarousel
			console.log(this.value)
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