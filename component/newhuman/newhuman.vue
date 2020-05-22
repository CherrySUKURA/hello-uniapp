<template>
	<view class="newhuman-content content">
		<view class="XR-flex">
			<navigator class="XRTZ" v-for="(item,index) in newhuman.XRMK" :url="item.url">
				<image :src="item.image" class="XRTP"></image>
			</navigator>
		</view>
	</view>

</template>

<script>
	export default {
		props: {
			Vnewhuman: {
				type: Object
			}
		},
		data() {
			return {
				newhuman: this.Vnewhuman.newhuman
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped>

	.XR-flex{
		display: flex;
		flex-flow: row nowrap;
		justify-content: center;
		font-size: 0;
	}
	.XRTZ{
		width: 360rpx;
		height: 230rpx;
	}
	.XRTZ:first-child image{
		border-bottom-left-radius: 15rpx;
		border-top-left-radius: 15rpx;
	}
	.XRTZ:last-child image{
		border-bottom-right-radius: 15rpx;
		border-top-right-radius: 15rpx;
	}
	.XRTP{
		width: 100%;
		height: 100%;
	}
</style>
