<template>
  <div class="container-fluid">
    <div class="card">
      <div class="row">
        <div class="col-12">
          <div class="p-4 text-center mb-4 border-bottom bg-primary text-white position-relative rounded">
          <span class="avatar avatar-md mb-3">
          <img src="../assets/img/avatar-place.png" class="image rounded-circle"  />
        </span>
            <h4 class="h5 fs-16 mb-1 fw-600">{{ GET_USER.name }}</h4>
            <div class="text-truncate opacity-60">{{ GET_USER.email }}</div>
          </div>
        </div>
      </div>
      <div class="row mb-2">
        <div class="col-12">
          <ul class="aiz-side-nav-list px-2 metismenu" data-toggle="aiz-side-menu">
              <li class="aiz-side-nav-item">
                <router-link  to="/profile"  class="aiz-side-nav-link nav-link hov-bg-soft-info hov-text-dark rounded">
                  <i class="las la-home aiz-side-nav-icon"></i>
                  <span class="aiz-side-nav-text">{{ i.myAccount }}</span>
                </router-link>
              </li>
              <li class="aiz-side-nav-item">
                <router-link  to="/wishlist" class="aiz-side-nav-link nav-link hov-bg-soft-info hov-text-dark rounded">
                  <i class="la la-heart-o aiz-side-nav-icon"></i>
                  <span class="aiz-side-nav-text">{{ i.favourite }}</span>
                </router-link>
              </li>
              <li class="aiz-side-nav-item">
                <router-link to="/order-list" class="aiz-side-nav-link nav-link hov-bg-soft-info hov-text-dark rounded" >
                  <i class="fa-solid fa-list aiz-side-nav-icon"></i>
                  <span class="aiz-side-nav-text">Order Listing</span>
                </router-link>
              </li>
              <li class="aiz-side-nav-item">
                <router-link to="/manage-profile" class="aiz-side-nav-link nav-link hov-bg-soft-info hov-text-dark rounded" >
                  <i class="las la-user aiz-side-nav-icon"></i>
                  <span class="aiz-side-nav-text">Manage Profile</span>
                </router-link>
              </li>
            </ul>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="row text-center" >
        <div class="col-12 p-3">
          <div>
            <span class="fw-bolder">{{ i.totalCost }}</span>
            <br>
            <button class="btn btn-primary">{{ summary }}</button>
          </div>
        </div>
      </div>
    </div>
    <div>
      <button class="btn btn-danger w-100" @click="logout">{{ i.logout }}</button>
    </div>
  </div>
</template>

<script>
  import { mapMutations,mapGetters } from "vuex"
  import $http from '../axios.js'
  import Swal from "sweetalert2";
  export default {
    data() {
      return {
        orders : [],
        summary : "",
      }
    },
    computed: {
      ...mapGetters([
          'GET_USER',
		      'i'
      ])
    },
    created() {
      this.getOrders();
    },
    methods:{
      ...mapMutations([
          'ADD_USER',
          'ADD_TOKEN',
          'DEL_ALL_FAVOURITES_DATA',
          'DEL_ALL_CART_DATA',
      ]),
      getOrders(){
        $http.getAll('orders')
        .then((res)=>{
          this.orders = res.data.data.data;
          let x = this.orders.filter((el)=>{
            return el.summary !== null;
          });
          let summary = x.map((el)=>{
            return el.summary.total;
          })
          this.summary = summary.reduce((p,n)=>p+n)
        })
      },
      logout(){
        Swal.fire({
          title: 'Do you want to logout?',
          icon: 'warning',
          showDenyButton: true,
          showCancelButton: true,
          confirmButtonText: 'Yes',
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            Swal.fire('Successfully Logout!', '', 'success')
            this.ADD_USER([]);
            this.ADD_TOKEN([]);
            this.DEL_ALL_FAVOURITES_DATA();
            this.DEL_ALL_CART_DATA();
            localStorage.clear();
            this.$router.push('/');
          }
        });
      }
    }
  }
</script>

<style scoped>
.router-link-exact-active{
  background-color: var(--soft-primary);
}
</style>