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
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on">
          <v-icon @click="_onClickToAdmin()">mdi-account</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="(item, index) in items" :key="index">
          <v-list-item-title>
            <v-btn @click="_clickToPage(item.type)">{{ item.title }}</v-btn>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "vNavBar",
  data: () => ({
    user: {},
    items: [],
  }),
  created() {
    this.getUserInfo();
  },
  mounted() {
    const token = localStorage.getItem("token");
    if (token) {
      this.items = [
        { title: "Trang quản lý", type: 3 },
        { title: "Đăng xuất", type: 4 },
      ];
    } else {
      this.items = [
        { title: "Đăng nhập", type: 1 },
        { title: "Trang quản lý", type: 2 },
      ];
    }
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
      // const url =
      //   "https://fe-forumst-admin.netlify.app/access/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NTdGF1cyI6MCwiYWNjSWQiOjEsImlhdCI6MTY0Mjg1NTA4MywiZXhwIjoxNjQyOTQxNDgzfQ.JQdxAoKmmqKSIC-iM0sY6n4u7DGJBLZHjO9jQ6lqUdg/1/HWex8Y66sbtadvEhKPIFmedGWfOXvgSg5faUkEc5DZutK80P7J7P1htA0es6X3HDKwNW8FJL5hSa222Fe7xHP0UZ5ZnKwCJYEcsP";
      // window.location.href = url;
    },
    _clickToPage(value) {
      if (value === 3) {
        const token = localStorage.getItem("token");
        const userId = localStorage.getItem("userId");
        const rfToken = localStorage.getItem("rfToken");
        const url = `https://fe-forumst-admin.netlify.app/access/${token}/${userId}/${rfToken}`;
        window.location.href = url;
        return;
      }
      if (value === 4) {
        localStorage.setItem("token", null);
        localStorage.setItem("userId", null);
        localStorage.setItem("rfToken", null);
        this.$router.push({
          name: `Login`,
        });
        return;
      }
      this.$router.push({
        path: `login`,
        query: { type: value },
      });
    },
  },
};
</script>

<style scoped></style>
