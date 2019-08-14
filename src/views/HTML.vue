<template>
     <div>
   <div class="Card-container">
          <md-card class="md-title">
             <md-card-header>
                <div >로그인 페이지 html로 만들기
                </div>
              </md-card-header>
              <md-card-content>
                
              </md-card-content>
              <md-card-actions>
                 <md-button 
                 to="/login">Action</md-button> 
                </md-card-actions>
            </md-card>
              <md-card class="md-title">
             <md-card-header>
                <div >회원가입페이지</div>
              </md-card-header>
              <md-card-content>
               
              </md-card-content>
              <md-card-actions>
                 <md-button 
                 to="/signUp">Action</md-button>
                </md-card-actions>
            </md-card>
               <md-card class="md-title">
             <md-card-header>
                <div >쿠키와 세션 스토리지</div>
              </md-card-header>
              <md-card-content>
                
              </md-card-content>
              <md-card-actions>
                 <md-button 
                 to="/storage">Action</md-button>
                </md-card-actions>
            </md-card>
           
   </div>

  </div>
</template>
<script>
import Header from '../components/Header';

export default {
  components: {
    'main-header': Header,
  },
}

</script>

<style>
.Card-container{
   width: 85%;
    margin-top: 75px;
    margin-left: 100px ;
    margin-right: 100px ;

 
}

</style>
