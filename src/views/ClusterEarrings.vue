<template>
  <TheNav />
  <section class="about-parent">
    <div class="about-parent-box">
      <h1 class="title-cluster">Flush Setting Ring</h1>
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
            FLUSH SETTING RING
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
                <img class="product-img-zom" src="../assets/product_16.webp" />
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
          <h3 class="title-cluster">Flush Setting Ring</h3>
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
            <h3 class="color-item">$29.00</h3>
            <p class="cluter-item-sall">$21.00</p>
          </div>
          <p class="text-item text-dark mb-3">
            I must explain to you how all this mistaken idea of denouncing
            explorer of the truth, the master-builder of human happiness.
          </p>
          <p class="cluster-color-text">color :</p>
          <div class="mb-3 d-flex gap-2">
            <div @click="clustercheck" class="cluster-check cluster-check-1">
              <fa class="cluster-check-icon" icon="check" />
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
          <button
            @click="prodactbtncolor"
            class="button-prodact prodact-tolink-forms"
            href=""
          >
            BUY IT NOW
          </button>
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

    $(".product-img-zom").attr(
      "src",
      localStorage.getItem("wishlistlocalstorage")
    );

    $(".product-inner-content .product-inner:first").addClass(
      "product-inner-2"
    );
    $(".product-inner #product-img-content:first").attr(
      "src",
      $(".product-img-zom").prop("src")
    );
    $(".title-cluster").text(localStorage.getItem("wishlisttitle"));
  },
  methods: {
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
        $(".number-sku").text("1510");
      }
      if (
        $(".cluster-check-2")
          .find(".cluster-check-icon")
          .hasClass("cluster-check-show")
      ) {
        $(".number-sku").text("1511");
      }
      if (
        $(".cluster-check-3")
          .find(".cluster-check-icon")
          .hasClass("cluster-check-show")
      ) {
        $(".number-sku").text("1512");
      }
      if (
        $(".cluster-check-4")
          .find(".cluster-check-icon")
          .hasClass("cluster-check-show")
      ) {
        $(".number-sku").text("1513");
      }
      if (
        $(".cluster-check-5")
          .find(".cluster-check-icon")
          .hasClass("cluster-check-show")
      ) {
        $(".number-sku").text("1514");
      }
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
