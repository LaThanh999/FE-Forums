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
      <v-icon>mdi-account</v-icon>
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
  },
};
</script>

<style scoped></style>
