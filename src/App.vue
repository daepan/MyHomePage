<template>
  <div id="app">
    <main-header />
		<transition
			mode="out-in"
			name="slide-right">
			<router-view/>
		</transition>
	</div>
</template>

<script>
import Header from '@/components/Header'
export default {
  name: 'app',
	data: function(){
		return {
			tab:[]
		}
	},
  components:{
    'main-header':Header
  }
}
</script>


<style >
  
	.slide-left-enter-active,
	.slide-left-leave-active,
	.slide-right-enter-active,
	.slide-right-leave-active {
		transition-duration: 0.3s;
		transition-property: height, opacity, transform;
		transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
		overflow: hidden;
	}

	.slide-left-enter,
	.slide-right-leave-active {
		opacity: 0;
		transform: translate(1em, 1);
	}

	.slide-left-leave-active,
	.slide-right-enter {
		opacity: 0;
		transform: translate(-1em, 1);
	}
</style>