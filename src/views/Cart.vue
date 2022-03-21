<template>
  <div>
    <!--    Top-->
    <section class="pt-5 mb-4 ">
      <div class="container">
        <div class="row">
          <div class="col-xl-8 mx-auto">
            <div class="row aiz-steps arrow-divider">
              <div class="col active">
                <div class="text-center text-primary">
                  <i class="la-3x mb-2 las la-shopping-cart"></i>
                  <h3 class="fs-14 fw-600 d-none d-lg-block">1. My Cart</h3>
                </div>
              </div>
              <div class="col">
                <div class="text-center">
                  <i class="la-3x mb-2 opacity-50 las la-map"></i>
                  <h3 class="fs-14 fw-600 d-none d-lg-block opacity-50">
                    2. Shipping info
                  </h3>
                </div>
              </div>
              <div class="col">
                <div class="text-center">
                  <i class="la-3x mb-2 opacity-50 las la-truck"></i>
                  <h3 class="fs-14 fw-600 d-none d-lg-block opacity-50">
                    3. Delivery info
                  </h3>
                </div>
              </div>
              <div class="col">
                <div class="text-center">
                  <i class="la-3x mb-2 opacity-50 las la-credit-card"></i>
                  <h3 class="fs-14 fw-600 d-none d-lg-block opacity-50">
                    4. Payment
                  </h3>
                </div>
              </div>
              <div class="col">
                <div class="text-center">
                  <i class="la-3x mb-2 opacity-50 las la-check-circle"></i>
                  <h3 class="fs-14 fw-600 d-none d-lg-block opacity-50">
                    5. Confirmation
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--    Summery-->
    <section class="mb-4" id="cart-summary">
      <div class="container">
        <div class="row">
          <div class="col-xxl-8 col-xl-10 mx-auto ">
            <div class="shadow-sm bg-white p-3 p-lg-4 rounded text-start">
              <div class="mb-4">
                <div
                  class="row gutters-5 d-none d-lg-flex border-bottom mb-3 pb-3"
                >
                  <div class="col-md-5 fw-600">Product</div>
                  <div class="col fw-600">Price</div>
                  <div class="col fw-600">Tax</div>
                  <div class="col fw-600">Quantity</div>
                  <div class="col fw-600">Total</div>
                  <div class="col-auto fw-600">Remove</div>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item px-0 px-lg-3">
                    <div class="row gutters-5">
                      <div class="col-lg-5 d-flex">
                        <span class="mr-2 ml-0">
                          <img
                            src="../assets/uploads/all/productOne.jpg"
                            class="img-fit size-60px rounded"
                            alt="Mens Casual Premium Slim Fit T-Shirts"
                          />
                        </span>
                        <span class="fs-14 opacity-60"
                          >Mens Casual Premium Slim Fit T-Shirts - Aqua</span
                        >
                      </div>

                      <div class="col-lg col-4 order-1 order-lg-0 my-3 my-lg-0">
                        <span class="opacity-60 fs-12 d-block d-lg-none"
                          >Price</span
                        >
                        <span class="fw-600 fs-16">$5,000.00</span>
                      </div>
                      <div class="col-lg col-4 order-2 order-lg-0 my-3 my-lg-0">
                        <span class="opacity-60 fs-12 d-block d-lg-none"
                          >Tax</span
                        >
                        <span class="fw-600 fs-16">$0.00</span>
                      </div>

                      <div class="col-lg col-6 order-4 order-lg-0">
                        <div
                          class="row no-gutters align-items-center aiz-plus-minus mr-2 ml-0"
                        >
                          <button
                            class="btn col-auto btn-icon btn-sm btn-circle btn-light"
                            type="button"
                            data-type="minus"
                            data-field="quantity[9]"
                            disabled="disabled"
                          >
                            <i class="las la-minus"></i>
                          </button>
                          <input
                            type="number"
                            name="quantity[9]"
                            class="col border-0 text-center flex-grow-1 fs-16 input-number"
                            placeholder="1"
                            value="1"
                            min="1"
                            max="10"
                            onchange="updateQuantity(9, this)"
                          />
                          <button
                            class="btn col-auto btn-icon btn-sm btn-circle btn-light"
                            type="button"
                            data-type="plus"
                            data-field="quantity[9]"
                          >
                            <i class="las la-plus"></i>
                          </button>
                        </div>
                      </div>
                      <div class="col-lg col-4 order-3 order-lg-0 my-3 my-lg-0">
                        <span class="opacity-60 fs-12 d-block d-lg-none"
                          >Total</span
                        >
                        <span class="fw-600 fs-16 text-primary">$5,000.00</span>
                      </div>
                      <div
                        class="col-lg-auto col-6 order-5 order-lg-0 text-right"
                      >
                        <a
                          href="javascript:void(0)"
                          onclick="removeFromCartView(event, 9)"
                          class="btn btn-icon btn-sm btn-soft-primary btn-circle"
                        >
                          <i class="las la-trash"></i>
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              <div
                class="px-3 py-2 mb-4 border-top d-flex justify-content-between"
              >
                <span class="opacity-60 fs-15">Subtotal</span>
                <span class="fw-600 fs-17">$5,000.00</span>
              </div>
              <div class="row align-items-center">
                <div
                  class="col-md-6 text-center text-md-left order-1 order-md-0"
                >
                  <a href="http://localhost/action/CMS" class="btn btn-link">
                    <i class="las la-arrow-left"></i>
                    Return to shop
                  </a>
                </div>
                <div class="col-md-6 text-center text-md-right">
                  <a
                    href="http://localhost/action/CMS/checkout"
                    class="btn btn-primary fw-600"
                  >
                    Continue to Shipping
                  </a>
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
  name: "Cart",
};
</script>

<style scoped></style>
