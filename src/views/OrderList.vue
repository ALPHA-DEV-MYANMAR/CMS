<template>
  <div class="container text-start">
    <div class="row">
      <div class="col-12 col-md-4 col-lg-3  d-none d-md-block">
        <side-bar></side-bar>
      </div>
      <div class="col-12 col-md-8 col-lg-9">
          <div class="row">
            <div class="card">
               <div style="overflow-x:auto;">
                <table class="table align-middle text-start fs-14 text-nowrap overflow-hidden text-center">
                    <thead>
                        <tr>
                            <th>Detail</th>
                            <th>Order ID</th>
                            <th>Payment Method</th>
                            <th>Date</th>
                            <th>Final Cost</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-if="spinner == false">
                          <td colspan="5">
                            <div class="d-flex justify-content-center m-5">
                                <spinner></spinner>
                            </div>
                          </td>
                        </tr>
                        <tr v-else v-for='o in orders' :key="o.id">
                            <td>
                                <button type="button" class="btn btn-outline-warning btn-sm btn-circle rounded-3" @click="detailOrder(o)">
                                    <i class="fa-solid fa-circle-info"></i>
                                </button>
                            </td>
                            <td>{{ o.id }} </td>
                            <td>{{ o.payment_method.name }}</td>
                            <td>{{ o.created_at }}</td>
                            <td>{{ o.summary.total }}</td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>
          </div>
      </div>
    </div>


  </div>
</template>

<script>
  import SideBar from '@/components/SideBar.vue'
  import Spinner from "@/components/Spinner";
  import $http from '../axios.js'
  export default{
      data() {
          return {
            orders: [],
            spinner: false
          }
      },
  components: { SideBar , Spinner },
  created () {
      this.getData();
  },
  methods: {
    getData() {
        $http.getAll('orders')
        .then((res)=>{
            this.orders = res.data.data.data.filter((el)=>el.items.length !== 0);
            this.spinner = true;
        });  
    },
    detailOrder(order){
        this.$router.push({name: 'OrderDetial', params: { 'id': order.id }});
    }
  },
}
</script>
