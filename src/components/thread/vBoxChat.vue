<template>
  <div>
    <v-row class="align-center justify-center box-title">
      <v-col cols="9">
        <div style="font-size: 24px; color: #ffffff">
          {{ post.thread_title }}
        </div>
      </v-col>
      <v-col cols="3">
        <div style="font-size: 12px; color: #ffffff">
          {{ post.thread_date }}
        </div>
      </v-col>
    </v-row>
    <v-row class="box-body" style="min-height: 200px">
      <div v-html="post.thread_post_body"></div>
    </v-row>
    <v-row class="box-body box-body1 align-center justify-center">
      <v-col cols="9">
        <v-chip>Máy tính</v-chip>
        <v-chip>Công cụ</v-chip>
      </v-col>
      <v-col cols="3" style="display: flex">
        <div class="mr-2">
          100
          <v-icon color="black">mdi-thumb-up</v-icon>
        </div>
        <div>
          10
          <v-icon color="black">mdi-thumb-down</v-icon>
        </div>
      </v-col>
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
