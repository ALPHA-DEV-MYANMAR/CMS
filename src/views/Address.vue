<template>
  <div class="container text-start">
    <div class="row">
      <div class="col-12 col-md-12">
        <form>
          <!-- Basic Info-->
          <div class="card">
            <div class="card-header">
                 <span class="h5 text-black-50 mb-0">Address</span>
            </div>  
            <div class="card-body p-0 p-md-2">
              <div class="modal-body">
                <!--Customer-->
                <form @submit.prevent="updateStart">
                  <div class="form-group">
                    <div class="row">
                       <div class="col-12 col-md-4">
                        <div>
                          <label for="" class="text-black-50 fs-12">{{ i.postalCode }}</label>
                          <input type="number" class="form-control" :placeholder="i.postalCode" v-model="customersForm.postal_code" required>
                        </div>
                      </div>
                      <div class="col-12 col-md-4">
                        <div>
                          <label class="text-black-50 fs-12">{{ i.phoneNo }}</label>
                          <input type="number" :placeholder="i.phoneNo" class="form-control" v-model="customersForm.phone_no" required>
                        </div>
                      </div>
                      <div class="col-12 col-md-4">
                        <div>
                          <label for="" class="text-black-50 fs-12">{{  i.state }}</label>
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
                    <label for="" class="text-black-50 fs-12">{{ i.address }}</label>
                    <textarea name="" id="" cols="30" rows="5" class="form-control" v-model="customersForm.address" required></textarea>
                  </div>
                  <div class="form-group text-end">
                    <button class="btn btn-primary" :class="is_success === false ? '' : 'disabled'">
                        <span class="spinner-grow spinner-grow-sm" v-if="is_success" role="status" aria-hidden="true"></span>
	                    Promotion
                         <i class="fa-solid fa-arrow-right"></i>
	                
                    </button>
                  </div>
                </form>
                <!--Customer-->
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from "@/components/SideBar"
import {mapGetters, mapMutations} from "vuex"
import $http from '../axios.js'
import Swal from "sweetalert2";
export default {
  name: "ManageProfile",
  data() {
    return {
      states: [],
	    is_success: false,
      User: {},
      customersForm: {
        'user_id' : '',
        'name' : '',
        'email' : '',
        'gender_id' : 1,//1=male , 2=female
        'birthday' : '',
        'postal_code' : '',
        'state_id' : '',
        'address' : '',
        'phone_no' : '',
      },
    }
  },
  computed:{
    ...mapGetters([
        'GET_USER',
		 'i'
    ]),
  },
  components: { SideBar },
  created() {
    this.getState();
    this.getUser();
    this.getStoreUser();
    window.scrollTo(0,0);
  },
  methods:{
    ...mapMutations([
      'ADD_TOKEN',
      'ADD_USER'
    ]),
    getUser(){
      $http.get('customers',localStorage.getItem('user_id'))
          .then((res)=>{
            this.User = res.data.data;
            this.ADD_TOKEN(localStorage.getItem('token'));
            this.ADD_USER(this.User);
            this.customersForm = {
                  'user_id' : this.User.id,
                  'name' : this.User.name,
                  'email' : this.User.email,
                  'gender_id' : this.User.gender_id,//1=male , 2=female
                  'birthday' : this.User.birthday,
                  'postal_code' : this.User.address === null ? '' : this.User.address.postal_code,
                  'state_id' : this.User.address === null ? '' : this.User.address.state_id,
                  'address' : this.User.address === null ? '' : this.User.address.address,
                  'phone_no' : this.User.address === null ? '' : this.User.phone_no,
            }
          });
    },
    updateStart(){
	    this.is_success = true;
      $http.update('customers',this.GET_USER.id,this.customersForm).then((res)=>{
        console.log(res)
        if(res.data.message === "Customer successfully updated") {
          this.user = res.data.data.data;
          this.token = res.data.data.access_token;
          this.ADD_TOKEN(this.token);
          this.ADD_USER(this.user);
          //Store Token
          localStorage.setItem('token',this.token);
	      this.is_success = false;
          this.getStoreUser();
          this.$router.push('/promo');
        }else{
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: res.data.message,
          })
        }
      });
    },
    getStoreUser(){
      this.customersForm = {
        'user_id' : this.GET_USER.id,
        'name' : this.GET_USER.name,
        'email' : this.GET_USER.email,
        'gender_id' : this.GET_USER.gender_id,//1=male , 2=female
        'birthday' : this.GET_USER.birthday,
        'postal_code' : this.GET_USER.address === null ? '' : this.GET_USER.address.postal_code,
        'state_id' : this.GET_USER.address === null ? '' : this.GET_USER.address.state_id,
        'address' :  this.GET_USER.address === null ? '' :this.GET_USER.address.address,
        'phone_no' : this.GET_USER.address === null ? '' : this.GET_USER.phone_no,
      }
    },
    getState(){
      $http.getAll('states').then((res)=>{  this.states = res.data.data  });
    }
  }
};
</script>

<style scoped></style>
