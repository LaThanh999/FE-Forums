l
<template>
  <div>
    <v-item-group>
      <v-container>
        <v-row>
          <v-col v-for="(item, index) in banners" :key="index" cols="12" md="3">
            <v-item v-slot="{ active, toggle }">
              <v-box-title
                :active="active"
                :toggle="toggle"
                :post="item"
              ></v-box-title>
            </v-item>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="9">
            <div class="body-title">
              <p>Danh sách các chuyên mục</p>
            </div>
            <div v-for="(item, index) in category" :key="index">
              <v-cate
                :item="item.subCategories"
                :nameCate="item.cateName"
              ></v-cate>
              <div class="my-2"></div>
            </div>
            <!-- <v-cate :item="may_tinh" nameCate="Máy tính"></v-cate>
            <div class="my-2"></div>
            <v-cate :item="san_pham" nameCate="Sản phẩm và công nghệ"></v-cate> -->
            <div style="display: flex; justify-content: center" class="mt-3">
              <v-pagination :length="3" disabled></v-pagination>
            </div>
          </v-col>
          <v-col cols="3" class="mt-3">
            <v-banner title="Chủ đề được quan tâm" :x="1" :y="6"></v-banner>
            <div style="margin-top: 50px"></div>
            <v-banner title="Chủ đề được yêu thích" :x="7" :y="12"></v-banner>
          </v-col>
        </v-row>
      </v-container>
    </v-item-group>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import VBanner from "../components/home/vBanner.vue";
import vBoxTitle from "../components/home/vBoxTitle.vue";
import VCate from "../components/home/vCate.vue";

const templateBanner = [
  {
    img:
      "https://cdn.tgdd.vn/Files/2021/03/04/1332567/iphone-13-pro-du-kien-se-co-ong-kinh-sieu-rong-duoc-cai-tien-voi-tinh-nang-on-dinh-dich-chuyen-cam-bien-sensor-shift-va-tu-dong-lay-net-1.jpg",
    title: "Iphone 13 đang trở thành xu thế",
    name: "Nguyễn Văn A",
    time: "3 giờ trước",
  },
  {
    img:
      "https://fptshop.com.vn/uploads/originals/2017/11/22//636469584174032504_tim-hieu-cong-nghe-ai-1.jpg",
    title: "Sự phát triển của AI",
    name: "Trần Văn B",
    time: "1 giờ trước",
  },
  {
    img:
      "https://img.global.news.samsung.com/global/wp-content/uploads/2021/08/galaxy_zfold3_zflip35g_main_kv.jpg",
    title: "Sự phát triển của Smartphone",
    name: "Lê Thị C",
    time: "20 giờ trước",
  },
  {
    img:
      "https://static.lag.vn/upload/news/21/06/22/chronic_fatigue_syndrome-e1555827430379_SHSR.jpg?w=800&encoder=wic&subsampling=444",
    title: "Bách khoa 96 rẽ ngang sang làm IT",
    name: "IT BK 96",
    time: "10 giờ trước",
  },
];
export default {
  components: { vBoxTitle, VCate, VBanner },
  name: "Home",
  data: () => ({
    category: [],
    banners: templateBanner,
    userThread: [],
  }),
  mounted() {
    this.setLoading(true);
    this.axios
      .get("https://my.api.mockaroo.com/user-thread.json", {
        headers: {
          "X-API-Key": "74e98be0",
        },
      })
      .then(({ data }) => {
        this.userThread = data;
      });
    this.axios
      .get("/unauthorized-api/home/list-cat-home")
      .then(({ data: { paginationlist } }) => {
        this.category = paginationlist;
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        this.setLoading(false);
      });
  },
  methods: {
    ...mapActions("loading", ["setLoading"]),
  },
};
</script>

<style scoped lang="scss">
.body {
  background: #9e9e9e75;
}
.body-title {
  height: 59px;
  background: #38761d;
  border: 1px;
  p {
    margin-left: 20px;
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    color: rgba(255, 255, 255, 0.85);
  }
}
</style>
