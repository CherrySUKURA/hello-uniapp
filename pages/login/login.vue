<template>
	<view>
		<view class="button">
			<input type="text" id="username"/>
			<input type="text" id="password" />
			<button type="primary" @click="wechatLogin()">登录</button>
		</view>
		<view class="bottombar">
			<v-bottombar :indexnumber='indexnumber'></v-bottombar>
		</view>
	</view>
</template>

<script>
	import bottombar from "../../component/bottombar/bottombar"
	import login from "../../commons/login.js"
	export default {
		data() {
			return {
				indexnumber: 4
			}
		},
		methods: {
			wechatLogin() {
				const _this = this
				//调用微信登录接口
				uni.login({
					provider: 'weixin',
					success: function (loginRes) {
						let param = {
							data_encode : {
								data_encode: {
									s_type: 1,
									openid: loginRes.authResult.openid,
									unionid:loginRes.authResult.openid
								}
							}
						}
					}
				})
			}
		},
		components: {
			"v-bottombar": bottombar 
		}
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
