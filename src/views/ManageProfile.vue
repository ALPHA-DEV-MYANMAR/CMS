<template>
  <div>
    <section class="py-5">
      <div class="container">
        <div class="d-flex align-items-start">
          <side-bar></side-bar>

          <div class="aiz-user-panel text-start">
            <div class="aiz-titlebar mt-2 mb-4">
              <div class="row align-items-center">
                <div class="col-md-6">
                  <h1 class="h3">Manage Profile</h1>
                </div>
              </div>
            </div>
            <form>

              <!-- Basic Info-->
              <div class="card">
                <div class="card-header">
                  <h5 class="mb-0 h6">Basic Info</h5>
                </div>
                <div class="card-body">

                  <div class="form-group row">
                    <label class="col-md-2 col-form-label">Your name</label>
                    <div class="col-md-10">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Your name"
                        name="name"
                        value="Alpha"
                      />
                    </div>
                  </div>

                  <div class="form-group row">
                    <label class="col-md-2 col-form-label">Your Phone</label>
                    <div class="col-md-10">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Your Phone"
                        name="phone"
                        value=""
                      />
                    </div>
                  </div>

                  <div class="form-group row">
                    <label class="col-md-2 col-form-label">Photo</label>
                    <div class="col-md-10">
                      <div
                        class="input-group"
                        data-toggle="aizuploader"
                        data-type="image"
                      >
                        <div class="input-group-prepend">
                          <div
                            class="input-group-text bg-soft-secondary font-weight-medium"
                          >
                            Browse
                          </div>
                        </div>
                        <div class="form-control file-amount">Choose File</div>
                        <input
                          type="hidden"
                          name="photo"
                          value=""
                          class="selected-files"
                        />
                      </div>
                      <div class="file-preview box sm"></div>
                    </div>
                  </div>

                  <div class="form-group row">
                    <label class="col-md-2 col-form-label">Your Password</label>
                    <div class="col-md-10">
                      <input
                        type="password"
                        class="form-control"
                        placeholder="New Password"
                        name="new_password"
                      />
                    </div>
                  </div>

                  <div class="form-group row">
                    <label class="col-md-2 col-form-label"
                      >Confirm Password</label
                    >
                    <div class="col-md-10">
                      <input
                        type="password"
                        class="form-control"
                        placeholder="Confirm Password"
                        name="confirm_password"
                      />
                    </div>
                  </div>

                </div>
              </div>

              <!-- Payment System -->
              <div class="card">
                <div class="card-header">
                  <h5 class="mb-0 h6">Payment Setting</h5>
                </div>
                <div class="card-body">
                  <div class="row">
                    <label class="col-md-3 col-form-label">Cash Payment</label>
                    <div class="col-md-9">
                      <label class="aiz-switch aiz-switch-success mb-3">
                        <input
                          value="1"
                          name="cash_on_delivery_status"
                          type="checkbox"
                        />
                        <span class="slider round"></span>
                      </label>
                    </div>
                  </div>
                  <div class="row">
                    <label class="col-md-3 col-form-label">Bank Payment</label>
                    <div class="col-md-9">
                      <label class="aiz-switch aiz-switch-success mb-3">
                        <input
                          value="1"
                          name="bank_payment_status"
                          type="checkbox"
                        />
                        <span class="slider round"></span>
                      </label>
                    </div>
                  </div>
                  <div class="row">
                    <label class="col-md-3 col-form-label">Bank Name</label>
                    <div class="col-md-9">
                      <input
                        type="text"
                        class="form-control mb-3"
                        placeholder="Bank Name"
                        value=""
                        name="bank_name"
                      />
                    </div>
                  </div>
                  <div class="row">
                    <label class="col-md-3 col-form-label"
                      >Bank Account Name</label
                    >
                    <div class="col-md-9">
                      <input
                        type="text"
                        class="form-control mb-3"
                        placeholder="Bank Account Name"
                        value=""
                        name="bank_acc_name"
                      />
                    </div>
                  </div>
                  <div class="row">
                    <label class="col-md-3 col-form-label"
                      >Bank Account Number</label
                    >
                    <div class="col-md-9">
                      <input
                        type="text"
                        class="form-control mb-3"
                        placeholder="Bank Account Number"
                        value=""
                        name="bank_acc_no"
                      />
                    </div>
                  </div>
                  <div class="row">
                    <label class="col-md-3 col-form-label"
                      >Bank Routing Number</label
                    >
                    <div class="col-md-9">
                      <input
                        type="number"
                        lang="en"
                        class="form-control mb-3"
                        placeholder="Bank Routing Number"
                        value=""
                        name="bank_routing_no"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div class="form-group mb-0 text-right">
                <button type="submit" class="btn btn-primary">
                  Update Profile
                </button>
              </div>
            </form>

            <br />

            <!-- Address -->
            <div class="card">
              <div class="card-header">
                <h5 class="mb-0 h6">Address</h5>
              </div>
              <div class="card-body">
                <div class="row gutters-10">
                  <div class="col-lg-6 mx-auto" onclick="">
                    <div
                      class="border p-3 rounded mb-3 c-pointer text-center bg-light"
                    >
                      <i class="la la-plus la-2x"></i>
                      <div class="alpha-7">Add New Address</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Change Email -->
            <form>
              <div class="card">
                <div class="card-header">
                  <h5 class="mb-0 h6">Change your email</h5>
                </div>
                <div class="card-body">
                  <div class="row">
                    <div class="col-md-2">
                      <label>Your Email</label>
                    </div>
                    <div class="col-md-10">
                      <div class="input-group mb-3">
                        <input
                          type="email"
                          class="form-control"
                          placeholder="Your Email"
                          name="email"
                          value="alpha@gmail.com"
                        />
                        <div class="input-group-append">
                          <button
                            type="button"
                            class="btn btn-outline-secondary new-email-verification"
                          >
                            <span class="d-none loading">
                              <span
                                class="spinner-border spinner-border-sm"
                                role="status"
                                aria-hidden="true"
                              ></span
                              >Sending Email...
                            </span>
                            <span class="default">Verify</span>
                          </button>
                        </div>
                      </div>
                      <div class="form-group mb-0 text-right">
                        <button type="submit" class="btn btn-primary">
                          Update Email
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import SideBar from "@/components/SideBar";
export default {
  name: "ManageProfile",
  components: { SideBar },
};
</script>

<style scoped></style>
