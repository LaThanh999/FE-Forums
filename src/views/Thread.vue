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
          <v-col cols="8">
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
            <v-box-thread></v-box-thread>
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
import { mapState } from "vuex";
import VBanner from "../components/home/vBanner.vue";
import VBoxThread from "../components/thread/vBoxThread.vue";

export default {
  components: { VBanner, VBoxThread },
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
        disabled: true,
      },
    ],
  }),
  computed: {
    ...mapState("forums", ["threads"]),
  },
};
</script>

<style scoped lang="scss">
.body {
  background: #9e9e9e75;
}
</style>
