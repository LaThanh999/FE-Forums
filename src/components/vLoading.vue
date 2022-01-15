<template>
  <v-overlay style="z-index: 1000000000" :value="loading">
    <v-progress-circular indeterminate size="64"></v-progress-circular>
  </v-overlay>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "vLoading",
  computed: {
    ...mapState("loading", ["loading"]),
  },
};
</script>

<style scoped></style>
