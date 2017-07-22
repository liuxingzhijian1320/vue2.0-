<template>
  <transition name="modal">
      <div  class="modal-mask" @click="close">
        <div class="modal-outter">
          <div class="modal-wrapper"  @click.stop>
            <div class="modal-container">
              <div class="modal-body">
                点击按钮 ：view的页面的数值增加1
                <hr>
                常用到的场景：刷新页面重新拉取数据
                <br>
                <button class="bt" @click="callbackDemo">回调函数</button>
              </div>
            </div>

          </div>
        </div>

      </div>

  </transition>
</template>
<script>
  import {
    mapState,
    mapGetters,
    mapActions,
    mapMutations,
  } from 'vuex';

  export default {
    name: 'threeemodal',
    data() {
      return {};
    },
    computed: {
      ...mapState({
        data: state => state.modal.data || {},
        callback: state => state.modal.callback,
      }),
      ...mapGetters([]),
    },
    methods: {
      close() {
        this.$store.commit('closeModal');
      },
      callbackDemo() {
        this.close();
        this.callback && this.callback()
      },
    },
  };
</script>
<style scoped>
  .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: table;
    transition: opacity .3s ease;
  }

  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
  }

  .modal-container {
    width: 300px;
    height: 300px;
    margin: 0 auto;
    background-color: red;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
    font-family: Helvetica, Arial, sans-serif;
    position: relative;
    color: #ffffff;
    font-size:30px;
  }

  .bt {
    width:100px;
    height: 50px;
    position: absolute;
    bottom: 0;
    left:50%;
    transform: translateX(-50%);
  }

  .modal-enter .modal-container,
  .modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }

</style>
