<template>
	<view class="bottombar-content content">
		<view class="bottombar-flex">
			<navigator v-for="(item,index) in bottombar_list" @click="bottomnA(item.url)" class="bottombar-list">
				<image :src="item.img"></image>
			</navigator>
		</view>
	</view>
</template>

<script>
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
				bottombar_list: [
						{
							url: '/pages/index/index',
							img: '../../static/SY.png'
						},
						{
							url: '/pages/fu/fu',
							img: '../../static/SY.png'
						},
						{
							url: '/pages/fu/fu',
							img: '../../static/SY.png'
						},
						{
							url: '/pages/fu/fu',
							img: '../../static/SY.png'
						},
						{
							url: '/pages/fu/fu',
							img: '../../static/SY.png'
						}
					]
			}
		},
		methods: {
			bottomnA(i){
				uni.redirectTo({
					url:i
				})
			}
		},
		created: function (){
			this.bottombar_list[this.indexnumber].img = "../../static/SY_ACTIVE.png"
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
