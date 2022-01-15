<template>
  <div>
    <v-row class="align-center justify-center box-title">
      <v-col cols="12">
        <div style="font-size: 24px; color: #ffffff">Chủ đề</div>
      </v-col>
    </v-row>
    <div v-for="n in 4" :key="n">
      <v-row
        class="box-body align-center justify-center"
        v-bind:class="{ 'box-body1': n % 2 == 0 }"
      >
        <v-col cols="2">
          <v-row>
            <v-col cols="12" style="color: #000000; display: flex">
              <v-icon>mdi-account</v-icon>
            </v-col>
          </v-row>
          <div>User 1</div>
        </v-col>
        <v-col cols="8">
          <div class="text4">Điều chỉnh cấu hình máy</div>
          <v-row>
            <v-col cols="12" style="color: #000000; display: flex">
              <v-icon>mdi-clock</v-icon>
              <div>31/12/2022 8:00AM</div>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="2">
          <div class="text2">
            Trả lời
            <div class="text4">10</div>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {};
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
  color: #e01a1a;
}
.text4 {
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  color: #000000;
}
</style>
