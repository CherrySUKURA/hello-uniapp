<template>
	<view>
		<view class="searchbar">
			<v-searchbar></v-searchbar>
		</view>
		<view class="activity">
			<v-activity :activityurl="activityurl"></v-activity>
		</view>
		<view class="bottombar">
			<v-bottombar :indexnumber='indexnumber'></v-bottombar>
		</view>
	</view>
</template>

<script>
	import bottombar from "../../component/bottombar/bottombar"
	import activity from "../../component/activity/activity"
	import searchbar from "../../component/searchbar/searchbar"
	export default {
		data() {
			return {
				indexnumber : 1,
				activityurl: 'http://jsonplaceholder.typicode.com/users'
			}
		},
		methods: {
			
		},
		components: {
			"v-bottombar": bottombar ,
			"v-activity": activity,
			"v-searchbar": searchbar
		},
		computed:{

		},
		onShow() {
			if(wx.hideHomeButton){  
			    wx.hideHomeButton();  
			}  
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
