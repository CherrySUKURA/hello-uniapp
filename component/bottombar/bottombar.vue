<template>
	<view class="bottombar-content content">
		<view class="bottombar-flex">
			<navigator v-for="(item,index) in bottombar.bottombar_list" @click="bottomnA(item.url)" class="bottombar-list">
				<image :src="item.img"></image>
			</navigator>
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
				bottombar: ""
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
			...mapState({
				bottombars: state => state.bottombar.bottombar
			}),
			Vbottombar: function() {
				return this.bottombars
			}
		},
		created: function (){
			this.bottombar = this.Vbottombar
			this.Vbottombar.bottombar_list[this.indexnumber].img = "../../static/SY_ACTIVE.png" 
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
