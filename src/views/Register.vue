<template>
  <div>
    <section class="gry-bg py-4">
      <div class="profile">
        <div class="container">
          <div class="row">
            <div class="col-12 col-md-8 mx-auto">
              <div class="card text-start">
                <div class="text-center pt-4">
                  <h1 class="h4 fw-600">
	                  {{ i.registerHere }}
                  </h1>
                </div>
                <div class="px-4 py-3 py-lg-4">
                  <div class="">
                    <!--Register-->
                    <form @submit.prevent="RegisterStart">
                      <div class="form-group">
                        <div class="row">
                          <div class="col-12 col-md-6">
                            <div>
	                            <label for="" class="text-black-50 fs-12">{{ i.enterYourName }}</label>
                              <input type="text" class="form-control" :placeholder="i.enterYourName" v-model="customersForm.name" required>
                            </div>
                          </div>
                          <div class="col-12 col-md-6">
                            <div>
	                            <label for="" class="text-black-50 fs-12">{{ i.enterYourEmail }}</label>
                              <input type="email" class="form-control" :placeholder="i.enterYourEmail" v-model="customersForm.email" required>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="form-group">
                        <div class="row">
                          <div class="col-12 col-md-6">
                            <div>
	                            <label for="" class="text-black-50 fs-12">{{ i.password }}</label>
                              <input type="password" class="form-control" v-model="customersForm.password" :placeholder="i.password" >
                            </div>
                          </div>
                          <div class="col-12 col-md-6">
                            <div>
	                            <label for="" class="text-black-50 fs-12">{{ i.confirmPassword }}</label>
                              <input type="password" class="form-control" v-model="customersForm.password_confirmation" :placeholder="i.confirmPassword" >
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="form-group">
                        <div class="row">
                          <div class="col-12 col-md-6">
                            <div>
                              <label class="text-black-50 fs-12">{{ i.birthday }}</label>
                              <input type="date" class="form-control" v-model="customersForm.birthday" required>
                            </div>
                          </div>
                          <div class="col-12 col-md-6">
                            <div>
                              <label for="" class="text-black-50 fs-12">{{ i.postalCode }}</label>
                              <input type="number" class="form-control" :placeholder="i.postalCode" v-model="customersForm.postal_code" required>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="form-group">
                        <div class="d-flex">
                          <div class="p-1">
                            <input type="radio" id="male" value="1" v-model="customersForm.gender_id" required>
                            <label for="male" class="text-black-50 p-1">{{ i.male }}</label>
                          </div>
                          <div class="p-1">
                            <input type="radio" id="female" value="2" v-model="customersForm.gender_id" required>
                            <label for="female" class="text-black-50 p-1">{{ i.female }}</label>
                          </div>
                        </div>
                      </div>
                      <div class="form-group">
                        <div class="row">
                          <div class="col-12 col-md-6">
                            <div>
                              <label class="text-black-50 fs-12">{{ i.enterYourPhoneNo }}</label>
                              <input type="number" :placeholder="i.enterYourPhoneNo" class="form-control" v-model="customersForm.phone_no" required>
                            </div>
                          </div>
                          <div class="col-12 col-md-6">
                            <div>
                              <label for="" class="text-black-50 fs-12">{{ i.state }}</label>
                              <select v-model="customersForm.state_id" class="form-control" required>
                                <option value="" selected >{{ i.state }}</option>
                                <option :value="s.id" v-for="s in states" :key="s.id" >
                                  {{ s.name }}
                                </option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="form-group">
                        <label for="" class="text-black-50 fs-12">{{ i.enterYourAddress }}</label>
                        <textarea name="" id="" cols="30" rows="5" class="form-control" v-model="customersForm.address" required></textarea>
                      </div>
                      <div class="form-group text-end">
                        <button class="btn btn-primary" :class="is_success === false ? '' : 'disabled'" >
                          <span  v-if="is_success" class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
	                        {{ i.signUp }}
                        </button>
                      </div>
                    </form>
                    <!--Register-->
                    <div class="text-center">
                      <router-link to="/login" class="nav-link">
	                      {{ i.loginHere }}
                      </router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import $http from "@/axios";
import {mapGetters, mapMutations} from "vuex";

export default {
  name: "Register",
  data() {
    return {
      is_success : false,
      states: [],
      customersForm: {
        'name' : '',
        'email' : '',
        'gender_id' : 1,//1=male , 2=female
        'birthday' : '',
        'postal_code' : '',
        'password' : '',
        'password_confirmation' : '',
        'state_id' : '',
        'address' : '',
        'phone_no' : '',
      },
    }
  },
  created() {
    this.getState();
    window.scrollTo(0,0);
  },
  computed: {
    ...mapGetters([
      'GET_TOKEN',
      'GET_USER',
	    'i'
    ])
  },
  methods:{
    ...mapMutations([
      'ADD_TOKEN',
      'ADD_USER',
      'ADD_TO_CART_FROM_DB',
      'ADD_FAVOURITES_FROM_DB'
    ]),
    getState(){
      $http.getAll('states').then((res)=>{  this.states = res.data.data  });
    },
    RegisterStart(){
      this.is_success = true;
      $http.create('customers',this.customersForm).then((res)=>{
        if(res.data.message === "Customer successfully created" ) {
          // this.user = res.data.data.data;
          this.token = res.data.data.access_token;
          // this.ADD_TOKEN(this.token);
          // this.ADD_USER(this.user);
          console.log(res);
          //Store Token
          localStorage.setItem('token',this.token);
          // localStorage.setItem('user_id',this.user.id);
          // Go Home
          // Store Data to Vuex
          // this.getCartFromDB();
          // this.getFavFromDB();
          // this.$router.push('/login');
          this.is_success = false;
          window.location = '/login';
        }else{
          alert(res.data.message)
        }
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