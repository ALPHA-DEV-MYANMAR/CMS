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
                <table class="table table-borderless align-middle text-center">
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
                      <img :src="c.photos.length === 0 ? '' : c.photos[0].name "  class="img-fit size-60px rounded" alt="">
                    </td>
                    <td>
                      {{ c.name }}
                    </td>
                    <td>
                      {{ c.category.length === 0 ? 'No category' : c.category.name }}
                    </td>
                    <td>
                      {{ c.description }}
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
                      {{ c.prices[0].price }}
                    </td>
                    <td class="align-items-center">
                      {{ c.prices[0].price * c.qty }}
                    </td>
                    <td>
                      <button class="btn btn-outline-primary btn-sm" @click="DelCartData(c)">
                        <i class="las la-trash"></i>
                      </button>
                    </td>
                  </tr>
                  </tbody>
                </table>
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
      this.DEL_CART_DATA(c);
    },
    CartUpdate(c){
      if(this.GET_USER.length === 0){
        this.ADD_MODAL_STATUS(true);
      }else {
        $http.create('carts',{
          'user_id' : this.GET_USER.id,
          'qty' : c.qty,
          'price_id' : c.prices[0].id
        }).then((res)=>{
          console.log(res);
        });
      }
    }
  },
};
</script>

<style scoped></style>
