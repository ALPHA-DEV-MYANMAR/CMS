import { createStore } from 'vuex'
import $http from '../axios.js'

export default createStore({
  state: {
    get_good: {},
    modal_status: false,
    modal_type: "",
    get_all_categories: [],
    get_good_by_category_id: [],
    get_cart:  [] ,
    get_favourites: [],
    get_token: "",
    get_user: [],
    get_order_status: [],
    get_payment_method: [],
    get_delivery_accept_time: [],
    get_delivery_agent: [],
    get_order_total: "",
    lang: "en",
    i : {},
    is_pay : false,
    get_order: ""
  },
  getters: {
    GET_ORDER : (state) => {
      return state.get_order;
    },
    i : (state) => {
      return state.i;
    },
    GET_LANG : (state) => {
      return state.lang;
    },
    GET_ORDER_STATUS: (state) => {
      return state.get_order_status;
    },
    GET_PAYMENT: (state) => {
      return state.get_payment_method;
    },
    GET_ACCEPT_TIME: (state) => {
      return state.get_delivery_accept_time;
    },
    GET_DELIVER_AGENT: (state) => {
      return state.get_delivery_agent;
    },
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
      return state.get_cart === null ? 0 : state.get_cart.length;
    },
    GET_CART_DATA: (state) => {
      return state.get_cart;
    },
    GET_USER: (state) => {
      return state.get_user;
    },
    GET_TOKEN: (state) => {
      return state.get_token;
    },
    GET_MODAL_STATUS: (state) => {
      return state.modal_status;
    },
    GET_MODAL_TYPE: (state) => {
      return state.modal_type;
    },
    GET_FAVOURITES: (state) => {
      return state.get_favourites;
    },
    GET_FAVOURITES_TOTAL: (state) => {
      return state.get_favourites.length;
    },
    GET_ORDER_TOTAL: (state) => {
      return state.get_order_total;
    },
    GET_PAY: (state) => {
      return state.is_pay;
    }
  },
  mutations: {
    ADD_ORDER:(state,data) => {
      state.get_order = data;
    },
    ADD_PAY: (state,con) => {
      state.is_pay = con;
    },
    ADD_LANG_OJ: (state,o) => {
      state.i = o;
    },
    ADD_LANG: (state,l) => {
      state.lang = l;
    },
    ADD_ORDER_STATUS: (state,list) => {
      state.get_order_status = list ;
    },
    ADD_PAYMENT: (state,list) => {
      state.get_payment_method =list ;
    },
    ADD_ACCEPT_TIME: (state,list) => {
      state.get_delivery_accept_time = list;
    },
    ADD_DELIVER_AGENT: (state,list) => {
      state.get_delivery_agent = list;
    },
    ADD_FAVOURITES : (state,list) => {
      state.get_favourites.push(list);
    },
    ADD_FAVOURITES_FROM_DB: (state,list) => {
      state.get_favourites = list;
    },
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
    ADD_TO_CART_FROM_DB: (state,good) => {
      state.get_cart = good;
    },
    DEL_CART_DATA: (state,good) =>{
      state.get_cart = state.get_cart.filter((el)=>{
        return el.id !== good.id;
      })
    },
    DEL_FAVOURITES_DATA: (state,good) => {
      state.get_favourites = state.get_favourites.filter((el)=>{
        return el.id !== good.id;
      })
    },
    DEL_ALL_FAVOURITES_DATA: (state) =>{
      state.get_favourites = []
    },
    DEL_ALL_CART_DATA: (state) => {
      state.get_cart = []
    },
    ADD_TOKEN: (state , token) => {
      state.get_token = token;
    },
    ADD_USER: (state , user ) => {
      state.get_user = user;
    },
    ADD_MODAL_STATUS: (state,status) =>{
      state.modal_status = status;
    },
    ADD_MODAL_TYPE: (state,type) => {
      state.modal_type = type;
    },
    ADD_ORDER_TOTAL : (state,order) => {
      state.get_order_total = order;
    }
  },
  actions: {
  },
  modules: {
  }
})
