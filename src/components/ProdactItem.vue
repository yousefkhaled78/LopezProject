<template>
  <div class="mt-3 d-flex gap-2 align-items-center">
    <div>
      <fa icon="star" />
      <fa icon="star" />
      <fa icon="star" />
      <fa icon="star" />
      <fa icon="star" />
    </div>
    <p class="text-item">1 review</p>
  </div>
  <h3 class="mt-3 color-item mb-3">$29.00</h3>
  <p class="text-item text-dark">
    I must explain to you how all this mistaken idea of denouncing pleasure and
    praising pain was born and I will give you a complete account of the system,
    and expound the actual teachings of the great explorer of the truth, the
    master-builder of human happiness.
  </p>
  <div class="d-flex gap-3 mt-3 mb-3">
    <div class="prdact-minus-plus">
      <fa @click="minusprdact" class="plus-number" icon="minus" />
      <p>{{ numberprdact }}</p>
      <fa class="plus-number" @click="numberprdact++" icon="plus" />
    </div>
    <a class="button-prodact" href="">Buy from amazon</a>
    <div class="prdact-minus-plus prdact-love">
      <fa @click="showsetting" class="home-icon-heart" icon="heart" />
      <fa class="home-icon-gear" icon="gear" />
      <fa @click="hidecheck" class="home-icon-check" icon="check" />
    </div>
  </div>
  <a
    @click="prodactbtncolor"
    class="button-prodact prodact-tolink-forms"
    href="http://localhost:8080/#/CheakoutLopez"
  >
    BUY IT NOW
  </a>
  <div class="d-flex gap-2 mt-3">
    <p>CATEGORIES :</p>
    <ul class="d-flex gap-2">
      <li><a href="" class="active-color">Featured</a></li>
      <li><a href="" class="active-color">New Arrivals</a></li>
      <li><a href="" class="active-color">Onsale</a></li>
    </ul>
  </div>
  <p>TAGS :</p>
  <div class="d-flex gap-2 mt-3 align-items-center">
    <p>SHARE :</p>
    <div class="sohial-footer mt-0">
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
  <p class="mt-3">Guaranteed safe checkout</p>
  <div class="mt-2">
    <img class="shopping-sohail" src="../assets/appleplay.png" />
    <img class="shopping-sohail" src="../assets/appleplay.png" />
    <img class="shopping-sohail" src="../assets/appleplay.png" />
    <img class="shopping-sohail" src="../assets/appleplay.png" />
    <img class="shopping-sohail" src="../assets/appleplay.png" />
  </div>
</template>

<script>
import $ from "jquery";

export default {
  data() {
    return {
      numberprdact: 1,
    };
  },
  methods: {
    minusprdact() {
      this.numberprdact--;
      if (this.numberprdact == -1) {
        this.numberprdact = 1;
      }
    },
    hidecheck(e) {
      $(e.target).hide();
      $(".home-icon-heart").show();
    },
    showsetting(e) {
      $(e.target)
        .parent()
        .siblings(".home-icon-gear")
        .animate(
          { borderSpacing: 360 },
          {
            step: function (now) {
              $(this).css("transform", "rotate(" + now + "deg)");
            },
            duration: 1000,
            complete: function () {
              $(".home-icon-gear").hide();
              $(e.target).parent().siblings(".home-icon-check").show();
            },
          }
        );
      $(e.target).parent().hide();
      $(e.target).parent().siblings(".home-icon-gear").show();
      $(e.target)
        .parent()
        .siblings(".home-icon-gear")
        .addClass("seating-rotete");
    },
    prodactbtncolor(e) {
      $(e.target).addClass("prodactbtncolor");
    },
  },
};
</script>
