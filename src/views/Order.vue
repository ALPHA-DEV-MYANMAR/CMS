<template>
  <div>
    <section class="py-5">
      <div class="container">
        <div class="d-flex align-items-start">
          <SideBar></SideBar>
          <div class="aiz-user-panel">

          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

import SideBar from "@/components/SideBar";
export default {
  name: "Order",
  components: {SideBar}
}
</script>

<style scoped>

</style>