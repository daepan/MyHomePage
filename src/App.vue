<template>
  <div id="app">
	   <v-app>
    <main-header />
	
		<transition
			mode="out-in"
			name="slide-right">
			<router-view/>
		</transition>
		
		</v-app>
	</div>
</template>

<script>
import Header from '@/components/Header'
import mainSignUp from '@/components/mainSignUp'
export default {
  name: 'app',
  components:{
	'main-header':Header,
	'main-SignUp':mainSignUp
  },
  mounted(){
    this.$store.dispatch('cklogin')
  },
      
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