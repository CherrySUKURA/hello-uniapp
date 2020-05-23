<template>
	<view class="bottombar-content content">
		<view class="bottombar-flex">
			<view v-for="(item,index) in bottombar.bottombar_list" @click="bottomnA(item.url)" class="bottombar-list">
				<image :src="item.img"></image>
			</view>
		</view>
	</view>
</template>

<script>
	import { mapState,mapAction,mapGetter,mapMutations } from 'vuex'
	import http from "../../commons/http.js"
	import bottombarstore from "../../store/bottombar.js"
	export default {
		props: {
			indexnumber: {
				type: Number,
				default: function() {
					return
				}
			}
		},
		data() {
			return {
				bottombar: {
					bottombar_list: [
						{
							url: '/pages/index/index',
							img: '../../static/SY.png',
							img_active: '../../static/SY_ACTIVE.png'
						},
						{
							url: '/pages/fu/fu',
							img: '../../static/SY.png',
							img_active: '../../static/SY_ACTIVE.png'
						},
						{
							url: '/pages/fu/fu',
							img: '../../static/SY.png',
							img_active: '../../static/SY_ACTIVE.png'
						},
						{
							url: '/pages/fu/fu',
							img: '../../static/SY.png',
							img_active: '../../static/SY_ACTIVE.png'
						},
						{
							url: '/pages/login/login',
							img: '../../static/SY.png',
							img_active: '../../static/SY_ACTIVE.png'
						}
					]
				}
			}
		},
		methods: {
			bottomnA(i){
				uni.redirectTo({
					url:i
				})
			}
		},
		computed:{
			// ...mapState({
			// 	bottombars: state => state.bottombar.bottombar
			// }),
			// Vbottombar: function() {
			// 	return this.bottombars
			// }
		},
		created: function (){
			this.bottombar.bottombar_list[this.indexnumber].img = this.bottombar.bottombar_list[this.indexnumber].img_active
			// this.Vbottombar.bottombar_list[this.indexnumber].img = "../../static/SY_ACTIVE.png" 
			// this.bottombar = this.Vbottombar
			// bottombarstore.commit("bottomNo",this.indexnumber)
		}
	}
</script>

<style scoped>
	.bottombar-flex{
		display: flex;
		flex-flow:row wrap;
		justify-content:space-around;
	}
	.bottombar-list{
		width: 80rpx;
		height: 80rpx;
		margin-top: 10rpx;
	}
	.bottombar-list image{
		width: 80rpx;
		height: 80rpx;
	}
</style>
