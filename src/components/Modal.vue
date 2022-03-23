<template>
  <!--Model-->
  <div v-if="status === true && GET_MODAL_TYPE === '' ">
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
  <div v-if="GET_MODAL_TYPE === 'order'">
    <transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper animate__animated animate__bounceIn">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <div class="modal-header-title w-100">
                  <div class="model-title">
                    <div class="h5 text-black-50 mb-0">Ordered Form</div>
                    <button class="btn btn-close" @click="close"></button>
                  </div>
                </div>
              </div>
              <div class="modal-body text-start">
                <!-- Add Order-->
                <form @submit.prevent="orderStart">
                  <div class="form-group">
                    <div class="row">
                      <div class="col-12 col-md-6">
                        <div>
                          <label class="text-black-50 fs-12">Ordered Status</label>
                          <select v-model="orderForm.order_status_id" class="form-control" required>
                            <option value="" selected disabled class="text-black-50">selected status</option>
                            <option v-for="c in GET_ORDER_STATUS" :key="c.id" v-bind:value="c.id">
                              {{ c.name }}
                            </option>
                          </select>
                        </div>
                      </div>
                      <div class="col-12 col-md-6">
                        <div>
                          <label class="text-black-50 fs-12">Payment Method</label>
                          <select v-model="orderForm.payment_method_id" class="form-control" required>
                            <option value="" selected disabled  class="text-black-50">selected payment method</option>
                            <option v-for="c in GET_PAYMENT" :key="c.id" v-bind:value="c.id">
                              {{ c.name }}
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="row">
                      <div class="col-12 col-md-6">
                        <label class="text-black-50 fs-12">Delivery Accept Time</label>
                        <select v-model="orderForm.delivery_accepttime_id" class="form-control" required>
                          <option value="" selected disabled  class="text-black-50">selected delivery accept time</option>
                          <option v-for="c in GET_ACCEPT_TIME" :key="c.id" v-bind:value="c.id">
                            {{ c.name }}
                          </option>
                        </select>
                      </div>
                      <div class="col-12 col-md-6">
                        <label class="text-black-50 fs-12">Delivery Agent</label>
                        <select v-model="orderForm.delivery_agent_id" class="form-control" required>
                          <option value='' selected disabled  class="text-black-50">selected delivery agent</option>
                          <option v-for="c in GET_DELIVER_AGENT" :key="c.id" v-bind:value="c.id">
                            {{ c.name }}
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <!--delivery_tracking_code-->
                  <div class="form-group">
                    <label class="text-black-50 fs-12">Delivery Tracking Code</label>
                    <input type="text" class="form-control" placeholder="Enter Delivery Tracking Code" v-model="orderForm.delivery_tracking_code">
                  </div>
                  <div class="form-group">
                    <label class="text-black-50 fs-12">Remark</label>
                    <textarea cols="10" rows="5" placeholder="Enter Remark" class="form-control" v-model="orderForm.remark"></textarea>
                  </div>
                  <div class="form-group text-end">
                    <button class="btn btn-primary" >Order Now</button>
                  </div>
                </form>

                <!--Add Order-->
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
      },
      orderForm: {
        "user_id" : '',
        "order_status_id" : '',
        "payment_method_id" : '',
        "delivery_accepttime_id" : '',
        "delivery_agent_id" : '',
        "delivery_tracking_code" : '',
        "remark" : '',
      },
    }
  },
  computed: {
    ...mapGetters([
      'GET_TOKEN',
      'GET_USER',
      'GET_MODAL_STATUS',
      'GET_MODAL_TYPE',
      'GET_ORDER_STATUS',
      'GET_PAYMENT',
      'GET_ACCEPT_TIME',
      'GET_DELIVER_AGENT',
    ]),
    status(){
      return this.GET_MODAL_STATUS;
    }
  },
  methods:{
    ...mapMutations([
      'ADD_TOKEN',
      'ADD_USER',
      'ADD_MODAL_STATUS',
      'ADD_MODAL_TYPE',
      'DEL_ALL_CART_DATA',
      'ADD_ORDER_STATUS',
      'ADD_PAYMENT',
      'ADD_ACCEPT_TIME',
      'ADD_DELIVER_AGENT'
    ]),
    getOrderStatus(){
      $http.getAll('order_status').then((res)=>{
        this.ADD_ORDER_STATUS(res.data.data);
      });
    },
    getPaymentMethod(){
      $http.getAll('payment_methods').then((res)=>{
        this.ADD_PAYMENT(res.data.data);
      });
    },
    getDeliveryAcceptTime(){
      $http.getAll('deliver_accept_times').then((res)=>{
        this.ADD_ACCEPT_TIME(res.data.data.data);
      });
    },
    getDeliveryAgent(){
      $http.getAll('delivery_agents').then((res)=>{
        this.ADD_DELIVER_AGENT(res.data.data);
      });
    },
    loginUser(){
      $http.create('login',this.form).then((res)=>{
        if(res.data.message === 'success' ) {
          this.user = res.data.data.data;
          this.token = res.data.data.access_token;
          this.ADD_TOKEN(this.token);
          this.ADD_USER(this.user);
          //Store Token
          localStorage.setItem('token',this.token);
          this.form.email = "";
          this.form.password = "";
          this.ADD_MODAL_STATUS(false);
        }else{
          alert(res.data.message)
        }
      });
    },
    orderStart(){
      this.orderForm.user_id = this.GET_USER.id;
      //Back End
      $http.create('orders',this.orderForm).then((res)=>{
        this.close();
        this.DEL_ALL_CART_DATA();
      }).catch((err)=>{
        console.log(err);
        alert('something was wrong')
      });

    },
    close(){
      this.ADD_MODAL_STATUS(false);
      this.ADD_MODAL_TYPE('');
      this.form.email = '';
      this.form.password = '';
    }
  }
}
</script>

<style scoped>

</style>