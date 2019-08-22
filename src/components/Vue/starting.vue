<template>
  <div class="Vue-content">
    <div id="app">
    {{ message1 }}
  </div>

  <div id="app-2">
    <span v-bind:title="message2">
      내 위에 잠시 마우스를 올리면 동적으로 바인딩 된 title을 볼 수 있습니다!
    </span>
  </div>
  <div id="app-3">
    <p v-if="seen">이제 나를 볼 수 있어요</p>
  </div>
  <div id="app-4">
    <ol>
      <li v-for="todo in todos">
        {{ todo.text }}
      </li>
    </ol>
  </div>
  <div id="app-5">
    <p>{{ message }}</p>
    <button v-on:click="reverseMessage">메시지 뒤집기</button>
  </div>
  <div id="app-6">
    <p>{{ message }}</p>
    <input v-model="message3">
  </div>
  </div>
</template>
<script>
export default {
    name:'app',
    data: function(){
      return{
        message1: '안녕하세요 Vue!',
        message2: '이 페이지는 ' + new Date() + ' 에 로드 되었습니다',
         seen: true,
          todos: [
          { text: 'JavaScript 배우기' },
          { text: 'Vue 배우기' },
          { text: '무언가 멋진 것을 만들기' }
        ],
          message3: '안녕하세요! Vue.js!'
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
</style>