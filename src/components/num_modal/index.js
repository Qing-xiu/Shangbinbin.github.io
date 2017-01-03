import Comp from './index.vue'
import Vue from 'vue'

export default (nums = [], luckyNum) => {	
	const VM = Vue.extend(Comp)

	const vm = new VM({
		propsData: {
			nums,
			luckyNum
		}
	}).$mount()

	document.body.appendChild(vm.$el)
}