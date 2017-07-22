import Vue from 'vue'
import Router from 'vue-router'
import vuexdemo from 'views/vuex'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'vuexdemo',
      component: vuexdemo
    }, {
      path: '*',
      redirect: {
        name: 'vuexdemo'   //这句话的目的，重定向url输错时候，自动跳到的vuexdemo这条路由上面的
      }
    }
  ]
})
