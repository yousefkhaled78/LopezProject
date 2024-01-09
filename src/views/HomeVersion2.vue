<template>
  <TheNav />
  <section class="mt-5">
    <Carousel>
      <Slide v-for="(slide, i) in slidehome" :key="i">
        <div class="carousel__item carousel__item-home">
          <div class="home-slider">
            <img
              :id="slide.idimg"
              class="slider-img"
              :src="require(`../assets/${slide.img}`)"
            />
            <div class="home-slider-popup">
              <div class="container carousel-container">
                <div class="carousel-home-box">
                  <h1>SUMMER COLLECTION</h1>
                  <p class="mt-3">
                    It is a long established fact that a reader will be
                    distracted by the readable
                    <br />
                    content of a page when looking at its layout, normal
                    distribution of letters
                  </p>
                  <button class="carousel-button">BUY NOW</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slide>
      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>
  </section>
  <section class="mt-5 mb-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-md-6" v-for="(gall, i) in galleryimg" :key="i">
          <div class="galleryhome">
            <img :src="require(`../assets/${gall.img}`)" />
          </div>
        </div>
      </div>
    </div>
  </section>
  <div class="card-home-versontwo">
    <h5 @click="variablesize" class="color-item">ONSALE</h5>
    <h5 @click="variablesizetwo">NEW ARRIVALS</h5>
    <h5 @click="variablesizethree">FEATURED</h5>
  </div>
  <div class="card-show-1">
    <CardHomeTwo />
  </div>
  <div class="card-show-2">
    <CardHome />
  </div>
  <div class="card-show-3">
    <CardHomeThree />
  </div>
  <section class="mt-5 testimonial">
    <TestHome />
  </section>
  <section class="recent-elment">
    <div class="title-home-elment mt-5">
      <div class="title-home">
        <h2>RECENT NEWS</h2>
      </div>
    </div>
    <div class="container mt-4">
      <div class="recent-transalete">
        <div class="row">
          <div class="col-lg-4" v-for="(recent, i) in recentarray" :key="i">
            <div :class="recent.class">
              <a href="">
                <img
                  class="recent-img"
                  :src="require(`../assets/${recent.img}`)"
                />
              </a>
              <div class="recent-text">
                <p class="font-small">{{ recent.textone }}</p>
                <a href="">
                  <h5>{{ recent.texttwo }}</h5>
                </a>
                <div class="font-small d-flex gap-2 align-items-center">
                  <p>{{ recent.textthree }}</p>
                  <span class="recent-span"></span>
                  <p>{{ recent.textfour }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="home-content mt-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <h3 class="mb-2">Get All Updates</h3>
          <p>
            There are many variations of passages of available, but the majority
            have suffered alteration in some form.
          </p>
        </div>
        <div class="col-lg-6">
          <form class="form-home-email">
            <div class="home-email-box">
              <input
                class="input-home"
                type="email"
                placeholder="email@example.com"
              />
              <button class="submit-send-home" type="submit">
                <fa icon="paper-plane" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  <section class="mt-5">
    <div class="container">
      <Carousel v-bind="settings" :breakpoints="breakpoints">
        <Slide v-for="(slide, i) in slideimgarray" :key="i">
          <div class="carousel__item">
            <img :src="require(`../assets/${slide.img}`)" />
          </div>
        </Slide>

        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </div>
  </section>
  <FotterComponent />
</template>

<script>
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";
import TheNav from "@/components/NavComponent.vue";
import CardHome from "@/components/CardHome.vue";
import TestHome from "@/components/TestHome.vue";
import FotterComponent from "@/components/FotterComponent.vue";
import CardHomeTwo from "@/components/CardHomeTwo.vue";
import CardHomeThree from "@/components/CardHomeThree.vue";
import $ from "jquery";
import "vue3-carousel/dist/carousel.css";

export default {
  data() {
    return {
      slidehome: [
        {
          img: "slider_02.1_92bba09f.webp",
          idimg: "slider-setinterval",
        },
        {
          img: "slider_02_ae4a6e63.webp",
          idimg: "slider-setinterval-two",
        },
      ],
      slideimgarray: [
        {
          img: "b_logo_06.webp",
        },
        {
          img: "b_logo_04.webp",
        },
        {
          img: "b_logo_03.webp",
        },
        {
          img: "b_logo_02.webp",
        },
        {
          img: "b_logo_01.webp",
        },
        {
          img: "b_logo_06 (1).webp",
        },
        {
          img: "b_logo_03.webp",
        },
        {
          img: "b_logo_06.webp",
        },
        {
          img: "b_logo_01.webp",
        },
        {
          img: "b_logo_06.webp",
        },
      ],
      recentarray: [
        {
          class: "recent-content",
          img: "28f4c2874d05_large.webp",
          textone: "Demo Lopez Admin",
          texttwo: "Temporibus autem quibusdam",
          textthree: "Aug 28, 2019",
          textfour: " 6 comments",
        },
        {
          class: "recent-content-two",
          img: "cef249b42db8_large.webp",
          textone: "Demo Lopez Admin",
          texttwo: "The Standard Chunk Of Lorem Ipsum Used Since",
          textthree: "Aug 28, 2019",
          textfour: " 11 comments",
        },
        {
          class: "recent-content",
          img: "28f4c2874d05_large.webp",
          textone: "Demo Lopez Admin",
          texttwo: "Temporibus autem quibusdam",
          textthree: "Aug 28, 2019",
          textfour: " 0 comments",
        },
      ],
      galleryimg: [
        {
          img: "banner_01_77a4cdbb-5b8a-4e0d-b5fe-c50c90702ecf.webp",
        },
        {
          img: "banner_02_ad6c3e38-26b9.webp",
        },
      ],
      settings: {
        itemsToShow: 1,
        snapAlign: "center",
      },
      breakpoints: {
        700: {
          itemsToShow: 3.5,
          snapAlign: "center",
        },
        1024: {
          itemsToShow: 5,
          snapAlign: "start",
        },
      },
    };
  },
  components: {
    TheNav,
    CardHome,
    TestHome,
    FotterComponent,
    Carousel,
    Slide,
    CardHomeTwo,
    CardHomeThree,
    Pagination,
    Navigation,
  },
  mounted() {
    setInterval(function () {
      $("#slider-setinterval").prop(
        "src",
        "http://localhost:8080/img/slider_02_ae4a6e63.978f3bf9.webp"
      );
      $("#slider-setinterval-two").prop(
        "src",
        "http://localhost:8080/img/slider_02.1_92bba09f.ff1dfa2a.webp"
      );
    }, 3500);
    setInterval(function () {
      $(".carousel-container").fadeIn(1000);
    }, 1000);
    $(window).scroll(function () {
      if ($(window).scrollTop() >= 1550) {
        $(".recent-transalete").animate(
          { borderSpacing: 0 },
          {
            step: function (now) {
              $(this).css("transform", "translateX(" + now + "px)");
              $(this).css("opacity", "1");
            },
          }
        );
      }
      if ($(window).scrollTop() >= 250) {
        $(".button-arrow-top").fadeIn();
      } else {
        $(".button-arrow-top").fadeOut();
      }
    });
  },
  methods: {
    variablesize(e) {
      $(e.target).addClass("color-item");
      $(e.target).siblings().removeClass("color-item");
      $(".card-show-2").fadeOut();
      $(".card-show-1").fadeIn();
      $(".card-show-3").fadeOut();
    },
    variablesizetwo(e) {
      $(e.target).addClass("color-item");
      $(e.target).siblings().removeClass("color-item");
      $(".card-show-2").fadeIn();
      $(".card-show-1").fadeOut();
      $(".card-show-3").fadeOut();
    },
    variablesizethree(e) {
      $(e.target).addClass("color-item");
      $(e.target).siblings().removeClass("color-item");
      $(".card-show-2").fadeOut();
      $(".card-show-3").fadeIn();
    },

    showsetting(e) {
      $(e.target).parent().hide();
      $(e.target).parent().siblings(".home-icon-gear").show();
      $(e.target)
        .parent()
        .siblings(".home-icon-gear")
        .addClass("seating-rotete");
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
    },
    hidecheck(e) {
      $(e.target).hide();
      $(".home-icon-heart").show();
    },
  },
};
</script>
