<template>
  <div>

    <section class="mb-4 pt-3">
      <div class="container">
        <div class="card">
          <div class="bg-white shadow-sm rounded p-3">
            <div class="row">
              <!--        Item -->
              <div class="col-xl-5 col-lg-6 mb-4">
                <div class="sticky-top z-3 row gutters-10">
                  <div class="col order-1 order-md-2">
                    <div
                        class="aiz-carousel product-gallery slick-initialized slick-slider"
                        data-nav-for=".product-gallery-thumb"
                        data-fade="true"
                        data-auto-height="true"
                    >
                      <div class="slick-list draggable" style="height: 508.828px">
                        <div class="slick-track" style="opacity: 1; width: 352px">
                          <div
                              class="slick-slide slick-current slick-active"
                              data-slick-index="0"
                              aria-hidden="false"
                              style="
                            width: 352px;
                            position: relative;
                            left: 0px;
                            top: 0px;
                            z-index: 999;
                            opacity: 1;
                          "
                          >
                            <div>
                              <div class="carousel-box img-zoom rounded" style="width: 100%; display: inline-block"   >
                                <img  class="img-fluid ls-is-cached lazyloaded"  :src="SHOW_Good.photos[0].name" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!--        Item-->

              <!--        Item Detail-->
              <div class="col-xl-7 col-lg-6">
                <div class="text-start">
                  <h1 class="mb-2 fs-20 fw-600">{{ SHOW_Good.name }}</h1>
                  <div class="row align-items-center">
                    <div class="col-12">
                      <span class="ml-1 opacity-50">({{ SHOW_Good.view_count }} reviews)</span>
                    </div>
                  </div>

                  <hr />

                  <div class="row align-items-center">
                    <div class="col-auto">
                      <small class="opacity-50 my-2">Category</small><br />
                      {{ SHOW_Good.category.name }}
                    </div>
                    <div class="col-auto">
                      <small class="opacity-50 my-2">Brand</small><br />
                      {{ SHOW_Good.brand.name }}
                    </div>
                    <div class="col-auto">
                      <small class="opacity-50 my-2">{{ i.recommended }}</small><br />
                      {{ SHOW_Good.recommended_flag === 1 ? 'No' : 'Yes'}}
                    </div>
                    <div class="col-auto">
                      <small class="opacity-50 my-2">Total Stock</small><br />
                      {{ SHOW_Good.total_stock }}
                    </div>
                  </div>

                  <hr />

                  <div class="row no-gutters mt-3">
                    <div class="col-sm-2">
                      <div class="opacity-50 my-2">Price:</div>
                    </div>
                    <div class="col-sm-10">
                      <div class="">
                        <strong class="h2 fw-600 mb-0">
                          {{  SHOW_Good.prices[0].price }}￥
                        </strong>
                      </div>
                    </div>
                  </div>

                  <hr />
                  <!-- Quantity + Add to cart -->
                  <div class="row no-gutters">
                    <div class="col-sm-2">
                      <div class="opacity-50 my-2">{{ i.quantity }}:</div>
                    </div>
                    <div class="col-sm-10">
                      <div class="product-quantity d-flex align-items-center">
                        <div
                            class="row no-gutters align-items-center aiz-plus-minus mr-3"
                            style="width: 130px"
                        >
                          <button
                              class="btn col-auto btn-icon btn-sm btn-circle btn-light"
                              type="button"
                              data-type="minus"
                              data-field="quantity"
                              @click=" quantity === 1 ? quantity : quantity-- "
                          >
                            <i class="las la-minus"></i>
                          </button>
                          <input
                              type="number"
                              class="col border-0 text-center flex-grow-1 fs-16 input-number text-reset"
                              placeholder="1"
                              :value="getQty" />
                          <button
                              class="btn col-auto btn-icon btn-sm btn-circle btn-light"
                              type="button"
                              data-type="plus"
                              @click=" quantity === SHOW_Good.total_stock ? SHOW_Good.total_stock : quantity++ "
                          >
                            <i class="las la-plus"></i>
                          </button>
                        </div>
                        <div class="avialable-amount opacity-60">
                          <span>{{ SHOW_Good.unit.name }}</span>
                          (<span id="available-quantity">{{ SHOW_Good.prices[0].quantity }}</span> available)
                        </div>
                      </div>
                    </div>
                  </div>

                  <hr />

                  <div class="row no-gutters pb-3">
                    <div class="col-sm-2">
                      <div class="opacity-50 my-2">Total Price:</div>
                    </div>
                    <div class="col-sm-10">
                      <div class="product-price">
                        <strong id="chosen_price" class="h4 fw-600 ">{{ SHOW_Good.prices[0].price * quantity }}￥</strong>
                      </div>
                    </div>
                  </div>

                  <div class="mt-3">
                    <!-- Add To Cart-->
                    <button v-if="SHOW_Good.total_stock > 0"  class="btn btn-dark mr-2 " @click="addToCart(SHOW_Good)">
                      <i class="fas fa-shopping-cart"></i>
                      <span>{{ i.addToCart }}</span>
                    </button>
                    <!--Add To Cart-->
                    <!--Add Buy-->
                    <button v-if="SHOW_Good.total_stock > 0" class="btn btn-dark mr-3" @click="OrderNow(SHOW_Good)">
                      <i class="fas fa-shopping-bag"></i>
                      Order Now
                    </button>
                    <button v-else class="btn btn-secondary mr-3" disabled>
                      <i class="fas fa-cart-arrow-down"></i> Out of Stock
                    </button>
                    <button
                        type="button"
                        class="btn btn-danger mt-4 mt-md-0"
                        @click="addWishList(SHOW_Good)">
                      <i class="fas fa-heart"></i>
                      Add to favourite
                    </button>
                  </div>
                  <!-- Add Buy-->
                </div>
              </div>
              <!--        Item Detail-->

              <!--       Top Selling-->
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="card text-start">
              <div class="card-header">
	              {{ i.description }}
              </div>
              <div class="card-body">
                {{ SHOW_Good.description }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Modal -->
    <Modal></Modal>
    <!--Modal-->

  </div>
</template>

<script>
import $http from '../axios.js'
import {mapGetters, mapMutations} from 'vuex'
import Modal from "@/components/Modal";
import Swal from "sweetalert2";
export default {
  name: "Detail",
  components: {Modal},
  data() {
    return {
      quantity : 1 ,
      is_cart: true,
    }
  },
  computed: {
    ...mapGetters([
      'SHOW_Good',
      'GET_CART_DATA',
      'GET_USER',
      'GET_TOKEN',
      'GET_FAVOURITES',
		    'i'
    ]),
    getQty(){
      if(this.quantity > this.SHOW_Good.total_stock){
        return this.quantity = 1;
      }else{
        return this.quantity;
      }
    }
  },
  created() {
    window.scrollTo(0,0);
  },
  methods: {
    ...mapMutations([
      'ADD_TO_CART',
      'ADD_MODAL_STATUS',
      'ADD_FAVOURITES',
        'ADD_MODAL_TYPE'
    ]),
    OrderNow(g){
      if(this.GET_USER.length === 0) {
        this.ADD_MODAL_STATUS(true);
      }else{
        let is_same = this.GET_CART_DATA.filter(el => { return el.price.good_id === g.id });
        if(is_same.length === 0 ){
          // Back End Cart Create
          $http.create('carts',{
            'user_id' : this.GET_USER.id,
            'price_id' : g.prices[0].id,
            'qty' : this.quantity,
          }).then((res)=>{
            // Font End Cart Create
            this.ADD_TO_CART(res.data.data);
            // Go To Cart Route
            this.$router.push('/cart');
          }).catch((err)=>{console.log(err)});
        }
        else{
          this.$router.push('/cart');
        }
      }
    },
    addWishList(g){
      if(this.GET_USER.length === 0) {
        this.ADD_MODAL_STATUS(true);
      }else{
        let is_same = this.GET_FAVOURITES.filter(el => { return el.good_id === g.id });
        if(is_same.length === 0 ){
          // Store To DB
          $http.create('favorites',{
            'user_id' : this.GET_USER.id,
            'good_id' : g.id
          }).then((res)=>{
            // Store To Vuex
            this.ADD_FAVOURITES(res.data.data);
          }).catch((err)=>{console.log(err)});
        }else{
          Swal.fire({
            position: 'center',
            icon: 'warning',
            title: 'You already add to wishlist this items.',
            showConfirmButton: false,
            timer: 1500
          });
        }
      }
    },
    addToCart(g){
      if(g.total_stock === 0){
        Swal.fire({
          position: 'center',
          icon: 'info',
          title: 'Sorry!This item is out of stock.',
          showConfirmButton: false,
          timer: 1500
        });
      }else{
        if(this.GET_USER.length === 0) {
          this.ADD_MODAL_STATUS(true);
        }else{
          let is_same = this.GET_CART_DATA.filter(el => { return el.price.good_id === g.id });
          if(is_same.length === 0 ){
            // Back End Cart Create
            $http.create('carts',{
              'user_id' : this.GET_USER.id,
              'price_id' : g.prices[0].id,
              'qty' : this.quantity,
            }).then((res)=>{
              // Font End Cart Create
              this.ADD_TO_CART(res.data.data)
            }).catch((err)=>{console.log(err)});
          }
          else{
            Swal.fire({
              position: 'center',
              icon: 'warning',
              title: 'You already add to cart this items.',
              showConfirmButton: false,
              timer: 1500
            });
          }
        }
      }
    },
  },
};
</script>

