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
                    <span class="rating">
                      <i class="las la-star"></i><i class="las la-star"></i
                    ><i class="las la-star"></i><i class="las la-star"></i
                    ><i class="las la-star"></i>
                    </span>
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
                      <small class="opacity-50 my-2">Recommended</small><br />
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
                        <strong class="h2 fw-600 text-primary mb-0">
                          {{  SHOW_Good.prices[0].price }}
                        </strong>
                      </div>
                    </div>
                  </div>

                  <hr />
                  <!-- Quantity + Add to cart -->
                  <div class="row no-gutters">
                    <div class="col-sm-2">
                      <div class="opacity-50 my-2">Quantity:</div>
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
                              class="col border-0 text-center flex-grow-1 fs-16 input-number"
                              placeholder="1"
                              v-model="quantity"/>
                          <button
                              class="btn col-auto btn-icon btn-sm btn-circle btn-light"
                              type="button"
                              data-type="plus"
                              @click=" quantity === 10 ? 10 : quantity++ "
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
                        <strong id="chosen_price" class="h4 fw-600 text-primary">{{ SHOW_Good.prices[0].price * quantity }}</strong>
                      </div>
                    </div>
                  </div>

                  <div class="mt-3">
                    <!--                  Add To Cart-->
                    <button class="btn btn-outline-primary mr-2 add-to-cart fw-600" @click="addToCart(SHOW_Good)">
                      <i class="las la-shopping-bag"></i>
                      <span class="d-none d-md-inline-block">Add to cart</span>
                    </button>
                    <!--                  Add To Cart-->

                    <!--                  Add Buy-->
                    <button v-if="SHOW_Good.total_stock > 0" class="btn btn-primary buy-now fw-600" @click="BuyNow(SHOW_Good)">
                      <i class="la la-shopping-cart"></i> Buy Now
                    </button>
                    <button v-else class="btn btn-secondary fw-600 " disabled>
                      <i class="la la-cart-arrow-down"></i> Out of Stock
                    </button>
                  </div>
                  <!--                Add Buy-->

                  <div class="d-table width-100 mt-3">
                    <div class="d-table-cell">
                      <!-- Add to wishlist button -->
                      <button
                          type="button"
                          class="btn pl-0 btn-link nav-link text-danger fw-600"
                          @click="addWishList(SHOW_Good)">
                        Add to wishlist
                      </button>
                      <!-- Add to compare button -->
                    </div>
                  </div>

                  <div class="row no-gutters mt-4">
                    <div class="col-sm-2">
                      <div class="opacity-50 my-2">Share:</div>
                    </div>
                    <div class="col-sm-10">
                      <div class="aiz-share jssocials">
                        <div class="jssocials-shares">
                          <div class="jssocials-share jssocials-share-email">
                            <a
                                target="_self"
                                href="mailto:?subject=This%20is%20very%20cold%20bug.&amp;body=http%3A%2F%2Flocalhost%2Faction%2FCMS%2Fproduct%2Fbug"
                                class="jssocials-share-link"
                            ><i class="lar la-envelope jssocials-share-logo"></i
                            ></a>
                          </div>
                          <div class="jssocials-share jssocials-share-twitter">
                            <a
                                target="_blank"
                                href="https://twitter.com/share?url=http%3A%2F%2Flocalhost%2Faction%2FCMS%2Fproduct%2Fbug&amp;text=This%20is%20very%20cold%20bug."
                                class="jssocials-share-link"
                            ><i class="lab la-twitter jssocials-share-logo"></i
                            ></a>
                          </div>
                          <div class="jssocials-share jssocials-share-facebook">
                            <a
                                target="_blank"
                                href="https://facebook.com/sharer/sharer.php?u=http%3A%2F%2Flocalhost%2Faction%2FCMS%2Fproduct%2Fbug"
                                class="jssocials-share-link"
                            ><i
                                class="lab la-facebook-f jssocials-share-logo"
                            ></i
                            ></a>
                          </div>
                          <div class="jssocials-share jssocials-share-linkedin">
                            <a
                                target="_blank"
                                href="https://www.linkedin.com/shareArticle?mini=true&amp;url=http%3A%2F%2Flocalhost%2Faction%2FCMS%2Fproduct%2Fbug"
                                class="jssocials-share-link"
                            ><i
                                class="lab la-linkedin-in jssocials-share-logo"
                            ></i
                            ></a>
                          </div>
                          <div class="jssocials-share jssocials-share-whatsapp">
                            <a
                                target="_self"
                                href="whatsapp://send?text=http%3A%2F%2Flocalhost%2Faction%2FCMS%2Fproduct%2Fbug This%20is%20very%20cold%20bug."
                                class="jssocials-share-link"
                            ><i class="lab la-whatsapp jssocials-share-logo"></i
                            ></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

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
                Description
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
export default {
  name: "Detail",
  components: {Modal},
  data() {
    return {
      quantity : 1,
      is_cart: true,
    }
  },
  computed: {
    ...mapGetters([
      'SHOW_Good',
      'GET_CART_DATA',
      'GET_USER',
      'GET_TOKEN',
      'GET_FAVOURITES'
    ]),
  },
  created() {
  },
  methods: {
    ...mapMutations([
      'ADD_TO_CART',
      'ADD_MODAL_STATUS',
      'ADD_FAVOURITES',
        'ADD_MODAL_TYPE'
    ]),
    BuyNow(g){
      if(this.GET_USER.length === 0) {
        this.ADD_MODAL_STATUS(true);
        this.ADD_MODAL_TYPE('');
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
          // Ordered Now
          this.ADD_MODAL_STATUS(true);
          this.ADD_MODAL_TYPE('order');
          }).catch((err)=>{console.log(err)});
        }else{
          // Ordered Now
          this.ADD_MODAL_STATUS(true);
          this.ADD_MODAL_TYPE('order');
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
          alert('You already add to cart this items.');
        }
      }
    },
    addToCart(g){
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
          alert('You already add to cart this items.');
        }
      }
    },
  },
};
</script>

