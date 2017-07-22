<template>
  <div id="app">
    <router-view></router-view>
    <modal></modal>  <!--add-->
  </div>
</template>

<script>
  import modal from 'components/modal/modal'  //add
  export default {
    name: 'app',
    components: {
      modal  //add
    }
  }
</script>

<style>
  * {
    padding: 0;
    margin: 0;
  }
</style>
