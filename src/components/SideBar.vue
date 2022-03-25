<template>
  <div class="aiz-user-sidenav-wrap position-relative z-1 shadow-sm">
    <div class="aiz-user-sidenav rounded overflow-auto c-scrollbar-light pb-5 pb-xl-0">
      <div class="p-4 text-xl-center mb-4 border-bottom bg-primary text-white position-relative">
          <span class="avatar avatar-md mb-3">
            <img src="../assets/img/avatar-place.png" class="image rounded-circle"  />
          </span>
        <h4 class="h5 fs-16 mb-1 fw-600">{{ GET_USER.name }}</h4>
        <div class="text-truncate opacity-60">{{ GET_USER.email }}</div>
      </div>
      <div class="sidemnenu mb-3">
        <ul class="aiz-side-nav-list px-2 metismenu" data-toggle="aiz-side-menu">

          <li class="aiz-side-nav-item ">
            <router-link  to="/profile"  class="aiz-side-nav-link nav-link">
              <i class="las la-home aiz-side-nav-icon"></i>
              <span class="aiz-side-nav-text">Dashboard</span>
            </router-link>
          </li>

          <li class="aiz-side-nav-item">
            <router-link  to="/wishlist" class="aiz-side-nav-link nav-link">
              <i class="la la-heart-o aiz-side-nav-icon"></i>
              <span class="aiz-side-nav-text">Wishlist</span>
            </router-link>
          </li>

          <li class="aiz-side-nav-item">
            <router-link to="/manage-profile" class="aiz-side-nav-link nav-link" >
              <i class="las la-user aiz-side-nav-icon"></i>
              <span class="aiz-side-nav-text">Manage Profile</span>
            </router-link>
          </li>

        </ul>
      </div>
      <hr />
      <h4 class="h5 fw-600 text-center">Sold Amount</h4>
      <div class="widget-balance pb-3 pt-1">
        <div class="text-center">
          <div class="heading-4 strong-700 mb-4">
            <small class="d-block fs-12 mb-2"
            >Your sold amount (current month)</small
            >
            <span class="btn btn-primary fw-600 fs-18">$0.00</span>
          </div>
          <table class="table table-borderless">
            <tbody>
            <tr>
              <td class="p-1" width="60%">Total Sold:</td>
              <td class="p-1 fw-600" width="40%">$0.00</td>
            </tr>
            <tr>
              <td class="p-1" width="60%">Last Month Sold:</td>
              <td class="p-1 fw-600" width="40%">$0.00</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <button class="btn btn-danger w-100" @click="logout">Logout</button>
  </div>
</template>

<script>
  import { mapMutations,mapGetters } from "vuex"
  import $http from '../axios.js'
  export default {
    computed: {
      ...mapGetters([
          'GET_USER'
      ])
    },
    methods:{
      ...mapMutations([
          'ADD_USER',
          'ADD_TOKEN',
          'DEL_ALL_FAVOURITES_DATA',
          'DEL_ALL_CART_DATA'
      ]),
      logout(){
        this.ADD_USER([]);
        this.ADD_TOKEN([]);
        this.DEL_ALL_FAVOURITES_DATA();
        this.DEL_ALL_CART_DATA();
        localStorage.clear();
        this.$router.push('/');
      }
    }
  }
</script>

<style scoped>
.router-link-exact-active{
  background-color: var(--soft-primary);
}
</style>