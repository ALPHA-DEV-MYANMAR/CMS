<template>
  <div>
    <NavBar></NavBar>
  </div>
</template>


<script>
import $http from './axios.js';
import NavBar from "@/components/NavBar";
import {mapMutations} from "vuex";
export default {
  components: {NavBar},
  created() {
    this.getCategories();
    this.getOrderStatus();
    this.getPaymentMethod();
    this.getDeliveryAcceptTime();
    this.getDeliveryAgent();
    this.getCartFromDB();
    this.getUser();
    this.getFavFromDB();
  },
  methods:{
    ...mapMutations([
      'ADD_ALL_CAT',
      'ADD_ORDER_STATUS',
      'ADD_PAYMENT',
      'ADD_ACCEPT_TIME',
      'ADD_DELIVER_AGENT',
      'ADD_TOKEN',
      'ADD_USER',
      'ADD_TO_CART_FROM_DB',
      'ADD_FAVOURITES_FROM_DB'
    ]),
    getUser(){
      $http.get('customers',localStorage.getItem('user_id'))
          .then((res)=>{
            this.User = res.data.data;
            this.ADD_TOKEN(localStorage.getItem('token'));
            this.ADD_USER(this.User);
          });
    },
    getOrderStatus(){
      $http.getAll('order_status').then((res)=>{
        this.ADD_ORDER_STATUS(res.data.data);
      });
    },
    getPaymentMethod(){
      $http.getAll('payment_methods').then((res)=>{
        this.ADD_PAYMENT(res.data.data);
      });
    },
    getDeliveryAcceptTime(){
      $http.getAll('deliver_accept_times').then((res)=>{
        this.ADD_ACCEPT_TIME(res.data.data.data);
      });
    },
    getDeliveryAgent(){
      $http.getAll('delivery_agents').then((res)=>{
        this.ADD_DELIVER_AGENT(res.data.data);
      });
    },
    getCategories(){
      $http.getAll('categories').then((res)=>{
        this.ADD_ALL_CAT(res.data.data);
      }).catch((err)=>{console.log(err)});
    },
    getCartFromDB(){
      $http.getAll('carts?user_id='+localStorage.getItem('user_id'))
          .then((res)=>{
            let cart = res.data.data;
            //Add To Cart To Vuex
            this.ADD_TO_CART_FROM_DB(cart);
          });
    },
    getFavFromDB(){
      $http.getAll('favorites?user_id='+localStorage.getItem('user_id'))
          .then((res)=>{
            //Add To Cart To Vuex
            let filter_good_not_null = res.data.data.filter((el)=>el.good !== null);
            this.ADD_FAVOURITES_FROM_DB(filter_good_not_null);
          });
    }
  }
}
</script>


