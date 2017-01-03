import Vue from 'vue'
import BuyModal from './index.vue'

export default () => {
	const VM = Vue.extend(BuyModal)

	const vm = new VM({
		props:{

		}
	}).$mount()

	document.body.appendChild(vm.$el)
}