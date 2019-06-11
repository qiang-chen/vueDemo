<template>
  <div class="wrap" @scroll="roll">
    <div class="expectList" ref="scrollEl">
      <li class="item" v-for="(item) in coming" :key="item.id">
        <div class="img">
          <img :src="item.img" alt>
          <p>{{item.wish}}人想看</p>
        </div>
        <div class="one-title">{{item.nm}}</div>
        <div class="one">{{item.comingTitle.split(" ")[0]}}</div>
      </li>
    </div>
  </div>
</template>

<script>
import { getExpectList } from "@/api/index";
export default {
  data() {
    return {
      coming: [],
      mostComing: 0,
      flag:true //弄个开关判断请求是不是已经完成
    };
  },
  async created() {
    let data = await getExpectList({ offset: 0 });
    console.log(data.coming, "最受期待列表数据");
    //往数组push数据渲染页面
    data.coming.forEach(item => {
      item.img = item.img.replace("w.h", "170.230");
    });
    this.coming = data.coming;
  },
  methods: {
    async roll(e) {
      //console.log(e.target)
      //可视区域
      let winW = e.target.offsetWidth;
      //自动撑开盒子的宽度
      let boxW = this.$refs.scrollEl.offsetWidth;
      //获取滚动距离
      let scrollL = e.target.scrollLeft;
      //如果滚动距离加上可视区的宽度等于盒子内容的宽度以后就证明滚动到了底部
      //console.log(winW,scrollL,scrollL+winW,boxW)
      if (scrollL + winW >= boxW - 5) {
        console.log("滚动到了底部");
        console.log(this.mostComing)
        if(this.mostComing>=50)return;
        if(!this.flag) return;
        this.mostComing += 10;
        this.flag=false;
        let data = await getExpectList({ offset: this.mostComing });
        data.coming.forEach(item => {
          item.img = item.img.replace("w.h", "170.230");
        });
        this.coming = [...this.coming,...data.coming];
        this.flag=true;
        console.log(this.coming, "滑动到底部后再次触发的请求");
      }
    }
  }
};
</script>


<style lang="scss" scoped>
.wrap {
  width: 100%;
  overflow-x: scroll;
  display: flex; //注意这里不加上是不能让item的宽自动撑开expectList这个盒子的宽的
}
.expectList {
  display: flex;
  box-sizing: border-box;
  flex-flow: row nowrap;
}
.item {
  width: 2.25rem;
  height: 3.03rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  font-size: 0.28rem;
  color: #666;
  box-sizing: border-box;
}
.img {
  width: calc(0.9rem * 2);
  height: 2.3rem;
  position: relative;
  img {
    width: 100%;
    height: 100%;
  }
  p {
    width: 100%;
    text-align: center;
    height: 0.6rem;
    position: absolute;
    left: 0;
    bottom: -0.2rem;
    color: orange;
    font-size: 0.24rem;
    font-weight: 800;
  }
}
.one-title {
  width: 2.25rem;
  height: 0.4rem;
  box-sizing: border-box;
  padding: 0 0.2rem;
  color: #222;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-weight: 800;
  font-size: 0.32rem;
}
.one {
  width: 100%;
  height: 0.33rem;
  box-sizing: border-box;
  padding: 0 0.2rem;
}
</style>
