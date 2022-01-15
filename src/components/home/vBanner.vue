<template>
  <div class="mr-1">
    <v-row
      style="height: 44px; background: #38761d; border-radius: 4px 0px"
      class="align-center"
    >
      <p style="color: rgba(255, 255, 255, 0.85); margin: 0" class="ml-2">
        Chủ đề được quan tâm
      </p>
    </v-row>
    <v-row v-for="n in 6" :key="n" class="px-4" style="background: #ffffff">
      <v-col cols="6">
        <div class="line-text">
          Ngành y tế trong mùa dịch ảnh hưởng nặng nề, công nghệ nào có thể
          Ngành y tế trong mùa dịch ảnh hưởng nặng nề, công nghệ nào có thể
          Ngành y tế trong mùa dịch ảnh hưởng nặng nề, công nghệ nào có thể
        </div>
      </v-col>
      <v-col cols="6"
        ><v-img
          contain
          class="grey darken-4"
          lazy-src="https://picsum.photos/id/11/10/6"
          src="https://picsum.photos/id/11/500/300"
        ></v-img>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.line-text {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  font-size: 14px;
}
</style>
