import Vue from 'vue'
import Vuex from 'vuex'
import activity from './activity.js'
import bottombar from './bottombar.js'
import carousel from './carousel.js'
import navigators from './navigators.js'
import newhuman from './newhuman.js'
import seckill from './seckill.js'
Vue.use(Vuex)

const store = new Vuex.Store({
	
	state: {
		
	}, 
	mutations: {
		changeValue(){
			alert(1)
		}
	},
	actions: {
		
	},
	getters: {
		
	},
	modules: {
		activity,
		bottombar,
		carousel,
		navigators,
		newhuman,
		seckill
	}
	
	
	
})
export default store