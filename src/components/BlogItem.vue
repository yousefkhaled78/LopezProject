<template>
  <div class="col-lg-3 col-md-4 col-sm-4">
    <div class="blog-margin">
      <form>
        <label class="mb-3 title-blog">Search</label>
        <div class="home-email-box">
          <input
            class="input-home input-search-blog"
            type="search"
            placeholder="Search our store"
          />
          <button class="submit-send-home submit-search-blog" type="submit">
            <fa :icon="['fas', 'magnifying-glass']" />
          </button>
        </div>
      </form>
      <div class="mt-5">
        <h6 class="title-blog">Custom Menu</h6>
        <ul class="mt-3 link-blog-content">
          <li class="links-blog-item">
            <div class="links-blog-box" @click="blogplusshow">
              <router-link to="/">Home</router-link>
              <fa class="blog-plus" icon="plus" />
              <fa class="minus-blog" icon="minus" />
            </div>
            <ul class="link-blog-show">
              <li><router-link to="/">Home Version 1</router-link></li>
              <li><router-link to="/">Home Version 2</router-link></li>
            </ul>
          </li>
          <li class="links-blog-item">
            <div class="links-blog-box" @click="blogplusshow">
              <router-link to="/">Shop</router-link>
              <fa class="blog-plus" icon="plus" />
              <fa class="minus-blog" icon="minus" />
            </div>
            <ul class="link-blog-show">
              <li><router-link to="/">Shoes</router-link></li>
              <li><router-link to="/">Jeans</router-link></li>
            </ul>
          </li>
          <li class="links-blog-item">
            <div class="links-blog-box" @click="blogplusshow">
              <router-link to="/">Product</router-link>
              <fa class="blog-plus" icon="plus" />
              <fa @click="minusbloghide" class="minus-blog" icon="minus" />
            </div>
            <ul class="link-blog-show">
              <li><router-link to="/">Simple Product</router-link></li>
              <li><router-link to="/">Affiliate Product</router-link></li>
              <li><router-link to="/">Variable Product</router-link></li>
              <li><router-link to="/">Soldout Product</router-link></li>
            </ul>
          </li>
          <li class="links-blog-item">
            <div class="links-blog-box" @click="blogplusshow">
              <router-link to="/" class="color-blog">Blog</router-link>
              <fa class="color-blog blog-plus" icon="plus" />
              <fa class="color-blog minus-blog" icon="minus" />
            </div>
            <ul class="link-blog-show">
              <li><router-link to="/">Blog</router-link></li>
              <li><router-link to="/">Blog Details</router-link></li>
            </ul>
          </li>
          <li class="links-blog-item mb-3">
            <router-link to="/about">About Us</router-link>
          </li>
          <li class="links-blog-item">
            <router-link to="/about">Contact Us</router-link>
          </li>
        </ul>
      </div>
      <div class="mt-5">
        <h6 class="title-blog">Recent Post</h6>
        <div class="row mb-4 mt-4" v-for="(slid, i) in slider" :key="i">
          <div class="col-lg-6">
            <a href="http://localhost:8080/#/BlogTemporibus">
              <img
                :data-target="slid.targettext"
                @click="recentimglocal"
                class="crop-center"
                :src="require(`../assets/${slid.img}`)"
              />
            </a>
          </div>
          <div class="col-lg-6">
            <div class="blog-inner-text">
              <p class="mb-2 item">Aug 28, 2019</p>
              <p class="blog-inner-elpsics">{{ slid.text }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-5 linksto-images">
        <h6 class="title-blog">Archive</h6>
        <p class="mt-3 blog-year">August 2019</p>
        <div class="linksto-images-box">
          <a
            @click="blogdatatarget"
            href="http://localhost:8080/#/StandardBlog"
            data-target="http://localhost:8080/img/4b1e-b9de-28f4c2874d05_large.4709bc1f.webp"
            >Temporibus autem quibusdam</a
          >
          <a
            @click="blogdatatarget"
            data-target="http://localhost:8080/img/cef249b42db8_large.75167781.webp"
            href="http://localhost:8080/#/StandardBlog"
            >The Standard Chunk Of Lorem Ipsum Used Since</a
          >
          <a
            @click="blogdatatarget"
            href="http://localhost:8080/#/StandardBlog"
            data-target="/img/blog-9e5e-8673d0827165_large.4274d830.webp"
            >Temporibus autem quibusdam</a
          >
          <a
            data-target="/img/40b7-a783-58fdda784335_large.06e81b9b.webp"
            @click="blogdatatarget"
            href="http://localhost:8080/#/StandardBlog"
            >The Standard Chunk Of Lorem Ipsum Used Since</a
          >
          <a
            data-target="http://localhost:8080/img/cef249b42db8_large.75167781.webp"
            @click="blogdatatarget"
            href="http://localhost:8080/#/StandardBlog"
            >Temporibus autem quibusdam</a
          >
          <a
            data-target="/img/blog-4_large.487c0e68.webp"
            @click="blogdatatarget"
            href="http://localhost:8080/#/StandardBlog"
            >The Standard Chunk Of Lorem Ipsum Used Since</a
          >
          <a
            data-target="/img/40b7-a783-58fdda784335_large.06e81b9b.webp"
            @click="blogdatatarget"
            href="http://localhost:8080/#/StandardBlog"
            >Temporibus autem quibusdam</a
          >
          <a
            data-target="/img/4b1e-b9de-28f4c2874d05_large.4709bc1f.webp"
            @click="blogdatatarget"
            href="http://localhost:8080/#/StandardBlog"
            >The Standard Chunk Of Lorem Ipsum Used Since</a
          >
          <a
            data-target="/img/blog-4_large.487c0e68.webp"
            @click="blogdatatarget"
            href="http://localhost:8080/#/StandardBlog"
            >It is a long established fact that a reader will</a
          >
          <a
            data-target="/img/4b1e-b9de-28f4c2874d05_large.4709bc1f.webp"
            @click="blogdatatarget"
            href="http://localhost:8080/#/StandardBlog"
            >It is a long established fact that a reader will</a
          >
        </div>
      </div>
      <div class="mt-5">
        <div class="title-blog">Tags</div>
        <div class="links-brand">
          <a @click="tagsclick" href="http://localhost:8080/#/BlogTags"
            >Bride</a
          >
          <a @click="tagsclick" href="http://localhost:8080/#/BlogTags"
            >Jewellery</a
          >
          <a @click="tagsclick" href="http://localhost:8080/#/BlogTags"
            >Wedding</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  data() {
    return {
      slider: [
        {
          img: "28f4c2874d05_94X94_crop_center.avif",
          text: "Temporibus autem quibusdam",
          targettext: "Temporibus autem quibusdam",
        },
        {
          img: "4f03-cef249b42db8_94X94_crop_center.webp",
          text: "The Standard Chunk Of Lorem Ipsum Used Since",
          targettext: "The Standard Chunk Of Lorem Ipsum Used Since",
        },
        {
          img: "9e5e-8673d0827165_94X94_crop_center.webp",
          text: "Temporibus autem quibusdam",
          targettext: "Temporibus autem quibusdam",
        },
      ],
    };
  },
  methods: {
    blogplusshow(e) {
      $(e.target).siblings(".link-blog-show").toggle(500);
      $(e.target).find(".blog-plus").toggle();
      $(e.target).find(".minus-blog").toggle();
    },
    blogdatatarget(e) {
      localStorage.setItem("linkblogimg", $(e.target).data("target"));
      $(".img-temporibus").attr("src", localStorage.getItem("linkblogimg"));
      localStorage.setItem("standard-title", $(e.target).text());
      $(".title-blog-storage").text(localStorage.getItem("standard-title"));
      $(".standard-title").text(localStorage.getItem("standard-title"));
    },
    recentimglocal(e) {
      localStorage.setItem("imgblog", e.target.src);
      $(".img-temporibus").attr("src", localStorage.getItem("imgblog"));
      localStorage.setItem("text-inner", $(e.target).data("target"));
      let textinner = localStorage.getItem("text-inner");
      $(".title-elment-blog").text(textinner);
      $(".bread-blog").text(textinner);
      $(".about-title-blog").text(textinner);
    },
    tagsclick(e) {
      localStorage.setItem("text-tags", $(e.target).text());
      $(".bread-tags").text(localStorage.getItem("text-tags"));
    },
  },
  mounted() {
    $(".img-temporibus").attr("src", localStorage.getItem("imgblog"));
    let textinner = localStorage.getItem("text-inner");
    $(".title-elment-blog").text(textinner);
    $(".bread-blog").text(textinner);
    $(".about-title-blog").text(textinner);
    $(".bread-tags").text(localStorage.getItem("text-tags"));
    $(".title-blog-storage").text(localStorage.getItem("standard-title"));
    $(".standard-title").text(localStorage.getItem("standard-title"));
  },
};
</script>
