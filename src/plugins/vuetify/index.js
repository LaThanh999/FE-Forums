import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import "@mdi/font/css/materialdesignicons.css";

Vue.use(Vuetify);

const opts = {
  theme: {
    themes: {
      light: {
        primary: "#38761D",
      },
    },
  },
  icons: {
    iconfont: "mdi",
  },
};

export default new Vuetify(opts);
