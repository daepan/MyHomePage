<template>
    <div  class="Algo-content">
        <h1>최대공약수와 최소공배수 알고리즘</h1>
        <br>
       <h2>유클리드호제법</h2> 
       <br>
       <li>2개의 자연수 또는 정식(整式)의 최대공약수를 구하는 알고리즘의 하나</li>
       <br>
       <h3>유클리드 호제법의 방식</h3>
       <br>
       <li>2개의 자연수(또는 정식) a, b에 대해서 a를 b로 나눈 나머지를 r이라 하면 (단, a>b), </li>
        <li>a와 b의 최대공약수는 b와 r의 최대공약수와 같다. 이 성질에 따라, b를 r로 나눈 나머지 r'를 구하고, 다시 r을 r'로 나눈 나머지를 구하는 과정을 반복하여 나머지가 0이 되었을 때 나누는 수가 a와 b의 최대공약수이다.</li>
       <br>
       <h2> 최대공약수 구하기</h2>
        <br>
       <li>2019와 1986의 최대 공약수 찾기 </li>
        <li>2019는 1986으로 나누어떨어지지 않기에 나머지를 구하면 33 </li>
        <li>1986은 33으로 나누어 떨어지지 않기에 나머지를 구하면 6 </li>
        <li>33은 6으로 나누어 떨어지지 않기에 나머지를 구하면 3 </li>
        <li>6은 3으로 나누어떨어지므로 3이 최대공약수이다. </li>
        <br>
        <h2>최소공배수 구하기 </h2>
        <br>
        <li>36과 8의 최대공약수-유클리드 호제법이용</li>
        <li>36을 8로 나눔 나머지 4</li>
        <li>8을 4로 나눔 나머지 0</li>
        <li>4가 최대공약수</li>
        <li>A=36 B=8</li>
        <li>A*B/gcd=36*8/4=72</li>
        <li>최소공배수는 72이다.</li>

       
         <br> <br>
        <h1>분할 정복</h1><br>
       <h2>정의</h2>  
       <li>문제를 나눌 수 없을 때까지 나누어서 각각을 풀면서 다시 합병하여 문제의 답을 얻는 알고리즘이다.</li>  
        <br>
        <h2>알고리즘을 설계하는 요령</h2> 
 
        <ol> Divide: 문제가 분할이 가능한 경우 2개 이상의 문제를 나눈다</ol>
        <ol>Conquer: 나누어진 문제가 여전히 분할이 가능하면 또다시 Divide를 수행한다 그렇지 않으면 문제를 푼다</ol>
        <ol>Combine: Conquer한 문제들을 통합하여 원래 문제의 답을 얻는다</ol>
 <br>
        <h1>피보나치 수열 구현</h1>
         <br>
        <h2>일반재귀</h2>
         <br>
         <v-layout
             align-center
                justify-center
             >
    <v-flex xs12>
      <v-hover v-slot:default="{ hover }">
        <v-card
          :elevation="hover ? 12 : 2"
          class="mx-auto"
          height="350"
          max-width="700"
        >
          <v-card-text class="my-4 text-center title">


</v-card-text>
        </v-card>
      </v-hover>
    </v-flex>
  </v-layout>
  <br>
        <h2>동적알고리즘</h2>
        <br>
        
        <h1>다익스트라 알고리즘</h1>
        <br>
        <h2>정의</h2>
        <br>
        <li>음의 가중치가 없는 그래프에서 한 노드에서 다른 모든 노드까지의 최단거리를 구하는 알고리즘</li>
        <br>
        <br>
        <h1>깊이 우선 탐색과 넓이 우선 탐색</h1>
        
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
.Algo-content{
    padding:100px;

}
.mx-auto{
    
}
</style>