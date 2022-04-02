<template>
  <div class="text-start">
	  
    <NavBar v-show="!GET_PAY"></NavBar>
	  
<!--	Stripe Start -->
	  <div v-show="GET_PAY" v-if="GET_ORDER.length !== 0 ">
		  <div class="container min-vh-100" id="content">
			  <div class="row min-vh-100 justify-content-center align-items-center">
				  <div class="col-12 col-md-6">
					  <div class="w-75 mx-auto">
						  <span class="h4 fw-bolder mb-0">
							  <button class="btn btn-outline-danger btn-sm " @click="cancelOrder">
								  <i class="fa-solid fa-arrow-left"></i>
							  </button>
							  Pay with Card
						  </span>
						  <form role="form"  action="http://127.0.0.1:8000/stripe"
						        method="post" class="require-validation mt-2"
						        data-cc-on-file="false"
						        data-stripe-publishable-key="pk_test_51KixgBAFWaTKLBDD9R6wAQuV568oLMXBZE1CwpXMngRSg6DHjFqpVoXBnHswnyTs6w8WfPGkHNBLPPNUZ2Xdc3X300LCH8iEbw"
						        id="payment-form">
							
							  <input type="hidden" name="_token" value="pT5bOFX4FRdpTCJGtPSq3WQ7ejVHH6mIGwXJtHSi">
							  <input type="hidden" name="order_id"  id="order_id"  :value="GET_ORDER.id">
							  <input type="hidden" name="user_id" id="user_id" :value="GET_ORDER.user_id">
							
							  <div class="form-group">
								  <label for="name" class="fw-600 text-black-50 fs-12">Name</label>
								  <input class="form-control rounded-" id="name" type="text" />
							  </div>
							  <div class="form-group">
								  <label for="ccnumber" class="fw-600 text-black-50 fs-12">Credit Card Number</label>
								  <div class="input-group ">
									  <div class="input-group-prepend" id="cardIcons"></div>
									  <input class="form-control card-number rounded-3" id="cardnumber" type="text" placeholder="1242 1234 1234 1234" />
									  <div class="invalid-feedback card-valid-lable" style="display:none;">
										  Please correct card number
									  </div>
								  </div>
							  </div>
							  <div class="form-group">
								  <div class="row">
									  <div class="col-6">
										  <label for="ccyear" class="fw-600 text-black-50 fs-12">Card Expiration</label>
										  <input class="form-control rounded-3 card-expiry" type="text" placeholder="MM/YY" />
									  </div>
									  <div class="col-6">
										  <label for="cvv" class="fw-600 text-black-50 fs-12">CVV/CVC</label>
										  <input class="form-control card-cvc rounded-3" id="cvv" type="text" placeholder="123" maxlength="4" />
									  </div>
								  </div>
							  </div>
							  <div class="form-group">
								  <button class="btn btn-sm btn-primary form-control rounded-3" type="submit">
									  <i class="fa-solid fa-money-bill-1-wave"></i> Pay
								  </button>
							  </div>
						  </form>
					  </div>
				  </div>
				  <div class="col-12 col-md-6">
					  <div style="overflow: auto">
						  <span class="h4 fw-bolder">Order Items</span>
						  <table class="table table-borderless align-middle">
							  <thead>
							  <tr >
								  <th scope="col">Photo</th>
								  <th scope="col">Name</th>
								  <th scope="col">Quantity</th>
								  <th scope="col">Price</th>
							  </tr>
							  </thead>
							  <tbody>
							  <tr v-for="o in GET_ORDER.items" :key="o.id">
								  <td>
									  <img :src="o.price.good.photos[0].name" class="img-fluid rounded shadow-sm" style="height: 50px;" alt="">
								  </td>
								  <td>
									  {{ o.price.good.name }}
								  </td>
								  <td>
									  {{ o.quantity }}
								  </td>
								  <td>
									  {{ o.total_price }}
								  </td>
							  </tr>
							  </tbody>
						  </table>
						  <hr>
						  <span class="h4 fw-bolder">Summary</span>
						  <table class="table table-borderless align-middle" v-if="GET_PAY">
							  <tbody>
							    <tr>
								    <td>Delivery Price:</td>
								    <td>{{ GET_ORDER.summary.delivery_price }}</td>
							    </tr>
								  <tr>
									  <td>Total Price:</td>
									  <td>{{ GET_ORDER.summary.total }}</td>
								  </tr>
							  </tbody>
						  </table>
						  <hr>
					  </div>
				  </div>
			  </div>
		  </div>
		</div>
<!--	Stripe End -->
	 
  </div>
</template>


<script>
import $http from './axios.js';
import NavBar from "@/components/NavBar";
import {mapMutations,mapGetters} from "vuex";
import Modal from "@/components/Modal";
import './assets/js/cusotom.js';
import Swal from "sweetalert2";
export default {
  components: {Modal, NavBar },
  created() {
    this.getCategories();
    this.getOrderStatus();
    this.getPaymentMethod();
    this.getDeliveryAcceptTime();
    this.getDeliveryAgent();
    this.getCartFromDB();   
    this.getUser();
    this.getFavFromDB();
  },
	computed: {
		...mapGetters([
				'GET_PAY',
				'GET_ORDER'
		]),
	},
  methods:{
    ...mapMutations([
      'ADD_ALL_CAT',
      'ADD_ORDER_STATUS',
      'ADD_PAYMENT',
      'ADD_ACCEPT_TIME',
      'ADD_DELIVER_AGENT',
      'ADD_TOKEN',
      'ADD_USER',
      'ADD_TO_CART_FROM_DB',
      'ADD_FAVOURITES_FROM_DB'
    ]),
	  cancelOrder(){
		  Swal.fire({
			  icon: 'warning',
			  title: 'Are you sure you want to cancel this order?',
			  showCancelButton: true,
			  confirmButtonText: 'Yes',
		  }).then((result) => {
			  if (result.isConfirmed) {
				  window.location.href = '/';
			  }
		  })
	  },
    getUser(){
      $http.get('customers',localStorage.getItem('user_id'))
          .then((res)=>{
            this.User = res.data.data;
            this.ADD_TOKEN(localStorage.getItem('token'));
            this.ADD_USER(this.User);
          });
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
    getCategories(){
      $http.getAll('categories').then((res)=>{
        this.ADD_ALL_CAT(res.data.data);
      }).catch((err)=>{console.log(err)});
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
            //Add To Cart To Vuex
            let filter_good_not_null = res.data.data.filter((el)=>el.good !== null);
            this.ADD_FAVOURITES_FROM_DB(filter_good_not_null);
          });
    }
  }
}
</script>


