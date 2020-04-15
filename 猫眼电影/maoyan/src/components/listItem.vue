<template>
  <div class="list" :up="msg">
    <!-- 封装一个电影列表的组件 -->
    <div class="item" v-for="(item,index) in listData" :key="index">
      <div class="left">
        <img :src="item.img" alt="">
      </div>
      <div class="mid">
        <div class="title">
          <h4>{{item.nm}}</h4>
        </div>
        <div class="con">
          <p>
            {{item.sc?"观众评":"暂无评分"}}
            <span v-if="item.sc">{{item.sc}}</span>
          </p>
          <p>主演:{{item.star}}</p>
          <p>{{item.showInfo}}</p>
        </div>
      </div>
      <div class="right">
        <button :class="{'active':!item.globalReleased}" @click="piao">{{item.globalReleased?"购票":"预售"}}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      msg:"上拉加载更多"
    }
  },
  //接受一波父元素给我们传过来的数据
  props: ["listData"],
  created() {
    //输出一下看看数据过来了吗  成功
    //console.log(this.listData,"22")
  },
  methods:{
    piao(){
      console.log(1)
      this.$router.push({name:"my"})
    }
  }
};
</script>


<style lang="scss" scoped>
.list {
  width: 100%;
  position: relative;
  &::after{
    content: attr(up);
    width: 100%;
    height: 0.6rem;
    line-height: 0.6rem;
    text-align: center;
    background-color: mediumorchid;
    color: #fff;
    font-size: 0.3rem;
    position: absolute;
    left: 0;
    bottom: -0.6rem;
  }
  .item {
    width: 100%;
    height: 2.28rem;
    display: flex;
    margin: 0.1rem 0;
    padding: 0 0.2rem;
    box-sizing: border-box;
    .left {
      flex: 2.2;
      width: 20%;
      img {
        width: 100%;
      }
    }
    .mid {
      flex: 6;
      width: 60%;
      height: 2.28rem;
      padding: 0 0.1rem 0 0.2rem;
      box-sizing: border-box;
      .title {
        height: 30%;
        display: flex;
        align-items: center;
      }
      .con {
        height: 70%;
        font-size: 0.28rem;
        display: flex;
        flex-direction: column;
        p {
          flex: 1;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
      }
    }
    .right {
      flex: 1.8;
      width: 20%;
      display: flex;
      justify-content: center;
      align-items: center;
      button {
        border: 0;
        padding: 0.2rem 0.35rem;
        box-sizing: border-box;
        background-color: #f03d37;
        color: #fff;
        white-space: nowrap;
        font-size: 12px;
        border-radius: .15rem;
        cursor: pointer;
        &.active{
          background-color: skyblue;
        }
      }
    }
  }
}
</style>