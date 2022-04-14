<template>
  <div class="container text-start">
    <div class="row">
      <div class="col-12 col-md-3  d-none d-md-block">
        <side-bar></side-bar>
      </div>
      <div class="col-12 col-md-9">
          <div class="row">
            <div class="card">
                <div class="card-header">
                    <router-link to='/order-list' class="btn btn-outline-secondary">
                        <i class="fa-solid fa-arrow-left"></i>
                    </router-link>
                    <span class="fw-600 h5 mb-0">Order Detail </span>
                </div>
                <div class="card-body">
                <!-- Order Modal -->
                    <table class='table table-borderless'>
                        <tr>
                            <td>Order ID:</td>
                            <td>{{ order.order_id }}</td>
                        </tr>
                        <tr>
                            <td>Order Date:</td>
                            <td>{{ order.created_at }}</td>
                        </tr>
                        <tr>
                            <td>Order Status</td>
                            <td>{{ order.status.name }}</td>
                        </tr>
                        <tr>
                            <td>Payment Method</td>
                            <td>{{ order.payment_method.name }}</td>
                        </tr>
                        <tr>
                            <td>Delivery Agent</td>
                            <td>{{ order.delivery_agent === null ? '-' : order.delivery_agent.name }} </td>
                        </tr>
                        <tr>
                            <td>Delivery Accept Date</td>
                            <td>{{ order.delivery_accepttime_date }}</td>
                        </tr>
                        <tr>
                            <td>Delivery Accept Time</td>
                            <td>{{ order.delivery_accept_time === null ? '-' : order.delivery_accept_time.name }} </td>
                        </tr>
                    </table>

                    <hr/>

                    <span class='h4 fs-15 fw-600'>Summary</span>

                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    Delivery Price: 
                                </td>
                                <td>
                                    {{ order.summary.delivery_price }}
                                </td>
                            </tr>
                            <tr>
                                <td>Delivery Cost:</td>
                                <td>
                                    {{ order.summary.delivery_cost }}
                                </td>
                            </tr>
                            <tr>
                                <td>Promotion Price:</td>
                                <td>
                                    {{ order.summary.promo }}
                                </td>
                            </tr>
                            <tr>
                                <td>Final Cost:</td>
                                <td>
                                    {{ order.summary.total }}
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <hr/>


                    <label for="formFile" class="form-label fw-600 fs-15 h4">Payment Slip</label>   
                   
                    <div class='row'>
                        <div class="col-12 col-md-4">             
                            <div v-if="imageUrl === '' " class=" hov-bg-soft-dark c-pointer border border-2 border-dark h-200px rounded-3 me-1 uploader-ui d-flex justify-content-center align-items-center px-3" @click="clickFile" id="photoUploadUi">
                               <i class="fas fa-plus fa-2x"></i>
                            </div>
                            
                            <input class="form-control d-none" type="file" id="formFile" @change="uploadFile">
                            <img :src="imageUrl" class="img-fluid border-1 border-white c-pointer rounded " @click="clickFile"  width="200" alt="">
                            <button v-if="imageUrl !== '' " @click="delImage()" class='btn-close btn-circle btn-danger p-2 '></button>
                        </div>
                    </div>    

                    <hr/>

                    <span class='h4 fs-15 fw-600'>Order Items</span>

                    <ul class="h-100 overflow-auto c-scrollbar-light list-group list-group-flush">
                        <li v-for="c in order.items" :key="c.id">
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
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import $http from '../axios.js';
import SideBar from '@/components/SideBar.vue';
export default{
    data() {
        return {
            order : {},
            filename : '',
            file : '',
            imageUrl : '',
            image : '',
            preview : '',
            photo_id : '',
        }
    },
  components: { SideBar },
  created () {
      window.scrollTo(0,0);
      this.getData();
  },
  methods: {    
    clickFile(){
        document.getElementById('formFile').click();
    },  

    uploadFile(event) {
      const files = event.target.files
      this.filename = files[0].name
      this.file = event.target.files[0]
      const fileReader = new FileReader()
      fileReader.addEventListener('load', () => {
        this.imageUrl = fileReader.result
      })
      fileReader.readAsDataURL(files[0])
      this.image = files[0]

      const formData = new FormData
      formData.set('file',this.file);

      $http.create('photos',formData )
      .then((res)=>{
        this.photo_id = res.data.data.id;
        console.log(this.photo_id);

        $http.update('orders',this.$route.params.id,{
  
        'photo_id' : this.photo_id,

        }).then((res)=>{
            console.log(res)
        })

      });

    },

    delImage(){

        Swal.fire({
        title: 'Do you want to Delete',
        showDenyButton: true,
        confirmButtonText: 'Yes',
        denyButtonText: `No`,
        }).then((result) => {
        if (result.isConfirmed) {

        //Delete Image

        this.imageUrl = '';
        //Photo Delete
        $http.delete('photos',this.order.photo_id).then((res)=>{
            this.imageUrl = '';
        })
        //Update Order
        $http.update('orders',this.$route.params.id,{ 'photo_id' : 0 }).then((res)=>{
            this.imageUrl = '';
            console.log('success');
        });

            
        } else if (result.isDenied) {
            return ;
        }

        })


    },

    getData() {
        $http.getAll('orders/'+this.$route.params.id)
        .then((res)=>{
            console.log(res);
            this.order = res.data.data;
            this.imageUrl = res.data.data.photo.name;
        })
    }
  },
}
  
</script>
