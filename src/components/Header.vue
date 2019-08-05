<template>
     <div class="MainHeader">
      <div class="page-container">
        <md-tabs class="md-primary" md-alignment="centered" >
          <md-tab class="md-primary" id="tab-home" md-label="홈" @click="clickHome"></md-tab>
          <md-tab class="md-primary" id="tab-news" md-label="뉴스" @click="clickNews"></md-tab>
          <md-tab class="md-primary" id="tab-base" md-label="베이스" @click="clickBase"></md-tab>
          <md-tab class="md-primary" id="tab-htcss" md-label="HTML/CSS" @click="clickHtml"></md-tab>
          <md-tab class="md-primary" id="tab-vue" md-label="Vue" @click="clickVue"></md-tab>
        </md-tabs>
      </div>
  </div>
</template>
<script>
export default {
      name: 'header'
    ,
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
      clickHtml: function(){
        this.$router.push('/HTML')
      },
      clickVue: function(){
        this.$router.push('/Vue')
      }
    }
}
</script>

