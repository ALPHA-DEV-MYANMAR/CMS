<template>
  <div class="home">
    <div class="home-banner-area mb-4 pt-3">
      <div class="container">
        <div class="row gutters-10 position-relative">
          <!--            Category-->
          <div class="col-lg-3 position-static d-none d-lg-block">
            <div class="card">
              <div class="cart-body">
                <div
                  class="p-3 bg-soft-primary d-none d-lg-block rounded-top all-category position-relative text-start"
                >
                  <span class="fw-600 fs-16 mr-3">Categories</span>
                  <router-link to="/categories" class="text-reset">
                    <span
                      class="d-none d-lg-inline-block"
                      style="font-size: 15px"
                      >See All</span
                    >
                  </router-link>
                </div>
                <ul
                  class="list-unstyled categories no-scrollbar py-2 mb-0 text-start"
                >
                  <li class="category-nav-element" data-id="1">
                    <router-link to="" class="nav-link text-black-50">
                      <span class="cat-name" style="font-size: 15px">Bugs</span>
                    </router-link>
                  </li>
                  <li class="category-nav-element" data-id="1">
                    <router-link to="" class="nav-link text-black-50">
                      <span class="cat-name" style="font-size: 15px">Demo</span>
                    </router-link>
                  </li>
                  <li class="category-nav-element" data-id="1">
                    <router-link to="" class="nav-link text-black-50">
                      <span class="cat-name" style="font-size: 15px">Demo</span>
                    </router-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!--            Category-->

          <!--          Category list-->
          <div class="col-lg-9">
            <div
              class="aiz-carousel dots-inside-bottom mobile-img-auto-height"
              data-arrows="true"
              data-dots="true"
              data-autoplay="true"
            ></div>
            <ul class="list-unstyled mb-0 row gutters-5">
              <li class="card col-4 col-md m-3">
                <router-link
                  to=""
                  class="d-block rounded bg-white p-2 text-reset shadow-sm nav-link"
                >
                  <img
                    src="../assets/img/placeholder.jpg"
                    alt="Bugs"
                    class="lazyload img-fit"
                    height="78"
                  />
                  <div
                    class="text-truncate fs-12 fw-600 mt-2 opacity-70 text-start text-black-50"
                  >
                    Bugs
                  </div>
                </router-link>
              </li>

              <li class="card col-4 col-md m-3">
                <router-link
                  to=""
                  class="d-block rounded bg-white p-2 text-reset shadow-sm nav-link"
                >
                  <img
                    src="../assets/img/placeholder.jpg"
                    alt="Bugs"
                    class="lazyload img-fit"
                    height="78"
                  />
                  <div
                    class="text-truncate fs-12 fw-600 mt-2 opacity-70 text-start text-black-50"
                  >
                    Demo
                  </div>
                </router-link>
              </li>

              <li class="card col-4 col-md m-3">
                <router-link
                  to=""
                  class="d-block rounded bg-white p-2 text-reset shadow-sm nav-link"
                >
                  <img
                    src="../assets/img/placeholder.jpg"
                    alt="Bugs"
                    class="lazyload img-fit"
                    height="78"
                  />
                  <div
                    class="text-truncate fs-12 fw-600 mt-2 opacity-70 text-start text-black-50"
                  >
                    Demo
                  </div>
                </router-link>
              </li>
            </ul>
          </div>
          <!--          Category list-->

          <!--          Best-->
          <section class="mb-4">
            <div class="card container">
              <div class="px-2 py-4 px-md-4 py-md-3 bg-white shadow-sm rounded">
                <div class="d-flex mb-3 align-items-baseline border-bottom justify-content-between">
                  <h3 class="h5 fw-700 mb-0">
                    <span
                      class="border-bottom border-primary border-width-2 pb-3 d-inline-block"
                      >Best Selling</span
                    >
                  </h3>
                  <div>
                    <router-link
                        to=""
                        class="ml-auto mr-0 btn btn-primary btn-sm shadow-md"
                    >Top 20</router-link >
                  </div>
                </div>
                <div
                  class="aiz-carousel gutters-10 half-outside-arrow slick-initialized slick-slider"
                  data-items="6"
                  data-xl-items="5"
                  data-lg-items="4"
                  data-md-items="3"
                  data-sm-items="2"
                  data-xs-items="2"
                  data-arrows="true"
                  data-infinite="true"
                >
                  <div class="slick-list draggable">
                    <div class="slick-track"  >

                      <div class="row">
                        <!--Product-->
                        <div class="col-12 col-md-3">
                          <div
                              class="slick-slide slick-current slick-active"
                              data-slick-index="0"
                              aria-hidden="false"
                              style="width: 217px"
                          >
                            <div>
                              <div
                                  class="carousel-box"
                                  style="width: 100%; display: inline-block"
                              >
                                <div
                                    class="aiz-card-box border border-light rounded hov-shadow-md mt-1 mb-2 has-transition bg-white"
                                >
                                  <div class="position-relative">
                                    <router-link
                                        to=""
                                        class="d-block"
                                        tabindex="0"
                                    >
                                      <img
                                          class="img-fit mx-auto h-140px h-md-210px lazyloaded"
                                          src="../assets/uploads/all/productOne.jpg"
                                          alt="Mens Casual Premium Slim Fit T-Shirts"
                                      />
                                    </router-link>
                                    <div class="absolute-top-right aiz-p-hov-icon">
                                      <router-link
                                          to=""
                                          onclick=""
                                          data-toggle="tooltip"
                                          data-title="Add to wishlist"
                                          data-placement="left"
                                          tabindex="0"
                                      >
                                        <i class="la la-heart-o"></i>
                                      </router-link>
                                      <router-link
                                          to=""
                                          onclick=""
                                          data-toggle="tooltip"
                                          data-title="Add to compare"
                                          data-placement="left"
                                          tabindex="0"
                                      >
                                        <i class="las la-sync"></i>
                                      </router-link>
                                      <router-link
                                          to=""
                                          onclick=""
                                          data-toggle="tooltip"
                                          data-title="Add to cart"
                                          data-placement="left"
                                          tabindex="0"
                                          data-original-title=""
                                          title=""
                                      >
                                        <i class="las la-shopping-cart"></i>
                                      </router-link>
                                    </div>
                                  </div>
                                  <div class="p-md-3 p-2 text-left">
                                    <div class="fs-15">
                                  <span class="fw-700 text-primary"
                                  >$5,000.00</span
                                  >
                                    </div>
                                    <div class="rating rating-sm mt-1">
                                      <i class="las la-star"></i
                                      ><i class="las la-star"></i
                                    ><i class="las la-star"></i
                                    ><i class="las la-star"></i
                                    ><i class="las la-star"></i>
                                    </div>
                                    <h3
                                        class="fw-600 fs-13 text-truncate-2 lh-1-4 mb-0 h-35px"
                                    >
                                      <router-link
                                          to=""
                                          class="d-block text-reset"
                                          tabindex="0"
                                      >Mens Casual Premium Slim Fit T-Shirts</router-link
                                      >
                                    </h3>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <!--Product-->
                        <!--Product-->
                        <div class="col-12 col-md-3">
                          <div
                              class="slick-slide slick-current slick-active"
                              data-slick-index="0"
                              aria-hidden="false"
                              style="width: 217px"
                          >
                            <div>
                              <div
                                  class="carousel-box"
                                  style="width: 100%; display: inline-block"
                              >
                                <div
                                    class="aiz-card-box border border-light rounded hov-shadow-md mt-1 mb-2 has-transition bg-white"
                                >
                                  <div class="position-relative">
                                    <router-link
                                        to=""
                                        class="d-block"
                                        tabindex="0"
                                    >
                                      <img
                                          class="img-fit mx-auto h-140px h-md-210px lazyloaded"
                                          src="../assets/uploads/all/productTwo.jpg"
                                          alt="Mens Casual Premium Slim Fit T-Shirts"
                                      />
                                    </router-link>
                                    <div class="absolute-top-right aiz-p-hov-icon">
                                      <router-link
                                          to=""
                                          onclick=""
                                          data-toggle="tooltip"
                                          data-title="Add to wishlist"
                                          data-placement="left"
                                          tabindex="0"
                                      >
                                        <i class="la la-heart-o"></i>
                                      </router-link>
                                      <router-link
                                          to=""
                                          onclick=""
                                          data-toggle="tooltip"
                                          data-title="Add to compare"
                                          data-placement="left"
                                          tabindex="0"
                                      >
                                        <i class="las la-sync"></i>
                                      </router-link>
                                      <router-link
                                          to=""
                                          onclick=""
                                          data-toggle="tooltip"
                                          data-title="Add to cart"
                                          data-placement="left"
                                          tabindex="0"
                                          data-original-title=""
                                          title=""
                                      >
                                        <i class="las la-shopping-cart"></i>
                                      </router-link>
                                    </div>
                                  </div>
                                  <div class="p-md-3 p-2 text-left">
                                    <div class="fs-15">
                                  <span class="fw-700 text-primary"
                                  >$5,000.00</span
                                  >
                                    </div>
                                    <div class="rating rating-sm mt-1">
                                      <i class="las la-star"></i
                                      ><i class="las la-star"></i
                                    ><i class="las la-star"></i
                                    ><i class="las la-star"></i
                                    ><i class="las la-star"></i>
                                    </div>
                                    <h3
                                        class="fw-600 fs-13 text-truncate-2 lh-1-4 mb-0 h-35px"
                                    >
                                      <router-link
                                          to=""
                                          class="d-block text-reset"
                                          tabindex="0"
                                      >Mens Casual Premium Slim Fit T-Shirts</router-link
                                      >
                                    </h3>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <!--Product-->
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <!--         Best-->

          <!--          Category & Brand-->
          <section class="mb-4">
            <div class="card container">
              <div class="row gutters-10">

                <div class="col-lg-6">
                  <div class="d-flex mb-3 align-items-baseline border-bottom justify-content-between">
                    <h3 class="h5 fw-700 mb-0 p-3">
                      <span class="border-bottom border-primary border-width-2 pb-3 d-inline-block">Top 10 Categories</span>
                    </h3>
                    <div>
                      <router-link to="" class="ml-auto mr-0 btn btn-primary btn-sm shadow-md">View All Categories</router-link>
                    </div>
                  </div>
                  <div class="row gutters-5">
                  </div>
                </div>

                <div class="col-lg-6">
                  <div class="d-flex mb-3 align-items-baseline border-bottom justify-content-between" >
                    <h3 class="h5 fw-700 mb-0 p-3">
                      <span class="border-bottom border-primary border-width-2 pb-3 d-inline-block">Top 10 Brands</span>
                    </h3>
                    <div>
                      <router-link to="" class="ml-auto mr-0 btn btn-primary btn-sm shadow-md">View All Brands</router-link>
                    </div>
                  </div>
                  <div class="row gutters-5">
                  </div>
                </div>

              </div>
            </div>
          </section>
          <!--          Category & Brand-->

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>
