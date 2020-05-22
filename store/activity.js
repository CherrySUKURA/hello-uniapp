import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
	activity:{
		value:"",
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
		state.activity.value=newVal
	}
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