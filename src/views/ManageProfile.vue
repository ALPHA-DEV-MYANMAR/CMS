<template>
  <div>
    {{ if_user_null }}
    <section class="py-5">
      <div class="container">
        <div class="d-flex align-items-start">
          <side-bar></side-bar>
          <div class="aiz-user-panel text-start">
            <div class="aiz-titlebar mt-2 mb-4">
              <div class="row align-items-center">
                <div class="col-md-6">
                  <h1 class="h3">Manage Profile</h1>
                </div>
              </div>
            </div>
              <form>
              <!-- Basic Info-->
              <div class="card">
                <div class="card-body">
                  <div class="modal-body">
                    <!--Customer-->
                    <form @submit.prevent="updateStart">
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
                          <button class="btn btn-primary" >Update Profile</button>
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
    </section>
  </div>
</template>

<script>
import SideBar from "@/components/SideBar"
import {mapGetters} from "vuex"
import $http from '../axios.js'
export default {
  name: "ManageProfile",
  data() {
    return {
      states: [],
      customersForm: {
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
        'GET_USER'
    ]),
    if_user_null(){
      if(this.GET_USER.length === 0){
       this.$router.push('/');
      }else{
        return false;
      }
    }
  },
  components: { SideBar },
  created() {
    this.getState();
    this.customersForm = {
          'name' : this.GET_USER.name,
          'email' : this.GET_USER.email,
          'gender_id' : this.GET_USER.gender_id,//1=male , 2=female
          'birthday' : this.GET_USER.profile.birthday,
          'postal_code' : this.GET_USER.address === null ? '' : this.GET_USER.address.postal_code,
          'state_id' : this.GET_USER.address === null ? '' : this.GET_USER.address.state_id,
          'address' : this.GET_USER.address === null ? '' : this.GET_USER.address.address,
          'phone_no' : this.GET_USER.phone_no,
    }
  },
  methods:{
    updateStart(){
      $http.update('customers',this.GET_USER.id,this.customersForm).then((res)=>{
        console.log(res)
      });
    },
    getState(){
      $http.getAll('states').then((res)=>{  this.states = res.data.data  });
    }
  }
};
</script>

<style scoped></style>
