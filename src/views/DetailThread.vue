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
                      :src="
                        avatarCreateThread ||
                        'https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/user.png'
                      "
                      :alt="nameCreateThread"
                  /></v-avatar>
                  <div style="color: #ffffff">{{ thread.thread_title }}</div>
                  <v-row class="ma-0 mt-2" style="color: #ffffff">
                    <v-icon color="white" class="mr-2">mdi-account</v-icon>
                    <div>{{ nameCreateThread }}</div>
                  </v-row>
                  <v-row class="ma-0 mt-2" style="color: #ffffff">
                    <v-icon color="white" class="mr-2">mdi-clock</v-icon>
                    <div>{{ thread.thread_date }}</div>
                  </v-row>
                </v-sheet>
              </v-col>
              <v-col cols="9" class="pl-0">
                <v-box-chat :post="thread"></v-box-chat>
              </v-col>
            </v-row>
            <!-- rep cmt -->
            <v-row>
              <v-divider color="black" class="my-10"></v-divider>
            </v-row>
            <!-- rep cmt -->
            <div v-if="comment.length <= 0">
              <v-alert border="right" color="blue-grey" dark>
                Chưa có bình luận
              </v-alert>
            </div>
            <div v-else>
              <v-row v-for="(item, index) in comment" :key="index">
                <v-col
                  cols="3"
                  class="pr-0"
                  v-if="item.post_body || item.reject_reason"
                >
                  <v-sheet class="box-info">
                    <v-avatar class="mb-4" color="grey darken-1" size="80">
                      <img
                        :src="
                          item.acc_avatar ||
                          'https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/user.png'
                        "
                        :alt="item.acc_full_name"
                    /></v-avatar>
                    <div style="color: #ffffff">{{ item.acc_full_name }}</div>
                  </v-sheet>
                </v-col>
                <v-col
                  cols="9"
                  class="pl-0"
                  v-bind:class="{ opacity: item.post_status == 1 }"
                  v-if="item.post_body || item.reject_reason"
                >
                  <v-box-rep
                    :post="{
                      body:
                        item.post_status != 1
                          ? item.post_body
                          : item.reject_reason,
                      date: item.post_date,
                    }"
                  ></v-box-rep>
                </v-col>
              </v-row>
            </div>
            <!-- rep cmt -->
            <v-row>
              <v-divider color="black" class="my-10"></v-divider>
            </v-row>
            <div v-if="checkLogin" style="margin: 20px">
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
            <div v-else style="margin: 20px">
              <h3>Vui lòng đăng nhập để bình luận bài viết này</h3>
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
import { mapActions, mapState } from "vuex";
import VBanner from "../components/home/vBanner.vue";
import VBoxChat from "../components/thread/vBoxChat.vue";
import VBoxRep from "../components/thread/vBoxRep.vue";
// import moment from "moment";
import { VueEditor } from "vue2-editor";
export default {
  components: { VBanner, VBoxChat, VBoxRep, VueEditor },
  name: "Home",
  data: () => ({
    breadcrumbs: [
      {
        text: "Trang chủ",
        disabled: false,
        to: "/",
      },
      {
        text: "Mục",
        disabled: false,
        to: `/thread`,
      },
      {
        text: "Bài đăng",
        disabled: true,
      },
    ],
    comment: [],
    thread: {},
    repCmt: "",
    checkLogin: false,
    nameCreateThread: "",
    avatarCreateThread: "",
    timeCreateThread: "",
  }),
  computed: {
    ...mapState("forums", ["posts"]),
  },
  mounted() {
    const token = localStorage.getItem("token");
    this.nameCreateThread = localStorage.getItem("nameCreateThread");
    this.avatarCreateThread = localStorage.getItem("avatarCreateThread") || "";
    this.timeCreateThread = localStorage.getItem("timeCreateThread");
    if (token) this.checkLogin = true;
    const threadId = this.$route.query.threadId;
    if (!threadId) {
      this.$router.push({
        name: `Home`,
      });
    }
    this.init(threadId);
  },
  methods: {
    ...mapActions("loading", ["setLoading"]),
    _clickSubmit() {
      this.setLoading(true);
      this.axios
        .post(`/api/post/add-post`, {
          postBody: this.repCmt,
          postThreadId: +this.$route.query.threadId,
        })
        .then((res) => {
          console.log(res);
          this.init(+this.$route.query.threadId);
          this.repCmt = "";
        })
        .catch((err) => {
          console.log(err.response);
        })
        .finally(() => {
          this.setLoading(false);
        });
    },
    init(id) {
      this.setLoading(true);
      this.axios
        .get(
          `/unauthorized-api/post/get-post-by-thread?postThreadId=${id}&page=1&limit=20`
        )
        .then(({ data: { Thread, ListPost } }) => {
          // const result = data.map((el) => {
          //   return { ...el };
          // });
          // this.setThread(result[0]);
          this.comment = ListPost;
          this.thread = Thread[0];
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          this.setLoading(false);
        });
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
.opacity {
  opacity: 0.5;
}
</style>
