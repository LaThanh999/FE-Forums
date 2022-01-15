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
                  <div style="color: #ffffff">Nguyễn Văn A</div>
                  <v-row class="ma-0 mt-2" style="color: #ffffff">
                    <v-icon color="white" class="mr-2">mdi-account</v-icon>
                    <div>User</div>
                  </v-row>
                  <v-row class="ma-0 mt-2" style="color: #ffffff">
                    <v-icon color="white" class="mr-2">mdi-clock</v-icon>
                    <div>20/12/2021</div>
                  </v-row>
                </v-sheet>
              </v-col>
              <v-col cols="9" class="pl-0">
                <v-box-chat></v-box-chat>
              </v-col>
            </v-row>
            <!-- rep cmt -->
            <v-row>
              <v-divider color="black" class="my-10"></v-divider>
            </v-row>
            <!-- rep cmt -->
            <v-row>
              <v-col cols="3" class="pr-0">
                <v-sheet class="box-info">
                  <v-avatar class="mb-4" color="grey darken-1" size="80">
                    <img
                      src="https://cdn.vuetifyjs.com/images/john.jpg"
                      alt="John"
                  /></v-avatar>
                  <div style="color: #ffffff">Nguyễn Văn A</div>
                </v-sheet>
              </v-col>
              <v-col cols="9" class="pl-0">
                <v-box-rep></v-box-rep>
              </v-col>
            </v-row>
            <!-- rep cmt -->
            <v-row>
              <v-col cols="3" class="pr-0">
                <v-sheet class="box-info">
                  <v-avatar class="mb-4" color="grey darken-1" size="80">
                    <img
                      src="https://cdn.vuetifyjs.com/images/john.jpg"
                      alt="John"
                  /></v-avatar>
                  <div style="color: #ffffff">Nguyễn Văn A</div>
                </v-sheet>
              </v-col>
              <v-col cols="9" class="pl-0">
                <v-box-rep></v-box-rep>
              </v-col>
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
        text: "Điện thoại",
        disabled: false,
        href: "/thread",
      },
      {
        text: "Tư vấn điện thoại",
        disabled: true,
      },
    ],
  }),
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
