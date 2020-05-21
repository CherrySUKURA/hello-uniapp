import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
	
	state: {
		//carrousel.vue
		// background: [['color1','A'],['color2','B'],['color3','C']]
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
			
		],
		//activity.vue
		swiper: {
			margin: "240rpx",
			index: 0
		},
		activity: [
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
	},
	mutations: {
		
	},
	
	
})
export default store