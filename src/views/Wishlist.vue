<template>
  <div>
    <div>
      <section class="py-5">
        <div class="container">
          <div class="d-flex align-items-start">
            <SideBar></SideBar>

            <div class="aiz-user-panel">
              <div class="aiz-titlebar mt-2 mb-4">
                <div class="row text-start">
                  <div class="col-md-6">
                    <b class="h4">Wishlist</b>
                  </div>
                </div>
              </div>

              <div class="row ">
                <div class="col-xxl-3 col-xl-4 col-lg-3 col-md-4 col-sm-6" v-for="f in GET_FAVOURITES" :key="f.id">
                  <div class="card mb-2 shadow-sm">
                    <div class="card-body">
                      <router-link to="" class="d-block mb-3">
                        <img :src="f.good.photos.length === null ? '' : f.good.photos[0].name" class="img-fit h-140px h-md-200px">
                      </router-link>
                      <div class="text-start">
                        <h5 class="fs-14 mb-0 lh-1-5 fw-600 text-truncate-2">
                          <router-link to="" class="text-reset">{{ f.good.name }}</router-link>
                        </h5>
                        <div class="rating rating-sm mb-1">
                          <i class="las la-star"></i>
                          <i class="las la-star"></i>
                          <i class="las la-star"></i>
                          <i class="las la-star"></i>
                          <i class="las la-star"></i>
                        </div>
                        <div class=" fs-14">
                          <span class="fw-600 text-primary">{{ f.good.prices[0].price }}</span>
                        </div>
                      </div>

                    </div>
                    <div class="card-footer">
                      <a href="#" class="link link--style-3" data-toggle="tooltip" data-placement="top" title="Remove from wishlist">
                        <i class="la la-trash la-2x"></i>
                      </a>
                      <button type="button" class="btn btn-sm btn-block btn-primary ml-3" onclick="">
                        <i class="la la-shopping-cart mr-2"></i>Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import SideBar from "@/components/SideBar";
import { mapGetters,mapMutations } from "vuex";
export default {
  name: "Wishlist",
  components: {SideBar},
  data() {
    return {

    }
  },
  created() {
  },
  computed:{
    ...mapGetters([
        'GET_FAVOURITES'
    ]),
  },
  methods:{

  }
}
</script>

<style scoped>

</style>