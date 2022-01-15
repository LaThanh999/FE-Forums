<template>
  <v-img
    height="200px"
    src="https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg"
  >
    <div class="box">
      <div class="mb-3 text1">Iphone 4 đang trở nên hot hòn hợt</div>
      <v-row class="align-center">
        <v-icon color="#EFD0A2" class="ml-2">mdi-account</v-icon>
        <div class="text2 ml-3">Nguyễn Văn A</div>
      </v-row>
      <div class="mt-3 text3">3 giờ trước</div>
    </div>
  </v-img>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.box {
  display: flex;
  padding: 20px;
  flex-direction: column;
  margin-top: 50px;
}
.text1 {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  color: #ffffff;
}
.text2 {
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  color: #efd0a2;
}
.text3 {
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  color: #efd0a2;
}
</style>
