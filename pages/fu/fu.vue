<template>
	<view>
		<view class="bottombar">
			<v-bottombar :indexnumber='indexnumber'></v-bottombar>
		</view>
	</view>
</template>

<script>
		import bottombar from "../../component/bottombar/bottombar"
	export default {
		data() {
			return {
				indexnumber : 1
			}
		},
		methods: {
			
		},
		components: {
			"v-bottombar": bottombar 
		}
		
		// onLoad: function() {
		// 	localStorage.setItem("index",this.index)
		// }
	}
</script>

<style>
	.bottombar{
		width: 100%;
		height: 150rpx;
		position: fixed;
		bottom: 0;
		left: 0;
		padding-bottom: 20rpx;
		background-color: #FFFFFF;
	}
</style>
