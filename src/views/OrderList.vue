<template>
  <div class="container text-start">
    <div class="row">
      <div class="col-12 col-md-3  d-none d-md-block">
        <side-bar></side-bar>
      </div>
      <div class="col-12 col-md-9">
          <div class="row">
            <div class="card">
               <div style="overflow-x:auto;">
                <table class="table table-hover align-middle text-start fs-14 text-nowrap overflow-hidden text-center">
                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Payment Method</th>
                            <th>Date</th>
                            <th>Order Status</th>
                            <th>Delivery Agent</th>
                            <th>Tracking ID</th>
                            <th>Final Cost</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for='o in orders' :key="o.id">
                            <td>{{ o.id }} </td>
                            <td>{{ o.payment_method.name }}</td>
                            <td>{{ o.created_at }}</td>
                            <td>{{ o.status.name }}</td>
                            <td>{{ o.delivery_agent === null ? '-' : o.delivery_agent.name }}</td>
                            <td>{{ o.delivery_tracking_code }}</td>
                            <td>{{ o.summary.total }}</td>
                            <td>
                                <button type="button" class="btn btn-primary btn-sm btn-circle rounded-3" @click="detailOrder(o)" data-bs-toggle="modal" data-bs-target="#orderModal">
                                    <i class="fa-solid fa-circle-info"></i>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>
          </div>
      </div>
    </div>

    <!-- Order Modal -->
    <div class="modal fade" id="orderModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Order Detail</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">

            <table class='table table-borderless'>
                <tr>
                    <td>Order ID:</td>
                    <td>{{ singleDetail.order_id }}</td>
                </tr>
                <tr>
                    <td>Order Date:</td>
                    <td>{{ singleDetail.created_at }}</td>
                </tr>
                <tr>
                    <td>Order Status</td>
                    <td>{{ singleDetail.status }}</td>
                </tr>
            </table>

            <hr/>

            <span class='h4 fs-15 fw-600'>Summary</span>

            <table>
                <tbody>
                    <td>
                        Delivery Price: 
                    </td>
                    <td>
                        {{ singleDetail.summary }}
                    </td>
                </tbody>
            </table>


            <hr/>

            <span class='h4 fs-15 fw-600'>Order Items</span>

            <ul class="h-100 overflow-auto c-scrollbar-light list-group list-group-flush">
            <li v-for="c in singleDetail.items" :key="c.id">
                <span class=" d-flex align-items-center">
                    <span class="text-reset d-flex align-items-center flex-grow-1 nav-link" @click="addGood(c)">
                        <img :src="c.price === null ? '': c.price.good.photos[0].name " class="img-fit size-60px rounded ls-is-cached lazyloaded" >
                        <span class="minw-0 pl-2 flex-grow-1 text-start">
                            <span class="fw-600 mb-1 text-truncate-2 text-black-50" style="font-size: 15px;">
                                {{ c.price === null ? 'Null' : c.price.good.name }}
                            </span>
                            <span class="text-black-50" style="font-size: 12px;">
                                {{ c.price === null ? 'Null' : c.price.good.category.name }}
                            </span> <br>
                            <span class="text-black-50" style="font-size: 12px;">{{ c.price === null ? 'Null' : c.price.quantity }}x</span>
                            <span class="text-black-50" style="font-size: 12px;">{{ c.price === null ? 'Null' : c.price.price }}</span>
                        </span>
                    </span>
                </span>
            </li>
          </ul>

        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
        </div>
    </div>
    </div>

  </div>
</template>

<script>
  import SideBar from '@/components/SideBar.vue'
  import $http from '../axios.js'
  export default{
      data() {
          return {
            orders: [],
            singleDetail: []
          }
      },
  components: { SideBar },
  created () {
      this.getData();
  },
  methods: {
    getData() {
        $http.getAll('orders')
        .then((res)=>{
            this.orders = res.data.data.data.filter((el)=>el.items.length !== 0)
        });  
    },
    detailOrder(order){
        this.singleDetail = order;
        console.log(this.singleDetail);
    }
  },
}
</script>
