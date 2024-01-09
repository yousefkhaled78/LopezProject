<template>
  <TheNav />
  <section class="about-parent">
    <div class="about-parent-box">
      <h1>About</h1>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="http://localhost:8080/">Home</a>
          </li>
          <li class="breadcrumb-item active p-0" aria-current="page">/</li>
          <li class="breadcrumb-item active p-0" aria-current="page">About</li>
        </ol>
      </nav>
    </div>
  </section>
  <section class="mt-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <img
            class="img-about-content"
            src="../assets/banner_02_ad6c3e38-26b9.webp"
            alt=""
          />
        </div>
        <div class="col-lg-6">
          <div class="d-flex gap-2 mb-4">
            <h1>WELCOME TO</h1>
            <h1 class="color-item">LOPEZ</h1>
          </div>
          <p>
            Lopez provide how all this mistaken idea of denouncing pleasure and
            sing pain was born an will give you a complete account of the
            system, and expound the actual teachings of the eat explorer.
          </p>
          <h5 class="mt-5 mb-3">WE START AT 2015</h5>
          <p>
            Lopez provide how all this mistaken idea of denouncing pleasure and
            sing pain was born an will give you a complete account of the
            system, and expound the actual teachings of the eat explorer.
          </p>
        </div>
      </div>
    </div>
  </section>
  <section class="margin-top">
    <div class="container">
      <div class="row">
        <div v-for="slide in 3" :key="slide" class="col-lg-4 col-md-6">
          <div class="mb-4">
            <h4>OUR VISSION</h4>
            <p>
              ezone provide how all this mistaken idea of denouncing pleasure
              and sing pain was born an will give you a ete account of the
              system, and expound the actual teangs of the eat explorer of the
              truth.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="margin-top">
    <TestHome />
  </section>
  <FotterComponent />
</template>

<script>
import TheNav from "@/components/NavComponent.vue";
import TestHome from "@/components/TestHome.vue";
import FotterComponent from "@/components/FotterComponent.vue";

export default {
  components: {
    TheNav,
    TestHome,
    FotterComponent,
  },
};
</script>
