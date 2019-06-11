<template>
  <div>
    <div class="swiper-container">
      <!--封装一个swiper轮播  -->
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in imgData" :key="index">
          <img :src="item" alt>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Swiper from "swiper";
console.log(Swiper);
export default {
  data() {
    return {
      imgData: [
        "http://k.zol-img.com.cn/sjbbs/7692/a7691515_s.jpg",
        "http://pic15.nipic.com/20110628/1369025_192645024000_2.jpg",
        "http://pic18.nipic.com/20120204/8339340_144203764154_2.jpg",
        "http://pic44.nipic.com/20140727/18179070_152408117000_2.jpg"
      ]
    };
  },
  props: ["num", "change"],
  mounted() {
    //让swiper轮播起来
    const that = this;
    this.swiper = new Swiper(".swiper-container", {
      on: {
        slideChange: function() {
          console.log(this.activeIndex);
          that.change(this.activeIndex);
        }
      }
    });
  },
  watch: {
    num(nn, oo) {
      console.log(nn, oo, "num数据发生了更新");
      this.$nextTick(() => {
        this.swiper.slideTo(this.num);
      });
    }
  },
  updated() {
    // this.swiper.slideTo(this.num);
  }
};
</script>

<style lang="scss" scoped>
@import url("../../node_modules/swiper/dist/css/swiper.min.css");
.swiper-container {
  width: 100%;
  height: 4rem;
  img {
    width: 100%;
  }
}
</style>