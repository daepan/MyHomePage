<template>
           <div>
    <div class="Card-container">
         
          <md-card class="md-title">
             <md-card-header>
                <div >Vue 시작하기</div>
              </md-card-header>
            <md-card-content>
                <div>Vue의 기본예제</div>
            </md-card-content>
            <md-card-actions>
               <md-button 
                 to="/startingVue">Action</md-button>
             </md-card-actions>
          </md-card>
            
         <md-card class="md-title">
             <md-card-header>
                <div >Vue 클래스 바인딩</div>
              </md-card-header>
            <md-card-content>
                <div>classBind란 무엇인가</div>
            </md-card-content>
            <md-card-actions>
               <md-button 
                 to="/Vueins">Action</md-button>
             </md-card-actions>
          </md-card>
           <md-card class="md-title">
             <md-card-header>
                <div >Vue eventhandler 예제</div>
              </md-card-header>
            <md-card-content>
                <div>eventhandler의 쓰임</div>
            </md-card-content>
            <md-card-actions>
               <md-button 
                 to="/eventhandler">Action</md-button>
             </md-card-actions>
          </md-card>
            <md-card class="md-title">
             <md-card-header>
                <div >HTML로 만드는 로그인 폼</div>
              </md-card-header>
              <md-card-content></md-card-content>
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

</style>


