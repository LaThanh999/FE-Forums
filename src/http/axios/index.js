import axios from "axios";
import Vue from "vue";

const baseURL = "https://my.api.mockaroo.com/";

const instance = axios.create({
  baseURL,
  // {
  //   "X-API-Key":"b112a4d0"
  // }
});

instance.interceptors.request.use(
  (config) => {
    config.headers["X-API-Key"] = "b112a5ed";
    return config;
  },
  (err) => {
    Promise.reject(err);
  }
);

// export default instance;
Vue.prototype.axios = instance;
