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
          <v-col cols="8">
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
              
            </v-row>
          </v-col>
          <v-col cols="4" class="mt-3">
            <v-banner></v-banner>
          </v-col>
        </v-row>
      </v-container>
    </v-item-group>
  </div>
</template>

<script>
const commentsMapper= [
  {
    cmt:"Winner phát card đi."
  },
  {
    cmt:"Like cho chủ thớt."
  },
  {
    cmt:"Nên đợi tới năm sau, vì cart giờ mắc"
  },
  {
    cmt:"Bài viết tâm huyết quá."
  },
]
import { mapState } from "vuex";
import VBanner from "../components/home/vBanner.vue";
import VBoxChat from "../components/thread/vBoxChat.vue";
import VBoxRep from "../components/thread/vBoxRep.vue";
export default {
  components: { VBanner, VBoxChat, VBoxRep },
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
  }),
  computed: {
    ...mapState("forums", ["posts"]),
  },
  mounted() {
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
      });
  }
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
