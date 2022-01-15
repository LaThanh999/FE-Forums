<template>
  <div>
    <v-row class="align-center justify-center box-title">
      <v-col cols="10">
        <div style="font-size: 18px; color: #ffffff">Trả lời</div>
      </v-col>
      <v-col cols="2">
        <div style="font-size: 12px; color: #ffffff">
          {{ post.date }} {{ post.time }}
        </div>
      </v-col>
    </v-row>
    <v-row class="box-body" style="min-height: 100px">
      <div v-html="post.cmt"></div>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    contentHtml: "<h1>ABC</h1>",
  }),
  props: ["post"],
};
</script>

<style lang="scss" scoped>
.box-title {
  height: 58px;
  background: #2c553c;
  margin: 0px;
}
.box-body {
  background: #ffffff;
  margin: 0px;
  padding-left: 10px;
}
.box-body1 {
  background: #fff8f8 !important;
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
