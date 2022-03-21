import { createStore } from 'vuex'

export default createStore({
  state: {
    get_good: {},
    get_all_categories: [],
    get_good_by_category_id: [],
    get_cart:  [] ,
  },
  getters: {
    SHOW_Good: (state) => {
      return state.get_good;
    },
    SHOW_ALL_CAT: (state) => {
      return state.get_all_categories;
    },
    SHOW_CAT_BY_ID: (state) => {
      return state.get_good_by_category_id;
    },
    GET_CART_COUNT: (state) => {
      return state.get_cart.length;
    },
    GET_CART_DATA: (state) => {
      return state.get_cart;
    }
  },
  mutations: {
    ADD_Good: (state,good) => {
      state.get_good = good;
    },
    ADD_ALL_CAT: (state,categories) => {
      state.get_all_categories = categories ;
    },
    ADD_GOOD_WITH_ID: (state,category) => {
      state.get_good_by_category_id = category;
    },
    ADD_TO_CART: (state,good) =>{
      state.get_cart.push(good);
    },
    DEL_CART_DATA: (state,good) =>{
      state.get_cart = state.get_cart.filter((el)=>{
        return el.id !== good.id;
      })
    }
  },
  actions: {
  },
  modules: {
  }
})
