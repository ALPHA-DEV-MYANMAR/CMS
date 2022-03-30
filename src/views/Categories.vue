<template>
  <div>

<!--    Categories-->
    <div class="container text-start">
      <div class="row">
        <div class="col-12 d-none d-md-block col-md-3">
          <CategorySideBar></CategorySideBar>
        </div>
        <div class="col-12 col-md-9">
<!--          Filter-->
          <div class="row">
            <div class="col-6 col-md-4">
              <label class="text-black-50 fs-12" >Min Price</label>
              <input type="number" class="form-control" placeholder="0" v-model="filter.min_price" @keyup="filterStart">
            </div>
            <div class="col-6 col-md-4">
              <label class="text-black-50 fs-12">Max Price</label>
              <input type="number" class="form-control" placeholder="0" v-model="filter.max_price" @keyup="filterStart">
            </div>
            <div class="col-6 col-md-4 fs-12">
              <label class="text-black-50">{{ i.recommended }}</label>
              <select class="form-select" aria-label=".form-select-sm example" v-model="filter.recommend" @change="filterStart">
                <option value="">Default</option>
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
            </div>
          </div>
<!--          Filter End-->

<!--          Title-->
          <div class="row">
            <div class="col-12 mt-2">
              <div class="fw-600 h6">{{ i.shopByCategory }}</div>
            </div>
          </div>
<!--          Title-->

          <!--Spinner-->
          <div class="row" v-if="spinner">
            <div class="col-12">
              <div class="d-flex justify-content-center align-items-center p-5">
                <Spinner></Spinner>
              </div>
            </div>
          </div>
          <!--Spinner-->

<!--          Category -->
          <div class="row">
            <div class="col-6 col-md-3 mt-2" v-for="g in goods" :key="g.id">
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
<!--          Category-->

<!--          Pagination-->
          <div class="row">
            <div class="col-12 ">
              <nav>
                <ul class="pagination flex-wrap">
                  <li class="page-item" v-for="(p,index) in pagination.links" :key="index" :class="p.url === null ? 'disabled' : '' ">
                    <router-link class="page-link" to="" @click="paginationStart(p)" :class="p.active ? 'bg-info' : '' ">
                      {{ index === 0 ?  '&laquo;' : p.label && index === pagination.links.length-1 ? '&raquo;' : p.label }}
                    </router-link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
<!--          Pagination-->

        </div>
      </div>
    </div>
<!--    Categories-->

<!--    Modal -->
    <Modal></Modal>

  </div>
</template>

<script>
import $http from '../axios.js'
import {mapState,mapMutations,mapGetters} from 'vuex'
import CategorySideBar from "@/components/CategorySideBar";
import Modal from "@/components/Modal";
import Spinner from "@/components/Spinner";
import Swal from "sweetalert2";
export default {
  name: "Categories",
  components: {Spinner, Modal, CategorySideBar},
  data() {
    return {
      filter: {
        'min_price' : "",
        'max_price' : "",
        'recommend' : ""
      },
      spinner: true,
      goods: [],
      categories: [],
      sub_categories: [],
      pagination: [],
    }
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
		    'i'
    ])
  },
  created() {
    this.getGood();
    this.getCategories();
    window.scrollTo(0,0);
  },
  methods:{
    ...mapMutations([
        'ADD_Good',
        'ADD_ALL_CAT',
        'ADD_TO_CART',
        'ADD_MODAL_STATUS',
        'ADD_FAVOURITES_FROM_DB',
        'ADD_FAVOURITES'
    ]),
    paginationStart(p){
      $http.getPagination(`${p.url}&min_price=${this.filter.min_price}&max_price=${this.filter.max_price}&recommend=${this.filter.recommend}`)
          .then((res)=>{
        this.goods = res.data.data.data;
        this.pagination = res.data.data;
      }).catch((err)=>{console.log(err)});
    },
    addToCart(g){
      console.log(g)
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
          let is_same = this.GET_CART_DATA.filter(el => { return el.price === null ? '' : el.price.good_id === g.id });
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
    addGood(c){
      this.ADD_Good(c);
      this.$router.push('/detail');
    },
    getGood(){
      $http.getAll(`goods?min_price=${this.filter.min_price}&max_price=${this.filter.max_price}&recommend=${this.filter.recommend}`)
        .then((res)=>{
        this.goods = res.data.data.data;
        this.pagination = res.data.data;
        this.spinner = false;
      }).catch((err)=>{console.log(err)});
    },
    getCategories(){
      $http.getAll('categories').then((res)=>{
        this.categories = res.data.data;
        this.ADD_ALL_CAT(this.categories);
      }).catch((err)=>{console.log(err)});
    },
    getSubCategories(c) {
      $http.get(`categories/${c.id}?sub_categories=yes`).then((res)=>{
        this.sub_categories = res.data.data.sub_categories;
      }).catch((err)=>{console.log(err)})
    },
    filterStart(){
      this.getGood();
    },
  }
};
</script>

<style scoped></style>
