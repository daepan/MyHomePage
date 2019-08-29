<template>

  <div class="Vue-content">
    <ol>
      <li>Vue devtool기능을 이용하여 아래 메세지를 변경해보세요</li>
    <div id="app">
    {{ message1 }}
  </div>
  <br><br>
  <div id="app-2">
      
    <span v-bind:title="message2">
      내 위에 잠시 마우스를 올리면 동적으로 바인딩 된 title을 볼 수 있습니다!
    </span>
  </div>
  <br><br>

  <div id="app-3">
    <li>Vue devtool기능을 이용해서 seen을 false나 true로 변경해보아요</li>
    <p v-if="seen">이제 나를 볼 수 있어요</p>
  </div>
   <br><br>
  <div id="app-4">
    <li>v-for를 활용하여 다음과 같은 리스트를 만들 수 있어요</li>
    <ol>
      <li v-for="todo in todos" :key="todo.id">
        {{ todo.text }}
      </li>
    </ol>
  </div>
  <br><br>
  <div id="app-5">
      <li>버튼을 눌러서 메세지를 거꾸로도 볼 수 있어요</li>
    <button v-on:click="reverseMessage">메시지 뒤집기</button>
  </div>
  <div id="app-6">
    <p>{{ message }}</p>
    <input v-model="message">
  </div>
  </ol>
  </div>
</template>
<script>
export default {
    name:'app',
    data: function(){
      return{
        message1: '안녕하세요 Vue!',
        message2: '이 페이지는 ' + new Date() + ' 에 로드 되었습니다',
         seen: false,
          todos: [
          { text: 'JavaScript 배우기' },
          { text: 'Vue 배우기' },
          { text: '무언가 멋진 것을 만들기' }
        ],
          message: '안녕하세요! Vue.js!'
    }
    },
        methods: {
        reverseMessage: function () {
          this.message = this.message.split('').reverse().join('')
        }
      }
}
</script>
<style>
  input{
    border: black 1px solid;
  }
</style>