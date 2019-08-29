<template>
    <div class="Os-content">
        <h1>운영체제란?</h1>
        <br>
        <h2></h2>
        <br>
        <li>사용자와 컴퓨터 시스템 사이에 존재하는 프로그램 집단으로 사용자 측면에서는 사용자가, 컴퓨터 시스템 측면에서는 하드웨어가 최고의 성능을 발휘할 수 있도록 컴퓨터 시스템을 관리 통제하는 소프트웨어</li>
      
        <h1></h1>
        <br>
        <h2>운영체제의 목적</h2>
        <br>
        <li>운영체제가 없었을 때에는 사용자가 프로그램을 실행하기 위해서 직접 Hardware를 관리해야했고, Hardware를 관리하기 위해서는 매우 어려운 interface를 익혀야했다.</li>
        <li>이런 귀찮은 과정을 운영체제의 개발을 통해 사용자의 입력에 의해 거의 자동적으로 hardware resource를 할당한다. </li>
        <h1></h1>
        <br>
        <h2>쉘과 커널은 무엇인가?</h2>
        <br>
        <li>커널이라고 불리는 하드웨어를 직접 제어하는 부분과 그 위에서 커널에 명령을 주는 하나 이상의 쉘로 구성되어 있다. </li>
        <li> 커널은 하드웨어를 직접 제어하는 운영체제의 핵심부로 쉘에서 임무를 받아서 수행한다.</li>
        <li>쉘: 사용자가 내린 명령을 운영체제가 수행할 수 있는 명령어로 입력받고 이를 운영체제에 전달하는 일을 한다</li>
        <li>커널: 운영체제의 핵심, 실질적으로 사용자의 명령을 수행하면서 파일의 입출력을 담당하고, 하드웨어를 관리하는 프로그램을 커널이라고 한다.</li>
        <br>
        <br>
        <h2>운영체제의 역할</h2><br>
        <h3 v-for="(context, title) in OsContext" class="Os-model" :key="context">
            {{ title }}
            <li> {{ context }}</li>
           <br>
        </h3>
        <h1>운영체제 유형</h1>
        <br>
        <h2>
            일괄처리 시스템
        </h2>
        <br>
       <div class="Os-content-title">
             <v-expansion-panels
                 v-model="panel"
                    multiple>
             <v-expansion-panel>
                 <v-expansion-panel-header>정의</v-expansion-panel-header>
                     <v-expansion-panel-content>
                        <p>일정 기간이나 일정량이 될 때까지 기다렸다가 한꺼번에 처리하는 방식</p>
                    </v-expansion-panel-content>
                 </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>장점</v-expansion-panel-header>
        <v-expansion-panel-content>
            <p>컴퓨터 시스템을 가장 효율적으로 사용할 수 있다. </p>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>단점</v-expansion-panel-header>
        <v-expansion-panel-content>
        <p>작업에 대한 응답시간이 길어서 작업 결과를 빠르게 확인할 수 없다.</p>
        <p>하나의 작업을 하는데 시스템의 모든 자원을 사용하기 때문에 CPU가 사용 가능한 상태임에도실제적인 작업이 없는 유휴 시간이 자주 발생한다.</p>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
       </div>
       <br>
       <br>
       <h2>다중 프로그래밍 시스템</h2><br>
        <div class="Os-content-title">
             <v-expansion-panels
                 v-model="panel"
                    multiple>
             <v-expansion-panel>
                 <v-expansion-panel-header>정의</v-expansion-panel-header>
                     <v-expansion-panel-content>
                        <p>프로그램 여러 개를 동시에 주기억장치에 적재해두고 한 사용자 프로그램이 CPU를 사용하다가 입출력장치 작업과 같이 CPU를 필요로 하지 않는 작업을 할때, 다른 사용자 프로그램이 CPU를 사용하도록 하는 방법, CPU의 효율을 극대화하기 위한 방법.</p>
                    </v-expansion-panel-content>
                 </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>장점</v-expansion-panel-header>
        <v-expansion-panel-content>
            <p>CPU의 유휴시간을 줄일 수 있다. </p>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>단점</v-expansion-panel-header>
        <v-expansion-panel-content>
        <p>기억장치 관리 기법이나 CPU스케줄링 기법등을 추가로 요구한다.</p>
      
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
       </div><br>
       <h2>시분할 시스템</h2><br>
        <div class="Os-content-title">
             <v-expansion-panels
                 v-model="panel"
                    multiple>
             <v-expansion-panel>
                 <v-expansion-panel-header>정의</v-expansion-panel-header>
                     <v-expansion-panel-content>
                        <p>여러 사용자들이 한 컴퓨터를 동시에 이용할 수 있게 하기위해 각 사용자들에게 CPU에 대한 일정 시간을 제공하여 주어진 시간동안 프로그램을 수행할 수 있도록 개발된 방식</p>
                    </v-expansion-panel-content>
                 </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>장점</v-expansion-panel-header>
        <v-expansion-panel-content>
            <p>많은 사용자들이 메인 컴퓨터 하나를 공유하고 있지만 각 사용자는 혼자 그 컴퓨터를 독점하여 사용하고 있는 것처럼 한다.
 </p>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>단점</v-expansion-panel-header>
        <v-expansion-panel-content>
        <p>기억장치 관리 기법, 디스크 스케줄링 기법, CPU 스케줄링 기법등을 필요하기 때문에 운영체제가 복잡한 단점이 있다.</p>
        
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
       </div><br>
       <h2>다중 처리 시스템</h2><br>
        <div class="Os-content-title">
             <v-expansion-panels
                 v-model="panel"
                    multiple>
             <v-expansion-panel>
                 <v-expansion-panel-header>정의</v-expansion-panel-header>
                     <v-expansion-panel-content>
                        <p>두 개 이상의 프로세서로 구성되어 다중 작업을 구현하는 방식</p>
                    </v-expansion-panel-content>
                 </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>장점</v-expansion-panel-header>
        <v-expansion-panel-content>
            <p>단일 처리 시스템에 비해 많은 양의 작업을 동시에 처리할 수 있음.</p>
            <p>작업에 대한 신뢰성과 작업속도가 향상됨</p>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>단점</v-expansion-panel-header>
        <v-expansion-panel-content>
        <p>여러 CPU간의 기억장치 공유를 어떻게 지원할 것인지, 여러 CPU들의 사용을 어떻게 스케줄링 할 것인지를 결정해야한다.</p>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
       </div>
       <br>
       <h2>
           실시간 처리 시스템
       </h2><br>
        <div class="Os-content-title">
             <v-expansion-panels
                 v-model="panel"
                    multiple>
             <v-expansion-panel>
                 <v-expansion-panel-header>정의</v-expansion-panel-header>
                     <v-expansion-panel-content>
                        <p>실행을 요구하는 자료가 발생할 때마다 바로 처리하여 짧은 시간 내에 응답하는 시스템 방식이다.</p>
                        <p> 예를 들어 군사 방어 시스템, 공업용 프로세서 제어, 예약 시스템, 증권 서비스등에 사용됨</p>
                    </v-expansion-panel-content>
                 </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>장점</v-expansion-panel-header>
        <v-expansion-panel-content>
            <p> 사용자의 노력이 절감되고 처리 시간과 처리비용이 줄어든다.</p>
            <p>변동사항 발생시 즉각적 수정이 가능하다.</p>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>단점</v-expansion-panel-header>
        <v-expansion-panel-content>
        <p>자료가 무작위로 도착하므로 입력 자료의 일시 저장 및 대기가 필요하다.</p>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
       </div>
       <br>
        <h2>
          분산 처리 시스템
       </h2>
       <br>
        <div class="Os-content-title">
             <v-expansion-panels
                 v-model="panel"
                    multiple>
             <v-expansion-panel>
                 <v-expansion-panel-header>정의</v-expansion-panel-header>
                     <v-expansion-panel-content>
                        <p>네트워크에 연결된 여러 컴퓨터 시스템에 작업과 자원을 나누어 처리하게 하는 방식</p>
                    </v-expansion-panel-content>
                 </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>장점</v-expansion-panel-header>
        <v-expansion-panel-content>
            <p>컴퓨터 시스템과 데이터가 분산되어 있어 독립적으로 자료를 처리하다 정보교환이 필요할때 상호 협력하면서 일을 분담 및 처리가 가능하다. </p>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>단점</v-expansion-panel-header>
        <v-expansion-panel-content>
        <p> 중앙 집중형 시스템에 비해 개발이 어려움, 보안 문제가 발생 위험.</p>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
       </div><br>
       <h1>페이징 교체 알고리즘</h1>
       <br>
       <h2>FIFO</h2>
       <br>
        <div class="OsAlgo-content">참조 페이지</div>
        <div
          v-for="(value) in OsAlgoTitle " 
          :key="value"
          class="OsAlgo-content">
          {{ value }}
          </div>
       <br>
       <br>
       <div class="top-title">
          페이지프레임         
       </div>
        <div
          v-for="(value) in OsAlgoContext1 " 
          :key="value"
          class="OsAlgo-content">
          {{ value }}
          </div>
          <br>
          <br>             
          <div
          v-for="(value) in OsAlgoContext2 " 
          :key="value"
          class="OsAlgo-content">
          {{ value }}
          </div><br><br>
             <div
          v-for="(value) in OsAlgoContext3 " 
          :key="value"
          class="OsAlgo-content">
          {{ value }}
          </div>
       <br>
       <br>
       <br>
       <br>
       <h2>LRU</h2>
       <div class="OsAlgo-content">참조 페이지</div>
        <div
          v-for="(value) in OsAlgoTitle " 
          :key="value"
          class="OsAlgo-content">
          {{ value }}
          </div>
          <br>
          <br>
           <div class="top-title">
          페이지프레임         
       </div>
        <div
          v-for="(value) in OsAlgoContext4 " 
          :key="value"
          class="OsAlgo-content">
          {{ value }}
          </div>
          <br>
          <br>             
          <div
          v-for="(value) in OsAlgoContext5 " 
          :key="value"
          class="OsAlgo-content">
          {{ value }}
          </div><br><br>
             <div
          v-for="(value) in OsAlgoContext6 " 
          :key="value"
          class="OsAlgo-content">
          {{ value }}
          </div>
       <br>
       <br>
       <br>
       <h2>LFU</h2>
       <br>
         <div class="OsAlgo-content">참조 페이지</div>
        <div
          v-for="(value) in OsAlgoTitle " 
          :key="value"
          class="OsAlgo-content">
          {{ value }}
        </div>
        <br><br>
         <div class="top-title">
          페이지프레임         
       </div>
       
        <div
          v-for="(value) in OsAlgoContext7 " 
          :key="value"
          class="OsAlgo-content">
          {{ value }}
          </div>
          <br>
          <br>             
          <div
          v-for="(value) in OsAlgoContext8 " 
          :key="value"
          class="OsAlgo-content">
          {{ value }}
          </div><br><br>
             <div
          v-for="(value) in OsAlgoContext9 " 
          :key="value"
          class="OsAlgo-content">
          {{ value }}
          </div>
       
    </div>
</template>
<script>
export default {
    name: 'Os-filed',
    props:{
        panel:{
        type:Object,
        default: function(){
            return {}
        }
        }
    },
    data: () => ({
        OsContext:{
            프로세스관리기능 :'중앙처리장치와 프로세스의 상태를 추적및 기억한다. 이를 수행하는 프로그램을 교통량 제어기라 한다.',
            기억장치관리기능:'기억장치의 상태를 추적및 기억한다. 즉 기억장치의 어느 부분이 사용되고 있으며 사용되지 않는 부분을 기억하고 사용된다면 어떤 프로세서에 의해 사용되는지를 추적, 기억한다.',
            장치관리기능: '컴퓨터시스템과 연결된 각종 제어장치와 입출력장치와 같은 장치들의 상태를 관리 기억한다. 이를 위한 프로그램으로서 입출력 교통량 제어기가 있다.',
            정보자원관리기능:'정보의 위치, 상태 등을 추적 관리한다. 또한 어떤 작업에서 정보자원을 사용하도록 할 것인지를 결정하고 정보자원의 할당, 회수 등도 이 기능에서 관리한다.'
        },
        OsAlgoTitle:{
          title :'2',
          title1 :'3',
          title2 :'2',
          title3 :'1',
           title9 :'3',
          title4 :'5',
          title5 :'2',
          title6 :'3',
          title8 :'5'
        
        },
        OsAlgoContext1:{
           title :'2',
          title1 :'2',
          title2 :'2',
          title3 :'2',
          title9 :'2',
          title4 :'5',
          title5 :'5',
          title6 :'5',
          title8 :'5'
        },
        OsAlgoContext2:{
            title :'--',
          title1 :'3',
          title2 :'3',
          title3 :'3',
          title9 :'3',
          title4 :'3',
          title5 :'2',
          title6 :'2',
          title8 :'2'
        },
           OsAlgoContext3:{
            title :'--',
          title1 :'--',
          title2 :'--',
          title3 :'1',
          title9 :'1',
          title4 :'1',
          title5 :'1',
          title6 :'3',
          title8 :'3'
        },
          OsAlgoContext4:{
            title :'2',
          title1 :'2',
          title2 :'2',
          title3 :'2',
          title9 :'2',
          title4 :'2',
          title5 :'2',
          title6 :'2',
          title8 :'2'
        },
          OsAlgoContext5:{
            title :'--',
          title1 :'3',
          title2 :'3',
          title3 :'3',
          title9 :'3',
          title4 :'5',
          title5 :'5',
          title6 :'5',
          title8 :'5'
        },
          OsAlgoContext6:{
            title :'--',
          title1 :'--',
          title2 :'--',
          title3 :'1',
          title9 :'1',
          title4 :'1',
          title5 :'1',
          title6 :'3',
          title8 :'3'
        },
          OsAlgoContext7:{
             title :'2',
          title1 :'2',
          title2 :'2',
          title3 :'2',
          title9 :'2',
          title4 :'2',
          title5 :'2',
          title6 :'2',
          title8 :'2'
        },
          OsAlgoContext8:{
            title :'--',
          title1 :'3',
          title2 :'3',
          title3 :'3',
          title9 :'3',
          title4 :'3',
          title5 :'3',
          title6 :'3',
          title8 :'3'
        },
          OsAlgoContext9:{
            title :'--',
          title1 :'--',
          title2 :'1',
          title3 :'1',
          title9 :'1',
          title4 :'3',
          title5 :'2',
          title6 :'2',
          title8 :'2'
        },
        
        
    })
}
</script>
<style>
    .Os-content{
        padding: 100px;
    }
    .OsAlgo-content{
      float: left;
      border: black solid 2px;
      padding: 7px;
      margin: 1px;
    }
    .top-title{
      float: left;
      padding-right: 2px;
      padding-left: 2px;
      padding-top: 50px;
      padding-bottom: 45px;
      border: black solid 2px;
      margin: 1px;
    }
</style>