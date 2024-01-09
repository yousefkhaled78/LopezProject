<template>
  <section class="margin-top mb-5">
    <div class="container">
      <div class="d-flex gap-3 mb-5 justify-content-center">
        <h2 class="title-description" @click="description">Description</h2>
        <h2 class="title-description" @click="reviews">Reviews</h2>
        <h2 class="title-description" @click="comments">Comments</h2>
      </div>
      <div class="description">
        <p class="mb-1">
          On the other hand, we denounce with righteous indignation and dislike
          men who are so beguiled and demoralized by the charms of pleasure of
          the moment, so blinded by desire, that they cannot foresee the pain
          and trouble that are bound to ensue; and equal blame belongs to those
          who fail in their duty through weakness of will, which is the same as
          saying through shrinking from toil and pain. These cases are perfectly
          simple and easy to distinguish. In a free hour, when our power of
          choice is untrammelled and when nothing prevents our being able to do
          what we like best, every pleasure is to be welcomed and every pain
          avoided. But in certain circumstances and owing to the claims of duty
          or the obligations of business it will frequently occur that pleasures
          have to be repudiated and annoyances accepted. The wise man therefore
          always holds in these matters to this principle of selection: he
          rejects pleasures to secure other greater pleasures, or else he
          endures pains to avoid worse pains.
        </p>
        <p>
          Et harum quidem rerum facilis est et expedita distinctio. Nam libero
          tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo
          minus id quod maxime placeat facere possimus, omnis voluptas assumenda
          est, omnis dolor repellendus. Temporibus autem quibusdam et aut
          officiis debitis aut rerum necessitatibus saepe eveniet ut et
          voluptates repudiandae sint et molestiae non recusandae. Itaque earum
          rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus
          maiores alias consequatur aut perferendis doloribus asperiores
          repellat.
        </p>
      </div>

      <div class="review">
        <h3>Customer Reviews</h3>
        <div class="d-flex justify-content-between mt-3">
          <p class="text-item">No reviews yet</p>
          <p @click="formreview" class="text-item form-show-review">
            Write a review
          </p>
        </div>
        <form class="form-review mt-3">
          <h6>Write a review</h6>
          <div class="mt-3">
            <label class="text-item mb-2">Name</label>
            <input
              class="input-all input-prdact"
              type="text"
              placeholder="Enter your name"
            />
          </div>
          <div class="mt-2">
            <label class="text-item mb-2">Email</label>
            <input
              class="input-all input-prdact"
              type="email"
              placeholder="john.smith@example.com"
            />
          </div>
          <div>
            <p class="text-item mb-2">Rating</p>
            <div class="d-flex gap-2">
              <fa
                @click="starreview"
                class="star-review"
                :icon="['far', 'star']"
              />
              <fa
                @click="starreview"
                class="star-review"
                :icon="['far', 'star']"
              />
              <fa
                @click="starreview"
                class="star-review"
                :icon="['far', 'star']"
              />
              <fa
                @click="starreview"
                class="star-review"
                :icon="['far', 'star']"
              />
              <fa
                @click="starreview"
                class="star-review"
                :icon="['far', 'star']"
              />
            </div>
          </div>
          <div class="mt-3">
            <label class="text-item mb-2">Review Title</label>
            <input
              class="input-all input-prdact"
              type="text"
              placeholder="Give your review a title"
            />
          </div>
          <div class="mt-3">
            <label class="text-item mb-2">Body of Review (1500)</label>
            <textarea
              class="input-all input-prdact textarea-all"
              placeholder="Write your comments here"
            ></textarea>
          </div>
          <div class="button-submit-review">
            <button type="submit" class="button-prodact">Submit Review</button>
          </div>
        </form>
      </div>

      <div class="comments">
        <p class="text-item mb-3">ALSO ON DEMO-STORE</p>
        <Carousel v-bind="settings" :breakpoints="breakpoints">
          <Slide v-for="slide in 10" :key="slide">
            <div class="carousel__item">
              <div class="comments-card">
                <div class="comments-card-img">
                  <div class="comments-popup">
                    <span>Ethnicraft N701 Footstool in Dark Grey</span>
                  </div>
                </div>
                <div class="p-1">
                  <p class="text-item">a day ago</p>
                  <p class="text-item">
                    2500 yard spool of 100% spun polyester thread For top
                    stitching, denim and
                  </p>
                </div>
              </div>
            </div>
          </Slide>
          <template #addons>
            <Navigation />
          </template>
        </Carousel>
        <section class="advertisement margin-top">
          <p class="text-item">Sponsored</p>
          <div class="row">
            <div
              class="col-lg-6 col-md-6 col-sm-6"
              v-for="slide in 2"
              :key="slide"
            >
              <div class="advertisement-card">
                <img class="advertisement-img" src="../assets/19.jpg" />
                <p class="advertisement-text">Play War Thunder now for free</p>
                <div class="d-flex justify-content-between">
                  <p>War Thunder</p>
                  <button class="advertisement-btn">play Now</button>
                </div>
              </div>
            </div>
            <div
              class="col-lg-4 col-md-6 col-sm-6 mt-5"
              v-for="slide in 3"
              :key="slide"
            >
              <div class="advertisement-card">
                <img class="advert-img-2" src="../assets/19.jpg" />
                <p class="advertisement-text">Play War Thunder now for free</p>
                <div class="d-flex justify-content-between">
                  <p>War Thunder</p>
                  <button class="advertisement-btn">play Now</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <form class="margin-top">
          <h6 class="fw-bold">0 Comments</h6>
          <hr />
          <div class="d-flex gap-2">
            <div class="gogle">G</div>
            <div class="w-100">
              <div>
                <input
                  type="text"
                  placeholder="start the dicuration"
                  class="input-rivew-event input-all"
                />
              </div>
              <div class="sohilal-rivew">
                <div>
                  <p class="text-item">LOG IN WITH</p>
                  <div class="d-flex gap-2">
                    <div class="gogle gogle-1">D</div>
                    <div class="gogle gogle-2">f</div>
                    <div class="gogle gogle-3">C</div>
                    <div class="gogle gogle-4">G</div>
                  </div>
                </div>
                <div class="w-100">
                  <p class="mb-2 text-item">OR SIGN UP WITH DISQUS</p>
                  <input
                    class="input-rivew-name input-all-rivew input-all"
                    type="text"
                    placeholder="name"
                  />
                  <input
                    class="input-rivew-show input-all-rivew input-all"
                    type="email"
                    placeholder="Email"
                  />
                  <input
                    class="input-rivew-show input-all-rivew input-all"
                    type="password"
                    placeholder="password"
                  />
                  <div class="content-submit-review">
                    <button class="submit-review">
                      <fa icon="right-long" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-5">
            <div class="d-flex justify-content-between gap-5 flex-wrap">
              <div class="d-flex gap-5">
                <div class="heart-rivew">
                  <fa :icon="['far', 'heart']" />
                </div>
                <div class="d-flex gap-3 align-items-center">
                  <p class="share-item">Share</p>
                  <div class="envelope-rivew-content">
                    <a href="" class="envelope-rivew">
                      <fa :icon="['fas', 'envelope']" />
                    </a>
                    <a href="" class="envelope-rivew">
                      <fa :icon="['fas', 'envelope']" />
                    </a>
                    <a href="" class="envelope-rivew">
                      <fa :icon="['fas', 'envelope']" />
                    </a>
                    <a href="" class="envelope-rivew">
                      <fa :icon="['fas', 'envelope']" />
                    </a>
                  </div>
                </div>
              </div>
              <div class="d-flex gap-3">
                <p @click="bestitem" class="best-item">Best</p>
                <p @click="bestitem" class="best-item">Newest</p>
                <p @click="bestitem" class="best-item">Oldest</p>
              </div>
            </div>
          </div>
          <div class="mt-5 comment-box">
            <p>Be the first to comment.</p>
          </div>
          <hr />
          <section class="advertisement margin-top">
            <p class="text-item mb-2">Sponsored</p>
            <div class="row">
              <div
                class="col-lg-4 col-md-6 col-sm-6"
                v-for="slide in 3"
                :key="slide"
              >
                <div class="advertisement-card">
                  <img class="advert-img-2" src="../assets/19.jpg" />
                  <p class="advertisement-text">
                    Play War Thunder now for free
                  </p>
                  <div class="d-flex justify-content-between">
                    <p>War Thunder</p>
                    <button class="advertisement-btn">play Now</button>
                  </div>
                </div>
              </div>
              <div
                class="col-lg-4 col-md-6 col-sm-6 mt-5"
                v-for="slide in 3"
                :key="slide"
              >
                <div class="advertisement-card">
                  <img class="advert-img-2" src="../assets/19.jpg" />
                  <p class="advertisement-text">
                    Play War Thunder now for free
                  </p>
                  <div class="d-flex justify-content-between">
                    <p>War Thunder</p>
                    <button class="advertisement-btn">play Now</button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </form>
      </div>
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
      numberprdact: 1,
      settings: {
        itemsToShow: 4,
        snapAlign: "start",
      },
      breakpoints: {
        1024: {
          itemsToShow: 6,
          snapAlign: "start",
        },
        700: {
          itemsToShow: 2,
          snapAlign: "center",
        },
        500: {
          itemsToShow: 2,
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
  mounted() {
    $(".input-rivew-event").on("focus", function (e) {
      $(e.target).addClass("input-rivew");
    });

    $(".input-rivew-name").on("focus", function () {
      $(".input-rivew-show").show();
    });
  },
  methods: {
    formreview() {
      $(".form-review").toggle();
    },
    reviews() {
      $(".description").fadeOut();
      $(".review").fadeIn();
      $(".comments").fadeOut();
    },
    starreview(e) {
      $(e.target).toggleClass("starreview-active");
    },
    bestitem(e) {
      $(e.target).addClass("best-item-two");
      $(e.target).siblings().removeClass("best-item-two");
    },
    comments() {
      $(".comments").fadeIn();
      $(".review").fadeOut();
      $(".description").fadeOut();
    },
    description() {
      $(".comments").fadeOut();
      $(".review").fadeOut();
      $(".description").fadeIn();
    },
  },
};
</script>

<style scoped>
.carousel__item {
  margin-right: 10px;
}
</style>
