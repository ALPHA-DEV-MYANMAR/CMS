<template>
  <div>
    <section class="gry-bg py-5">
      <div class="profile">
        <div class="container">
          <div class="row">
            <div class="col-xxl-4 col-xl-5 col-lg-6 col-md-8 mx-auto">
              <div class="card">
                <div class="text-center pt-4">
                  <h1 class="h4 fw-600">
                    {{ i.loginHere }}
                  </h1>
                </div>

                <div class="px-4 py-3 py-lg-4">
                  <div class="">
                    <form class="form-default" @submit.prevent="loginUser" >
	
                      <div class="form-group">
                        <input type="email" class="form-control" v-model="form.email" :placeholder="i.email" name="email">
                      </div>

                      <div class="form-group">
                        <input type="password" class="form-control" v-model="form.password" :placeholder="i.password" name="password">
                      </div>

                      <div class="row mb-2">
                        <div class="col-6 text-start">
                          <label class="aiz-checkbox">
                            <input type="checkbox" name="remember">
                            <span class="opacity-60">Remember Me</span>
                            <span class="aiz-square-check"></span>
                          </label>
                        </div>
                        <div class="col-6 text-start">
                          <router-link to="" class="text-reset opacity-60 fs-14">{{ i.forgetPassword }}</router-link>
                        </div>
                      </div>

                      <div class="mb-5">
                        
                        <button type="submit" class="btn btn-primary btn-block fw-600">
                          {{ i.login }}
                        </button>
                      </div>
                    </form>
	                  
                  </div>
                  <div class="text-center">
                    <p class="text-muted mb-0">{{ i.dontHaveAnAccount }}</p>
                    <router-link to="register" class="nav-link">{{ i.registerHere }}</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Modal></Modal>
  </div>
</template>

<script>
import $http from '../axios.js'
import { mapGetters,mapMutations,mapState } from 'vuex'
import Swal from "sweetalert2";
import Modal from "@/components/Modal";
export default {
  name: "Login",
  components: {Modal},
  data() {
    return {
      user: {},
      token: "",
      opt: "",
      form: {
        'email' : "",
        'password' : "",
      }
    }
  },
  computed: {
    ...mapGetters([
        'GET_TOKEN',
        'GET_USER',
		    'i'
    ])
  },
  created() {
    window.scrollTo(0,0);
    },
  methods:{
    ...mapMutations([
        'ADD_TOKEN',
        'ADD_USER',
        'ADD_TO_CART',
        'ADD_TO_CART_FROM_DB',
        'ADD_FAVOURITES_FROM_DB',
        'ADD_MODAL_STATUS',
        'ADD_MODAL_TYPE'
    ]),
    loginUser(){
      $http.create('login',this.form )
      .then((res)=>{
        if(res.data.message === 'success') {
          this.user = res.data.data.data;
          this.token = res.data.data.access_token;
          localStorage.setItem('user_id',res.data.data.data.id);
          localStorage.setItem('token',res.data.data.access_token);
          this.ADD_TOKEN(this.token);
          this.ADD_USER(this.user);
          this.getUser();
          // this.$router.push('/');
					window.location.href = '/';
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Successfully Login',
            showConfirmButton: false,
            timer: 1500
          });
        }else{
          if(res.data.message === 'please_verify_opt_first'){
              // opt input
            this.ADD_MODAL_STATUS(true);
            this.ADD_MODAL_TYPE('opt');
              // opt input end
            }else{
              // Error Message
              {
                Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: res.data.message,
                });
                this.form.password = "";
              }
              // Error Message
            }
          }
      });
    },
    optStart(){
      console.log(this.opt)
    },
    getUser(){
      $http.get('customers',localStorage.getItem('user_id'))
      .then((res)=>{
        this.User = res.data.data;
        this.ADD_TOKEN(localStorage.getItem('token'));
        this.ADD_USER(this.User);
        this.getCartFromDB();
        this.getFavFromDB();
      });
    },
    getFavFromDB(){
      $http.getAll('favorites?user_id='+localStorage.getItem('user_id'))
          .then((res)=>{
            let fav = res.data.data;
            //Add To Cart To Vuex
            this.ADD_FAVOURITES_FROM_DB(fav);
          });
    },
    getCartFromDB(){
      $http.getAll('carts?user_id='+localStorage.getItem('user_id'))
      .then((res)=>{
        let cart = res.data.data;
        //Add To Cart To Vuex
        this.ADD_TO_CART_FROM_DB(cart);
      });
    },
  }
}
</script>

<style scoped>

</style>