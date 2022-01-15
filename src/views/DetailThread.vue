<template>
  <div>
    <v-item-group>
      <v-container>
        <v-row>
          <v-row class="mt-4">
            <v-breadcrumbs
              divider=">"
              large
              :items="breadcrumbs"
            ></v-breadcrumbs>
          </v-row>
        </v-row>
        <v-row>
          <v-col cols="9">
            <v-row>
              <v-col cols="3" class="pr-0">
                <v-sheet class="box-info">
                  <v-avatar class="mb-4" color="grey darken-1" size="80">
                    <img
                      src="https://cdn.vuetifyjs.com/images/john.jpg"
                      alt="John"
                  /></v-avatar>
                  <div style="color: #ffffff">{{ posts.name }}</div>
                  <v-row class="ma-0 mt-2" style="color: #ffffff">
                    <v-icon color="white" class="mr-2">mdi-account</v-icon>
                    <div>User</div>
                  </v-row>
                  <v-row class="ma-0 mt-2" style="color: #ffffff">
                    <v-icon color="white" class="mr-2">mdi-clock</v-icon>
                    <div>{{ posts.date }}</div>
                  </v-row>
                </v-sheet>
              </v-col>
              <v-col cols="9" class="pl-0">
                <v-box-chat :post="posts"></v-box-chat>
              </v-col>
            </v-row>
            <!-- rep cmt -->
            <v-row>
              <v-divider color="black" class="my-10"></v-divider>
            </v-row>
            <!-- rep cmt -->
            <v-row v-for="(item, index) in comment" :key="index">
              <v-col cols="3" class="pr-0">
                <v-sheet class="box-info">
                  <v-avatar class="mb-4" color="grey darken-1" size="80">
                    <img
                      src="https://cdn.vuetifyjs.com/images/john.jpg"
                      alt="John"
                  /></v-avatar>
                  <div style="color: #ffffff">{{ item.name }}</div>
                </v-sheet>
              </v-col>
              <v-col cols="9" class="pl-0">
                <v-box-rep :post="item"></v-box-rep>
              </v-col>
            </v-row>
            <!-- rep cmt -->
            <v-row>
              <v-divider color="black" class="my-10"></v-divider>
            </v-row>
            <div style="margin: 20px">
              <h4>Trả lời:</h4>
              <!-- <v-textarea
                solo
                color="primary"
                name="input-7-4"
                label="Trả lời"
                v-model="repCmt"
              ></v-textarea> -->
              <vue-editor v-model="repCmt"></vue-editor>
              <div
                style="display: flex; flex-direction: row-reverse"
                class="mt-2 pr-4"
              >
                <v-btn color="primary" @click="_clickSubmit()" elevation="2"
                  >Thêm bình luận</v-btn
                >
              </div>
            </div>
          </v-col>
          <v-col cols="3" class="mt-3">
            <v-banner></v-banner>
          </v-col>
        </v-row>
      </v-container>
    </v-item-group>
  </div>
</template>

<script>
const commentsMapper = [
  {
    cmt: "Winner phát card đi.",
  },
  {
    cmt: "Like cho chủ thớt.",
  },
  {
    cmt: "Nên đợi tới năm sau, vì phụ kiện giờ mắc",
  },
  {
    cmt: "Bài viết tâm huyết quá.",
  },
];
import { mapActions, mapState } from "vuex";
import VBanner from "../components/home/vBanner.vue";
import VBoxChat from "../components/thread/vBoxChat.vue";
import VBoxRep from "../components/thread/vBoxRep.vue";
import moment from "moment";
import { VueEditor } from "vue2-editor";
export default {
  components: { VBanner, VBoxChat, VBoxRep, VueEditor },
  name: "Home",
  data: () => ({
    breadcrumbs: [
      {
        text: "Trang chủ",
        disabled: false,
        href: "/",
      },
      {
        text: "Mục",
        disabled: false,
        href: "/thread",
      },
      {
        text: "Bài đăng",
        disabled: true,
      },
    ],
    comment: [],
    repCmt: "",
  }),
  computed: {
    ...mapState("forums", ["posts"]),
  },
  mounted() {
    this.setLoading(true);
    this.axios
      .get("may-tinh.json")
      .then(({ data }) => {
        const result = data.map((el, index) => {
          return { ...el, ...commentsMapper[index] };
        });
        // this.setThread(result[0]);
        this.comment = result;
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
    _clickSubmit() {
      this.setLoading(true);
      setTimeout(() => {
        this.comment.push({
          cmt: this.repCmt,
          name: "Thanh La",
          date: moment().format("DD/MM/YYYY"),
          time: moment().format("LT"),
        });
        this.repCmt = "";
        this.setLoading(false);
      }, 2000);
    },
  },
};
</script>

<style scoped lang="scss">
.body {
  background: #9e9e9e75;
}
.box-info {
  background: #38761d;
  height: 100%;
  padding: 20px;
}
</style>
