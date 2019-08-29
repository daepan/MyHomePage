<template>
    <div class="ComNet-content">
        <h1>컴퓨터 네트워크</h1>
        <br>
        <li>분산되어 있는 컴퓨터를 통신망으로 연결한 것을 말한다. </li>
        <li>컴퓨터 네트워크에서 컴퓨팅 장치들은 노드 간 연결(데이터링크)을 사용하여 서로에게 데이터를 교환한다.</li>
        <br>
        <br>
        <h2>네트워크란 무엇인가?</h2>
        <br>
        <li>Net + Work 의 합성어로  "컴퓨터들이 통신 기술 이용하여 그물망처럼 연결된 통신 이용 형태”</li>
        <br>
        <h1>네트워크 구성 형태</h1>
        <br>
        <h2>성형 토폴로지</h2><br>
          <div class="Cn-content-title">
             <v-expansion-panels
                 v-model="panel"
                    multiple>
                <v-expansion-panel>
                 <v-expansion-panel-header>정의</v-expansion-panel-header>
                     <v-expansion-panel-content>
                        <p>중앙에 있는 정보 단말 장치에 모두 연결된 구조로 항상 중앙의 정보 단말 장치를 통해서만 연결이 가능한 구조</p>
                    </v-expansion-panel-content>
                 </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header>장점</v-expansion-panel-header>
        <v-expansion-panel-content>
            <p>고속의 네트워크에 적합하다. </p>
            <p>노드 추가가 쉽고 에러 탐지가 용이하다. (관리, 제어가 용이하다)</p>
            <p>노드에 장애가 발생해도 네트워크는 사용이 가능하다</p>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>단점</v-expansion-panel-header>
        <v-expansion-panel-content>
            <p>중앙 노드에 장애가 발생하면 전체 네트워크를 사용할 수가 없다</p>
            <p>설치 비용이 고가이고 노드가 증가하면 네트워크 복잡도가 올라간다.</p>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
       </div><br>
         <h2>망형 토폴로지</h2><br>
          <div class="Cn-content-title">
             <v-expansion-panels
                 v-model="panel"
                    multiple>
                <v-expansion-panel>
                 <v-expansion-panel-header>정의</v-expansion-panel-header>
                     <v-expansion-panel-content>
                        <p>모든 정보 단말 장치가 통신회선을 통해서 연결된 구조로 한쪽 통신회선에 에러가 발생해도 통신을 수행할 수 있는 구조. </p>
                    </v-expansion-panel-content>
                 </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header>장점</v-expansion-panel-header>
        <v-expansion-panel-content>
            <p>완벽하게 이중화가 되어 있으므로 장애 발생 시에 다른 경로를 통해서 네트워크를 사용할 수가 있다. (가용성이 좋다) </p>
            <p>많은 양의 데이터를 송수신 할 수가 있다.</p>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>단점</v-expansion-panel-header>
        <v-expansion-panel-content>
        <p>네트워크 구축 비용이 고가이다.</p>
      
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
       </div><br>
         <h2>계층형 토폴로지</h2><br>
          <div class="Cn-content-title">
             <v-expansion-panels
                 v-model="panel"
                    multiple>
                <v-expansion-panel>
                 <v-expansion-panel-header>정의</v-expansion-panel-header>
                     <v-expansion-panel-content>
                        <p>트리 구조 형태로 정보 통신망을 구성하는 것으로 정보 단말 장치를 추가하기 용이한 구성</p>
                    </v-expansion-panel-content>
                 </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>장점</v-expansion-panel-header>
        <v-expansion-panel-content>
            <p>네트워크 관리가 쉽고 확장이 편리하다.</p>
            <p>네트워크의 신뢰도가 높다.</p>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>단점</v-expansion-panel-header>
        <v-expansion-panel-content>
        <p>특정 노드에 트래픽이 집중화 되면 네트워크 속도가 떨어진다.</p>
        <p>병목 현상이 발생할 수가 있다</p>
      
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
       </div><br>
         <h2>버스형 토폴로지</h2><br>
          <div class="Cn-content-title">
             <v-expansion-panels
                 v-model="panel"
                    multiple>
                <v-expansion-panel>
                 <v-expansion-panel-header>정의</v-expansion-panel-header>
                     <v-expansion-panel-content>
                        <p>중앙의 통신 회선 하나에 여러 개의 정보 단말 장치가 연결된 구조로 LAN에서 주로 사용한다.</p>
                    </v-expansion-panel-content>
                 </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>장점</v-expansion-panel-header>
        <v-expansion-panel-content>
            <p>설치비용이 적고 신뢰성이 우수하다. </p>
            <p>구조가 간단하다</p>
            <p>버스에 노드 추가가 쉽다 (확장이 쉽다)</p>
            <p>한 client가 죽어도 망에는 지장이 없다.</p>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>단점</v-expansion-panel-header>
        <v-expansion-panel-content>
        <p>전송되는 데이터가 많으면 네트워크 병목 현상이 발생한다.</p>
        <p>장애 발생 시에 전체 네트워크에 영향을 받는다.</p>
      
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
       </div><br>
         <h2>링형 토폴로지</h2><br>
    <div class="Cn-content-title">
        <v-expansion-panels
            v-model="panel"
            multiple>
        <v-expansion-panel>
        <v-expansion-panel-header>정의</v-expansion-panel-header>
            <v-expansion-panel-content>
                <p>인접해 있는 정보 단말 장치가 연결된 구조.</p>
                <p>링형은 토큰링(Token Ring)에서 사용한다.</p>
            </v-expansion-panel-content>
        </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>장점</v-expansion-panel-header>
        <v-expansion-panel-content>
            <p>노드의 수가 증가 되어도 데이터 손실이 없다. </p>
            <p>충돌이 발생하지 않는다. (토큰을 가지고 통신을 하기 때문에 토큰의 순서가 아닌 client는 통신에 참여하지 않는다.)</p>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header>단점</v-expansion-panel-header>
        <v-expansion-panel-content>
        <p>네트워크 구성의 변경이 어렵다</p>
        <p>회선에 장애 발생 시 전체 네트워크를 사용할 수가 없다.</p>      
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    </div>
    </div>
</template>
<script>
export default {
    data(){
      return{
        panel:[]
      }
    }
}
</script>
<style>
.ComNet-content{
    padding:100px;

}

</style>