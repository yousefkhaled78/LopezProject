<template>
  <TheNav />
  <section class="about-parent">
    <div class="about-parent-box">
      <h1 class="title-cluster">Your Shopping Cart</h1>
    </div>
  </section>
  <section class="margin-top">
    <div class="container">
      <h3>Your Cart Is Currently Empty.</h3>
      <div class="button-submit-review justify-content-start mt-5">
        <button type="submit" class="button-prodact">Submit Review</button>
      </div>
    </div>
  </section>
  <FotterComponent />
</template>

<script>
import FotterComponent from "@/components/FotterComponent.vue";
import TheNav from "@/components/NavComponent.vue";

export default {
  components: {
    TheNav,
    FotterComponent,
  },
  data() {
    return {
      gallery: [
        {
          img: "product_03_921acd3e.webp",
        },
        {
          img: "product_04_c6e32c8c.webp",
        },
        {
          img: "product_05_.webp",
        },
        {
          img: "product_07_6ac5d96f.webp",
        },
      ],
    };
  },
};
</script>
