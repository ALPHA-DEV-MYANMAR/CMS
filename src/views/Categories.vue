<template>
  <div>
    <section class="mb-4 pt-3">
      <div class="container sm-px-0">
          <div class="row">
            <div class="col-12 col-md-3">
              <div
                class="card aiz-filter-sidebar collapse-sidebar-wrap sidebar-xl sidebar-right"
              >
                <div class="card-body">
                  <div
                    class="overlay overlay-fixed dark c-pointer"
                    data-toggle="class-toggle"
                    data-target=".aiz-filter-sidebar"
                    data-same=".filter-sidebar-thumb"
                  ></div>
                  <div class="collapse-sidebar c-scrollbar-light text-start">
                    <div
                      class="d-flex d-xl-none justify-content-between align-items-center pl-3 border-bottom"
                    >
                      <h3 class="h6 mb-0 fw-600">Filters</h3>
                      <button
                        type="button"
                        class="btn btn-sm p-2 filter-sidebar-thumb"
                        data-toggle="class-toggle"
                        data-target=".aiz-filter-sidebar"
                      >
                        <i class="las la-times la-2x"></i>
                      </button>
                    </div>
                    <div class="bg-white shadow-sm rounded">
                      <div class="fs-15 fw-600 p-3 border-bottom">
                        Categories
                      </div>
                      <div class="">
                        <ul class="list-unstyled">
                          <li class="">
                            <router-link
                              class="text-reset fs-14 fw-600 nav-link"
                              to="/categories"
                            >
                              <i class="las la-angle-left"></i>
                              All categories
                            </router-link>
                          </li>
                          <li class="">
                            <router-link
                              class="text-reset fs-14 fw-600 nav-link"
                              to=""
                            >
                              <i class="las la-angle-left"></i>
                              Bugs
                            </router-link>
                          </li>
                          <li class="">
                            <router-link
                                class="text-reset fs-14 fw-600 nav-link"
                                to=""
                            >
                              <i class="las la-angle-left"></i>
                              Demo
                            </router-link>
                          </li>
                          <li class="">
                            <router-link
                                class="text-reset fs-14 fw-600 nav-link"
                                to=""
                            >
                              <i class="las la-angle-left"></i>
                              Demo
                            </router-link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="bg-white shadow-sm rounded mb-3">
                      <div class="fs-15 fw-600 p-3 border-bottom">
                        Price range
                      </div>
                      <input type="range" class="form-range" id="customRange1">
                      <div class="row justify-content-between">
                        <div class="col-md-6 text-start">1000</div>
                        <div class="col-md-6 text-end">50000</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-12 col-md-9">
              <div class="text-left">
                <div class="row gutters-5 flex-wrap align-items-center">
                  <div class="col-lg col-10">
                    <h1 class="h6 fw-600 text-body">All products</h1>
                    <input type="hidden" name="keyword" value="" />
                  </div>
                  <div class="col-2 col-lg-auto d-xl-none mb-lg-3 text-right">
                    <button
                      type="button"
                      class="btn btn-icon p-0"
                      data-toggle="class-toggle"
                      data-target=".aiz-filter-sidebar"
                    >
                      <i class="la la-filter la-2x"></i>
                    </button>
                  </div>
                  <div class="col-6 col-lg-auto mb-3 w-lg-200px">
                    <label class="mb-0 opacity-50">Brands</label>
                    <div
                      class="dropdown bootstrap-select form-control form-control-sm aiz-"
                    >
                      <select
                        class="form-control form-control-sm aiz-selectpicker"
                        data-live-search="true"
                        name="brand"
                        onchange="filter()"
                        tabindex="-98"
                      >
                        <option value="">All Brands</option>
                        <option value="Demo-brand-12">Demo brand</option>
                        <option value="Demo-brand1">Demo brand1</option></select
                      ><button
                        type="button"
                        class="btn dropdown-toggle btn-light"
                        data-toggle="dropdown"
                        role="combobox"
                        aria-owns="bs-select-1"
                        aria-haspopup="listbox"
                        aria-expanded="false"
                        title="All Brands"
                      >
                        <div class="filter-option">
                          <div class="filter-option-inner">
                            <div class="filter-option-inner-inner">
                              All Brands
                            </div>
                          </div>
                        </div>
                      </button>
                      <div class="dropdown-menu">
                        <div class="bs-searchbox">
                          <input
                            type="search"
                            class="form-control"
                            autocomplete="off"
                            role="combobox"
                            aria-label="Search"
                            aria-controls="bs-select-1"
                            aria-autocomplete="list"
                          />
                        </div>
                        <div
                          class="inner show"
                          role="listbox"
                          id="bs-select-1"
                          tabindex="-1"
                        >
                          <ul
                            class="dropdown-menu inner show"
                            role="presentation"
                          ></ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-6 col-lg-auto mb-3 w-lg-200px">
                    <label class="mb-0 opacity-50">Sort by</label>
                    <div
                      class="dropdown bootstrap-select form-control form-control-sm aiz-"
                    >
                      <select
                        class="form-control form-control-sm aiz-selectpicker"
                        name="sort_by"
                        onchange="filter()"
                        tabindex="-98"
                      >
                        <option value="newest">Newest</option>
                        <option value="oldest">Oldest</option>
                        <option value="price-asc">Price low to high</option>
                        <option value="price-desc">
                          Price high to low
                        </option></select
                      ><button
                        type="button"
                        class="btn dropdown-toggle btn-light"
                        data-toggle="dropdown"
                        role="combobox"
                        aria-owns="bs-select-2"
                        aria-haspopup="listbox"
                        aria-expanded="false"
                        title="Newest"
                      >
                        <div class="filter-option">
                          <div class="filter-option-inner">
                            <div class="filter-option-inner-inner">Newest</div>
                          </div>
                        </div>
                      </button>
                      <div class="dropdown-menu">
                        <div
                          class="inner show"
                          role="listbox"
                          id="bs-select-2"
                          tabindex="-1"
                        >
                          <ul
                            class="dropdown-menu inner show"
                            role="presentation"
                          ></ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row gutters-5 row-cols-xxl-4 row-cols-xl-3 row-cols-lg-4 row-cols-md-3 row-cols-2" >

<!--                Product-->
                <div class="col-6 col-md-3">
                  <div class="aiz-card-box border border-light rounded hov-shadow-md mt-1 mb-2 has-transition bg-white"  >
                    <div class="position-relative">
                      <router-link to="" class="d-block">
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
                        >
                          <i class="la la-heart-o"></i>
                        </router-link>
                        <router-link
                          to=""
                          onclick=""
                          data-toggle="tooltip"
                          data-title="Add to compare"
                          data-placement="left"
                        >
                          <i class="las la-sync"></i>
                        </router-link>
                        <router-link
                          to=""
                          onclick=""
                          data-toggle="tooltip"
                          data-title="Add to cart"
                          data-placement="left"
                        >
                          <i class="las la-shopping-cart"></i>
                        </router-link>
                      </div>
                    </div>
                    <div class="p-md-3 p-2 text-left">
                      <div class="fs-15">
                        <span class="fw-700 text-primary">$5,000.00</span>
                      </div>
                      <div class="rating rating-sm mt-1">
                        <i class="las la-star"></i><i class="las la-star"></i
                        ><i class="las la-star"></i><i class="las la-star"></i
                        ><i class="las la-star"></i>
                      </div>
                      <h3
                        class="fw-600 fs-13 text-truncate-2 lh-1-4 mb-0 h-35px"
                      >
                        <router-link
                          to="/detail"
                          class="d-block text-reset"
                          >Mens Casual Premium Slim Fit T-Shirts</router-link
                        >
                      </h3>
                    </div>
                  </div>
                </div>

<!--                Product-->
                <div class="col-6 col-md-3">
                  <div class="aiz-card-box border border-light rounded hov-shadow-md mt-1 mb-2 has-transition bg-white"  >
                    <div class="position-relative">
                      <router-link to="" class="d-block">
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
                        >
                          <i class="la la-heart-o"></i>
                        </router-link>
                        <router-link
                            to=""
                            onclick=""
                            data-toggle="tooltip"
                            data-title="Add to compare"
                            data-placement="left"
                        >
                          <i class="las la-sync"></i>
                        </router-link>
                        <router-link
                            to=""
                            onclick=""
                            data-toggle="tooltip"
                            data-title="Add to cart"
                            data-placement="left"
                        >
                          <i class="las la-shopping-cart"></i>
                        </router-link>
                      </div>
                    </div>
                    <div class="p-md-3 p-2 text-left">
                      <div class="fs-15">
                        <span class="fw-700 text-primary">$5,000.00</span>
                      </div>
                      <div class="rating rating-sm mt-1">
                        <i class="las la-star"></i><i class="las la-star"></i
                      ><i class="las la-star"></i><i class="las la-star"></i
                      ><i class="las la-star"></i>
                      </div>
                      <h3
                          class="fw-600 fs-13 text-truncate-2 lh-1-4 mb-0 h-35px"
                      >
                        <router-link
                            to="/detail"
                            class="d-block text-reset"
                        >Mens Casual Premium Slim Fit T-Shirts</router-link
                        >
                      </h3>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Categories",
};
</script>

<style scoped></style>
