<template>
  <footer class="footer-elment">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 mb-5">
          <a href="">
            <img src="../assets/color-logo_167x.png" />
          </a>
          <p class="mt-3">
            Ezone is a Multipurpose Powerful Design for your eCommerce Business
          </p>
          <div class="sohial-footer">
            <a href="" class="link-sohial">
              <fa :icon="['fab', 'facebook-f']" />
            </a>
            <a href="" class="link-sohial">
              <fa :icon="['fab', 'twitter']" />
            </a>
            <a href="" class="link-sohial">
              <fa :icon="['fab', 'pinterest-p']" />
            </a>
            <a href="" class="link-sohial">
              <fa :icon="['fab', 'linkedin']" />
            </a>
          </div>
        </div>
        <div class="col-lg-2 mb-5">
          <ul class="links-footer">
            <li class="link-title-border">
              <h4>MY ACCOUNT</h4>
            </li>
            <li class="mb-2">
              <a href="http://localhost:8080/#/AcountLpeaz">My account</a>
            </li>
            <li class="mb-2">
              <a href="http://localhost:8080/?#/WishlistLopez">Wishlist</a>
            </li>
            <li class="mb-2">
              <a href="http://localhost:8080/#/ShippingPolicy"
                >Order Tracking</a
              >
            </li>
            <li class="mb-2">
              <a href="http://localhost:8080/#/SizeChart">Privacy Policy</a>
            </li>
            <li class="mb-2">
              <a href="http://localhost:8080/#/ShippingPolicy"
                >Shipping Information</a
              >
            </li>
          </ul>
        </div>
        <div class="col-lg-2 mb-5">
          <ul class="links-footer">
            <li class="link-title-border">
              <h4>QUICK LINKS</h4>
            </li>
            <li class="mb-2">
              <a href="http://localhost:8080/#/ShippingPolicy">New User</a>
            </li>
            <li class="mb-2">
              <a href="http://localhost:8080/#/ShippingPolicy">Help Center</a>
            </li>
            <li class="mb-2">
              <a href="http://localhost:8080/#/ShippingPolicy">Refund Policy</a>
            </li>
            <li class="mb-2">
              <a href="http://localhost:8080/#/ShippingPolicy">Report Spam</a>
            </li>
            <li class="mb-2">
              <a href="http://localhost:8080/#/AcountLpeaz">Account</a>
            </li>
          </ul>
        </div>
        <div class="col-lg-4 mb-5">
          <div class="link-title-border">
            <h4>CONTACT</h4>
          </div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is dummy.
          </p>
          <form class="mt-4">
            <div class="home-email-box">
              <input
                class="input-home input-footer"
                type="email"
                placeholder="email@example.com"
              />
              <button class="submit-send-home submit-send-footer" type="submit">
                <fa :icon="['far', 'envelope']" />
              </button>
            </div>
          </form>
          <div class="d-flex gap-2 mt-4">
            <fa icon="location-dot" />
            <p>77 Seventh avenue USA 12555.</p>
          </div>
          <div class="d-flex gap-2 mt-2">
            <fa :icon="['fas', 'headphones-simple']" />
            <p>77 Seventh avenue USA 12555.</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <div class="footer-bottom">
    <div class="container">
      <div class="footer-bottom-content">
        <p>Copyright © 2021 HasThemes | Built with Lopez by HasThemes.</p>
        <ul class="d-flex gap-3">
          <li><a class="active-color" href="">My account</a></li>
          <li><a class="active-color" href="">Wishlist</a></li>
          <li><a class="active-color" href="">Privacy Policy</a></li>
        </ul>
      </div>
    </div>
  </div>
  <button @click="buttonscrolltop" class="button-arrow-top">
    <fa icon="arrow-up" />
  </button>
</template>

<style scoped>
.footer-elment {
  width: 100%;
  background-color: var(--min-color);
  padding: 30px;
  margin-top: 5rem;
}
.sohial-footer {
  display: flex;
  gap: 20px;
  margin-top: 20px;
}
.link-sohial {
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eee;
  border-radius: 50%;
  font-size: 13px;
  transition: 0.6s;
}
.link-sohial:hover {
  background-color: black;
  color: white !important;
}
.link-title-border {
  margin-bottom: 30px;
  position: relative;
  width: fit-content;
}
.link-title-border::before {
  content: "";
  position: absolute;
  width: 35%;
  height: 2px;
  bottom: -6px;
  left: 0;
  background-color: black;
}
.links-footer a {
  transition: 0.6s;
}
.links-footer a:hover {
  color: var(--min-yellow) !important;
}
.input-footer {
  background-color: black;
  border-radius: 0%;
}
.submit-send-footer {
  color: white;
  border-left: none;
}
.footer-bottom-content {
  display: flex;
  justify-content: space-between;
  padding: 20px 0px;
}
.footer-bottom-content a {
  font-size: 13px;
}
@media (max-width: 768px) {
  .footer-bottom-content {
    flex-wrap: wrap;
    gap: 20px;
  }
  .footer-bottom-content {
    font-size: 10px;
  }
  .footer-bottom-content a {
    font-size: 10px;
  }
}
</style>

<script>
import $ from "jquery";

export default {
  methods: {
    buttonscrolltop() {
      $("html, body").animate(
        {
          scrollTop: 0,
        },
        200
      );
    },
  },
};
</script>
