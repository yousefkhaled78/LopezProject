<template>
  <TheNav />
  <section class="about-parent">
    <div class="about-parent-box">
      <h1 class="title-cluster">Shepherd Hook Backs</h1>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="http://localhost:8080/">Home</a>
          </li>
          <li class="breadcrumb-item active p-0" aria-current="page">/</li>
          <li
            class="breadcrumb-item active title-cluster p-0"
            aria-current="page"
          >
            Shepherd Hook Backs
          </li>
        </ol>
      </nav>
    </div>
  </section>
  <section class="mt-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <div class="row">
            <div class="col-lg-8 col-md-8">
              <figure id="mang_area">
                <img
                  class="product-img-zom"
                  src="../assets/product_10_23c7ceee.webp"
                />
              </figure>
            </div>
            <div class="col-lg-3 col-md-3 product-inner-content">
              <div
                class="product-inner"
                @click="clusterimg"
                v-for="(gall, i) in gallery"
                :key="i"
              >
                <img
                  id="product-img-content"
                  :src="require(`../assets/${gall.img}`)"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <h4 class="title-cluster">Shepherd Hook Backs</h4>
          <div class="d-flex gap-2 mt-2">
            <p class="text-item">SKU :</p>
            <p class="text-item number-sku">101</p>
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
            <h3 class="color-item">$29.00</h3>
            <p class="cluter-item-sall">$21.00</p>
          </div>
          <p>Availability: 10 left in stock</p>
          <p class="text-item text-dark mt-3 mb-3">
            On the other hand, we denounce with righteous indignation and
            dislike men who are so beguiled and demoralized by the charms of
            pleasure of the moment, so blinded by desire, that they cannot
            foresee the pain and trouble that are bound to ensue; and equal
            blame belongs to those who fail in their duty through weakness of
            will
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
          <div class="d-flex gap-2 mt-3 mb-2">
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
        </div>
      </div>
    </div>
  </section>
  <div class="title-home-elment mt-5">
    <div class="title-home">
      <h2>Related Products</h2>
    </div>
  </div>
  <CollapceComponent />
  <CardProdact />
  <div class="title-home-elment mt-5">
    <div class="title-home">
      <h2>Custom Collection</h2>
    </div>
  </div>
  <CardProdact />
  <FotterComponent />
</template>

<script>
import FotterComponent from "@/components/FotterComponent.vue";
import "vue3-carousel/dist/carousel.css";
import TheNav from "@/components/NavComponent.vue";
import CardProdact from "@/components/CardProdact.vue";
import CollapceComponent from "@/components/CollapceComponent.vue";
import $ from "jquery";

export default {
  components: {
    TheNav,
    FotterComponent,
    CardProdact,
    CollapceComponent,
  },
  data() {
    return {
      numberprdact: 1,
      gallery: [
        {
          img: "product_10_23c7ceee.webp",
        },
        {
          img: "product_06_2100a7a9.webp",
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
  mounted() {
    var mang_area = document.getElementById("mang_area");
    var mang_image = document.querySelector(".product-img-zom");
    mang_area.addEventListener("mousemove", function (event) {
      var clientX = event.clientX - mang_area.offsetLeft;
      var clientY = event.clientY - mang_area.offsetTop;

      var mWidth = mang_area.offsetWidth;
      var mHeight = mang_area.offsetHeight;

      clientX = (clientX / mWidth) * 100;
      clientY = (clientY / mHeight) * 100;

      mang_image.style.transform =
        "translate(-" + clientX + "%, -" + clientY + "%) scale(2)";
    });
    mang_area.addEventListener("mouseleave", function () {
      mang_image.style.transform = "translate(-50%,-50%) scale(1)";
    });

    $(".product-inner-content .product-inner:first").addClass(
      "product-inner-2"
    );
    $(".product-inner #product-img-content:first").attr(
      "src",
      $(".product-img-zom").prop("src")
    );
  },
  methods: {
    clustercheck(e) {
      $(e.target).find(".cluster-check-icon").addClass("cluster-check-show");
      $(e.target)
        .siblings(".cluster-check")
        .find(".cluster-check-icon")
        .removeClass("cluster-check-show");
    },
    clusterimg(e) {
      $(e.target).parent().addClass("product-inner-2");
      $(e.target)
        .parent()
        .siblings(".product-inner")
        .removeClass("product-inner-2");
      $(".product-img-zom").attr("src", $(e.target).prop("src"));
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
