<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-header">
                <span class="h5 text-black-50 mb-0">{{ i.cartList }}</span>
            </div>
            <div class="card-body">

            <div style="overflow-x:auto;">
              <table class="table table-borderless align-middle text-lg-center ">
                <thead>
                <tr>
                  <th scope="col">Image</th>
                  <th scope="col">Name</th>
                  <th scope="col">Category</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Total</th>
                  <th scope="col">Delete</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td colspan="6">
                    <!--If Cart Null-->
                    <div class="container" v-if="GET_CART_DATA.length === 0">
                      <div class="row">
                        <div class="col-xl-8 mx-auto">
                          <div class="shadow-sm bg-white p-4 rounded">
                            <div class="text-center p-3 d-flex justify-content-center align-items-center">
                              <i class="las la-frown la-3x opacity-60 mb-3"></i>
                              <h3 class="h4 fw-700  text-black-50 mb-0">Your Cart is empty</h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!--If Cart Null End-->
                  </td>
                </tr>
                <tr v-for="c in GET_CART_DATA" :key="c.id" class="text-black-50">
                  <td class="align-middle">
                    <img :src=" c.price === null ? '' : c.price.good.photos.length === 0 ? '' : c.price.good.photos[0].name "  class="img-fit size-60px rounded" alt="">
                  </td>
                  <td class="align-middle">
                    {{ c.price === null ? 'Null' : c.price.good.name }}
                  </td>
                  <td class="align-middle">
                    {{ c.price === null ? 'Null' : c.price.good.category.length === 0 ? 'No category' : c.price.good.category.name }}
                  </td>
                  <td class="align-middle">
                    <div class="text-center">
                      <button class="btn btn-icon btn-sm btn-light rounded-circle" @click="[c.qty === c.price.stock ? c.price.stock : c.qty++,CartUpdate(c)]">
                        <i class="las la-plus"></i>
                      </button>
                      <input
                          type="number"
                          class="col border-0 text-center fs-16 input-number"
                          placeholder="1"
                          :value="c.qty"
                      />
                      <button class="btn btn-icon btn-sm btn-light rounded-circle" @click="[c.qty === 1 ? c.qty : c.qty--,CartUpdate(c)]" >
                        <i class="las la-minus"></i>
                      </button>
                    </div>
                  </td>
                  <td class="align-middle">
                    {{ c.price === null ? 'Null' : c.price.good.prices[0].price * c.qty }}
                  </td>
                  <td class="align-middle">
                    <button class="btn btn-danger btn-sm rounded-circle " @click="DelCartData(c)">
                      <i class="las la-trash"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td colspan="3">
                  </td>
                  <td class="fw-600" colspan="2">
                    {{ i.totalCost }}:
                  </td>
                  <td class="fw-bold text-warning h5" colspan="2">
                    {{ GET_CART_DATA.length === 0 ? 0 : total.price_total  }}
                  </td>
                </tr>
                </tbody>
              </table>
            </div>

            </div>
            <div class="card-footer">
              <div class="d-flex justify-content-between align-items-center w-100">
                <div>
                  <router-link class="btn btn-outline-primary" to="/categories">
                    <i class="las la-arrow-left"></i>Return To Shop
                  </router-link>
                </div>
                <div>
                  <router-link class="btn btn-primary" to="" @click="Ordered" >Ordered
	                  <i class="fa-solid fa-arrow-right"></i></router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Modal></Modal>

  </div>
</template>

<script>
import $http from '../axios.js'
import { mapGetters, mapMutations } from 'vuex'
import Modal from "@/components/Modal";
import Swal from "sweetalert2";
export default {
  name: "Cart",
  components: {Modal},
  data() {
    return {
      total : [
        {
          'price_total' : '',
          'qty_total ' : '',
        }
      ],
      cart : [],
    }
  },
  created(){
    window.scrollTo(0,0);
    this.getCartFromDB();
  },
  computed:{
    ...mapGetters([
      'GET_CART_COUNT',
      'GET_CART_DATA',
      'GET_USER',
      'GET_TOKEN',
      'GET_MODAL_TYPE',
		    'i'
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
      'DEL_ALL_CART_DATA',
      'ADD_ORDER_TOTAL'
    ]),
    Ordered(){
      if(this.GET_CART_DATA.length !== 0){
        this.$router.push('/order');
      }else if(this.GET_USER.length === 0){
        this.ADD_MODAL_STATUS(true);
        this.ADD_MODAL_TYPE('')
      }else{
        Swal.fire({
          icon: 'warning',
          text: 'There is no data in your cart!',
        })
      }
    },
    DelCartData(c){
      //Delete From Back-End
      $http.delete('carts',c.id).then((res)=>{
        //Delete From Font-End
        this.DEL_CART_DATA(c);
        console.log(res);
       this.getCartFromDB()
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
          this.getTotal();
        });
      }
    },
    getCartFromDB(){
      $http.getAll('carts?user_id='+localStorage.getItem('user_id'))
          .then((res)=>{
            this.cart = res.data.data;
            this.getTotal();
            //Add To Cart To Vuex
            this.ADD_TO_CART_FROM_DB(this.cart);
          });
    },
    getTotal(){
      let c =this.cart.map((el)=>el.price.price * el.qty);
      let q = this.cart.map((el)=>el.qty);
      let t = this.cart.length;

      this.total.qty_total = q.map((el)=>el).reduce((p,n)=>p+n);
      this.total.price_total =  c.map((el)=>el).reduce((p,n)=>p+n);
      this.ADD_ORDER_TOTAL({
        'item' : t,
        'qty' : this.total.qty_total,
        'price' : this.total.price_total
      });
    }
  },
};
</script>

<style scoped></style>
