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
                            <!-- Promotion Start -->
                            <div class="row">
                                <div class="col-12 col-md-4 mx-auto">
                                   <label for="" class="text-black-50 fw-600 fs-12">{{ i.promoCode  }}</label>
                                    <div class="input-group">
                                        <input type="text" class="form-control" v-model="code" :placeholder="i.promoCodeHintText" aria-describedby="button-addon2" @keyup="check()">
                                    </div>
                                        <span v-if="code !== '' " class="fs-12 fw-600" :class="is_valid ? 'text-success' : 'text-danger' ">
                                            {{  is_valid ? i.promoCodeApplied : i.promoCodeError  }}
                                        </span>
                                </div>
                            </div>
                            <!-- Promotion End -->

                            <!-- Total Start -->
                            <div class="row mt-5">
                                <div class="col-12">
                                    <div style="overflow-x:auto;">
                                        <table class="table table-borderless align-middle text-lg-center ">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Image</th>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Category</th>
                                                    <th scope="col">Quantity</th>
                                                    <th scope="col">Total</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="c in GET_CART_DATA" :key="c.id" class="text-black-50">
                                                    <td class="align-middle">
                                                        <img :src=" c.price === null ? '' : c.price.good.photos.length === 0 ? '' : c.price.good.photos[0].name "  class="img-fit size-60px rounded" alt="">
                                                    </td>
                                                    <td class="align-middle">
                                                        {{ c.price === null ? 'Null' : c.price.good.name }}
                                                    </td>
                                                    <td class="align-middle">
                                                        {{ c.price === null ? 'Null' : c.price.good.category.length === 0 ? 'No category' : c.price.good.category.name }}
                                                    </td>
                                                    <td class="align-middle">
                                                        {{ c.qty }}
                                                    </td>
                                                    <td class="align-middle">
                                                        {{ c.price === null ? 'Null' : c.price.good.prices[0].price * c.qty }}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td colspan="2">
                                                    </td>
                                                    <td class="fw-600" colspan="2">
                                                        {{ i.totalCost }}
                                                    </td>
                                                    <td  v-if="is_promo === true " class="fw-bold text-success h5 " colspan="2">
                                                        {{ GET_ORDER_TOTAL.price - promo_price }}
                                                    </td>
                                                    <td v-else class="fw-bold text-danger h5" colspan="2">
                                                        {{ GET_ORDER_TOTAL.price }}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <!-- Total End -->

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
        {{ have_promo }}
    </div>
</template>

<script>
    import $http from '../axios.js';
    import { mapGetters, mapMutations } from 'vuex'
    export default{
        data() {
            return {
               code : '',
               is_valid : false,
               message : '',
               promo_price : 0,
               is_promo : false,
            }
        },
        created () {
            window.scrollTo(0,0);
            if(this.GET_ORDER_TOTAL === ""){
            window.location.href = '/';
            }
        },
        computed: {
            ...mapGetters([
                'GET_CART_DATA',
                'GET_ORDER_TOTAL',
                'i'
            ]),
            have_promo() {
                if(this.code === ''){
                    this.is_promo = false;
                    this.promo_price = 0;
                    this.ADD_ORDER_TOTAL({
                        'item' : this.GET_ORDER_TOTAL.item,
                        'qty' : this.GET_ORDER_TOTAL.qty,
                        'price' : this.GET_ORDER_TOTAL.price,
                        'promo_price' : 0,
                        'code_id' : '',
                    });
                }
            },
        },
        methods: {
            ...mapMutations([
                'ADD_ORDER_TOTAL'
            ]),
            check() {
                if(this.code !== '' ){
                    $http.getAll(`promos/${this.code}`)
                    .then((res)=>{
                        let d = res.data.data;
                        if(d.length === 0){
                            this.message = res.data.message;
                            this.is_valid = false;
							this.is_promo = false;

                            this.ADD_ORDER_TOTAL({
                                'item' : this.GET_ORDER_TOTAL.item,
                                'qty' : this.GET_ORDER_TOTAL.qty,
                                'price' : this.GET_ORDER_TOTAL.price,
                                'promo_price' : 0,
                                'code_id' : '',
                            });

                        }else{
                            this.message = res.data.message;
                            this.is_valid = true;
                            this.promo_price = d.price;
                            this.is_promo = true;

                            this.ADD_ORDER_TOTAL({
                                'item' : this.GET_ORDER_TOTAL.item,
                                'qty' : this.GET_ORDER_TOTAL.qty,
                                'price' : this.GET_ORDER_TOTAL.price,
                                'promo_price' : d.price,
                                'code_id' : d.id,
                            });
     
                        }
                    });
                }else{
                    this.is_valid = false;
                }
            }
        },
    }
</script>