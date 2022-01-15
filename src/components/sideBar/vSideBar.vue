<template>
  <div>
    <div class="title">Thư mục</div>
    <v-list dense nav>
      <v-list-item-group v-model="selectedItem" color="primary">
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.to">
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    <div class="title">Cá nhân</div>
    <v-list dense nav>
      <v-list-item-group color="primary">
        <v-list-item v-for="(item, i) in items2" :key="i" :to="item.to">
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </div>
</template>

<script>
import { menu1, menu2 } from "@/views/layouts/itemSidebar.js";
export default {
  name: "vSideBar",
  data: () => ({
    selectedItem: 1,
    items: menu1,
    items2: menu2,
  }),
};
</script>

<style lang="scss" scoped>
.title {
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 12px !important;
  text-transform: uppercase;
  color: #808080;
  margin: 2px 20px;
}
</style>
