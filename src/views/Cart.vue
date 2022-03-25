<template>
  <div>
    <!--Summery-->
    <section class="m-5">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-12 mx-auto ">
            <div class="card">
              <div class="card-header">
                <div class="d-flex justify-content-center align-items-center text-black-50">
                  <i class="la-3x mb-2 las la-shopping-cart"></i>
                  <h5>Cart Listing</h5>
                </div>
              </div>
              <div class="card-body">

<!--                If Cart Null-->
                <div class="container" v-if="GET_CART_DATA.length === 0">
                  <div class="row">
                    <div class="col-xl-8 mx-auto">
                      <div class="shadow-sm bg-white p-4 rounded">
                        <div class="text-center p-3">
                          <i class="las la-frown la-3x opacity-60 mb-3"></i>
                          <h3 class="h4 fw-700">Your Cart is empty</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
<!--                If Cart Null End-->

<!--                If Cart Not Null-->
                <table  v-else class="table table-borderless align-middle text-center">
                  <thead>
                  <tr>
                    <th scope="col">Image</th>
                    <th scope="col">Name</th>
                    <th scope="col">Category</th>
                    <th scope="col">Description</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Each</th>
                    <th scope="col">Total</th>
                    <th scope="col">Delete</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr v-for="c in GET_CART_DATA" :key="c.id">
                    <td>
                      <img :src="c.price.good.photos.length === 0 ? '' : c.price.good.photos[0].name "  class="img-fit size-60px rounded" alt="">
                    </td>
                    <td>
                      {{ c.price.good.name }}
                    </td>
                    <td>
                      {{ c.price.good.category.length === 0 ? 'No category' : c.price.good.category.name }}
                    </td>
                    <td>
                      {{ c.price.good.description }}
                    </td>
                    <td class="align-items-center">
                      <button class="btn btn-icon btn-sm btn-circle btn-light" @click="[c.qty === 1 ? c.qty : c.qty--,CartUpdate(c)]" >
                        <i class="las la-minus"></i>
                      </button>
                      <input
                        type="number"
                        class="col border-0 text-center fs-16 input-number w-25"
                        placeholder="1"
                        :value="c.qty"
                      />
                      <button class="btn btn-icon btn-sm btn-circle btn-light" @click="[c.qty === 10 ? c.qty : c.qty++,CartUpdate(c)]">
                        <i class="las la-plus"></i>
                      </button>
                    </td>
                    <td class="align-items-center">
                      {{ c.price.good.prices[0].price }}
                    </td>
                    <td class="align-items-center">
                      {{ c.price.good.prices[0].price * c.qty }}
                    </td>
                    <td>
                      <button class="btn btn-outline-primary btn-sm" @click="DelCartData(c)">
                        <i class="las la-trash"></i>
                      </button>
                    </td>
                  </tr>
                  </tbody>
                </table>
<!--                If Cart Not Null End-->

              </div>
              <div class="card-footer w-100">
                <div class="d-flex justify-content-between align-items-center w-100">
                  <div>
                    <router-link class="btn btn-outline-primary" to="/categories">
                      <i class="las la-arrow-left"></i>Return To Shop
                    </router-link>
                  </div>
                  <div>
                    <router-link class="btn btn-primary" to="" @click="Ordered" >Ordered</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Modal></Modal>

  </div>
</template>

<script>
import $http from '../axios.js'
import { mapGetters, mapMutations } from 'vuex'
import Modal from "@/components/Modal";
export default {
  name: "Cart",
  components: {Modal},
  data() {
    return {
      total : ""
    }
  },
  created(){
    this.getCartFromDB();
  },
  computed:{
    ...mapGetters([
      'GET_CART_COUNT',
      'GET_CART_DATA',
      'GET_USER',
      'GET_TOKEN',
      'GET_MODAL_TYPE'
    ]),
  },
  methods: {
    ...mapMutations([
      'ADD_TO_CART',
      'DEL_CART_DATA',
      'ADD_Good',
      'ADD_USER',
      'ADD_TOKEN',
      'ADD_MODAL_STATUS',
      'ADD_MODAL_TYPE',
      'ADD_TO_CART_FROM_DB',
      'DEL_ALL_CART_DATA'
    ]),
    Ordered(){
      if(this.GET_CART_DATA.length !== 0){
        this.ADD_MODAL_STATUS(true);
        this.ADD_MODAL_TYPE('order')
      }else if(this.GET_USER.length === 0){
        this.ADD_MODAL_STATUS(true);
        this.ADD_MODAL_TYPE('')
      }else{
        alert('There is no cart data for ordered.')
      }
    },
    DelCartData(c){
      //Delete From Back-End
      $http.delete('carts',c.id).then((res)=>{
        //Delete From Font-End
        this.DEL_CART_DATA(c);
      });
    },
    CartUpdate(c){
      if(this.GET_USER.length === 0){
        this.ADD_MODAL_STATUS(true);
      }else {
        $http.update('carts',c.id,{
          'user_id' : c.user_id,
          'price_id' : c.price_id,
          'qty' : c.qty,
        }).then((res)=>{
          // action
        });
      }
    },
    getCartFromDB(){
      $http.getAll('carts?user_id='+localStorage.getItem('user_id'))
          .then((res)=>{
            let cart = res.data.data;
            //Add To Cart To Vuex
            this.ADD_TO_CART_FROM_DB(cart);
          });
    },
  },
};
</script>

<style scoped></style>
