<template>
  <div>
    <v-item-group>
      <v-container>
        <v-row>
          <v-col v-for="n in 4" :key="n" cols="12" md="3">
            <v-item v-slot="{ active, toggle }">
              <v-card
                :color="active ? 'primary' : ''"
                class="d-flex align-center"
                height="200"
                @click="toggle"
              >
                <v-box-title></v-box-title>
              </v-card>
            </v-item>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="9">
            <div class="body-title">
              <p>Danh sách các chuyên mục</p>
            </div>
            <v-cate :item="may_tinh" nameCate="Máy tính"></v-cate>
            <div class="my-2"></div>
            <v-cate :item="san_pham" nameCate="Sản phẩm và công nghệ"></v-cate>
          </v-col>
          <v-col cols="3" class="mt-3">
            <v-banner></v-banner>
            <div style="margin-top: 50px"></div>
            <v-banner></v-banner>
          </v-col>
        </v-row>
      </v-container>
    </v-item-group>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import VBanner from "../components/home/vBanner.vue";
import vBoxTitle from "../components/home/vBoxTitle.vue";
import VCate from "../components/home/vCate.vue";
const may_tinh_mapper = [
  {
    body: "Tư vấn cấu hình",
    content: "Nên build như thế nào ....",
    contentFull:
      "<div>Bạn cần lựa chọn các linh kiện phù hợp với cấu hình mà mình muốn, kiểm tra tính tương thích giữa các thành phần, xem chúng có bị xung đột hay không, quá trình này sẽ tiêu tốn khá nhiều thời gian của bạn. Để đảm bảo lắp ráp máy tính mới một cách an toàn nhất, bạn nên chọn mua các linh kiện được sản xuất bởi các hãng uy tín, có chế độ bảo hành tốt, đồng thời tìm hiểu về thông tin linh kiện, đọc kỹ các tài liệu hướng dẫn của nhà sản xuất trước khi lắp đặt.</div><div>Card đồ hoạ thực chất là thứ có nhiều điều đáng nói nhất nhưng với những ai chơi game hay bắt đầu tập tành build PC thì chắc chắn là đã tìm hiểu nhiều về vấn đề này rồi.</div>",
  },
  {
    body: "Tìm hiểu ASUS",
    content: "Asus ZenBook có gì ....",
    contentFull:
      "<div>ASUS ZenBook được người dùng biết tới với thiết kế thanh lịch, tinh tế, sang trọng với một điểm nhấn quen thuộc chính là vân tròn lượn đồng tâm được phủ một lớp giả kim cương bằng kĩ thuật dập nổi nano hiện đại.</div><div>Ngoài ra, các sản phẩm ASUS ZenBook thường có thiết kế gọn gàng, được làm bằng hợp kim siêu nhẹ phù hợp với người dùng hay di chuyển. Một số sản phẩm có trọng lượng chỉ 985g và máy siêu mỏng với độ dày chỉ 13.9mm mà thôi</div>",
  },
  {
    body: "Phần cứng chung",
    content: "Máy tính bị treo....",
    contentFull:
      "<div>Nhiều dòng máy tính và laptop ở những phiên bản trước vẫn còn sử dụng ổ cứng HDD truyền thống. Nếu bạn đang có nhu cầu lưu trữ nhiều hơn hay cần cải thiện tốc độ xử lý của bộ nhớ. Ngoài ra bạn còn sử dụng các phần mềm yêu cầu máy tính có hiệu năng cao thì nên nâng cấp ổ cứng SSD. Ổ cứng SSD hiện nay được tích hợp sẵn trong nhiều dòng laptop, PC. Tuy giá thành của có chút cao hơn nhưng ổ cứng SSD lại có nhiều tính năng vượt trội hơn hẳn.</div>",
  },
  {
    body: "Macbook",
    content: "Sử dụng macbook ....",
    contentFull:
      "<div>Đây sẽ là hướng dẫn hữu ích trong các trường hợp bạn đang gấp rút đi ra ngoài hoặc có viêc cần khóa nhanh màn hình. Việc khóa nhanh màn hình này sẽ giúp người dùng bảo vệ thông tin máy tính trong bất kỳ trường hợp nào dù là nguy cấp nhất.</div><div>Để tiện cho việc chia sẻ, di chuyển dữ liệu người dùng hay nén các tệp lại để giảm dung lượng file, tăng tốc độ truyền, bảo mật tốt hơn,... Vậy nếu bạn nhận được một tệp nén từ người khác nhưng vẫn chưa biết mở thì phải làm thế nào? Xem hướng dẫn bên dưới để xem cách giải nén nhé!</div>",
  },
];
const san_pham_mapper = [
  {
    body: "Phần mềm",
    content: "Phần mềm được sử dụng ....",
  },
  {
    body: "App di động",
    content: "Có nên học mobile ....",
  },
  {
    body: "PC Gaming",
    content: "Build máy tính như thế nào ....",
  },
  {
    body: "Intel",
    content: "Intel core3 ....",
  },
];

export default {
  components: { vBoxTitle, VCate, VBanner },
  name: "Home",
  data: () => ({
    may_tinh: [],
    san_pham: [],
  }),
  mounted() {
    this.setLoading(true);
    this.axios
      .get("may-tinh.json")
      .then(({ data }) => {
        const result = data.map((el, index) => {
          return { ...el, ...may_tinh_mapper[index] };
        });
        // this.setThread(result[0]);
        this.may_tinh = result;
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        this.setLoading(false);
      });
    // line
    this.axios
      .get("may-tinh.json")
      .then(({ data }) => {
        const result = data.map((el, index) => {
          return { ...el, ...san_pham_mapper[index] };
        });
        // this.setThread(result[0]);
        this.san_pham = result;
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        this.setLoading(false);
      });
  },
  methods: {
    ...mapActions("loading", ["setLoading"]),
    getMayTinh(){
      
    }
  },
};
</script>

<style scoped lang="scss">
.body {
  background: #9e9e9e75;
}
.body-title {
  height: 59px;
  background: #38761d;
  border: 1px;
  p {
    margin-left: 20px;
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    color: rgba(255, 255, 255, 0.85);
  }
}
</style>
