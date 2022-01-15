<template>
  <v-app-bar app fixed color="primary">
    <v-text-field
      style="margin-top: 25px"
      background-color="white"
      dense
      height="10px"
      label="Nhập từ tìm kiếm ..."
      single-line
      outlined
    ></v-text-field>
    <v-btn-toggle
      style="padding: 6px"
      router="true"
      class="ml-2"
      background-color="#212529"
      depressed
      color="#FFFF"
    >
      Tìm kiếm
    </v-btn-toggle>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon @click="_onClickToAdmin()">mdi-account</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "vNavBar",
  data: () => ({
    user: {},
  }),
  created() {
    this.getUserInfo();
  },
  methods: {
    ...mapActions("auths", ["logout"]),
    clickLogOut() {
      this.logout();
      this.$router.push("/login");
    },
    getUserInfo() {
      const data = localStorage.getItem("userInfo");
      this.user = JSON.parse(data);
    },
    _onClickToAdmin() {
      const url =
        "https://fe-forumst-admin.netlify.app/access/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NTdGF1cyI6MCwiYWNjSWQiOjEsImlhdCI6MTY0MjI3NDU1MiwiZXhwIjoxNjQyMzYwOTUyfQ.bdSi-VfFvWnx69L3WIrVzLZvJ0M4H6mlhQbWvVodLtw/1/2DNrlmxAYgrni4ysV2Zbb4rOkbtaT0so29KFKSYAwpc4w8Jggzoo0LEsfPOFcSkY3UrGT3DP299C9RAEepxEGC1QBSdRkwJrIIQ1";
      window.location.href = url;
    }
  },
};
</script>

<style scoped></style>
