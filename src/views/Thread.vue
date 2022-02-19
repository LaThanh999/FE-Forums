<template>
  <div>
    <v-item-group>
      <v-container>
        <v-row>
          <v-col cols="12" md="3">
            <v-breadcrumbs
              divider=">"
              large
              :items="breadcrumbs"
            ></v-breadcrumbs>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="9" style="min-height: 400px">
            <v-row>
              <v-col cols="6"></v-col>
              <v-col cols="3">
                <v-btn outlined color="primary" height="40">
                  <v-icon> mdi-pencil </v-icon> Đăng chủ đề
                </v-btn></v-col
              >
              <v-col cols="3">
                <v-autocomplete
                  outlined
                  color="primary"
                  filled
                  rounded
                  dense
                  label="Sắp xếp"
                  height="30"
                ></v-autocomplete>
              </v-col>
            </v-row>
            <div v-if="threads.length <= 0">
              <v-alert border="right" color="blue-grey" dark>
                Chưa có bài đăng
              </v-alert>
            </div>
            <div v-else>
              <v-box-thread :threads="threads"></v-box-thread>
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
// import { mapState } from "vuex";
import VBanner from "../components/home/vBanner.vue";
import VBoxThread from "../components/thread/vBoxThread.vue";
import { mapActions } from "vuex";

export default {
  components: { VBanner, VBoxThread },
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
        disabled: true,
      },
    ],
    threads: [],
  }),
  mounted() {
    if (!this.$route.query.id) {
      this.$router.push({
        name: `Home`,
      });
    }
    this.setLoading(true);
    this.axios
      .get(
        `/unauthorized-api/thread/list-thread-by-cat?page=1&limit=10&category=${this.$route.query.id}`
      )
      .then(({ data: { ListThread } }) => {
        console.log(ListThread);
        this.threads = ListThread;
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        this.setLoading(false);
      });
  },
  computed: {
    // ...mapState("forums", ["threads"]),
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
</style>
