<template>
  <TheNav />
  <section class="about-parent">
    <div class="about-parent-box">
      <h1>SHIPPING POLICY</h1>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="http://localhost:8080/">Home</a>
          </li>
          <li class="breadcrumb-item active p-0" aria-current="page">/</li>
          <li class="breadcrumb-item active p-0" aria-current="page">
            SHIPPING POLICY
          </li>
        </ol>
      </nav>
    </div>
  </section>
  <ShippingComponent />
  <FotterComponent />
</template>

<script>
import FotterComponent from "@/components/FotterComponent.vue";
import TheNav from "@/components/NavComponent.vue";
import ShippingComponent from "@/components/ShippingComponent.vue";
export default {
  components: {
    FotterComponent,
    TheNav,
    ShippingComponent,
  },
};
</script>
