<template>
  <v-card @click="toggle">
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img height="200" :src="post.img"></v-img>
    <v-card-text>
      <div class="box">
        <div class="mb-5 text4 title">{{ post.title }}</div>
        <v-row class="align-center">
          <v-icon color="black" class="ml-2">mdi-account</v-icon>
          <div class="text5 ml-3">{{ post.name }}</div>
        </v-row>
        <div class="mt-5 text5">{{ post.time }}</div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: ["active", "toggle", "post"],
};
</script>

<style lang="scss" scoped>
.box {
  display: flex;
  flex-direction: column;
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
.text4 {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  color: #2c553c;
}
.text5 {
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  color: #000000;
}
.title {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>
