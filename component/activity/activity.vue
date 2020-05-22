<template>
	<view class="activity-content content">
		<swiper class="activity-swiper" :previous-margin="activity.swiper.margin" autoplay="true" interval="3000" :next-margin='activity.swiper.margin' circular="true" current="true" @change="swiperChange">
			<swiper-item class="activity-swiper-item" v-for="(item,index) in activity.activity_list"  :key="index" >
				<navigator :url="item.url" class="a1">
					<image :src="item.image" class='le-img' :class="{'le-active':activity.swiper.index == index}"></image>
				</navigator>
			</swiper-item>
		</swiper>

	</view>
</template>

<script>
	import http from "../../commons/http.js"
	import activitystore from "../../store/activity.js"
	export default {
		props: {
			Vactivity: {
				type: Object
			},
			activityurl: {
				type: String
			}
		},
		data() {
			return {
				activity: this.Vactivity.activity
			}
		},
		methods: {
			swiperChange(e){
				this.activity.swiper.index = e.detail.current 
			},
			a(e){
					activitystore.commit('changeValue',e)
			}
		},
		created(){
			http.axios('Get',{},this.activityurl).then(
			(res) => {
				// console.log(res)
				this.a(res)
			}).catch(
			(err) => {
				console.log(err)
			})
		},
	}
</script>

<style scoped>
	.activity-swiper-item{
		height: 200rpx;
	} 
	.a1{
		height: 200rpx;
	}
	.le-img {
		width: 200rpx;
		height: 200rpx;
		display: block;
		border-radius: 4px;
		margin: auto;
		transform: scale(1);
		transition: transform 0.3s ease-in-out 0s;
	}
	.le-active{
		transform: scale(1.2);
		transition: transform 0.3s ease-in-out 0s;
	}
</style>
