import axios from "axios";
import Vue from "vue";

const baseURL = "https://my.api.mockaroo.com/";

const instance = axios.create({
  baseURL,
  // {
  //   "X-API-Key":"74e98be0"
  // }
});

instance.interceptors.request.use(
  (config) => {
    config.headers["X-API-Key"] = "337369d0";
    return config;
  },
  (err) => {
    Promise.reject(err);
  }
);

// export default instance;
Vue.prototype.axios = instance;
