<template>
  <div class="text-start">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-header">
              <h5 class="fw-600">{{ i.orderDetail }}</h5>
            </div>
            <div class="card-body">
              <!-- Add Order-->
              <form @submit.prevent="confirm">
                <div class="form-group">
                  <div class="row">
                    <div class="col-12 col-md-3">
                      <div>
                        <label class="text-black-50 fs-12">Order Status</label>
                        <select v-model="orderForm.order_status_id" class="form-control" required>
                          <option value="" selected disabled class="text-black-50">selected order status</option>
                          <option v-for="c in GET_ORDER_STATUS" :key="c.id" v-bind:value="c.id">
                            {{ c.name }}
                          </option>
                        </select>
                      </div>
                    </div>
                    <div class="col-12 col-md-3">
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
                    <div class="col-12 col-md-3">
                      <label class="text-black-50 fs-12">Delivery Accept Time</label>
                      <select v-model="orderForm.delivery_accepttime_id" class="form-control" required>
                        <option value="" selected disabled  class="text-black-50">selected delivery accept time</option>
                        <option v-for="c in GET_ACCEPT_TIME" :key="c.id" v-bind:value="c.id">
                          {{ c.name }}
                        </option>
                      </select>
                    </div>
                    <div class="col-12 col-md-3">
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
                  <div class="row">
                    <div class="col-12 col-md-6">
                      <div>
                        <label class="text-black-50 fs-12">Delivery Tracking Code</label>
                        <input type="text" class="form-control" placeholder="Enter Delivery Tracking Code" v-model="orderForm.delivery_tracking_code">
                      </div>
                      <div>
                        <div class="card mt-2">
                          <div class="card-body">
                            <span class="text-black-50 fw-600">Order Items</span>
                            <div class="div">
                              <table class="table table-borderless align-middle text-center">
                                <thead>
                                <tr>
                                  <th scope="col">Item</th>
                                  <th scope="col">{{ i.qunatity }}</th>
                                  <th scope="col">Price</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr class="text-warning">
                                  <th>{{ GET_ORDER_TOTAL.item }}</th>
                                  <td>{{ GET_ORDER_TOTAL.qty }}</td>
                                  <td>{{ GET_ORDER_TOTAL.price }}</td>
                                </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-12 col-md-6">
                      <label class="text-black-50 fs-12">Remark</label>
                      <textarea cols="10" rows="9" placeholder="Enter Remark" class="form-control" v-model="orderForm.remark"></textarea>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <div class="row">
                    <div class="col-12">
                      <div class="card">
	                      <div class="card-header">
		                      <h5 class="fw-600 ">Location Detail</h5>
	                      </div>
                        <div class="card-body">
                          <div class="row justify-content-between align-items-center">
                            <div class="col-11 col-md-11">
                              <span class="text-black-50 fw-600 ">Name: </span>
	                            {{ GET_USER.name }} <br>
                              <span  class="text-black-50 fw-600 ">Email: </span>
                              {{ GET_USER.email }} <br>
                              <span  class="text-black-50 fw-600 ">State: </span>
                              {{ GET_USER.address.state.name }} <br>
                              <span  class="text-black-50 fw-600 ">Postal Code: </span>
                              {{ GET_USER.address.postal_code }} <br>
                              <span class="text-black-50 fw-600">Address: </span>
                              {{ GET_USER.address.address }}
                            </div>
                            <div class="col-1 col-md-1">
                              <button type="button" class="btn btn-outline-primary btn-sm" @click="$router.push('/manage-profile')">
                                <i class="fas fa-edit"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="form-group d-flex justify-content-between align-items-center">
	                <router-link to="/cart" class="btn btn-outline-primary">
		                <i class="fa-solid fa-arrow-left"></i>
		                Back</router-link>
                  <button class="btn btn-primary" :class="is_success === false ? '' : 'disabled'" >
	                  <span  v-if="is_success" class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
	                  Payment
	                  <i class="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
              </form>
              <!--Add Order-->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";
import $http from "@/axios";
import Swal from "sweetalert2";

export default {
  name: "Order",
  data() {
    return {
			is_success : false,
      orderForm: {
        "user_id": '',
        "order_status_id": '',
        "payment_method_id": '',
        "delivery_accepttime_id": '',
        "delivery_agent_id": '',
        "delivery_tracking_code": '',
        "remark": '',
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
    ])
  },
	created() {
		window.scrollTo(0,0);
	},
	methods: {
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
	    'ADD_PAY',
	    'ADD_ORDER'
    ]),

    getOrderStatus() {
      $http.getAll('order_status').then((res) => {
        this.ADD_ORDER_STATUS(res.data.data);
      });
    },
    getPaymentMethod() {
      $http.getAll('payment_methods').then((res) => {
        this.ADD_PAYMENT(res.data.data);
      });
    },
    getDeliveryAcceptTime() {
      $http.getAll('deliver_accept_times').then((res) => {
        this.ADD_ACCEPT_TIME(res.data.data.data);
      });
    },
    getDeliveryAgent() {
      $http.getAll('delivery_agents').then((res) => {
        this.ADD_DELIVER_AGENT(res.data.data);
      });
    },
    confirm() {
        this.orderStart();
    },
    orderStart() {
			
			this.is_success = true;
      //Back End
      $http.create('orders', this.orderForm).then((res) => {
        this.orderForm.delivery_accepttime_id = '';
        this.orderForm.delivery_tracking_code = '';
        this.orderForm.order_status_id = '';
        this.orderForm.payment_method_id = '';
        this.orderForm.delivery_agent_id = '';
        this.orderForm.remark = '';

        if (res.data.data === null) {
          //order failed
          Swal.fire(res.data.message, '', 'error');
        } else {
          //success order
          console.log(res.data.data)
	        this.is_success = false;
          this.DEL_ALL_CART_DATA();
          // this.$router.push('/stripe')
	        this.ADD_PAY(true);
					this.ADD_ORDER(res.data.data);
					localStorage.setItem('order_id',res.data.data.id);
        }
      }).catch((err) => {
        console.log(err);
        alert('something was wrong');
      });
    },
  }
}

</script>

<style scoped>

</style>