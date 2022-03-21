<template>
  <div>

    <section class="mb-4 pt-3">
      <div class="card container">
        <div class="bg-white shadow-sm rounded p-3">
          <div class="row">
<!--            Item -->
            <div class="col-xl-5 col-lg-6 mb-4">
              <div class="sticky-top z-3 row gutters-10">
                <div class="col order-1 order-md-2">
                  <div
                    class="aiz-carousel product-gallery slick-initialized slick-slider"
                    data-nav-for=".product-gallery-thumb"
                    data-fade="true"
                    data-auto-height="true"
                  >
                    <div class="slick-list draggable" style="height: 508.828px">
                      <div class="slick-track" style="opacity: 1; width: 352px">
                        <div
                          class="slick-slide slick-current slick-active"
                          data-slick-index="0"
                          aria-hidden="false"
                          style="
                            width: 352px;
                            position: relative;
                            left: 0px;
                            top: 0px;
                            z-index: 999;
                            opacity: 1;
                          "
                        >
                          <div>
                            <div
                              class="carousel-box img-zoom rounded"
                              style="width: 100%; display: inline-block"
                            >
                              <img
                                class="img-fluid ls-is-cached lazyloaded"
                                src="../assets/uploads/all/productOne.jpg"
                              />
                              <img
                                role="presentation"
                                alt=""
                                src="../assets/uploads/all/productOne.jpg"
                                class="zoomImg"
                                style="
                                  position: absolute;
                                  top: -227.301px;
                                  left: -1206.38px;
                                  opacity: 0;
                                  width: 1573.5px;
                                  height: 2250px;
                                  border: none;
                                  max-width: none;
                                  max-height: none;
                                "
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="col-12 col-md-auto w-md-80px order-2 order-md-1 mt-3 mt-md-0"
                >
                </div>
              </div>
            </div>
<!--            Item-->

<!--            Item Detail-->
            <div class="col-xl-7 col-lg-6">
              <div class="text-start">
                <h1 class="mb-2 fs-20 fw-600">Bug</h1>

                <div class="row align-items-center">
                  <div class="col-12">
                    <span class="rating">
                      <i class="las la-star"></i><i class="las la-star"></i
                      ><i class="las la-star"></i><i class="las la-star"></i
                      ><i class="las la-star"></i>
                    </span>
                    <span class="ml-1 opacity-50">(0 reviews)</span>
                  </div>
                </div>

                <hr />

                <div class="row align-items-center">
                  <div class="col-auto">
                    <small class="mr-2 opacity-50">Sold by: </small><br />
                    Inhouse product
                  </div>
                  <div class="col-auto">
                    <button
                      class="btn btn-sm btn-primary"
                      onclick=""
                    >
                      Message Seller
                    </button>
                  </div>

                </div>

                <hr />

                <div class="row no-gutters mt-3">
                  <div class="col-sm-2">
                    <div class="opacity-50 my-2">Price:</div>
                  </div>
                  <div class="col-sm-10">
                    <div class="">
                      <strong class="h2 fw-600 text-primary mb-0">
                        $20,000.00
                      </strong>
                      <span class="opacity-70">/1pc</span>
                    </div>
                  </div>
                </div>

                <hr />

                <form id="option-choice-form">
                  <!-- Quantity + Add to cart -->
                  <div class="row no-gutters">
                    <div class="col-sm-2">
                      <div class="opacity-50 my-2">Quantity:</div>
                    </div>
                    <div class="col-sm-10">
                      <div class="product-quantity d-flex align-items-center">
                        <div
                          class="row no-gutters align-items-center aiz-plus-minus mr-3"
                          style="width: 130px"
                        >
                          <button
                            class="btn col-auto btn-icon btn-sm btn-circle btn-light"
                            type="button"
                            data-type="minus"
                            data-field="quantity"
                            disabled="disabled"
                          >
                            <i class="las la-minus"></i>
                          </button>
                          <input
                            type="number"
                            name="quantity"
                            class="col border-0 text-center flex-grow-1 fs-16 input-number"
                            placeholder="1"
                            value="10"
                            min="10"
                            max="20"
                          />
                          <button
                            class="btn col-auto btn-icon btn-sm btn-circle btn-light"
                            type="button"
                            data-type="plus"
                            data-field="quantity"
                            disabled="disabled"
                          >
                            <i class="las la-plus"></i>
                          </button>
                        </div>
                        <div class="avialable-amount opacity-60">
                          (<span id="available-quantity">20</span> available)
                        </div>
                      </div>
                    </div>
                  </div>

                  <hr />

                  <div class="row no-gutters pb-3" id="chosen_price_div">
                    <div class="col-sm-2">
                      <div class="opacity-50 my-2">Total Price:</div>
                    </div>
                    <div class="col-sm-10">
                      <div class="product-price">
                        <strong id="chosen_price" class="h4 fw-600 text-primary"
                          >$200,000.00</strong
                        >
                      </div>
                    </div>
                  </div>
                </form>

                <div class="mt-3">
                  <button
                    type="button"
                    class="btn btn-outline-primary mr-2 add-to-cart fw-600"
                    onclick=""
                  >
                    <i class="las la-shopping-bag"></i>
                    <span class="d-none d-md-inline-block"> Add to cart</span>
                  </button>
                  <button
                    type="button"
                    class="btn btn-primary buy-now fw-600"
                    onclick=""
                  >
                    <i class="la la-shopping-cart"></i> Buy Now
                  </button>
                  <button
                    type="button"
                    class="btn btn-secondary out-of-stock fw-600 d-none"
                    disabled=""
                  >
                    <i class="la la-cart-arrow-down"></i> Out of Stock
                  </button>
                </div>

                <div class="d-table width-100 mt-3">
                  <div class="d-table-cell">
                    <!-- Add to wishlist button -->
                    <button
                      type="button"
                      class="btn pl-0 btn-link nav-link text-danger fw-600"
                      onclick=""
                    >
                      Add to wishlist
                    </button>
                    <!-- Add to compare button -->
                  </div>
                </div>

                <div class="row no-gutters mt-4">
                  <div class="col-sm-2">
                    <div class="opacity-50 my-2">Share:</div>
                  </div>
                  <div class="col-sm-10">
                    <div class="aiz-share jssocials">
                      <div class="jssocials-shares">
                        <div class="jssocials-share jssocials-share-email">
                          <a
                            target="_self"
                            href="mailto:?subject=This%20is%20very%20cold%20bug.&amp;body=http%3A%2F%2Flocalhost%2Faction%2FCMS%2Fproduct%2Fbug"
                            class="jssocials-share-link"
                            ><i class="lar la-envelope jssocials-share-logo"></i
                          ></a>
                        </div>
                        <div class="jssocials-share jssocials-share-twitter">
                          <a
                            target="_blank"
                            href="https://twitter.com/share?url=http%3A%2F%2Flocalhost%2Faction%2FCMS%2Fproduct%2Fbug&amp;text=This%20is%20very%20cold%20bug."
                            class="jssocials-share-link"
                            ><i class="lab la-twitter jssocials-share-logo"></i
                          ></a>
                        </div>
                        <div class="jssocials-share jssocials-share-facebook">
                          <a
                            target="_blank"
                            href="https://facebook.com/sharer/sharer.php?u=http%3A%2F%2Flocalhost%2Faction%2FCMS%2Fproduct%2Fbug"
                            class="jssocials-share-link"
                            ><i
                              class="lab la-facebook-f jssocials-share-logo"
                            ></i
                          ></a>
                        </div>
                        <div class="jssocials-share jssocials-share-linkedin">
                          <a
                            target="_blank"
                            href="https://www.linkedin.com/shareArticle?mini=true&amp;url=http%3A%2F%2Flocalhost%2Faction%2FCMS%2Fproduct%2Fbug"
                            class="jssocials-share-link"
                            ><i
                              class="lab la-linkedin-in jssocials-share-logo"
                            ></i
                          ></a>
                        </div>
                        <div class="jssocials-share jssocials-share-whatsapp">
                          <a
                            target="_self"
                            href="whatsapp://send?text=http%3A%2F%2Flocalhost%2Faction%2FCMS%2Fproduct%2Fbug This%20is%20very%20cold%20bug."
                            class="jssocials-share-link"
                            ><i class="lab la-whatsapp jssocials-share-logo"></i
                          ></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
<!--            Item Detail-->

<!--            Top Selling-->
          </div>
        </div>
      </div>
    </section>

    <section class="mb-4">
      <div class="container">
        <div class="row gutters-10">

          <div class="col-xl-3 order-1 order-xl-0">
            <div class="card bg-white rounded shadow-sm mb-3">
              <div class="p-3 border-bottom fs-16 fw-600 text-start">
                Top Selling Products
              </div>
              <div class="p-3">
                <ul class="list-group list-group-flush">
<!--                  Item-->
                  <li class="py-3 px-0 list-group-item border-light">
                    <div class="row gutters-10 align-items-center">
                      <div class="col-5">
                        <router-link to="" class="d-block text-reset">
                          <img class="img-fit h-xxl-110px h-xl-80px h-120px ls-is-cached lazyloaded" src="../assets/uploads/all/productTwo.jpg" alt="Mens Casual Premium Slim Fit T-Shirts" onerror="this.onerror=null;this.src='http://localhost/action/CMS/public/assets/img/placeholder.jpg';">
                        </router-link>
                      </div>
                      <div class="col-7 text-start">
                        <h4 class="fs-13 text-truncate-2">
                          <router-link to="/detail" class="d-block text-reset">Mens Casual Premium Slim Fit T-Shirts</router-link>
                        </h4>
                        <div class="rating rating-sm mt-1">
                          <i class="las la-star"></i><i class="las la-star"></i><i class="las la-star"></i><i class="las la-star"></i><i class="las la-star"></i>
                        </div>
                        <div class="mt-2">
                          <span class="fs-17 fw-600 text-primary">$5,000.00</span>
                        </div>
                      </div>
                    </div>
                  </li>
<!--                  Item-->
                  <li class="py-3 px-0 list-group-item border-light">
                    <div class="row gutters-10 align-items-center">
                      <div class="col-5">
                        <router-link to="/detail" class="d-block text-reset">
                          <img class="img-fit h-xxl-110px h-xl-80px h-120px ls-is-cached lazyloaded" src="../assets/uploads/all/productOne.jpg" alt="Bug">
                        </router-link>
                      </div>
                      <div class="col-7 text-start">
                        <h4 class="fs-13 text-truncate-2">
                          <router-link to="/detail" class="d-block text-reset">Bug</router-link>
                        </h4>
                        <div class="rating rating-sm mt-1">
                          <i class="las la-star"></i><i class="las la-star"></i><i class="las la-star"></i><i class="las la-star"></i><i class="las la-star"></i>
                        </div>
                        <div class="mt-2">
                          <span class="fs-17 fw-600 text-primary">$20,000.00</span>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="col-xl-9 order-0 order-xl-1">
            <div class="card bg-white mb-3 shadow-sm rounded">
              <div class="nav border-bottom aiz-nav-tabs">
                <span class="p-3">Description</span>
              </div>
              <div class="tab-content pt-0">
                <div class="tab-pane fade active show" id="tab_default_1">
                  <div class="p-4">
                    <div class="mw-100 overflow-hidden text-start aiz-editor-data">
                      <p>This is very cold bug.</p>
                    </div>
                  </div>
                </div>

                <div class="tab-pane fade" id="tab_default_2">
                  <div class="p-4">
                    <div class="embed-responsive embed-responsive-16by9">
                    </div>
                  </div>
                </div>
                <div class="tab-pane fade" id="tab_default_3">
                  <div class="p-4 text-center ">
                    <a href="" class="btn btn-primary">Download</a>
                  </div>
                </div>
                <div class="tab-pane fade" id="tab_default_4">
                  <div class="p-4">
                    <ul class="list-group list-group-flush">
                    </ul>

                    <div class="text-center fs-18 opacity-70">
                      There have been no reviews for this product yet.
                    </div>

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
  name: "Detail",
};
</script>

<style scoped></style>
