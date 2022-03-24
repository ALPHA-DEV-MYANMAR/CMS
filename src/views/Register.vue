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
                    Create an account.
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
                              <label for="" class="text-black-50 fs-12">Your Name</label>
                              <input type="text" class="form-control" placeholder="Name" v-model="customersForm.name" required>
                            </div>
                          </div>
                          <div class="col-12 col-md-6">
                            <div>
                              <label for="" class="text-black-50 fs-12">Your Email</label>
                              <input type="email" class="form-control" placeholder="Email" v-model="customersForm.email" required>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="form-group">
                        <div class="row">
                          <div class="col-12 col-md-6">
                            <div>
                              <label class="text-black-50 fs-12">Password</label>
                              <input type="password" class="form-control" v-model="customersForm.password" placeholder="Password" >
                            </div>
                          </div>
                          <div class="col-12 col-md-6">
                            <div>
                              <label class="text-black-50 fs-12">Password Confirmation</label>
                              <input type="password" class="form-control" v-model="customersForm.password_confirmation" placeholder="Password Confirmation" >
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="form-group">
                        <div class="row">
                          <div class="col-12 col-md-6">
                            <div>
                              <label class="text-black-50 fs-12">Birthday</label>
                              <input type="date" class="form-control" v-model="customersForm.birthday" required>
                            </div>
                          </div>
                          <div class="col-12 col-md-6">
                            <div>
                              <label for="" class="text-black-50 fs-12">Postal Code</label>
                              <input type="number" class="form-control" placeholder="Postal Code" v-model="customersForm.postal_code" required>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="form-group">
                        <div class="d-flex">
                          <div class="p-1">
                            <input type="radio" id="male" value="1" v-model="customersForm.gender_id" required>
                            <label for="male" class="text-black-50 p-1">Male</label>
                          </div>
                          <div class="p-1">
                            <input type="radio" id="female" value="2" v-model="customersForm.gender_id" required>
                            <label for="female" class="text-black-50 p-1">Female</label>
                          </div>
                        </div>
                      </div>
                      <div class="form-group">
                        <div class="row">
                          <div class="col-12 col-md-6">
                            <div>
                              <label class="text-black-50 fs-12">Your Phone Number</label>
                              <input type="number" placeholder="Phone" class="form-control" v-model="customersForm.phone_no" required>
                            </div>
                          </div>
                          <div class="col-12 col-md-6">
                            <div>
                              <label for="" class="text-black-50 fs-12">State</label>
                              <select v-model="customersForm.state_id" class="form-control" required>
                                <option value="" selected >selected state</option>
                                <option :value="s.id" v-for="s in states" :key="s.id" >
                                  {{ s.name }}
                                </option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="form-group">
                        <label for="" class="text-black-50 fs-12">Address</label>
                        <textarea name="" id="" cols="30" rows="5" class="form-control" placeholder="Address" v-model="customersForm.address" required></textarea>
                      </div>
                      <div class="form-group text-end">
                        <button class="btn btn-primary" >Register</button>
                      </div>
                    </form>
                    <!--Register-->
                    <div class="text-center">
                      <router-link to="/login" class="nav-link">I have already a account</router-link>
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
  },
  computed: {
    ...mapGetters([
      'GET_TOKEN',
      'GET_USER'
    ])
  },
  methods:{
    ...mapMutations([
      'ADD_TOKEN',
      'ADD_USER',
      'ADD_TO_CART_FROM_DB',
      'ADD_FAVOURITES_DB'
    ]),
    getState(){
      $http.getAll('states').then((res)=>{  this.states = res.data.data  });
    },
    RegisterStart(){
      $http.create('customers',this.customersForm).then((res)=>{
        if(res.data.message === "Customer successfully created" ) {
          this.user = res.data.data.data;
          this.token = res.data.data.access_token;
          this.ADD_TOKEN(this.token);
          this.ADD_USER(this.user);
          //Store Token
          localStorage.setItem('token',this.token);
          localStorage.setItem('user_id',this.user.id);
          //  Go Home
          // Store Data to Vuex
          this.getCartFromDB();
          this.getFavFromDB();
          this.$router.push('/login');
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
            this.ADD_FAVOURITES_DB(fav);
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