<template>
  <div>
    <v-row class="align-center justify-center box-title">
      <v-col cols="12">
        <div style="font-size: 24px; color: #ffffff">
          {{ nameThread || "" }}
        </div>
      </v-col>
    </v-row>
    <div v-for="(item, index) in threads" :key="index">
      <v-row
        class="box-body align-center justify-center"
        v-bind:class="{ 'box-body1': index % 2 == 0 }"
      >
        <v-col cols="1">
          <v-avatar class="mb-4" color="grey darken-1" size="60">
            <img
              :src="
                item.acc_avatar ||
                'https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/user.png'
              "
              :alt="item.acc_full_name"
          /></v-avatar>
        </v-col>

        <v-col cols="2">
          <v-row>
            <v-col cols="12" style="color: #000000; display: flex">
              <v-icon>mdi-account</v-icon>
            </v-col>
          </v-row>

          <div>{{ item.acc_full_name }}</div>
        </v-col>
        <v-col cols="5" style="cursor: pointer" @click="_clickToPage(item)">
          <div class="text4">{{ item.thread_title }}</div>
          <v-row>
            <v-col cols="12" style="color: #000000; display: flex">
              <v-icon>mdi-clock</v-icon>
              <div>{{ item.thread_date }}</div>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="2">
          <div class="text2">
            Lượt thích
            <div class="text4">{{ item.thread_total_like }}</div>
          </div>
        </v-col>
        <v-col cols="2">
          <div class="text2">
            Lượt không thích
            <div class="text4">{{ item.thread_total_dislike }}</div>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  props: ["threads"],
  data: () => ({
    threadItem: [],
    nameThread: "",
  }),
  computed: {
    // ...mapState("forums", ["threads"]),
  },
  mounted() {
    this.nameThread = localStorage.getItem("nameThread");
  },
  methods: {
    // ...mapActions("forums", ["setPost"]),
    // ...mapActions("loading", ["setLoading"]),
    _clickToPage(val) {
      console.log(val);
      localStorage.setItem("nameCreateThread", val.acc_full_name);
      localStorage.setItem("avatarCreateThread", val.acc_avatar);
      localStorage.setItem("timeCreateThread", val.acc_created_date);
      this.$router.push({
        path: `detail-thread`,
        query: { threadId: val.thread_id },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.box-title {
  height: 58px;
  background: #2c553c;
  margin: 0px;
}
.box-body {
  height: 78px;
  background: #ffffff;
  margin: 0px;
}
.box-body1 {
  background: #f4f7fc !important;
}
.text1 {
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  color: #000000;
  margin-bottom: 0px;
}
.text-2 {
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  text-align: right;
  color: #606f89;
}
.text3 {
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  text-align: right;
  color: #e01a1a;
}
.text4 {
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  color: #000000;
}
</style>
