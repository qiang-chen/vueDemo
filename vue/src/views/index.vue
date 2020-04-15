
<template lang="pug">
    <div class="container">
    <header>手机端测试</header>
        <main>
        <div class="box bscroll" ref="bscroll">
            <div class="list  bscroll-container" :data-up='ups'>

                <div class="item" v-for="(item,index) in arr">
                    <h1>学习啦 今日新单词 </h1>
                    <span>{{item}}</span>
                </div>
            </div>
        </div> 
        </main>
    </div>
</template>



<script>
const randomWords = require("random-words");
import BScroll from "better-scroll";
console.log(BScroll);
export default {
  data() {
    let data = [];
    for (let i = 0; i < 10; i++) {
      data.push(randomWords());
    }
    return {
      ups: "上拉加载更多...",
      arr: data
    };
  },
  mounted() {
    this.$nextTick(() => {
      let bscrollDom = this.$refs.bscroll;

      this.aBScroll = new BScroll(bscrollDom, {
        probeType: 2
      });

      this.aBScroll.on("scroll", pos => {
        // 你可以打印一下参数pos中都包含了什么！
        // console.log(this.aBScroll.maxScrollY, this.aBScroll.y, "滚动开始");
        if (this.aBScroll.maxScrollY > this.aBScroll.y + 60) {
          console.log("进来");
          this.ups = "释放加载更多";
        } else {
          this.ups = "上拉加载更多...";
        }
      });
      this.aBScroll.on("scrollEnd", pos => {
        this.ups = "上拉加载更多...";
      });

      this.aBScroll.on("touchEnd", pos => {
        if (this.ups == "释放加载更多") {
          for (let i = 0; i < 10; i++) {
            this.arr.push(randomWords());
          }
          this.aBScroll.refresh()
        }
      });
    });
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
html,
body {
  width: 100%;
  height: 100%;
}
html {
  font-size: calc(100 / 750 * 100vw);
}
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  font-size: 0.34rem;
  box-sizing: border-box;
}
header {
  width: 100%;
  height: 1rem;
  background-color: green;
  color: #fff;
  text-align: center;
  line-height: 1rem;
}
main {
  flex: 1;
  overflow: hidden;
}
.box {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.list {
  width: 100%;
  position: relative;
}
.list::after {
  content: attr(data-up);
  width: 100%;
  height: 0.6rem;
  background-color: red;
  color: #fff;
  line-height: 0.6rem;
  text-align: center;
  position: absolute;
  left: 0;
  bottom: -0.6rem;
}
.item {
  width: 100%;
  height: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom: 1px solid #000;
}
h1,
span {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.38rem;
}
span {
  color: red;
  font-size: 0.46rem;
}
</style>


