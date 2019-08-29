<template>
  
        <div>
 
    <md-app>
      <md-app-toolbar class="md-primary">
            <span class="md-title font-weight-medium font-italic">welcome to my FrontEndpage</span>
      </md-app-toolbar>
    </md-app>
    <main-SignUp></main-SignUp>


  </div>
</template>

<script>
import Header from '../components/Header';
import mainSignUp from '@/components/mainSignUp'
export default {
  components: {
    'main-header': Header,
    'main-SignUp': mainSignUp,
  },
}
</script>
