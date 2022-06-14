<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-header">
              <span class="h5 mb-0 fw-600">Order တင်ခြင်းအောင်မြင်ပါသည်။</span>
              <a href="/" class="btn btn-primary"> <i class="fa-solid fa-arrow-left-long"></i> Back to Home</a>
            </div>
            <div class="card-body">
              <p class="fw-600 text-danger text-decoration-underline h6">#သတိပြုရန်အချက်များ</p>
              <p class="fs-15">1. Delivery အပ်ပြီးတဲ့နေ့မှ စပြီး လူကြီးမင်း ရဲ့ လိပ်စာကိုရောက်ရန် ၃ ရက်ခန့်ကြာနိင်ပါသည်။</p>
              <p>2. ရာသီဥတုနှင့် အခြေအနေပေါ် မူတည်ပြီး ၂ ရက်ခန့် ထပ်တိုးကြာတာမျိုးလည်း ဖြစ်နိင်ပါသည်။</p>
              <p>3. Tracking ID ကို Tracking website ထဲရိုက်ထည့်ပေးခြင်းဖြင့် လူကြီးမင်းရဲ့ ပါဆယ် အခြေအနေကို ကြည့်လိုရပါသည်။</p>
              <p>4. လူကြီးမင်းရဲ့ order ကိုလာပို့တဲ့အချိန် လက်ခံမည့်သူမရှိပါက delivery company မှ စာရွက်ထားသွားမည်ဖြစ်ပြီး၊ ထိုစာရွက် မှ ညွှန်ကြားထားသော နည်းလမ်းအတိုင်း လူကြီးမင်းရဲ့ ပါဆယ်ကို နောက်ရက် ချိန်းပြီး ထပ်လာပို့ခိုင်းဖို့ လုပ်ဆောင်နိင်ပါသည်။ အထက်ပါလုပ်ဆောင်ချက်ကို OOAK မှ လုပ်ဆောင်ခြင်းမပြုပေးပါ။</p>
              <p>5. ရောက်ရှိလာသော လူကြီးမင်းရဲ့ Order နဲ့ပက်သက်ပြီး အဆင်မပြေမူတစ်စုံတစ်ရာကြောင့် ဆက်သွယ်လိုပါက OOAK facebook page မှတဆင့် ဆက်သွယ်ပေးပါရန်။</p>
              <p>6. <router-link to="/step-two" target="_blank">Return &amp; Refund </router-link> အတွက် စည်းကမ်းချက်များကို ကြည့်ရှုနိင်ပါသည်။</p>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-header">
              <span class="h5 mb-0 fw-600">Order Items</span>
            </div>
            <div class="card-body">
              <div style="overflow: auto">
                <table class="table table-borderless align-middle">
                  <thead>
                  <tr >
                    <th scope="col">Photo</th>
                    <th scope="col">Name</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Price</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr v-for="o in GET_ORDER.items" :key="o.id">
                    <td>
                      <img :src="o.price.good.photos[0].name" class="img-fluid rounded shadow-sm" style="height: 50px;" alt="">
                    </td>
                    <td>
                      {{ o.price.good.name }}
                    </td>
                    <td>
                      {{ o.quantity }}
                    </td>
                    <td>
                      {{ o.total_price }}￥
                    </td>
                  </tr>
                  </tbody>
                </table>
                <hr>
                <span class="h6 fw-bolder">Summary</span>
                <table class="table table-borderless align-middle">
                  <tbody>
                  <tr>
                    <td>Delivery Price:</td>
                    <td>{{ GET_ORDER.summary.delivery_price }}￥</td>
                  </tr>
                  <tr >
                    <td>Promotion Price:</td>
                    <td>{{ GET_ORDER.summary.promo }}￥</td>
                  </tr>
                  <tr>
                    <td>Total Price:</td>
                    <td>{{ GET_ORDER.summary.total }}￥</td>
                  </tr>
                  </tbody>
                </table>
                <hr>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "order_success",
  computed: {
    ...mapGetters([
      'GET_ORDER',
      'GET_PAY'
    ]),
  },
  created() {
    window.scrollTo(0,0);
    if(this.GET_ORDER === ""){
      window.location.href = '/';
    }
  },
}
</script>

<style scoped>

</style>