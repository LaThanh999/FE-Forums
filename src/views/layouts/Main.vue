<template>
  <section>
    <v-nav-bar></v-nav-bar>
    <v-navigation-drawer class="sidebar" app>
      <v-list-item
        @click="clickToHome"
        class="sidebar-header d-flex align-center justify-center"
      >
        <v-avatar>
          <img src="../../assets/logoForums.svg" alt="Forums" />
        </v-avatar>
        <div class="mx-2">ForumsT</div>
      </v-list-item>
      <v-side-bar></v-side-bar>
    </v-navigation-drawer>
    <v-main>
      <div class="box-body">
        <router-view></router-view>
      </div>
      <v-footer padless color="#2C553C">
        <v-col cols="8">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title style="color: #ffffff"
                >Các hashtag phổ biến</v-list-item-title
              >
              <v-list-item-subtitle style="color: #ffffff" class="mt-2">
                #MayTinh, #DiDong, #DienThoaiThongMinh
              </v-list-item-subtitle>
              <v-list-item-subtitle class="my-2" style="color: #ffffff">
                #Iphone, Apple, #2022Covid
              </v-list-item-subtitle>
              <v-list-item-subtitle class="my-2" style="color: #ffffff">
                #CauHinh, #Hack, #KyThuat
              </v-list-item-subtitle>
              <v-list-item-subtitle style="color: #ffffff">
                #TheGioi, #Network, #CapQuang
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-col>
        <v-col cols="4">
          <div
            style="display: flex; justify-content: space-around"
            class="text-footer"
          >
            <div>Liên hệ</div>
            <div>Chính sách</div>
            <div>Trợ giúp</div>
          </div>
        </v-col>
      </v-footer>
    </v-main>
    <v-loading></v-loading>
  </section>
</template>

<script>
import VSideBar from "../../components/sideBar/vSideBar";
import VNavBar from "../../components/navBar/vNavBar";
import VLoading from '../../components/vLoading.vue';
export default {
  name: "Main",
  components: { VNavBar, VSideBar, VLoading },
  data: () => ({}),
  methods: {
    clickToHome() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped lang="scss">
.sidebar {
  background: var(--main-sideBar-color) !important;
  &-header {
    height: 64px;
    border-bottom: 1px solid #3333;
    background: #38761d !important;
  }
}
.box-body {
  background: var(--main-sideBar-color) !important;
}
.text-footer {
  text-decoration-line: underline;
  color: #ffffff;
}
</style>
