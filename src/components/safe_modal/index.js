import Vue from 'vue'
import Safe from './index.vue'

export default () => {
	const VM = Vue.extend(Safe)
	const vm = new VM({

	}).$mount()

	document.body.appendChild(vm.$el)
}
