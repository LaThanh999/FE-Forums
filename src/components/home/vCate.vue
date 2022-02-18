<template>
  <div>
    <v-row class="align-center justify-center box-title">
      <v-col cols="7">
        <div style="font-size: 24px; color: #ffffff">{{ nameCate }}</div>
      </v-col>
      <v-col cols="5">
        <div style="font-size: 24px; color: #ffffff">Chủ đề mới</div>
      </v-col>
    </v-row>
    <div v-for="(temp, index) in item" :key="index">
      <v-row
        class="box-body align-center justify-center"
        v-bind:class="{ 'box-body1': index % 2 == 0 }"
      >
        <v-col
          cols="4"
          style="display: flex; align-items: center; cursor: pointer"
          @click="_clickToThread(temp)"
        >
          <v-icon class="mr-2">mdi-air-filter</v-icon>
          <p class="text1">{{ temp.catName }}</p>
        </v-col>
        <v-col cols="1">
          <div class="text3">
            {{ temp.thread }}k
            <div class="text2">thread</div>
          </div>
        </v-col>
        <v-col cols="2"
          ><div>
            {{ temp.post }}
            <div class="text2">Post</div>
          </div>
        </v-col>
        <v-col cols="5">
          <div class="text4">{{ temp.content }}</div>
          <v-row>
            <v-col cols="5" style="color: #000000; display: flex">
              <v-icon>mdi-account</v-icon>
              <div>{{ temp.name }}</div>
            </v-col>
            <v-col cols="7" style="color: #000000; display: flex">
              <v-icon>mdi-clock</v-icon>
              <div>{{ temp.date }} {{ temp.createDate }}</div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["item", "nameCate"],
  methods: {
    ...mapActions("forums", ["setThread"]),
    _clickToThread(val) {
      this.setThread(val);
      this.$router.push({ path: `thread`, query: { id: val.catID } });
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
  color: #2c553c;
}
.text4 {
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  color: #000000;
}
</style>
