<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="card ">
                        <div class="card-header">
                            <span class="h5 text-black-50 mb-0">Promotion</span>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-12 col-md-4 mx-auto">
                                    <label for="" class="text-black-50 fw-600 fs-12">Enter Promotion Code</label>
                                    <input type="text" class="form-control">
                                </div>
                            </div>
                        </div>
                        <div class="card-footer">
                            <div class="d-flex justify-content-between align-items-center w-100">
                                <div>
                                <router-link class="btn btn-outline-primary" to="/address">
                                    <i class="las la-arrow-left"></i>Return To Address
                                </router-link>
                                </div>
                                <div>
                                <router-link class="btn btn-primary" to="/order" >Ordered
                                    <i class="fa-solid fa-arrow-right"></i></router-link>
                                </div>
                            </div>
                        </div>
                    </div>   
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        data() {
            return {
               
            }
        },
    }
</script>