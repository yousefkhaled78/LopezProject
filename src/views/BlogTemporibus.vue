<template>
  <TheNav />
  <section class="about-parent">
    <div class="about-parent-box">
      <h1 class="about-title-blog">Temporibus Autem Quibusdam</h1>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="http://localhost:8080/">Home</a>
          </li>
          <li class="breadcrumb-item active p-0" aria-current="page">/</li>
          <li class="breadcrumb-item active p-0" aria-current="page">News</li>
          <li class="breadcrumb-item active p-0" aria-current="page">/</li>
          <li class="breadcrumb-item bread-blog active p-0" aria-current="page">
            Temporibus Autem Quibusdam
          </li>
        </ol>
      </nav>
    </div>
  </section>
  <section class="margin-top">
    <div class="container">
      <div class="row">
        <TheBlogitem />
        <div class="col-lg-9">
          <div class="temporibus-title-item">
            <p>Demo Lopez Admin</p>
            <p>|</p>
            <p>August 28, 2019</p>
          </div>
          <h1 class="title-elment-blog mt-3">Temporibus autem quibusdam</h1>
          <img class="img-temporibus mt-5" src="" />
          <p class="mt-5 mb-5 text-item">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div class="text-temporibus text-item">
            <i>
              Es un hecho establecido hace demasiado tiempo que un lector se
              distraerá con el contenido del texto de un sitio mientras que mira
              su diseño.
            </i>
          </div>
          <p class="mt-5 mb-5 text-item">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aliquid ex ea commodi consequatur? Quis autem vel eum iure
            reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
            pariatur?
          </p>
          <div>
            <h6 class="title-comments">6 COMMENTS</h6>
            <div
              class="mt-4 commnt-box"
              v-for="(com, i) in commentarray"
              :key="i"
            >
              <img class="commnt-img" :src="require(`../assets/${com.img}`)" />
              <div>
                <h6 class="mb-2">{{ com.title }}</h6>
                <p class="mb-2 text-item">{{ com.textone }}</p>
                <p class="text-item">{{ com.texttwo }}</p>
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
          <form class="mt-5">
            <div class="row">
              <div class="col-lg-6">
                <input type="text" class="input-all" placeholder="Name" />
                <input type="email" class="input-all" placeholder="Email" />
                <input type="text" class="input-all" placeholder="Website" />
              </div>
              <div class="col-lg-6">
                <textarea
                  class="input-all textarea-all"
                  placeholder="Message"
                ></textarea>
              </div>
            </div>
            <button type="submit" class="btn-submit-blog">
              <fa :icon="['far', 'envelope']" />
              send
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
  <FotterComponent />
</template>

<script>
import TheNav from "@/components/NavComponent.vue";
import TheBlogitem from "@/components/BlogItem.vue";
import FotterComponent from "@/components/FotterComponent.vue";
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
      commentarray: [
        {
          img: "7070.png",
          title: "UKIDIQAM",
          textone: "Jan 12, 2021 at 02:10",
          texttwo:
            "http://mewkid.net/when-is-xuxlya2/ – Amoxicillin 500 Mg Amoxicillin cca.ftyx.demo-lopez.myshopify.com.slx.hm http://mewkid.net/when-is-xuxlya2/",
        },
        {
          img: "7070.png",
          title: "UKIDIQAM",
          textone: "Jan 12, 2021 at 02:10",
          texttwo:
            "http://mewkid.net/when-is-xuxlya2/ – Amoxicillin 500 Mg Amoxicillin cca.ftyx.demo-lopez.myshopify.com.slx.hm http://mewkid.net/when-is-xuxlya2/",
        },
        {
          img: "7070.png",
          title: "UKIDIQAM",
          textone: "Jan 12, 2021 at 02:10",
          texttwo:
            "http://mewkid.net/when-is-xuxlya2/ – Amoxicillin 500 Mg Amoxicillin cca.ftyx.demo-lopez.myshopify.com.slx.hm http://mewkid.net/when-is-xuxlya2/",
        },
      ],
    };
  },
  components: {
    TheNav,
    FotterComponent,
    TheBlogitem,
  },
  mounted() {
    $(".img-temporibus").attr("src", localStorage.getItem("imgblog"));
  },
};
</script>
