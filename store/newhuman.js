import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
	newhuman:{
		XRMK: [
			{
				image: "../../static/XRNINE.png",
				url: ""
			},
			{
				image: "../../static/XRZX.png",
				url: ""
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