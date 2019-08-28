<template>
  <div>
    
      <v-card color="todoStudy Hompage">
        <v-card-title class="text-center justify-center py-5">
          <h1 class="font-weight-bold display-2 basil--text">KimdaeKwan</h1>
        </v-card-title>
    <v-tabs
      v-model="tab"
      background-color="transparent"
      grow
    >
    <v-tab class="tab-home" @click="clickHome">HOME</v-tab>
    <v-tab class="tab-news" @click="clickNews">News</v-tab>
    <v-tab class="tab-base" @click="clickBase">Base</v-tab>
    <v-tab class="tab-vue"  @click="clickVue">example</v-tab>
    

    <v-menu offset-y v-if="isLogin">
           <template v-slot:activator="{ on }">
        <v-btn
          slot="activator"
          color="primary"
          v-on="on"
          dark
         
        >
          나의 계정
        </v-btn>
          </template>
     <v-list>
-       
+        <v-list-item router :to="{name: 'profile'}">
            <v-list-item-title>마이페이지</v-list-item-title>
+        </v-list-item>
+          <v-list-item @click="logout">
+           <v-list-item-title>로그아웃</v-list-item-title>
         </v-list-item>
        </v-list>
        
    </v-menu>
    
    <v-btn flat v-else router :to="{name : 'signIn'}">Sign in</v-btn>
   
   </v-tabs>
  </v-card>

  </div>
  
</template>
<script>
import {mapState, mapActions} from 'vuex'
export default {
      name: 'main-header'
    ,
     data() {
            return {
                tab: [],
            }
        },
        computed:{
          ...mapState(["isLogin"])
        },
    methods: {
      clickHome: function(){
        this.$router.push('/')
      },
      clickNews: function(){
        this.$router.push('/news')
      },
      clickBase: function(){
        this.$router.push('/base')
      },
      clickVue: function(){
        this.$router.push('/example')
      },
      ...mapActions(["logout"])
    }
}
</script>
<style>


</style>



