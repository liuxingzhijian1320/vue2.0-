<template>
  <component v-show="status" id="modal" v-bind:is="name">
    <!-- 组件在 name 变化时改变！ -->
  </component>
</template>
<script>
  import firstmodal from './first_modal/first.modal.vue';
  import secondmodal from './second_modal/second.modal.vue';
  import threemodal from './three_modal/three.modal.vue';

  import {
    mapState,
    mapGetters,
    mapActions,
    mapMutations,
  } from 'vuex';

  // 弹出静音
  // this.$store.dispatch('toggleModal', {
  //   name: 'volume',
  //   status: true
  // });

  export default {
    name: 'modal',
    computed: {
      ...mapState({
        status: state => state.modal.status,
        name: state => state.modal.name,
      }),
    },
    components: {
      firstmodal: firstmodal,
      secondmodal: secondmodal,
      threemodal: threemodal,

    },
  };
</script>
<style>
  #modal {
    position: fixed;
  }
</style>
