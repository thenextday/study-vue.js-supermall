import Vue from 'vue'
import Vuex from 'vuex'

// 1.使用插件
Vue.use(Vuex)

// 2.创建对象
const store =new Vuex.Store({
  state:{
    cart:[]
  },
  mutations:{
    addObj (state,theObj) {
      return state.cart.push(theObj)
    },
  },
  actions:{},
  getters:{
    total (store) {
      var the_total =0;
      for (let i = 0;i < store.cart.length;i++ ) {
        the_total = store.cart[i].reco_price*store.cart[i].counter + the_total
      }

      return the_total
    }
  },
  modules:{}
})

export default store