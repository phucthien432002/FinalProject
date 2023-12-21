import colors from "vuetify/es5/util/colors";
export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  // ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    htmlAttrs: {
			lang: "en"
		},
    titleTemplate: "%s",
    title: "Shopping Website",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
        integrity: 'sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==',
        crossorigin: 'anonymous',
        referrerpolicy: 'no-referrer'
      },
      {rel:'shortcut icon' ,type:'image/x-icon' ,href:'../static/images/logo/iFi-logo-big.ico'},
      {
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css?family=Poppins:300,500,700"
			}
    ],
    script: [
      {
        src: 'https://kit.fontawesome.com/325c78919c.js',
        crossorigin: 'anonymous'
      },
      { src: "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.4/gsap.min.js" },
			{
				src: "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.4/ScrollTrigger.min.js"
			}
    ]
  },
  router: {
    middleware: ["i18n"]
  },

  i18n: {
    vueI18nLoader: true,
    locales: ['en', 'vn'],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: {
          welcome: 'Welcome'
        },
        fr: {
          welcome: 'Bienvenue'
        },
        es: {
          welcome: 'Bienvenido'
        }
      }
    }
  },


  // Global CSS: https://go.nuxtjs.dev/config-css

  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src:"~/plugins/aos",
    ssr: false},],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify"
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/i18n',
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
    // https://go.nuxtjs.dev/content
    "@nuxt/content",
    "cookie-universal-nuxt"
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: "en , vn"
    }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    vendor: ["aos"] ,
    extend(config, ctx){
      if (ctx.isDev && ctx.isClient){
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue|ts)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        })
      }
    },
    env: {
      // Your Firebase configuration here
      firebaseConfig: {
        apiKey: "AIzaSyAWd5LxoO1qJzHweigzvFxguwh9gE8rocw",
        authDomain: "shopping-website-62b9c.firebaseapp.com",
        databaseURL: "https://shopping-website-62b9c-default-rtdb.firebaseio.com",
        projectId: "shopping-website-62b9c",
        storageBucket: "shopping-website-62b9c.appspot.com",
        messagingSenderId: "11927739381",
        appId: "1:11927739381:web:de91ded02c7b1b4d495ebc",
        measurementId: "G-11RS3CCPZK"
      },
    },
  },
};
