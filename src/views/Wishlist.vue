<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-md-4 col-lg-3 d-none d-md-block">
        <SideBar></SideBar>
      </div>
      <div class="col-12  col-md-8 col-lg-9">
        <div class="row">
            <div class="col-12 col-md-12 col-lg-4" v-for="f in GET_FAVOURITES" :key="f.id">
              <div class="card mb-2 shadow-sm">
                <div class="card-body">
                  <router-link to="" class="d-block mb-3">
                    <img :src="f.good.photos.length === null ? '' : f.good.photos[0].name" class="img-fit h-140px h-md-200px">
                  </router-link>
                  <div class="text-start">
                    <h5 class="fs-14 mb-0 lh-1-5 fw-600 text-truncate-2">
                      <router-link to="" class="text-decoration-none text-reset c-pointer" @click="addGood(f.good)">{{ f.good.name }}</router-link>
                    </h5>
                    <div class=" fs-14">
                      <span class="fw-600 ">{{ f.good.prices[0].price }}￥</span>
                    </div>
                  </div>

                </div>
                <div class="card-footer">
                  <button  class="btn btn-sm hov-text-danger"  @click="delFav(f)">
                    <i class="la la-trash la-2x"></i>
                  </button>
	                <button v-if="f.good.total_stock === 0" class="btn btn-sm btn-block btn-secondary disabled ml-3">
		                Out of Stock
	                </button>
                  <button v-else type="button" class="btn btn-sm btn-block btn-primary ml-3"  @click="addToCart(f)">
                    <i class="la la-shopping-cart mr-2"></i>
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from "@/components/SideBar";
import { mapGetters,mapMutations } from "vuex";
import $http from "@/axios";
import Swal from "sweetalert2";
export default {
  name: "Wishlist",
  components: {SideBar},
  created() {
    window.scrollTo(0,0);
  },
  computed:{
    ...mapGetters([
        'GET_FAVOURITES',
        'GET_USER',
        'GET_CART_DATA',
        'GET_FAVOURITES',
    ]),
  },
  methods:{
    ...mapMutations([
        'ADD_FAVOURITES',
        'ADD_TO_CART',
        'DEL_FAVOURITES_DATA',
        'ADD_Good'
    ]),
    addToCart(g){
      if(g.good.total_stock === 0){
        Swal.fire({
          position: 'center',
          icon: 'info',
          title: 'Sorry!This item is out of stock.',
          showConfirmButton: false,
          timer: 1500
        });
      }else {
        if (this.GET_USER.length === 0) {
          this.ADD_MODAL_STATUS(true);
        } else {
          let is_same = this.GET_CART_DATA.filter(el => {
            return el.price === null ? '' : el.price.good_id === g.good_id
          });
          if (is_same.length === 0) {
            // Back End Cart Create
            $http.create('carts', {
              'user_id': this.GET_USER.id,
              'price_id': g.good.prices[0].id,
              'qty': 1,
            }).then((res) => {
              // Font End Cart Create
              this.ADD_TO_CART(res.data.data)
            }).catch((err) => {
              console.log(err)
            });
          } else {
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
    delFav(g){
      //Delete from DB
      $http.delete('favorites',g.id)
      .then((res)=>{
        //Delete from Vuex
        this.DEL_FAVOURITES_DATA(g);
      })
    },
    //Show Detail
    addGood(g){
      console.log(g)
      this.ADD_Good(g);
      this.$router.push('/detail');
    },
  }
}
</script>

<style scoped>

</style>