<template>
  <div id="vuex">
    <button class="first-modal" @click="firstClick">打开modal</button>
    <button class="second-modal" @click="secondClick">点击btn传数据到modal上面去</button>
    <button class="three-modal" @click="threeClick">回调函数</button>
    <h1 class="h1">{{count}}</h1>
  </div>
</template>
<script>
  export default {
    name: 'vuexdemo',
    data(){
      return {
        show:'我是页面传递过来的数据',
        count:1,
      }
    },
    methods: {
      add(){
        this.count++;
      },
      firstClick(){
        this.$store.dispatch('toggleModal', {
          name: 'firstmodal',
          status: true
        })
      },
      secondClick(){
        this.$store.dispatch('toggleModal', {
          name: 'secondmodal',
          status: true,
          data:this.show,
        })
      },
      threeClick(){
        this.$store.dispatch('toggleModal', {
          name: 'threemodal',
          status: true,
          callback:this.add(),
        })
      }
    }
  }
</script>
<style scoped>
  #vuex {
    width: 100%;
    min-height: 100vh; /*满屏撑起来的*/
    background-color: red;
  }

  .first-modal, .second-modal, .three-modal {
    height: 100px;
    width: 100px;
  }
  .h1 {
    font-size:80px;
    color: #ffffff;
  }
</style>
