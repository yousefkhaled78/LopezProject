<template>
  <TheNav />
  <section class="about-parent">
    <div class="about-parent-box">
      <h1>Size Chart</h1>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="http://localhost:8080/">Home</a>
          </li>
          <li class="breadcrumb-item active p-0" aria-current="page">/</li>
          <li class="breadcrumb-item active p-0" aria-current="page">
            Size Chart
          </li>
        </ol>
      </nav>
    </div>
  </section>
  <div class="container mt-5">
    <h4 class="mb-3">Size Chart</h4>
    <div class="row">
      <div class="col-lg-12">
        <table>
          <tbody>
            <tr>
              <td>UK</td>
              <td>18</td>
              <td>18</td>
              <td>18</td>
              <td>18</td>
            </tr>
            <tr>
              <td>UK</td>
              <td>18</td>
              <td>18</td>
              <td>18</td>
              <td>18</td>
            </tr>
            <tr>
              <td>UK</td>
              <td>18</td>
              <td>18</td>
              <td>18</td>
              <td>18</td>
            </tr>
            <tr>
              <td>UK</td>
              <td>18</td>
              <td>18</td>
              <td>18</td>
              <td>18</td>
            </tr>
            <tr>
              <td>UK</td>
              <td>18</td>
              <td>18</td>
              <td>18</td>
              <td>18</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <FotterComponent />
</template>
<script>
import FotterComponent from "@/components/FotterComponent.vue";
import TheNav from "@/components/NavComponent.vue";
import $ from "jquery";

export default {
  components: {
    FotterComponent,
    TheNav,
  },
  methods: {
    showpassword() {
      $(".form-password").show();
      $(".form-email-password").hide();
    },
    hidepassword() {
      $(".form-password").hide();
      $(".form-email-password").show();
    },
  },
};
</script>
