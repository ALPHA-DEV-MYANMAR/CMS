<template>
  <div>
<!--    Top Bar-->
    <div class="top-navbar bg-white border-bottom border-soft-secondary z-1035">
      <div class="container">
        <div class="row">
          <div class="col-6 col-md-12 d-flex justify-content-end">
            <router-link to="profile" class="nav-link text-black-50 p-1" style="font-size: 15px;">Profile</router-link>
            <router-link to="login" class="nav-link text-black-50 p-1" style="font-size: 15px;">Login</router-link>
            <router-link to="register" class="nav-link text-black-50 p-1" style="font-size: 15px;">Register</router-link>
          </div>
        </div>
      </div>
    </div>
<!--    Top Bar-->

<!--    Header-->
    <header class="sticky-top z-1020 bg-white border-bottom shadow-sm">
      <div class="position-relative logo-bar-area z-1">
        <div class="container">
          <div class="d-flex align-items-center ">
<!--            Logo-->
            <div class="ml-2">
              <router-link class="d-block py-20px mr-3 ml-0" to="/">
                <img
                    src="../assets/img/logo.png"
                    alt=""
                    class="mw-100 h-30px h-md-40px"
                    height="40"
                />
              </router-link>
            </div>
<!--            Logo-->

<!--            Search-->
            <div class="flex-grow-1 front-header-search d-flex align-items-center mr-1">
              <div class="position-relative flex-grow-1">
                  <div class="input-group">
                    <input type="text" class="form-control" placeholder="I'm shopping for ..." >
                    <button class="btn btn-primary" type="button" >
                      <i class="la la-search la-flip-horizontal fs-18"></i>
                    </button>
                  </div>
                <div
                    class="typed-search-box stop-propagation document-click-d-none d-none bg-white rounded shadow-lg position-absolute left-0 top-100 w-100"
                    style="min-height: 200px"
                >
                </div>
              </div>
            </div>
<!--            Search-->

              <div class="d-flex align-items-center nav-link">
                <i class="la la-heart-o la-2x opacity-80 text-black-50" style="font-size: 25px"></i>
                <span class="flex-grow-1">
                    <span class="badge badge-primary badge-inline badge-pill" >0</span  >
                    <span class="nav-box-text d-none d-xl-block opacity-70 text-black-50 " style="font-size: 10px;" >Wishlist</span >
                </span>
              </div>

              <div class="d-flex align-items-center nav-link c-pointer" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                <i class="la la-shopping-cart la-2x opacity-80 text-black-50" style="font-size: 25px;"></i>
                <span class="flex-grow-1">
                      <span class="badge badge-primary badge-inline badge-pill">{{ GET_CART_COUNT }}</span>
                      <span class="nav-box-text d-none d-xl-block opacity-70 text-black-50"  style="font-size: 10px;">Cartlist</span>
                 </span>
              </div>

          </div>
        </div>
      </div>
      <div class="bg-white border-top border-gray-200 py-1">
        <div class="container">
          <ul class="list-inline mb-0 pl-0 mobile-hor-swipe text-center">
            <li class="list-inline-item mr-0">
              <router-link
                  to=""
                  class="opacity-60 fs-14 px-3 py-2 d-inline-block fw-600 hov-opacity-100 text-reset"
              >
                Home
              </router-link>
            </li>
            <li class="list-inline-item mr-0">
              <router-link
                  to=""
                  class="opacity-60 fs-14 px-3 py-2 d-inline-block fw-600 hov-opacity-100 text-reset"
              >
                Flash Sale
              </router-link>
            </li>
            <li class="list-inline-item mr-0">
              <router-link
                  to=""
                  class="opacity-60 fs-14 px-3 py-2 d-inline-block fw-600 hov-opacity-100 text-reset"
              >
                All Brands
              </router-link>
            </li>
            <li class="list-inline-item mr-0">
              <router-link
                  to=""
                  class="opacity-60 fs-14 px-3 py-2 d-inline-block fw-600 hov-opacity-100 text-reset"
              >
                All categories
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </header>
<!--    Header-->

<!--    Content-->
    <router-view></router-view>
<!--    Content-->

<!--    Bottom-->
    <!--      Team And Policy-->
    <section class="bg-white border-top mt-auto">
      <div class="container">
        <div class="row no-gutters">
          <div class="col-lg-3 col-md-6">
            <router-link
                class="text-reset border-left text-center p-4 d-block nav-link"
                to=""
            >
              <i class="la la-file-text la-3x text-primary mb-2" style="font-size: 30px;"></i>
              <h4 class="h6">Terms &amp; conditions</h4>
            </router-link>
          </div>
          <div class="col-lg-3 col-md-6">
            <router-link
                class="text-reset border-left text-center p-4 d-block nav-link"
                to=""
            >
              <i class="la la-mail-reply la-3x text-primary mb-2" style="font-size: 30px;"></i>
              <h4 class="h6">return policy</h4>
            </router-link>
          </div>
          <div class="col-lg-3 col-md-6">
            <router-link
                class="text-reset border-left text-center p-4 d-block nav-link"
                to=""
            >
              <i class="la la-support la-3x text-primary mb-2" style="font-size: 30px;"></i>
              <h4 class="h6">Support Policy</h4>
            </router-link>
          </div>
          <div class="col-lg-3 col-md-6">
            <router-link
                class="text-reset border-left border-right text-center p-4 d-block nav-link"
                to=""
            >
              <i class="las la-exclamation-circle la-3x text-primary mb-2" style="font-size: 30px;" ></i>
              <h4 class="h6">privacy policy</h4>
            </router-link>
          </div>
        </div>
      </div>
    </section>
    <!--      Team And Policy-->

    <!--      Content Info-->
    <section class="bg-dark py-5 text-light footer-widget">
      <div class="container">
        <div class="row">
          <div class="col-lg-5 col-xl-4 text-start">
            <div class="mt-4">
              <router-link to="/" class="d-block">
                <img class=" ls-is-cached lazyloaded" src="../assets/img/logo.png"  alt="" height="44">
              </router-link>
              <div class="my-3">
              </div>
              <div class="d-inline-block d-md-block mb-4">
                <form class="form-inline" >
                <div class="form-group mb-0">
                  <input type="email" class="form-control" placeholder="Your Email Address" name="email" required="">
                </div>
                  <button type="submit" class="btn btn-primary">
                    Subscribe
                  </button>
                </form>
              </div>
              <div class="w-300px mw-100 mx-auto mx-md-0">
              </div>
            </div>
          </div>
          <div class="col-lg-3 ml-xl-auto col-md-4 mr-0">
            <div class="text-start mt-4">
              <h4 class="fs-13 text-uppercase fw-600 border-bottom border-gray-900 pb-2 mb-4">
                Contact Info
              </h4>
              <ul class="list-unstyled">
                <li class="mb-2">
                  <span class="d-block opacity-30">Address:</span>
                  <span class="d-block opacity-70"></span>
                </li>
                <li class="mb-2">
                  <span class="d-block opacity-30">Phone:</span>
                  <span class="d-block opacity-70"></span>
                </li>
                <li class="mb-2">
                  <span class="d-block opacity-30">Email:</span>
                  <span class="d-block opacity-70">
                               <a href="mailto:" class="text-reset"></a>
                            </span>
                </li>
              </ul>
            </div>
          </div>

          <div class="col-md-4 col-lg-2">
            <div class="text-start mt-4">
              <h4 class="fs-13 text-uppercase fw-600 border-bottom border-gray-900 pb-2 mb-4">
                My Account
              </h4>
              <ul class="list-unstyled">
                <li class="mb-2">
                  <a class="opacity-50 hov-opacity-100 text-reset" href="http://localhost/action/CMS/logout">
                    Logout
                  </a>
                </li>
                <li class="mb-2">
                  <a class="opacity-50 hov-opacity-100 text-reset" href="http://localhost/action/CMS/purchase_history">
                    Order History
                  </a>
                </li>
                <li class="mb-2">
                  <a class="opacity-50 hov-opacity-100 text-reset" href="http://localhost/action/CMS/wishlists">
                    My Wishlist
                  </a>
                </li>
                <li class="mb-2">
                  <a class="opacity-50 hov-opacity-100 text-reset" href="http://localhost/action/CMS/track-your-order">
                    Track Order
                  </a>
                </li>
              </ul>
            </div>
            <div class="text-start mt-4">
              <h4 class="fs-13 text-uppercase fw-600 border-bottom border-gray-900 pb-2 mb-4">
                Be A Seller
              </h4>
              <router-link to="" class="btn btn-primary btn-sm shadow-md">
                Apply Now
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--      End Content Info-->


<!--    Offcanvas-->

    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
      <div class="offcanvas-header">
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        <h4 class="mb-0 text-black-50">Cart Listing</h4>
      </div>
      <div class="offcanvas-body">
         <ul class="h-100 overflow-auto c-scrollbar-light list-group list-group-flush">
              <li v-for="c in GET_CART_DATA" :key="c.id">
                  <span class=" d-flex align-items-center">
                      <router-link to="" class="text-reset d-flex align-items-center flex-grow-1 nav-link">
                          <img :src="c.photos.length === 0 ? '-': c.photos[0].name " class="img-fit size-60px rounded ls-is-cached lazyloaded" >
                          <span class="minw-0 pl-2 flex-grow-1 text-start">
                              <span class="fw-600 mb-1 text-truncate-2 text-black-50" style="font-size: 15px;">
                                 {{ c.name }}
                              </span>
                             <span class="text-black-50" style="font-size: 12px;">
                                 {{ c.category.name }}
                              </span> <br>
                              <span class="text-black-50" style="font-size: 12px;">{{ c.qty }}x</span>
                              <span class="text-black-50" style="font-size: 12px;">{{ c.prices[0].price }}</span>
                          </span>
                      </router-link>
                      <span class="">
                          <button  class="btn btn-sm btn-icon stop-propagation" @click="DelCartData(c)">
                              <i class="la la-close"></i>
                          </button>
                      </span>
                  </span>
              </li>
         </ul>
      </div>
    </div>

<!-- Offcanvas-->

  </div>
</template>

<script>
import {mapGetters,mapMutations} from "vuex";
export default {
  name: "NavBar",
  computed:{
    ...mapGetters([
        'GET_CART_COUNT',
        'GET_CART_DATA',
    ]),
  },
  methods:{
    ...mapMutations([
        'ADD_TO_CART',
        'DEL_CART_DATA'
    ]),
    DelCartData(c){
      this.DEL_CART_DATA(c);
    }
  }
}
</script>

<style scoped>

</style>