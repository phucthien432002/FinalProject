<i18n>
    {
        "en":{
            "helloworld": "helloworld"
        },
        "vn":{
            "helloworld": "xin chao"
        }

    }
</i18n>
<template>
    <div class="d-flex flex-column">
      <br />
      <v-row>
        <v-col
          v-for="(image, index) in images"
          :key="index"
          cols="12"
          lg="3"
          md="6"
          sm="6"
          class="py-2 px-4"
        >
          <v-card
            class="overflow-hidden white--text card-img-transition pa-4"
            :style="`background: url('${image.src}');' background-size: 100px`"
            height="400px"
            max-width="600px"
          >
            <div class="d-flex flex-column card-content">
              <v-card-text>
              <h3 style="color:rgb(100, 255, 255)" class="font-weight-bold text-center">{{ image.name }}</h3>
              <h4>{{$t('helloworld')}}</h4>
              </v-card-text>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </template>
  
  <script>
  import AOS from "aos";
  import "aos/dist/aos.css";
  export default {
computed: {
  images() {
    return [
      {
        src: "/images/best_seller_menu/1.jpg",
        name: this.$t("menu1")
      },
      {
        src: "/images/best_seller_menu/2.jpg",
        name: this.$t("menu2")
      },
      {
        src: "/images/best_seller_menu/3.jpg",
        name: this.$t("menu3")
      },
      {
        src: "/images/best_seller_menu/4.jpg",
        name: this.$t("menu4")
      },
    ];
  }
},
    mounted() {
      AOS.init({
        offset: 20,
      });
    },
  };
  </script>
  
  <style lang="scss" scoped>
  .card-img-transition {
    background-size: 600px !important;
    transition: background-size 2s, border 1s, background-position 2s;
    background-repeat: no-repeat;
    background-position: right bottom !important;
    &:hover {
      background-position: center center !important;
      background-size: 800px !important;
      border-spacing: 15px 50px;
    }
  }
  .card-content {
    height: 100% !important;
    transition: border;
    border: 0 solid white;
    &:hover {
      border: 2px solid white;
    }
  }
  </style>
 