<template>
  <div class="d-flex gap-2 mt-2">
    <p class="text-item">SKU :</p>
    <p class="text-item number-sku">1510</p>
  </div>
  <div class="mt-3 d-flex gap-2 mt-3 mb-3">
    <div>
      <fa :icon="['far', 'star']" />
      <fa :icon="['far', 'star']" />
      <fa :icon="['far', 'star']" />
      <fa :icon="['far', 'star']" />
      <fa :icon="['far', 'star']" />
    </div>
    <p>No review</p>
  </div>
  <div class="d-flex gap-2 mb-3 align-items-center">
    <h3 class="color-item affiliate-sallery">$70.00</h3>
    <p class="cluter-item-sall">$85.00</p>
  </div>
  <p class="text-item text-dark mb-3">
    I must explain to you how all this mistaken idea of denouncing explorer of
    the truth, the master-builder of human happiness.
  </p>
  <p class="cluster-color-text">zize :</p>
  <div class="d-flex gap-3 mt-3 mb-3">
    <p @click="variablesize" class="variable-size variable-size-s">S</p>
    <p @click="variablesize" class="variable-size variable-size-m">M</p>
    <p @click="variablesize" class="variable-size variable-size-l">L</p>
    <p @click="variablesize" class="variable-size variable-size-xl">XL</p>
  </div>
  <p class="cluster-color-text">color :</p>
  <div class="mb-3 d-flex gap-2 mb-5 mt-2">
    <div
      @click="clustercheck"
      class="cluster-check cluster-check-show cluster-check-1"
    >
      <fa class="cluster-check-icon cluster-check-show" icon="check" />
    </div>
    <div @click="clustercheck" class="cluster-check cluster-check-2">
      <fa class="cluster-check-icon" icon="check" />
    </div>
    <div @click="clustercheck" class="cluster-check cluster-check-3">
      <fa class="cluster-check-icon" icon="check" />
    </div>
    <div @click="clustercheck" class="cluster-check cluster-check-4">
      <fa class="cluster-check-icon" icon="check" />
    </div>
    <div @click="clustercheck" class="cluster-check cluster-check-5">
      <fa class="cluster-check-icon" icon="check" />
    </div>
  </div>
  <p class="cluster-color-text">Material :</p>
  <div class="d-flex gap-3 mt-3 mb-3">
    <p @click="variablesize" class="variable-size variable-size-s">METAL</p>
    <p @click="variablesize" class="variable-size variable-size-m">resin</p>
    <p @click="variablesize" class="variable-size variable-size-l">LEATHER</p>
    <p @click="variablesize" class="variable-size variable-size-xl">SLAG</p>
    <p @click="variablesize" class="variable-size variable-size-f">FIBER</p>
  </div>
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
      <li><a href="" claas="active-color">Featured</a></li>
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
    variablesize(e) {
      $(e.target).addClass("color-item");
      $(e.target).siblings().removeClass("color-item");
      if ($(e.target).hasClass("variable-size-s")) {
        $(".affiliate-sallery").text("$55.00");
      }
      if ($(e.target).hasClass("variable-size-m")) {
        $(".affiliate-sallery").text("$49.00");
      }
      if ($(e.target).hasClass("variable-size-x")) {
        $(".affiliate-sallery").text("$60.00");
      }
      if ($(e.target).hasClass("variable-size-xl")) {
        $(".affiliate-sallery").text("$62.00");
      }
      if ($(e.target).hasClass("variable-size-f")) {
        $(".affiliate-sallery").text("$49.00");
      }
    },
    clustercheck(e) {
      $(e.target).find(".cluster-check-icon").addClass("cluster-check-show");
      $(e.target)
        .siblings(".cluster-check")
        .find(".cluster-check-icon")
        .removeClass("cluster-check-show");
      if (
        $(".cluster-check-1")
          .find(".cluster-check-icon")
          .hasClass("cluster-check-show")
      ) {
        $(".affiliate-sallery").text("$70.00");
        $(".number-sku").text("1510");
      }
      if (
        $(".cluster-check-2")
          .find(".cluster-check-icon")
          .hasClass("cluster-check-show")
      ) {
        $(".affiliate-sallery").text("$65.00");
        $(".number-sku").text("1511");
      }
      if (
        $(".cluster-check-3")
          .find(".cluster-check-icon")
          .hasClass("cluster-check-show")
      ) {
        $(".affiliate-sallery").text("$59.00");
        $(".number-sku").text("1512");
      }
      if (
        $(".cluster-check-4")
          .find(".cluster-check-icon")
          .hasClass("cluster-check-show")
      ) {
        $(".affiliate-sallery").text("$42.00");
        $(".number-sku").text("1513");
      }
      if (
        $(".cluster-check-5")
          .find(".cluster-check-icon")
          .hasClass("cluster-check-show")
      ) {
        $(".affiliate-sallery").text("$70.00");
        $(".number-sku").text("1514");
      }
    },
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
