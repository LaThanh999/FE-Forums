<template>
  <div>
    <v-item-group>
      <v-container>
        <v-row>
          <v-col v-for="n in 4" :key="n" cols="12" md="3">
            <v-item v-slot="{ active, toggle }">
              <v-card
                :color="active ? 'primary' : ''"
                class="d-flex align-center"
                height="200"
                @click="toggle"
              >
                <v-box-title></v-box-title>
              </v-card>
            </v-item>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="8">
            <div class="body-title">
              <p>Danh sách các chuyên mục</p>
            </div>
            <v-cate></v-cate>
            <v-cate></v-cate>
            <v-cate></v-cate>
          </v-col>
          <v-col cols="4" class="mt-3">
            <v-banner></v-banner>
            <div style="margin-top: 50px"></div>
            <v-banner></v-banner>
          </v-col>
        </v-row>
      </v-container>
    </v-item-group>
  </div>
</template>

<script>
import VBanner from "../components/home/vBanner.vue";
import vBoxTitle from "../components/home/vBoxTitle.vue";
import VCate from "../components/home/vCate.vue";
export default {
  components: { vBoxTitle, VCate, VBanner },
  name: "Home",
};
</script>

<style scoped lang="scss">
.body {
  background: #9e9e9e75;
}
.body-title {
  height: 59px;
  background: #38761d;
  border: 1px;
  p {
    margin-left: 20px;
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    color: rgba(255, 255, 255, 0.85);
  }
}
</style>
