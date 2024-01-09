<template>
  <TheNav />
  <section class="about-parent">
    <div class="about-parent-box">
      <h1>News</h1>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="http://localhost:8080/">Home</a>
          </li>
          <li class="breadcrumb-item active p-0" aria-current="page">/</li>
          <li class="breadcrumb-item active p-0" aria-current="page">
            ACCOUNT
          </li>
        </ol>
      </nav>
    </div>
  </section>
  <section class="section-form-acount">
    <form class="form-acount">
      <div class="form-email-password">
        <input class="input-all" type="email" placeholder="Email" />
        <input class="input-all" type="password" placeholder="Password" />
        <div class="form-acount-box">
          <button type="submit" class="button-prodact button-acount">
            SIGN IN
          </button>
          <p @click="showpassword" class="show-password">
            Forgot your password?
          </p>
        </div>
      </div>
      <div class="form-password">
        <h1>Reset your password</h1>
        <p class="mt-3 mb-3">
          We will send you an email to reset your password.
        </p>
        <input class="input-all" type="email" placeholder="Email" />
        <div class="form-acount-box">
          <button type="submit" class="button-prodact button-acount">
            SUBMIT
          </button>
          <p @click="hidepassword" class="show-password">Cancel</p>
        </div>
      </div>
    </form>
  </section>
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
