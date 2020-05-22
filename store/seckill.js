import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
	seckill: {
		seckill_shop: [
			{
				img: "../../static/SP.jpg",
				SPYJ: "1399",
				SPXJ: "2900"
			},
			{
				img: "../../static/SP.jpg",
				SPYJ: "1399",
				SPXJ: "2900"
			},
			{
				img: "../../static/SP.jpg",
				SPYJ: "1399",
				SPXJ: "2900"
			},
			{
				img: "../../static/SP.jpg",
				SPYJ: "1399",
				SPXJ: "2900"
			},
			{
				img: "../../static/SP.jpg",
				SPYJ: "1399",
				SPXJ: "2900"
			},
			{
				img: "../../static/SP.jpg",
				SPYJ: "1399",
				SPXJ: "2900"
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