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

   </v-tabs>
  </v-card>
  
  </div>
</template>
<script>
export default {
      name: 'main-header'
    ,
     data() {
            return {
                tab: [],
            }
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
      }
    }
}
</script>
<style>
/* Helper classes */
.basil {
  background-color: aquamarine !important;
}
.basil--text {
  color: black !important;
}
.text-center{
  padding-bottom: 10px;
}
</style>



