<template>
  <div class="home">
    <div class="home-banner-area mb-4 pt-3">
      <div class="container">
        <div class="row">
          <!--Category-->
          <div class="card">
            <div class="card-body">
              <div class="row">
                <div class="d-flex mb-3 align-items-baseline border-bottom justify-content-between w-100">
                  <div class="h5 fw-700 mb-0">
                    <span class="border-bottom border-primary border-width-2 pb-3 d-inline-block">All Categories</span>
                  </div>
                  <div>
                    <router-link to="/categories" class="ml-auto mr-0 btn btn-primary btn-sm shadow-md">Total {{ total_category }}</router-link>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-6 col-md-4" v-for="c in categories" :key="c.id" @click="action(c)">
                  <div class="card rounded-lg shadow-sm hov-shadow-lg has-transition c-pointer text-center ">
                    <div class="card-body">
                      <span class="text-uppercase fw-bolder text-primary">{{ c.name }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--Category-->
        </div>
      </div>
      <div class="container">
        <div class="row">
          <!--Product-->
          <div class="card">
            <div class="card-body">
              <div class="row">
                <div class="d-flex mb-3 align-items-baseline border-bottom justify-content-between w-100">
                  <div class="h5 fw-700 mb-0">
                    <span class="border-bottom border-primary border-width-2 pb-3 d-inline-block">Lasted Products</span>
                  </div>
                  <div>
                    <router-link to="/categories" class="ml-auto mr-0 btn btn-primary btn-sm shadow-md">See More >> </router-link>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-6 col-md-3" v-for="g in goods" :key="g.id">
                  <div class="aiz-card-box border border-light rounded hov-shadow-md mt-1 mb-2 has-transition bg-white"  >
                    <div class="position-relative">
                      <img class="img-fit mx-auto h-140px h-md-210px lazyloaded" :src="g.photos.length === 0 ? '' : g.photos[0].name" />
                      <div class="absolute-top-right aiz-p-hov-icon">
                        <router-link
                            to=""
                            data-toggle="tooltip"
                            data-title="Add to wishlist"
                            data-placement="left"
                            @click="addWishList(g)"
                        >
                          <i class="la la-heart-o"></i>
                        </router-link>
                        <router-link
                            to=""
                            @click=""
                            data-toggle="tooltip"
                            data-title="Add to compare"
                            data-placement="left"
                        >
                          <i class="las la-sync"></i>
                        </router-link>
                        <router-link
                            to=""
                            @click="addToCart(g)"
                            data-toggle="tooltip"
                            data-title="Add to cart"
                            data-placement="left"
                        >
                          <i class="las la-shopping-cart"></i>
                        </router-link>
                      </div>
                    </div>
                    <div class="p-md-3 p-2 text-start">
                      <div class="fs-15">
                        <span class="fw-700 text-primary">{{ g.prices[0].price }}</span>
                      </div>
                      <div class="rating rating-sm mt-1">
                        <i class="las la-star"></i><i class="las la-star"></i
                      ><i class="las la-star"></i><i class="las la-star"></i
                      ><i class="las la-star"></i>
                      </div>
                      <h3 class="fw-600 fs-13 text-truncate-2 lh-1-4 mb-0 h-35px c-pointer" @click="addGood(g)"  >
                        {{ g.name }}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--Product-->
        </div>
      </div>
      <div class="container">
        <div class="row">
          <!--Product-->
          <div class="card">
            <div class="card-body">
              <div class="row">
                <div class="d-flex mb-3 align-items-baseline border-bottom justify-content-between w-100">
                  <div class="h5 fw-700 mb-0">
                    <span class="border-bottom border-primary border-width-2 pb-3 d-inline-block">Recommend Products</span>
                  </div>
                  <div>
                    <router-link to="/categories" class="ml-auto mr-0 btn btn-primary btn-sm shadow-md">See More >> </router-link>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-6 col-md-3" v-for="g in recommend_goods" :key="g.id">
                  <div class="aiz-card-box border border-light rounded hov-shadow-md mt-1 mb-2 has-transition bg-white"  >
                    <div class="position-relative">
                      <img class="img-fit mx-auto h-140px h-md-210px lazyloaded" :src="g.photos.length === 0 ? '' : g.photos[0].name" />
                      <div class="absolute-top-right aiz-p-hov-icon">
                        <router-link
                            to=""
                            data-toggle="tooltip"
                            data-title="Add to wishlist"
                            data-placement="left"
                            @click="addWishList(g)"
                        >
                          <i class="la la-heart-o"></i>
                        </router-link>
                        <router-link
                            to=""
                            @click=""
                            data-toggle="tooltip"
                            data-title="Add to compare"
                            data-placement="left"
                        >
                          <i class="las la-sync"></i>
                        </router-link>
                        <router-link
                            to=""
                            @click="addToCart(g)"
                            data-toggle="tooltip"
                            data-title="Add to cart"
                            data-placement="left"
                        >
                          <i class="las la-shopping-cart"></i>
                        </router-link>
                      </div>
                    </div>
                    <div class="p-md-3 p-2 text-start">
                      <div class="fs-15">
                        <span class="fw-700 text-primary">{{ g.prices[0].price }}</span>
                      </div>
                      <div class="rating rating-sm mt-1">
                        <i class="las la-star"></i><i class="las la-star"></i
                      ><i class="las la-star"></i><i class="las la-star"></i
                      ><i class="las la-star"></i>
                      </div>
                      <h3 class="fw-600 fs-13 text-truncate-2 lh-1-4 mb-0 h-35px c-pointer" @click="addGood(g)"  >
                        {{ g.name }}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--Product-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $http from '../axios.js'
import { mapGetters , mapState , mapMutations } from 'vuex'
export default {
  name: "HomeView",
  data() {
    return {
      categories : [],
      total_category: "",
      sub_categories : [],
      goods : [],
      recommend_goods : [],
    }
  },
  created() {
    this.getCategories();
    this.getGood();
    this.getRecommendGood();
  },
  computed: {
    ...mapState([
      'get_good',
    ]),
    ...mapGetters([
      'SHOW_CAT_BY_ID',
      'GET_CART_DATA',
      'GET_FAVOURITES',
      'GET_TOKEN',
      'GET_USER',
    ])
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
      'ADD_FAVOURITES_FROM_DB',
      'ADD_GOOD_WITH_ID',
      'ADD_Good',
      'ADD_ALL_CAT',
      'ADD_TO_CART',
      'ADD_MODAL_STATUS',
      'ADD_FAVOURITES_FROM_DB',
      'ADD_FAVOURITES'
    ]),
    getCategories(){
      $http.getAll('categories').then((res)=>{
        this.total_category = res.data.data.length;
        this.categories = res.data.data.splice(0,9);
        this.ADD_ALL_CAT(this.categories);
      }).catch((err)=>{console.log(err)});
    },
    getGood(){
      $http.getAll(`goods?sorting=desc`)
          .then((res)=>{
            this.goods = res.data.data.data.splice(0,8);
          }).catch((err)=>{console.log(err)});
    },
    getRecommendGood(){
      $http.getAll(`goods?recommended=true`)
          .then((res)=>{
            this.recommend_goods = res.data.data.data.splice(0,8);
          }).catch((err)=>{console.log(err)});
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
            'qty' : 1,
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
    addGood(c){
      this.ADD_Good(c);
      this.$router.push('/detail');
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
    getSubCategories(c) {
      $http.get(`categories/${c.id}?sub_categories=yes`).then((res)=>{
        this.sub_categories = res.data.data.sub_categories;
      }).catch((err)=>{console.log(err)})
    },
    action(c){
      this.$router.push('/single-category');
      this.ADD_GOOD_WITH_ID(c);
    }
  }
};
</script>
