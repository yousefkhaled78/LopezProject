<template>
  <section>
    <div class="container">
      <Carousel v-bind="settings" :breakpoints="breakpoints">
        <Slide v-for="(card, i) in cardhome" :key="i">
          <div class="carousel__item">
            <div class="card-home">
              <div class="card-img-content">
                <img class="card-img" :src="require(`../assets/${card.img}`)" />
                <div class="shopping-card">
                  <div class="shopping-card-box">
                    <fa class="cart-icon-shopping" icon="cart-shopping" />
                    <fa
                      @click="showsetting"
                      class="home-icon-heart"
                      icon="heart"
                    />
                    <fa class="home-icon-gear" icon="gear" />
                    <fa
                      @click="hidecheck"
                      class="home-icon-check"
                      icon="check"
                    />
                    <fa class="home-icon-eye" icon="eye" />
                  </div>
                  <div class="days-content">
                    <div class="row">
                      <div
                        class="col-3"
                        v-for="(item, i) in card.dayes"
                        :key="i"
                      >
                        <div class="day-box">
                          <h6>{{ item.daynumber }}</h6>
                          <h6>{{ item.daytext }}</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h6 class="mt-3">{{ card.sallery }}</h6>
              <h6 class="mt-2 mb-2">{{ card.title }}</h6>
              <h6>{{ card.type }}</h6>
            </div>
          </div>
        </Slide>

        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </div>
  </section>
</template>

<script>
import { Carousel, Navigation, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import $ from "jquery";

export default {
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data() {
    return {
      cardhome: [
        {
          img: "product_11_326x.webp",
          sallery: "$39.00 $60.00",
          title: "Dangle Earrings",
          type: "Type 8",
          dayes: [
            {
              daynumber: "0",
              daytext: "Days",
            },
            {
              daynumber: "0",
              daytext: "Days",
            },
            {
              daynumber: "0",
              daytext: "Days",
            },
            {
              daynumber: "0",
              daytext: "Days",
            },
          ],
        },
        {
          img: "product_12_03f695bd-.webp",
          sallery: "$50.00",
          title: "Threader Earrings",
          type: "Type 5",
        },
        {
          img: "product_13_3a661b25-.webp",
          sallery: "$40.00 $85.00",
          title: "FASHION RING",
          type: "Type 3",
        },
        {
          img: "product_14_befc8e36.webp",
          sallery: "$79.00",
          title: "Hoop Earrings",
          type: "Type 9",
        },
        {
          img: "product_03_921acd3e.webp",
          sallery: "$29.00",
          title: "Flush Setting Ring",
          type: "Type 7",
        },
        {
          img: "product_15_9c8c2379-281a.webp",
          sallery: "$29.00",
          title: "Huggie Earrings",
          type: "Type 7",
        },
        {
          img: "product_07_6ac5d96f.webp",
          sallery: "$55.00 $75.00",
          title: "CLUSTER RING",
          type: "Type 6",
        },
        {
          img: "product_08_eb087117.webp",
          sallery: "$55.00 $75.00",
          title: "COCKTAIL RING",
          type: "Type 6",
        },
        {
          img: "product_09_f55eee6c.webp",
          sallery: "$55.00 $75.00",
          title: "COCKTAIL RING",
          type: "Type 6",
        },
        {
          img: "product_10_23c7ceee.webp",
          sallery: "$55.00 $75.00",
          title: "COCKTAIL RING",
          type: "Type 6",
        },
      ],
      numberprdact: 1,
      gallery: [
        {
          class: "product-img-toggle",
          targetimg: "http://localhost:8080/img/product_16.8012de6d.webp",
        },
        {
          class: "product-img-content-two",
          targetimg: "http://localhost:8080/img/product_17.cbdd33d7.webp",
        },
        {
          class: "product-img-content-three",
          targetimg:
            "data:image/webp;base64,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",
        },
        {
          class: "product-img-content-four",
          targetimg:
            "data:image/webp;base64,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",
        },
      ],
      settings: {
        itemsToShow: 4,
        snapAlign: "start",
      },
      breakpoints: {
        1024: {
          itemsToShow: 4,
          snapAlign: "start",
        },
        700: {
          itemsToShow: 1,
          snapAlign: "center",
        },
        500: {
          itemsToShow: 1,
          snapAlign: "center",
        },
        400: {
          itemsToShow: 1,
          snapAlign: "center",
        },
        300: {
          itemsToShow: 1,
          snapAlign: "center",
        },
      },
    };
  },
  methods: {
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
  },
};
</script>

<style scoped>
.carousel__item {
  margin-right: 20px;
}
</style>
