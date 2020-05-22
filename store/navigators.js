import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
	navigators: {
		navigator_list:[
			{
				name: "京东超市",
				img: "../../static/JDCS.png",
			},
			{
				name: "数码电器",
				img: "../../static/JDCS.png",
			},
			{
				name: "京东服务",
				img: "../../static/JDCS.png",
			},
			{
				name: "叮咚生鲜",
				img: "../../static/JDCS.png",
			},
			{
				name: "京东到家",
				img: "../../static/JDCS.png",
			},
			{
				name: "充值缴费",
				img: "../../static/JDCS.png",
			},
			{
				name: "9.9元拼",
				img: "../../static/JDCS.png",
			},
			{
				name: "领劵",
				img: "../../static/JDCS.png",
			},
			{
				name: "赚钱",
				img: "../../static/JDCS.png",
			},
			{
				name: "PLUS会员",
				img: "../../static/JDCS.png",
			}
		],
		navigator_list2:[
			{
				name: "京东超市",
				img: "../../static/JDCS.png",
			},
			{
				name: "数码电器",
				img: "../../static/JDCS.png",
			},
			{
				name: "京东服务",
				img: "../../static/JDCS.png",
			},
			{
				name: "叮咚生鲜",
				img: "../../static/JDCS.png",
			},
			{
				name: "京东到家",
				img: "../../static/JDCS.png",
			},
			{
				name: "充值缴费",
				img: "../../static/JDCS.png",
			},
			{
				name: "9.9元拼",
				img: "../../static/JDCS.png",
			},
			{
				name: "领劵",
				img: "../../static/JDCS.png",
			},
			{
				name: "赚钱",
				img: "../../static/JDCS.png",
			},
			{
				name: "PLUS会员",
				img: "../../static/JDCS.png",
			}
		]
	}
}
const mutations = {
	
}
const actions = {
	
}
const getters = {
	
}
const store = new Vuex.Store({
	state,
	getters,
	mutations,
	actions
})

export default store