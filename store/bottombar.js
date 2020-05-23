import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
	bottombar: {
		bottombar_list: [
			{
				url: '/pages/index/index',
				img: '../../static/SY.png'
			},
			{
				url: '/pages/fu/fu',
				img: '../../static/SY.png'
			},
			{
				url: '/pages/fu/fu',
				img: '../../static/SY.png'
			},
			{
				url: '/pages/fu/fu',
				img: '../../static/SY.png'
			},
			{
				url: '/pages/fu/fu',
				img: '../../static/SY.png'
			}
		]
	}
}
const mutations = {
	bottomNo( state,newVul ) {
		state.bottombar.bottombar_list[newVul].img = "../../static/SY_ACTIVE.png"
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