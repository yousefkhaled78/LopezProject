<template>
  <TheNav />
  <section class="about-parent">
    <div class="about-parent-box">
      <h1 class="title-cluster">Contact</h1>
    </div>
  </section>
  <section class="margin-top">
    <div class="container">
      <div class="row">
        <div class="col-lg-8"></div>
        <div class="col-lg-4">
          <h4>LOCATION & DETAILS</h4>
          <div class="d-flex gap-3 mt-4" v-for="slide in 3" :key="slide">
            <fa class="location-contact" icon="location-dot" />
            <p><span class="fw-bold">Address</span>: Your address goes here</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="margin-top">
    <div class="container">
      <h4 class="mb-5">CONTACT INFORMATION</h4>
      <div class="row">
        <div class="col-lg-8">
          <form>
            <div class="row">
              <div class="col-lg-6">
                <label class="label-review">Name*</label>
                <input class="input-all" type="text" />
              </div>
              <div class="col-lg-6">
                <label class="label-review">Email*</label>
                <input class="input-all" type="email" />
              </div>
              <div class="col-lg-6">
                <label class="label-review">Telephone</label>
                <input class="input-all" type="text" />
              </div>
              <div class="col-lg-6">
                <label class="label-review">Subject</label>
                <input class="input-all" type="text" />
              </div>
              <div class="col-lg-12">
                <label class="label-review">Comment*</label>
                <textarea class="input-all textarea-all"></textarea>
              </div>
              <div class="button-submit-review justify-content-start">
                <button class="button-prodact">SEND MESSAGE</button>
              </div>
            </div>
          </form>
        </div>
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
};
</script>
