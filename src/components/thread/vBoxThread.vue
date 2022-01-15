<template>
  <div>
    <v-row class="align-center justify-center box-title">
      <v-col cols="12">
        <div style="font-size: 24px; color: #ffffff">{{ threads.body }}</div>
      </v-col>
    </v-row>
    <div v-for="(item, index) in threadItem" :key="index">
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
          <div>{{ item.name }}</div>
        </v-col>
        <v-col cols="8" style="cursor: pointer" @click="_clickToPage(item)">
          <div class="text4">{{ item.content }}</div>
          <v-row>
            <v-col cols="12" style="color: #000000; display: flex">
              <v-icon>mdi-clock</v-icon>
              <div>{{ item.date }} {{ item.time }}</div>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="2">
          <div class="text2">
            Trả lời
            <div class="text4">{{ item.thread }}</div>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
const thread_mapper = [
  {
    body: "Lựa chọn máy tính",
    content: "Xin tư vấn cấu hình máy dưới 2 củ ....",
    contentFull:
      "Điện thoại dưới 2 triệu tốt nhất 2021 tiếp theo được giới thiệu chình là chiếc Realme C3i với màn hình 6.5 inch thiết kế giọt nước tinh tế với đường viền mỏng, thanh thoát. Máy còn được trang bị cụm camera kép phía sau, hỗ trợ chụp ảnh xóa phông lung linh. Cấu hình hiệu năng máy được đánh giá ổn định cho những trải nghiệm game trung bình. ",
  },
  {
    body: "Lựa chọn điện thoại",
    content: "Máy nào phù hợp chơi liên quân ...",
    contentFull:
      "<div>Dù các game mobile cứ ra mắt như nấm mọc sau mưa tuy nhiên có vẻ có chỉ có 2 thể loại game được người Việt ưa chuộng nhất, sức sống bền bỉ nhất chính là Sinh tồn và MOBA. Và đại diện kỳ cựu nhất của thể loại game MOBA đình đám nhất không ai khác đó chính là game Liên Quân Mobile. </div><div>Có thể nói dù được ra mắt đã lâu nhưng sức nóng của Liên Quân Mobile chưa bao giờ hết, lượng người chơi trung thành và người chơi mới đều tăng đều. Và để một trong những nhu cầu phát sinh ra khi mua điện thoại mới chính là chơi được Liên Quân Mobile, nhất là các smartphone Android. </div>",
  },
  {
    body: "Budget 48tr max",
    content: "Build máy tính để làm đồ họa ... ",
    contentFull:
      "Nguyên nhân chính là do tổng thể cấu hình hoặc một vài linh kiện không đạt đủ tiêu chuẩn cấu hình dành cho công việc. Các hiện tượng phiền toái khác có thể gặp khi máy quá yếu sẽ bao gồm: Máy bị nóng, hiện tượng “tràn RAM” gây xử lý công việc chậm chạp, render sản phẩm chậm do thiếu bộ nhớ …",
  },
  {
    body: "Cấu hình all in đồ họa",
    content: "Chi phí tầm 50tr ...",
    contentFull:
      "Phần lớn hiện tượng này sẽ xảy ra do xung đột về phần mềm trong hệ thống máy tính, chủ yếu là giữa file chương trình với file hệ thống. Các chương trình không có bản quyền và hệ điều hành không có bản quyền cũng gây ra tình trạng này rất thường xuyên.",
  },
];
export default {
  data: () => ({
    threadItem: [],
  }),
  computed: {
    ...mapState("forums", ["threads"]),
  },
  mounted() {
    this.axios
      .get("may-tinh.json")
      .then(({ data }) => {
        const result = data.map((el, index) => {
          return { ...el, ...thread_mapper[index] };
        });
        // this.setThread(result[0]);
        this.threadItem = [this.threads, ...result];
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    ...mapActions("forums", ["setPost"]),
    _clickToPage(val) {
      this.setPost(val);
      this.$router.push({
        path: `detail-thread`,
        query: { id: this.threads.id, threadId: val.id },
      });
    },
  },
};
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
