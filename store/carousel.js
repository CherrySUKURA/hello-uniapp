import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
	value:"",
	carousel:{
		background:[
			{
				img: "../../static/carousel.jpg"
			},
			{
				img: "../../static/carousel1.jpg"
			},
			{
				img: "../../static/carousel2.jpg"
			}
			
		]
	}
}
const mutations = {
	changeValue(state,newVal){
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