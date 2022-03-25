<template>
  <div>
    {{ getGoodByCategory }} {{ getGoodBySubCategory }}
    <section class="mb-4 pt-3">
      <div class="container sm-px-0">
        <div class="row">
          <div class="col-12 col-md-3">
            <CategorySideBar></CategorySideBar>
          </div>
          <div class="col-12 col-md-9">
            <div class="text-start">
              <div class="row ">
                <div class="col-12">
                  <h1 class="h6 fw-600 text-body">{{ SHOW_CAT_BY_ID.name }}</h1>
                  <input type="hidden" name="keyword" value="" />
                </div>
              </div>
<!--              Filter Start-->
              <div class="row">

                <div class="col-6 col-md-3 " >
                  <label class="mb-0 opacity-50 fs-12">Sub Category</label>
                  <select class="custom-select" v-model="filter.sub_category_id" aria-label=".form-select-sm example" @change="filterStart">
                    <option selected value="">Default</option>
                    <option :value="s.id" v-for="s in subCategories" :key="s.id">{{ s.name }}</option>
                  </select>
                </div>

                <div class="col-6 col-md-3 " >
                  <label class="mb-0 opacity-50 fs-12" >Min Price</label>
                  <input type="number" class="form-control" placeholder="0" v-model="filter.min_price" @keyup="filterStart">
                </div>

                <div class="col-6 col-md-3 " >
                  <label class="mb-0 opacity-50 fs-12">Max Price</label>
                  <input type="number" class="form-control" placeholder="0" v-model="filter.max_price" @keyup="filterStart">
                </div>

                <div class="col-6 col-md-3  " >
                  <label class="mb-0 opacity-50 fs-12">Recommend</label>
                  <select class="custom-select" aria-label=".form-select-sm example" v-model="filter.recommend" @change="filterStart">
                    <option value="">Default</option>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                  </select>
                </div>

              </div>
<!--              Filter End-->
            </div>
            <div class="row" v-if="spinner">
              <div class="col-12">
                <div class="d-flex justify-content-center align-items-center p-5">
                  <Spinner></Spinner>
                </div>
              </div>
            </div>
            <div class="row gutters-5 row-cols-xxl-4 row-cols-xl-3 row-cols-lg-4 row-cols-md-3 row-cols-2" >
              <!--Product-->
              <div class="col-6 col-md-3" v-for="g in goods" :key="g.id">
                <div class="aiz-card-box border border-light rounded hov-shadow-md mt-1 mb-2 has-transition bg-white"  >
                  <div class="position-relative">
                    <img class="img-fit mx-auto h-140px h-md-210px lazyloaded" :src="g.photos.length === 0 ? '-' : g.photos[0].name" />
                    <div class="absolute-top-right aiz-p-hov-icon">
                      <router-link
                          to=""
                          onclick=""
                          data-toggle="tooltip"
                          data-title="Add to wishlist"
                          data-placement="left"
                      >
                        <i class="la la-heart-o"></i>
                      </router-link>
                      <router-link
                          to=""
                          onclick=""
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
            <!--Pagination-->
            <nav aria-label="Page navigation example">
              <ul class="pagination">
                <li class="page-item" v-for="(p,index) in pagination.links" :key="index" :class="p.url === null ? 'disabled' : '' ">
                  <router-link class="page-link" to="" @click="paginationStart(p)" :class="p.active ? 'bg-info' : '' ">
                    {{ index === 0 ?  '&laquo;' : p.label && index === pagination.links.length-1 ? '&raquo;' : p.label }}
                  </router-link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </section>

<!--    Modal -->
    <Modal></Modal>

  </div>
</template>


<script>
import {mapGetters,mapMutations} from "vuex";
import CategorySideBar from "@/components/CategorySideBar";
import $http from "@/axios";
import Modal from "@/components/Modal";
import Spinner from "@/components/Spinner";
import Swal from "sweetalert2";
export default {
  name: "SingleCategory",
  components: {Spinner, Modal, CategorySideBar},
  data() {
    return {
      spinner: true,
      filter: {
        'sub_category_id' : "",
        'min_price' : "",
        'max_price' : "",
        'recommend' : ""
      },
      goods : [],
      subCategories : [],
      pagination: [],
    }
  },
  computed:{
    ...mapGetters([
        'SHOW_CAT_BY_ID',
        'GET_CART_DATA',
        'GET_TOKEN',
        'GET_USER',
        'GET_FAVOURITES'
    ]),
    getGoodByCategory(){
      $http.getAll(`goods?category_id=${this.SHOW_CAT_BY_ID.id}`)
          .then((res)=>{
            this.spinner = false;
        this.goods = res.data.data.data;
        this.pagination = res.data.data;
      });
    },
    getGoodBySubCategory(){
      $http.get('categories',this.SHOW_CAT_BY_ID.id).then((res)=>{
        this.subCategories = res.data.data.sub_categories;
      });
    }
  },
  methods:{
    ...mapMutations([
      'ADD_Good',
      'ADD_ALL_CAT',
      'ADD_TO_CART',
      'ADD_MODAL_STATUS',
      'ADD_FAVOURITES'
    ]),
    filterStart(){
      $http.getAll(`goods?category_id=${this.SHOW_CAT_BY_ID.id}&sub_category_id=${this.filter.sub_category_id}&min_price=${this.filter.min_price}&max_price=${this.filter.max_price}&recommend=${this.filter.recommend}`)
          .then((res)=>{
        this.goods = res.data.data.data;
        this.pagination = res.data.data;
      });
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
          Swal.fire({
            position: 'center',
            icon: 'warning',
            title: 'You already add to cart this items.',
            showConfirmButton: false,
            timer: 1500
          });
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
    paginationStart(p){
      $http.getPagination(`${p.url}&category_id=${this.SHOW_CAT_BY_ID.id}&sub_category_id=${this.filter.sub_category_id}&min_price=${this.filter.min_price}&max_price=${this.filter.max_price}&recommend=${this.filter.recommend}`)
          .then((res)=>{
        this.goods = res.data.data.data;
        this.pagination = res.data.data;
      })
    },
  }
}
</script>

<style scoped>

</style>