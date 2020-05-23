<template>
	<view>
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
	export default {
		data() {
			return {
				indexnumber : 1,
				activityurl: '222222'
			}
		},
		methods: {
			
		},
		components: {
			"v-bottombar": bottombar ,
			"v-activity": activity
		},
		computed:{

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
