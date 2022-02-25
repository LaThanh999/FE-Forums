<template>
  <section class="section-container">
    <v-row class="signin">
      <v-col cols="12" class="right flex-align-center">
        <div>
          <h1></h1>
          <h2
            style="
              margin-bottom: 20px;
              font-size: 55px;
              color: #38761d;
              text-align: center;
            "
          >
            Đăng ký
          </h2>
          <v-form
            ref="form"
            @submit.prevent="submit({ username, password, email })"
            v-model="valid"
            lazy-validation
          >
            <v-text-field
              outlined
              label="Email"
              color="#424242"
              :counter="40"
              :rules="emailRules"
              required
              v-model="email"
              type="email"
            ></v-text-field>
            <v-text-field
              outlined
              label="Username"
              color="#424242"
              :counter="40"
              :rules="usernameRules"
              required
              v-model="username"
            ></v-text-field>
            <v-text-field
              label="Mật khẩu"
              :type="showPass ? 'text' : 'password'"
              outlined
              color="#424242"
              :counter="20"
              :rules="passwordRules"
              required
              v-model="password"
              :append-icon="
                showPass ? 'mdi-eye-outline' : 'mdi-eye-off-outline'
              "
              @click:append="clickShowPass"
            ></v-text-field>
            <v-btn
              :loading="loading"
              type="submit"
              block
              color="#38761D"
              class="ma-2 white--text"
            >
              Login
            </v-btn>
          </v-form>
          <div style="display: flex; flex-direction: column; align-items: end">
            <div style="font-size: 14px; color: #38761d">Quên mật khẩu</div>
            <router-link to="/login">
              <div style="font-size: 14px">
                Đã có tài khoản <span style="color: #38761Ds">Đăng nhập</span>
              </div></router-link
            >
          </div>
          <div style="display"></div>
        </div>
      </v-col>
    </v-row>
  </section>
</template>
<script>
import { mapActions } from "vuex";

export default {
  components: {},
  data: () => ({
    valid: true,
    username: "",
    password: "",
    email: "",
    usernameRules: [
      (v) => !!v || "Email không được để trống",
      (v) => (v && v.length <= 40) || "Không được lớn hơn 40 kí tự",
    ],
    passwordRules: [
      (v) => !!v || "Password không được để trống",
      (v) => (v && v.length <= 20) || "Password không được lớn hơn 20 kí tự",
    ],
    emailRules: [
      (v) => !!v || "Email không được để trống",
      (v) => (v && v.length <= 40) || "Email không được lớn hơn 20 kí tự",
    ],
    loading: false,
    showPass: false,
  }),
  computed: {},
  methods: {
    ...mapActions("auths", ["login"]),
    // form validation
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    async submit({ username, password, email }) {
      this.$refs.form.validate();
      if (this.$refs.form.validate()) {
        this.loading = true;
        this.axios
          .post(`/unauthorized-api/auth/register`, {
            email: email,
            passWord: password,
            fullName: username,
          })
          .then(() => {
            this.$router.push({
              name: `Login`,
            });
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
            this.loading = false;
          });
      }
    },
    clickShowPass() {
      this.showPass = !this.showPass;
    },
  },
};
</script>
<style lang="scss" scoped>
.section-container {
  background: #dddddd;
  height: 100%;
  position: relative;
  .signin {
    padding: 0;
    width: 40%;
    max-width: 1000px;
    margin: auto;
    min-height: 400px;
    box-shadow: 0 0 1px 1px rgba($color: #000000, $alpha: 0.1);
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .left {
      background-image: url("../../assets/backroundHotel.jpg");
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      display: flex;
      color: #1976d2;
      background-color: #f9f9f9;
    }
    .right {
      box-sizing: border-box;
      background: #fff;
      color: #333;
      h2 {
        text-align: center;
        margin-bottom: 30px;
      }
    }
  }
}
.flex-align-center {
  display: flex;
  align-items: center;
  justify-content: center;
}
.section-container .signin .right .signin-btn[data-v-ef68022e] {
  color: #fff;
}
.theme--dark.v-btn.v-btn--has-bg {
  background-color: #272727ab;
}
</style>
>
