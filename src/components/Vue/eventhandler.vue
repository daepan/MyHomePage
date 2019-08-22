<template>
  <div class="Vue-content">
    <div id="app1">
        <button v-on:click="counter += 1">Add 1</button>
        <p>위 버튼을 클릭한 횟수는 {{counter}}입니다.</p>

    </div>
    <div id="app2">
        <button @click="greet">Greet</button>
    </div>
  </div>
</template>
<script>
export default {
    name:'app',
    data: function(){
      return{
          counter: 0,
          name: '대관'
    }
    },
      methods: {
                greet: function (event) {
                    alert('Hello ' + this.name + '!')
                    if (event) {
                        alert(event.target.tagName)
                    }
                    }
            }
}
</script>
<style>
</style>
