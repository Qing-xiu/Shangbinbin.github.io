<template>
	<transition>
		<img @click="close" v-if="state.visible" class="safe-modal-comp" src="http://wkh5-1251987965.cossh.myqcloud.com/safe.png?sign=bp2JkYXA6z+W7nmZU3HKiOGKj/9hPTEyNTE5ODc5NjUmaz1BS0lEUFg5U0EyNzZHTlNYb1VlY2l0c3JLZUhCM1NMd2lUcWkmZT0xNDg1OTM0MTk0JnQ9MTQ4MzM0MjE5NCZyPTEyNjk1NTA4OTgmZj0vc2FmZS5wbmcmYj13a2g1">
	</transition>
</template>

<script>
	import Mask from 'components/ui/mask'

	export default {
		name: 'safe_modal',
		data () {
			return {
				state: {
					visible: true
				}
			}
		},
		mounted () {
			this.maskInstance = Mask(true, () => {
				this.state.visible = false
			})
		},

		methods: {
			close () {
				this.state.visible = false
				this.maskInstance.close();
			}
		}
	}
</script>

<style>
	.safe-modal-comp { 
		position: fixed;
		z-index: 1001;
		top: 50%;
		width: 606px;
		left: 50%;
		transform: translate(-50%, -50%);
	 }
</style>