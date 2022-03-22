<template>
  <!--Model-->
  <div v-if="status === true">
    <transition>
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <div class="modal-header-title w-100">
                  <div class="model-title d-flex justify-content-between">
                      <span class="h4 mb-0">Login Form</span>
                      <button class="btn btn-close" @click="close"></button>
                  </div>
                </div>
              </div>
              <div class="modal-body">
                  <div class="">
                    <form class="form-default" @submit.prevent="loginUser" >
                      <div class="form-group">
                        <input type="email" class="form-control" v-model="form.email" placeholder="Email" name="email">
                      </div>
                      <div class="form-group">
                        <input type="password" class="form-control" v-model="form.password" placeholder="Password" name="password">
                      </div>
                      <div class="mb-5">
                        <button type="submit" class="btn btn-primary btn-block fw-600">Login</button>
                      </div>
                    </form>
                  </div>
                  <div class="text-center">
                    <p class="text-muted mb-0">Dont have an account?</p>
                    <router-link to="register" class="nav-link">Register Now</router-link>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
  <!--Model-->
</template>

<script>
import $http from '../axios.js'
import { mapGetters,mapMutations,mapState } from 'vuex'
export default {
  name: "Modal",
  data() {
    return {
      user: {},
      token: "",
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
      'GET_MODAL_STATUS'
    ]),
    status(){
      return this.GET_MODAL_STATUS;
    }
  },
  methods:{
    ...mapMutations([
      'ADD_TOKEN',
      'ADD_USER',
      'ADD_MODAL_STATUS'
    ]),
    loginUser(){
      $http.create('login',this.form).then((res)=>{
        if(res.data.message === 'success' ) {
          this.user = res.data.data.data;
          this.token = res.data.data.access_token;
          this.ADD_TOKEN(this.token);
          this.ADD_USER(this.user);
          this.form.email = "";
          this.form.password = "";
          this.ADD_MODAL_STATUS(false);
        }else{
          alert(res.data.message)
        }
      });
    },
    close(){
      this.ADD_MODAL_STATUS(false);
      this.form.email = '';
      this.form.password = '';
    }
  }
}
</script>

<style scoped>

</style>