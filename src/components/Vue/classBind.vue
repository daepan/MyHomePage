<template>
  <div class="Vue-content">
    클래스 바인드 예제 화면
    (F12를 눌러 참고하세요)
      <div>
        <h1>Hello, {{ name }}</h1>
        <h2>{{ Date() }}</h2>
        <img :src="hello ? hiing : hied" />

        //true=>false(vuedev 활용)
    </div>
    <div>
        <div :class="classObject"></div>
    </div>
    <div>
        <div :style="{ color: activeColor, fontSize: fontSize + 'px' }">{{message}}</div>
    </div>

  </div>
</template>
<script>
export default {
    name:'app',
    data: function(){
      return{
        name: '대관',
        hello: true,
        hiing: 'https://t1.daumcdn.net/cfile/tistory/991616465CC964C530',
        hied: 'https://imgfiles-cdn.plaync.com/file/BladeNSoul/download/20190516094428-FayRz6gtk1iKqiV4BAmP0-v4',
        isActive: true,
        error: null,
        message:'style-bind',
        activeColor: 'red',
        fontSize: 30
    }
    },
    computed: {
          classObject: function () {
              return {
                  active: this.isActive && !this.error,
                  'text-danger': this.error && this.error.type === 'fatal'
              }
          }
    }
}
</script>
<style>
</style>
