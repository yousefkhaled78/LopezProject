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
          <li class="breadcrumb-item active p-0" aria-current="page">News</li>
        </ol>
      </nav>
    </div>
  </section>
  <section class="margin-top">
    <div class="container">
      <div class="row">
        <TheBlogitem />
        <div class="col-lg-9">
          <div class="row">
            <div
              class="col-lg-6 recent-transalete"
              v-for="(recent, i) in recentarray"
              :key="i"
            >
              <div :class="recent.class">
                <a href="http://localhost:8080/#/BlogTemporibus">
                  <img
                    @click="recentimglocal"
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

          <div class="mt-5 d-flex justify-content-center">
            <nav aria-label="Page navigation example">
              <ul class="pagination">
                <li class="page-item">
                  <a class="page-link page-link-active" href="#">1</a>
                </li>
                <li class="page-item">
                  <a
                    class="page-link"
                    href="http://localhost:8080/#/BlogtwoContent"
                    >2</a
                  >
                </li>
                <li class="page-item">
                  <a
                    class="page-link"
                    href="http://localhost:8080/#/BlogtwoContent"
                    aria-label="Next"
                  >
                    <fa icon="chevron-right" />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </section>
  <FotterComponent />
</template>

<script>
import TheNav from "@/components/NavComponent.vue";
import FotterComponent from "@/components/FotterComponent.vue";
import TheBlogitem from "@/components/BlogItem.vue";
import $ from "jquery";

export default {
  data() {
    return {
      slider: [
        {
          img: "28f4c2874d05_94X94_crop_center.avif",
        },
        {
          img: "4f03-cef249b42db8_94X94_crop_center.webp",
        },
        {
          img: "9e5e-8673d0827165_94X94_crop_center.webp",
        },
      ],
      recentarray: [
        {
          class: "recent-content",
          img: "4b1e-b9de-28f4c2874d05_large.webp",
          textone: "Demo Lopez Admin",
          texttwo: "Temporibus autem quibusdam",
          textthree: "Aug 28, 2019",
          textfour: " 6 comments",
        },
        {
          class: "recent-content",
          img: "cef249b42db8_large.webp",
          textone: "Demo Lopez Admin",
          texttwo: "The Standard Chunk Of Lorem Ipsum Used Since",
          textthree: "Aug 28, 2019",
          textfour: " 11 comments",
        },
        {
          class: "recent-content",
          img: "blog-9e5e-8673d0827165_large.webp",
          textone: "Demo Lopez Admin",
          texttwo: "Temporibus autem quibusdam",
          textthree: "Aug 28, 2019",
          textfour: " 0 comments",
        },
        {
          class: "recent-content-blog",
          img: "40b7-a783-58fdda784335_large.webp",
          textone: "Demo Lopez Admin",
          texttwo: "Temporibus autem quibusdam",
          textthree: "Aug 28, 2019",
          textfour: " 0 comments",
        },
        {
          class: "recent-content",
          img: "cef249b42db8_large.webp",
          textone: "Demo Lopez Admin",
          texttwo: "Temporibus autem quibusdam",
          textthree: "Aug 28, 2019",
          textfour: " 0 comments",
        },
        {
          class: "recent-content-blog",
          img: "blog-4_large.webp",
          textone: "Demo Lopez Admin",
          texttwo: "Temporibus autem quibusdam",
          textthree: "Aug 28, 2019",
          textfour: " 0 comments",
        },
        {
          class: "recent-content",
          img: "40b7-a783-58fdda784335_large.webp",
          textone: "Demo Lopez Admin",
          texttwo: "Temporibus autem quibusdam",
          textthree: "Aug 28, 2019",
          textfour: " 0 comments",
        },
        {
          class: "recent-content-blog",
          img: "4b1e-b9de-28f4c2874d05_large.webp",
          textone: "Demo Lopez Admin",
          texttwo: "Temporibus autem quibusdam",
          textthree: "Aug 28, 2019",
          textfour: " 6 comments",
        },
      ],
    };
  },
  components: {
    TheNav,
    FotterComponent,
    TheBlogitem,
  },
  methods: {
    recentimglocal(e) {
      localStorage.setItem("imgblog", e.target.src);
    },
  },
  mounted() {
    $(".recent-transalete").animate(
      { borderSpacing: 0 },
      {
        step: function (now) {
          $(this).css("transform", "translateX(" + now + "px)");
          $(this).css("opacity", "1");
        },
      }
    );
  },
};
</script>
