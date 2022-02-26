<template>
  <div>
    <v-item-group>
      <v-container>
        <v-row>
          <v-col cols="12" md="3">
            <v-breadcrumbs
              divider=">"
              large
              :items="breadcrumbs"
            ></v-breadcrumbs>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="9" style="min-height: 400px">
            <v-row>
              <v-col cols="6"></v-col>
              <v-col cols="3">
                <v-btn
                  outlined
                  color="primary"
                  height="40"
                  @click="showDialog = true"
                >
                  <v-icon> mdi-pencil </v-icon> Đăng chủ đề
                </v-btn></v-col
              >
              <v-col cols="3">
                <v-autocomplete
                  outlined
                  color="primary"
                  filled
                  rounded
                  dense
                  label="Sắp xếp"
                  height="30"
                ></v-autocomplete>
              </v-col>
            </v-row>
            <div v-if="threads.length <= 0">
              <v-alert border="right" color="blue-grey" dark>
                Chưa có bài đăng
              </v-alert>
            </div>
            <div v-else>
              <v-box-thread :threads="threads"></v-box-thread>
            </div>
          </v-col>
          <v-col cols="3" class="my-6">
            <v-banner title="Chủ đề được quan tâm" :x="1" :y="4"></v-banner>
            <div style="margin-top: 50px"></div>
            <v-banner title="Chủ đề được yêu thích" :x="7" :y="10"></v-banner>
          </v-col>
        </v-row>
      </v-container>
    </v-item-group>
    <v-row justify="center">
      <v-dialog v-model="showDialog" persistent max-width="800px">
        <v-card>
          <v-card-title>
            <span class="text-h5">Thêm chủ đề</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-form
                ref="form"
                @submit.prevent="submit({ title, body, image })"
                v-model="valid"
                lazy-validation
              >
                <v-text-field
                  outlined
                  label="Tiêu đề"
                  :rules="(v) => !!v || `Tiêu đề không được để trống`"
                  required
                  dense
                  v-model="title"
                ></v-text-field>
                <v-textarea
                  outlined
                  name="input-7-4"
                  label="Nội dung"
                  :rules="(v) => !!v || `Nội dung không được để trống`"
                  v-model="body"
                ></v-textarea>
                <v-file-input
                  label="Hình ảnh"
                  outlined
                  dense
                  accept="image/png, image/jpeg, image/bmp, image/jpg"
                  :rules="(v) => !!v || `Hình ảnh không được để trống`"
                  v-model="image"
                ></v-file-input>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" text @click="showDialog = false">
                    Đóng
                  </v-btn>
                  <v-btn color="primary" text type="submit"> Xác nhận </v-btn>
                </v-card-actions>
              </v-form>
            </v-container>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
// import { mapState } from "vuex";
import VBanner from "../components/home/vBanner.vue";
import VBoxThread from "../components/thread/vBoxThread.vue";
import { mapActions } from "vuex";

export default {
  components: { VBanner, VBoxThread },
  name: "Home",
  data: () => ({
    breadcrumbs: [
      {
        text: "Trang chủ",
        disabled: false,
        to: "/",
      },
      {
        text: "Mục",
        disabled: true,
      },
    ],
    threads: [],
    showDialog: false,
    valid: true,
    title: "",
    body: "",
    image: null,
  }),
  mounted() {
    if (!this.$route.query.id) {
      this.$router.push({
        name: `Home`,
      });
    }
    this.init();
  },
  computed: {
    // ...mapState("forums", ["threads"]),
  },
  methods: {
    ...mapActions("loading", ["setLoading"]),
    init() {
      this.setLoading(true);
      this.axios
        .get(
          `/unauthorized-api/thread/list-thread-by-cat?page=1&limit=10&category=${this.$route.query.id}`
        )
        .then(({ data: { ListThread } }) => {
          console.log(ListThread);
          this.threads = ListThread;
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          this.setLoading(false);
        });
    },
    async submit({ title, body, image }) {
      this.$refs.form.validate();
      if (this.$refs.form.validate()) {
        this.setLoading(true);
        var bodyFormData = new FormData();
        bodyFormData.append("threadTitle", title);
        bodyFormData.append("threadCat", this.$route.query.id);
        bodyFormData.append("postBody", body);
        bodyFormData.append("image", image);
        this.axios({
          method: "post",
          url: `/api/thread/add-thread`,
          data: bodyFormData,
          headers: { "Content-Type": "multipart/form-data" },
        })
          .then(() => {
            this.init();
            this.showDialog = false;
            this.title = "";
            this.body = "";
            this.image = null;
          })
          .catch(
            ({
              response: {
                data: { errorMessage },
              },
            }) => {
              this.$toast.error(errorMessage);
            }
          )
          .finally(() => {
            this.setLoading(false);
          });
      }
    },
  },
};
</script>

<style scoped lang="scss">
.body {
  background: #9e9e9e75;
}
</style>
