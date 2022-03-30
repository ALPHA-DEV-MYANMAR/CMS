<template>
  <div>
<!--    Top Bar-->
    <div class="container">
        <div class="row justify-content-between align-items-center">

          <div class="col-6 col-md-2">
            <select class="form-select form-select-sm" v-model="lang"  @change="langChange()">
              <option value="en">English</option>
              <option value="my">မြန်မာ</option>
            </select>
          </div>

          <div class="col-6 col-md-6 d-flex justify-content-end ">
            <div class="d-flex" v-if="GET_USER.length === 0">
              <router-link to="login" class="nav-link text-black-50 p-1  fw-bolder" style="font-size: 15px;">{{ i.login }}</router-link>
              <router-link to="register" class="nav-link text-black-50 p-1  fw-bolder" style="font-size: 15px;">
	              {{ i.registerHere }}</router-link>
            </div>
            <div class="d-flex" v-else>
              <router-link  to="profile" class="nav-link text-black-50 p-1 hov-text-primary fw-bolder " style="font-size: 15px;">{{ i.myAccount }}</router-link>
              <router-link  to="" @click="logout" class="nav-link text-danger p-1  fw-bolder" style="font-size: 15px;">
	              {{ i.logout }}</router-link>
            </div>
          </div>

        </div>
      </div>
<!--    Top Bar-->

<!--    Header-->
    <header class="position-sticky top-0 bg-white p-3 z-1020">
     <div class="container">
       <div class="row justify-content-between align-items-center text-center p">

<!--        Logo-->
         <div class="col-8 col-md-3" :class="is_show === true ? 'd-none': '' ">
           <router-link to="/">
             <img
                 src="../assets/img/logo.png"
                 alt=""
                 class="mw-100 h-30px h-md-40px"
                 height="40"
             />
           </router-link>
         </div>
<!--        Logo-->

<!--       Search-->
         <div class="col-12 col-md-6 d-md-block" :class="is_show === false ? 'd-none' : '' ">
           <div class="d-flex justify-content-center align-items-center "  >
               <input type="search" class="form-control rounded-pill " :placeholder="i.search" @keyup="SearchStart" v-model="keyword">
               <i class="fa-solid fa-xmark position-relative ml-3 fa-2x text-black-50 d-inline-block d-md-none d-lg-none"  @click="is_show = false"></i>
           </div>
           <!--Search Data Form-->
           <div v-if="is_serach" class="z-1020 typed-search-box bg-white rounded shadow-lg position-absolute left-0 top-100 w-100" >
             <div>
               <ul class="list-group list-group-raw">
                 <li class="list-group-item" v-for="g in searchGood" :key="g.id">
                   <router-link  to="" class="text-start nav-link text-black-50 hov-text-primary c-pointer" @click="addGoodSearch(g)">
                     <div class="d-flex align-items-start">
                       <div class="mr-3">
                         <img class="size-40px img-fit rounded" :src="g.photos === null ? '' : g.photos[0].name ">
                       </div>
                       <div>
                         <div class="text-truncate fs-14 mb-5px">
                           {{ g.name }}
                         </div>
                         <div class="">
                           <span class="fw-600 fs-16 text-warning">{{ g.prices[0].price }}</span>
                         </div>
                       </div>
                     </div>
                   </router-link>
                 </li >
               </ul>
             </div>
           </div>
           <!--Search Data Form End-->
         </div>
<!--       Search-->

<!--       favourites & Cart & Search-->
         <div class="col-4 col-md-3 " :class="is_show === true ? 'd-none': '' ">
<!--           search-->
           <div class="d-md-none d-block d-lg-none d-flex justify-content-center align-items-center"  @click="is_show = true">
             <i class="fa-solid fa-magnifying-glass fa-lg"></i>
           </div>
<!--           search end-->

           <div class="justify-content-around d-none d-md-flex align-items-center">
             <!--favourites-->
             <router-link to="/wishlist" class="nav-link">
               <i class="fa-solid fa-heart fa-lg text-danger"></i>
                <span class="flex-grow-1">
                  <span class="badge badge-warning badge-inline badge-pill" >{{ GET_FAVOURITES_TOTAL }}</span  >
                  <span class="nav-box-text d-xl-block opacity-70 text-black-50 " style="font-size: 10px;" >
	                  {{ i.favourite }}
                  </span >
                </span>
             </router-link>
             <!--favourites end-->

             <!--cart-->
             <router-link to="" class="nav-link"  data-bs-toggle="offcanvas" data-bs-target="#cart"  aria-controls="offcanvasRight">
               <i class="fa-solid fa-cart-arrow-down fa-lg text-primary"></i>
               <span class="flex-grow-1">
                    <span class="badge badge-warning badge-inline badge-pill">{{ GET_CART_COUNT }}</span>
                    <span class="nav-box-text d-none d-xl-block opacity-70 text-black-50"  style="font-size: 10px;">
	                    {{ i.cart }}
                    </span>
               </span>
             </router-link>
             <!--cart-->
           </div>

         </div>
<!--       favourites & Cart & Search-->
       </div>
       <div class="row d-none d-lg-block fw-600">
         <div class="col-12">
           <div class="d-flex justify-content-center align-items-center">
             <router-link to="/" class="nav-link text-black-50">
               <i class="fa-solid fa-house"></i>
	             {{ i.home }}
             </router-link>
             <router-link to="/categories" class="nav-link text-black-50">
               <i class="fa-solid fa-align-justify"></i>
	             {{ i.shopByCategory }}
             </router-link>
             <router-link to="/profile" class="nav-link text-black-50">
               <i class="fa-solid fa-user"></i>
	             {{ i.myAccount }}
             </router-link>
           </div>
         </div>
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
                to="/step-three"
            >
              <i class="la la-file-text la-3x text-primary mb-2" style="font-size: 30px;"></i>
              <h4 class="h6">{{ i.termsAndConditions }}</h4>
            </router-link>
          </div>
          <div class="col-lg-3 col-md-6">
            <router-link
                class="text-reset border-left text-center p-4 d-block nav-link"
                to="/step-two"
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
                to="/step-one"
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
              <router-link to="/" >
                <img class="img-fluid" src="../assets/img/logo.png"  alt="" height="50">
              </router-link>
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
          </div>
        </div>
      </div>
    </section>
    <!--      End Content Info-->

<!--   Cart Offcanvas-->
    <div class="offcanvas offcanvas-end" tabindex="-1" id="cart" aria-labelledby="offcanvasRightLabel">
      <div class="card min-vh-100">
        <div class="card-header">
          <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          <h4 class="mb-0 text-black-50">{{ i.cartList }}</h4>
        </div>
        <div class="card-body" v-if="GET_CART_DATA.length === 0">
          <div class="text-center">
            <i class="las la-frown la-3x opacity-60 mb-3"></i>
            <h3 class="h4 fw-700 text-black-50">{{ i.noCartItems }}</h3>
          </div>
        </div>
        <div class="card-body" v-if="GET_CART_DATA.length !== 0">
          <ul class="h-100 overflow-auto c-scrollbar-light list-group list-group-flush">
            <li v-for="c in GET_CART_DATA" :key="c.id">
                  <span class=" d-flex align-items-center">
                      <span class="text-reset d-flex align-items-center flex-grow-1 nav-link" @click="addGood(c)">
                          <img :src="c.price === null ? '': c.price.good.photos[0].name " class="img-fit size-60px rounded ls-is-cached lazyloaded" >
                          <span class="minw-0 pl-2 flex-grow-1 text-start">
                              <span class="fw-600 mb-1 text-truncate-2 text-black-50" style="font-size: 15px;">
                                 {{ c.price === null ? 'Null' : c.price.good.name }}
                              </span>
                             <span class="text-black-50" style="font-size: 12px;">
                                 {{ c.price === null ? 'Null' : c.price.good.category.name }}
                              </span> <br>
                              <span class="text-black-50" style="font-size: 12px;">{{ c.price === null ? 'Null' : c.qty }}x</span>
                              <span class="text-black-50" style="font-size: 12px;">{{ c.price === null ? 'Null' : c.price.price }}</span>
                          </span>
                      </span>
                      <span class="">
                          <button  class="btn btn-sm btn-icon stop-propagation" @click="DelCartData(c)">
                              <i class="la la-close"></i>
                          </button>
                      </span>
                  </span>
            </li>
          </ul>
        </div>
        <div class="card-footer">
           <router-link to="/cart" class="btn btn-outline-primary form-control">{{ i.viewAll }}</router-link>
        </div>
      </div>
    </div>
<!--  Cart  Offcanvas-->

<!--    Categories Offcanvas-->
    <div class="offcanvas offcanvas-start text-start" tabindex="-1" id="categories" aria-labelledby="offcanvasRightLabel">
      <div class="card min-vh-100">
        <div class="card-header">
          <h4 class="mb-0 text-black-50">{{ i.shopByCategory }}</h4>
          <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="card-body p-0 overflow-scroll " >
          <ul class="list-unstyled " >
            <li>
              <router-link to="/categories" class="nav-link p-3 m-1 card shadow-sm text-black-50 rounded fw-600">
                <div class="d-flex justify-content-start align-items-center">
                  <i class="las la-angle-left"></i>
                  All Categories
                </div>
              </router-link>
            </li>
            <li class="" v-for="c in SHOW_ALL_CAT" @click="action(c)">
              <router-link to="" class="fs-14 fw-600 nav-link text-black-50 card shadow-sm rounded p-3 m-1 hov-text-dark ">
                <div class="d-flex justify-content-start align-items-center">
                  <i class="las la-angle-left"></i>
                  {{ c.name }}
                </div>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
<!--    Categories Offcanvas-->

  <!--    Profile Offcanvas-->
  <div class="offcanvas offcanvas-start text-start" tabindex="-1" id="profile" aria-labelledby="offcanvasLeftLabel">
    <div class="card min-vh-100">
      <div class="card-header">
        <h4 class="mb-0 text-black-50">{{ i.myAccount }}</h4>
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="card-body p-0 overflow-scroll" >
        <SideBar></SideBar>
      </div>
    </div>
  </div>
  <!--    Profile Offcanvas-->

<!--    Footer Bar Only Show in mobile-->
    <div class="d-block d-md-none d-lg-none position-fixed bottom-0 bg-danger d-flex w-100 bg-white">
      <div class="col">
        <router-link to="/" class="text-reset d-block text-center pb-2 pt-3">
          <i class="las la-home fs-20 opacity-60 "></i>
          <span class="d-block fs-10 fw-600 opacity-60 ">Home</span>
        </router-link>
      </div>
      <div class="col">
        <router-link to="" class="text-reset d-block text-center pb-2 pt-3" data-bs-toggle="offcanvas" data-bs-target="#categories" aria-controls="offcanvasRight">
          <i class="las la-list-ul fs-20 opacity-60 "></i>
          <span class="d-block fs-10 fw-600 opacity-60 ">Categories</span>
        </router-link>
      </div>
      <div class="col-auto">
        <router-link to="" class="text-reset d-block text-center pb-2 pt-3" data-bs-toggle="offcanvas" data-bs-target="#cart" aria-controls="offcanvasRight">
          <span class="align-items-center bg-primary border border-white border-width-4 d-flex justify-content-center position-relative rounded-circle size-50px" style="margin-top: -33px;box-shadow: 0px -5px 10px rgb(0 0 0 / 15%);border-color: #fff !important;">
              <i class="las la-shopping-bag la-2x text-white"></i>
          </span>
          <span class="d-block mt-1 fs-10 fw-600 opacity-60 opacity-100 fw-600">
             Cart(<span class="cart-count">{{ GET_CART_COUNT }}</span>)
          </span>
        </router-link>
      </div>
      <div class="col">
        <router-link to="/wishlist" class="text-reset d-block text-center pb-2 pt-3">
          <span class="d-inline-block position-relative px-2">
              <i class="las la-bell fs-20 opacity-60 "></i>
          </span>
          <span class="d-block fs-10 fw-600 opacity-60 ">Wishlist</span>
        </router-link>
      </div>
      <div class="col">
        <router-link to="" class="text-reset d-block text-center pb-2 pt-3 mobile-side-nav-thumb"  data-bs-toggle="offcanvas" data-bs-target="#profile" aria-controls="offcanvasLeft" >
          <span class="d-block mx-auto">
               <img src="../assets/img/avatar-place.png" class="rounded-circle size-20px">
          </span>
          <span class="d-block fs-10 fw-600 opacity-60">Account</span>
        </router-link>
      </div>
    </div>
<!--    Footer Bar Only Show in mobile-->

    
  </div>
</template>

<script>
import {mapGetters,mapMutations} from "vuex"
import $http from '../axios.js'
import Swal from "sweetalert2";
import CategorySideBar from "@/components/CategorySideBar";
import SideBar from "@/components/SideBar";
import Spinner from "@/components/Spinner";
export default {
  name: "NavBar",
  components: {Spinner, CategorySideBar,SideBar},
  data() {
    return {
      spinner : true,
      is_show : false,
      keyword : "",
      lang : "en",
      searchGood : [],
      is_serach : false,
      categories : [],
    }
  },
  computed:{
    ...mapGetters([
        'GET_CART_COUNT',
        'GET_CART_DATA',
        'GET_USER',
        'GET_TOKEN',
        'GET_FAVOURITES',
        'GET_FAVOURITES_TOTAL',
        'SHOW_ALL_CAT',
        'GET_LANG',
		    'i'
    ]),
  },
  created() {
    this.getUser();
		//Change Language From Back
		if(!localStorage.getItem('lang')) {
			localStorage.setItem('lang','en')
		}
		this.lang = localStorage.getItem('lang')
		let data = require('../assets/lang/'+localStorage.getItem('lang')+'.json')
		this.ADD_LANG_OJ(data)
    },
  methods:{
    ...mapMutations([
        'ADD_TO_CART',
        'DEL_CART_DATA',
        'ADD_Good',
        'ADD_USER',
        'ADD_TOKEN',
        'DEL_ALL_FAVOURITES_DATA',
        'DEL_ALL_CART_DATA',
        'ADD_GOOD_WITH_ID',
        'ADD_LANG',
		    'ADD_LANG_OJ'
    ]),
    langChange(){
			//Save to local
      localStorage.setItem('lang',this.lang);
      this.ADD_LANG(this.lang);
			//Change language real time
	    const l = require('../assets/lang/'+this.GET_LANG+'.json');
			this.ADD_LANG_OJ(l);
    },
    action(c){
      this.$router.push('/single-category');
      this.ADD_GOOD_WITH_ID(c);
    },
    getUser(){
      $http.get('customers',localStorage.getItem('user_id'))
          .then((res)=>{
            this.User = res.data.data;
            this.ADD_TOKEN(localStorage.getItem('token'));
            this.ADD_USER(this.User);
          });
    },
    SearchStart(){
      if(this.keyword === "") {
        this.is_serach = false;
      }else{
        this.is_serach = true;
        $http.getAll(`goods?q=${this.keyword}`)
            .then((res)=>{
              this.searchGood  = res.data.data.data;
            }).catch((err)=>console.log(err));
      }
    },
    DelCartData(c){
      //Delete From Back-End
      $http.delete('carts',c.id).then((res)=>{
        //Delete From Font-End
        this.DEL_CART_DATA(c);
      });
    },
    addGoodSearch(c){
      this.ADD_Good(c);
      this.$router.push('/detail');
      this.is_serach = false;
      this.keyword = "";
    },
    addGood(c){
      this.ADD_Good(c.price.good);
      this.$router.push('/detail');
    },
    logout(){
      Swal.fire({
        title: 'Do you want to logout?',
        icon: 'warning',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Yes',
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire('Successfully Logout!', '', 'success')
          this.ADD_USER([]);
          this.ADD_TOKEN([]);
          this.DEL_ALL_FAVOURITES_DATA();
          this.DEL_ALL_CART_DATA();
          localStorage.clear();
          this.$router.push('/');
        }
      })
    }
  }
}
</script>

<style scoped>

</style>