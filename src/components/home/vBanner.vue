<template>
  <div class="mr-1">
    <v-row
      style="height: 44px; background: #38761d; border-radius: 4px 0px"
      class="align-center"
    >
      <p style="color: rgba(255, 255, 255, 0.85); margin: 0" class="ml-2">
        {{ title }}
      </p>
    </v-row>
    <v-row v-for="n in y - x" :key="n" class="px-4" style="background: #ffffff">
      <v-col cols="6">
        <div class="line-text">
          {{ news[n] }}
        </div>
      </v-col>
      <v-col cols="6"
        ><v-img
          contain
          class="grey darken-4"
          :src="`https://picsum.photos/500/300?image=${(x + n) * 5 + 10}`"
          :lazy-src="`https://picsum.photos/10/6?image=${(x + n) * 5 + 10}`"
        ></v-img>
      </v-col>
    </v-row>
  </div>
</template>

<script>
const news = [
  "Trước thềm MotoGP 2022 - Aprilia đã làm gì để gần hơn với hi vọng có chiến thắng đầu tiên ở MotoGP",
  "Bằng sáng chế mới của Apple về kiểu máy Mac all-in-one",
  "Đây là mạng 6G: chỉ mất 1 giây để gửi 1 TB dữ liệu qua khoảng cách 1 km!",
  "Tổng hợp deal khuyến mãi 25/02",
  "Hướng dẫn mở “Dark mode” trên Discord",
  "Volvo dùng iPhone và Watch thay giấy, PC trong chăm sóc khách hàng",
  "Samsung: Lượng đặt trước với dòng Galaxy S22 phá kỷ lục",
  "Những thứ khiến mình không thích khi dùng iPhone trong hơn 1 năm qua",
  "Có nên mua điện thoại đã qua sử dụng hay không, nhiều bạn bè hỏi mình câu này",
  "GẤU NGA THỨC GIẤC",
  "DeLonghi EC685 | Pha Espresso và Latte art chuẩn Ý",
  "Trên tay Bộ sạc cáp Baseus 20W USB C: Cực kì nhỏ gọn và hỗ trợ sạc nhanh PD với mức giá chỉ 151K",
  "Review 7 CÁCH BẢO QUẢN MACBOOK",
  "Review Bóc hộp tai nghe Sony LinkBuds có thiết kế độc lạ",
  "Module camera chống rung 5 trục của Oppo Find X5 Pro bự như vầy nè!",
  "Counterpoint: Doanh thu bán iPhone chiếm gần 1 nửa thị trường smartphone toàn cầu 2021",
  "Có nên mua điện thoại đã qua sử dụng hay không, nhiều bạn bè hỏi mình câu này",
  "Trên tay nhanh máy lọc không khí Levoit Core 300s, Core 200s, Core mini",
];
export default {
  props: ["title", "x", "y"],
  data: () => ({
    news: news,
  }),
};
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
