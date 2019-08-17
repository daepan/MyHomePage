<template>
    <div>
   <div class="Card-container">
          <md-card class="md-title">
             <md-card-header>
                <div >협업과 객체지향프로그래밍</div>
              </md-card-header>
              <md-card-content>
                
              </md-card-content>
              <md-card-actions>
                 <md-button 
                 to="/Git">Action</md-button>
                </md-card-actions>
            </md-card>
              <md-card class="md-title">
             <md-card-header>
                <div >자료구조</div>
              </md-card-header>
              <md-card-content>
               
              </md-card-content>
              <md-card-actions>
                 <md-button 
                 to="/dataStr">Action</md-button>
                </md-card-actions>
            </md-card>
               <md-card class="md-title">
             <md-card-header>
                <div >알고리즘</div>
              </md-card-header>
              <md-card-content>
                
              </md-card-content>
              <md-card-actions>
                 <md-button 
                 to="/Algo">Action</md-button>
                </md-card-actions>
            </md-card>
              <md-card class="md-title">
             <md-card-header>
                <div >운영체제</div>
              </md-card-header>
              <md-card-content>
               
              </md-card-content>
              <md-card-actions>
                 <md-button 
                 to="/Os">Action</md-button>
                </md-card-actions>
            </md-card>
               <md-card class="md-title">
             <md-card-header>
                <div>컴퓨터네트워크</div>
              </md-card-header>
              <md-card-content>
                
              </md-card-content>  
              <md-card-actions>
                 <md-button 
                 to="/ComNet">Action</md-button>
                </md-card-actions>
            </md-card>
   </div>

  </div>
</template>
<script>
import Header from '@/components/Header';

export default {
  name:'first',
 components:{
   'main-header': Header
 }
}
</script>


<style>
.md-title{
  margin: 100px;
}
</style>

