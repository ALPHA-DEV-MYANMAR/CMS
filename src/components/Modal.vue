<template>
  <!--Model-->
  <div v-if="status === true && GET_MODAL_TYPE === '' " class="text-start">
    <transition>
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <div class="modal-header-title w-100">
                  <div class="model-title d-flex justify-content-between">
                      <span class="h4 mb-0">{{ i.pleaseLogin }}</span>
                      <button class="btn btn-close" @click="close"></button>
                  </div>
                </div>
              </div>
              <div class="modal-body">
                  <div class="">
                    <form class="form-default" @submit.prevent="loginUser" >
                      <div class="form-group">
	                      <label>{{ i.email }}</label>
                        <input type="email" class="form-control" v-model="form.email" :placeholder="i.email" name="email">
                      </div>
                      <div class="form-group">
	                      <label for="">{{ i.password }}</label>
                        <input type="password" class="form-control" v-model="form.password" :placeholder="i.password" name="password">
                      </div>
                      <div class="mb-5">
                        <button type="submit" class="btn btn-primary btn-block fw-600">Login</button>
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
    </transition>
  </div>
  <div v-if="GET_MODAL_TYPE === 'opt'">
    <transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-dialog">
            <div class="modal-content ">
              <div class="modal-header">
                <div class="modal-header-title w-100">
                  <div class="model-title d-flex justify-content-between">
                    <div class="h5 text-black-50 mb-0">{{ i.optCode }}</div>
                    <button class="btn btn-close" @click="close"></button>
                  </div>
                </div>
              </div>
              <div class="modal-body text-start">
                <!-- Add Order-->
                <form @submit.prevent="optStart">
                  <div class="form-group">
                    <input type="number" :placeholder="i.enterYourOptCode" class="form-control" v-model="opt" >
                    <div class="text-center">
                      <button class="btn btn-primary mt-2">
	                      {{ i.ok }}
                      </button>
                    </div>
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
import Swal from "sweetalert2";
export default {
  name: "Modal",
	components: {Stripe},
	data() {
    return {
      user: {},
      token: "",
      opt: "",
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
      'GET_ORDER_TOTAL',
		    'i'
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
      'ADD_DELIVER_AGENT',
      'ADD_TO_CART_FROM_DB',
      'ADD_FAVOURITES_FROM_DB',
    ]),
    optStart(){
      $http.create('validate_opt',{
        'code' : this.opt
      }).then((res)=>{
        console.log(res);
        this.close();
      })
    },
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
          localStorage.setItem('user_id',res.data.data.data.id);
          localStorage.setItem('token',res.data.data.access_token);
          this.form.email = "";
          this.form.password = "";
          this.ADD_MODAL_STATUS(false);
          this.getCartFromDB();
          this.getFavFromDB();
          this.getUser();
					window.location.href = '/';
        }else{
          alert(res.data.message)
        }
      });
    },
    getUser(){
      $http.get('customers',localStorage.getItem('user_id'))
          .then((res)=>{
            this.User = res.data.data;
            this.ADD_TOKEN(localStorage.getItem('token'));
            this.ADD_USER(this.User);
          });
    },
    confirm(){
      this.ADD_MODAL_STATUS(false);
      this.ADD_MODAL_TYPE('');
      Swal.fire({
        icon: 'question',
        title: 'အော်ဒါမှာယူဖို့သေချာပါသလား။',
        showDenyButton: true,
        confirmButtonText: 'Yes',
        denyButtonText: `No`,
      }).then((result) => {
        if (result.isConfirmed) {
          this.orderStart();
        } else if (result.isDenied) {
          Swal.fire('Order Cancel', '', 'error');
          this.close();
        }
      })
    },
    orderStart(){
      //Back End
      $http.create('orders',this.orderForm).then((res)=>{
        this.orderForm.delivery_accepttime_id = '';
        this.orderForm.delivery_tracking_code = '';
        this.orderForm.order_status_id = '';
        this.orderForm.payment_method_id = '';
        this.orderForm.delivery_agent_id = '';
        this.orderForm.remark = '';

        if(res.data.data === null ){
            //order failed
            Swal.fire(res.data.message, '', 'error');
        }else{
          //success order
          Swal.fire('အော်ဒါမှာယူမူအောင်မြင်ပါသည်။', '', 'success');
            console.log(res.data.data)
          this.DEL_ALL_CART_DATA();
        }

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
      this.orderForm.user_id = '';
      this.orderForm.delivery_accepttime_id = '';
      this.orderForm.delivery_tracking_code = '';
      this.orderForm.order_status_id = '';
      this.orderForm.payment_method_id = '';
      this.orderForm.delivery_agent_id = '';
      this.orderForm.remark = '';
    },
    getCartFromDB(){
      $http.getAll('carts?user_id='+localStorage.getItem('user_id'))
      .then((res)=>{
        let cart = res.data.data;
        //Add To Cart To Vuex
        this.ADD_TO_CART_FROM_DB(cart);
      });
    },
    getFavFromDB(){
      $http.getAll('favorites?user_id='+localStorage.getItem('user_id'))
          .then((res)=>{
            let fav = res.data.data;
            //Add To Cart To Vuex
            this.ADD_FAVOURITES_FROM_DB(fav);
          });
    }
  }
}
</script>

<style scoped>

</style>