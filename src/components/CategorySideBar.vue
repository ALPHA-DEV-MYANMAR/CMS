<template>
  <div class="card aiz-filter-sidebar collapse-sidebar-wrap sidebar-xl sidebar-right"  >
    <div class="p-2">
      <div class="collapse-sidebar c-scrollbar-light text-start">
        <div class="bg-white shadow-sm rounded">
          <div class="fs-15 fw-600 p-3 border-bottom">
            Categories
          </div>
          <div class="">
            <ul class="list-unstyled">
              <li class="">
                <router-link to="/categories" class="fs-14 fw-600 nav-link text-black-50 hov-text-dark c-pointer"   >
                  <i class="las la-angle-left"></i>
                  All categories
                </router-link>
              </li>
              <li class="" v-for="c in categories" @click="action(c)">
                <span class="fs-14 fw-600 nav-link text-black-50 hov-text-dark c-pointer"  >
                  <i class="las la-angle-left"></i>
                  {{ c.name }}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters , mapMutations } from 'vuex'
import $http from '../axios.js'
export default {
  name: "CategorySideBar",
  data() {
    return {
      categories : []
    }
  },
  computed: {
   ...mapGetters([
       'SHOW_ALL_CAT',
       'SHOW_CAT_BY_ID'
   ])
  },
  created() {
    this.categories = this.SHOW_ALL_CAT;
    $http.getAll('categories').then((res)=>{
      this.categories = res.data.data;
    });
  },
  methods:{
    ...mapMutations(['ADD_GOOD_WITH_ID']),
    action(c){
      this.$router.push('/single-category');
      this.ADD_GOOD_WITH_ID(c);
    }
  }
}
</script>

<style scoped>

</style>