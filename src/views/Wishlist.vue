<template>
  <div>
    <div>
      <section class="py-5">
        <div class="container">
          <div class="d-flex align-items-start">
            <SideBar></SideBar>

            <div class="aiz-user-panel">
              <div class="aiz-titlebar mt-2 mb-4">
                <div class="row align-items-center">
                  <div class="col-md-6">
                    <b class="h4">Wishlist</b>
                  </div>
                </div>
              </div>

              <div class="row gutters-5">
                <div class="col-xxl-3 col-xl-4 col-lg-3 col-md-4 col-sm-6" id="wishlist_1">
                  <div class="card mb-2 shadow-sm">
                    <div class="card-body">
                      <router-link to="" class="d-block mb-3">
                        <img src="../assets/uploads/all/productOne.jpg" class="img-fit h-140px h-md-200px">
                      </router-link>
                      <div class="text-start">
                        <h5 class="fs-14 mb-0 lh-1-5 fw-600 text-truncate-2">
                          <router-link to="" class="text-reset">Bug</router-link>
                        </h5>
                        <div class="rating rating-sm mb-1">
                          <i class="las la-star"></i>
                          <i class="las la-star"></i>
                          <i class="las la-star"></i>
                          <i class="las la-star"></i>
                          <i class="las la-star"></i>
                        </div>
                        <div class=" fs-14">
                          <span class="fw-600 text-primary">$20,000.00</span>
                        </div>
                      </div>

                    </div>
                    <div class="card-footer">
                      <a href="#" class="link link--style-3" data-toggle="tooltip" data-placement="top" title="Remove from wishlist" onclick="removeFromWishlist(1)">
                        <i class="la la-trash la-2x"></i>
                      </a>
                      <button type="button" class="btn btn-sm btn-block btn-primary ml-3" onclick="">
                        <i class="la la-shopping-cart mr-2"></i>Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="aiz-pagination">

              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import SideBar from "@/components/SideBar";
export default {
  name: "Wishlist",
  components: {SideBar}

}
</script>

<style scoped>

</style>