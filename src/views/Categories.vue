<template>
  <div>
    <section class="mb-4 pt-3">
      <div class="container sm-px-0">
          <div class="row">
            <div class="col-12 col-md-3">
              <CategorySideBar></CategorySideBar>
            </div>
            <div class="col-12 col-md-9">
              <div class="text-start">
                <div class="row">
                  <div class="col-12">
                    <h1 class="h6 fw-600 text-body">All Products</h1>
                  </div>
                </div>
<!--                Filter Start-->
                <div class="row">
                  <div class="col-6 col-md-3">
                    <label class="mb-0 opacity-50 fs-12" >Min Price</label>
                    <input type="number" class="form-control" placeholder="0" v-model="filter.min_price" @keyup="filterStart">
                  </div>
                  <div class="col-6 col-md-3">
                    <label class="mb-0 opacity-50 fs-12">Max Price</label>
                    <input type="number" class="form-control" placeholder="0" v-model="filter.max_price" @keyup="filterStart">
                  </div>
                  <div class="col-6 col-md-3">
                    <label class="mb-0 opacity-50 fs-12">Recommend</label>
                    <select class="form-select" aria-label=".form-select-sm example" v-model="filter.recommend" @change="filterStart">
                      <option value="">Default</option>
                      <option value="true">Yes</option>
                    </select>
                  </div>
                </div>
<!--                Filter End-->
              </div>
              <div class="row gutters-5 row-cols-xxl-4 row-cols-xl-3 row-cols-lg-4 row-cols-md-3 row-cols-2" >
                <!--Product-->
                <div class="col-6 col-md-3" v-for="g in goods" :key="g.id">
                  <div class="aiz-card-box border border-light rounded hov-shadow-md mt-1 mb-2 has-transition bg-white"  >
                    <div class="position-relative">
                        <img class="img-fit mx-auto h-140px h-md-210px lazyloaded" :src="g.photos.length === 0 ? '' : g.photos[0].name" />
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
                      <h3 class="fw-600 fs-13 text-truncate-2 lh-1-4 mb-0 h-35px" @click="addGood(g)"  >
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
import $http from '../axios.js'
import {mapState,mapMutations,mapGetters} from 'vuex'
import CategorySideBar from "@/components/CategorySideBar";
import Modal from "@/components/Modal";
export default {
  name: "Categories",
  components: {Modal, CategorySideBar},
  data() {
    return {
      filter: {
        'min_price' : "",
        'max_price' : "",
        'recommend' : ""
      },
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
        'GET_TOKEN',
        'GET_USER'
    ])
  },
  created() {
    this.getGood();
    this.getCategories();
  },
  methods:{
    ...mapMutations([
        'ADD_Good',
        'ADD_ALL_CAT',
        'ADD_TO_CART',
        'ADD_MODAL_STATUS'
    ]),
    paginationStart(p){
      $http.getPagination(`${p.url}&min_price=${this.filter.min_price}&max_price=${this.filter.max_price}&recommend=${this.filter.recommend}`)
          .then((res)=>{
        this.goods = res.data.data.data;
        this.pagination = res.data.data;
      }).catch((err)=>{console.log(err)});
    },
    addToCart(g){
      if(this.GET_USER.length === 0) {
        this.ADD_MODAL_STATUS(true);
      }else{
        let is_same = this.GET_CART_DATA.filter(el=>{
          return el.id === g.id;
        });
        if(is_same.length === 0){
          // From Font End
          this.ADD_TO_CART(g,g.qty = 1);
          //  From Back End
          $http.create('carts',{
            'user_id' : this.GET_USER.id,
            'qty' : 1,
            'price_id' : g.prices[0].id
          }).then((res)=>{
            console.log(res);
          });
        }else{
          alert('You already have been add to cart this item!');
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
    }
  }
};
</script>

<style scoped></style>
