import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
	namespaced:true,
	value:"",
	activity:{
		swiper: {
			margin: "240rpx",
			index: 0
		},
		activity_list: [
			{
				image: "../../static/activity.png",
				url: "../../pagess/index/index"
			},
			{
				image: "../../static/activity.png",
				url: "../../pagess/index/index"
			},
			{
				image: "../../static/activity.png",
				url: "../../pagess/index/index"
			},
			{
				image: "../../static/activity.png",
				url: "../../pagess/index/index"
			}
		],
	}
}
const mutations = {

	changeValue(state,newVal){
		console.log(newVal)
		state.value=newVal
	}
}
const actions = {
	changeValue1({commmit}){
		commmit(changeValue,newVal)
	}
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