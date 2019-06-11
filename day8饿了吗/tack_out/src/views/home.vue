<template>
  <div id="home">
    <!-- 分装三款插件一款左边一款右边一款加减号操作 -->
    <header>独特小店</header>
    <main>
      <div class="list" v-if="leftData.length&&rightData.length">
        <!-- 接受一波左边列表点击传过来的数据leftId -->
        <left :leftData="leftData" @leftId="leftId"></left>
        <right :rightData="rightData"></right>
      </div>
    </main>
    <footer>
      <span>购买商品数量:{{totalQuantity}}</span>
      <span>所需金额:{{TotalPrice}}</span>
    </footer>
  </div>
</template>

<script>
import axios from "axios";
import left from "../components/left";
import right from "../components/right";

export default {
  name: "home",
  data() {
    return {
      leftData: [],
      rightData: [],
      rightIndex: 0,
      shopArr: []
    };
  },
  //页面一进来需要一个计算属性来计算价格和总数量
  computed: {
    totalQuantity(){
      //总数量的计算函数
      let num=0;
      this.shopArr.forEach(item=>{
        num+=item.num;
      });
      return num;
    },
    TotalPrice(){
      //总价钱的计算函数
      let price=0;
      this.shopArr.forEach(item=>{
        price+=item.num*item.price;
      })
      return price;
    }
  },
  components: {
    left,
    right
  },
  created() {
    axios.get("/api/left").then(res => {
      this.leftData = res.data;
    });
    //右边数据的默认请求
    this.getRight();

    //接受公交车传来的非父子之间传参
    this.$bus.$on("count", (newNum, id) => {
      console.log(newNum, id, "更改后的答案");
      let index = this.rightData.findIndex(item => item.id == id);
      this.rightData[index].num = newNum;
      //将修改后的数据重新存到一个数组中 也就是购买列表
      //顺便判断下购买列表如果之前购买的那一项存在就让其
      //num等于改变后的num 如果不存在就新添加进去
      let ind = this.shopArr.findIndex(item => item.id == id);
      if (ind == -1) {
        this.shopArr.push(this.rightData[index]);
      } else {
        this.shopArr[ind].num = newNum;
      }

      console.log(this.shopArr, "购买列表的数据展示");
    });
    console.log(this.rightData, "9999");
  },
  methods: {
    leftId(id) {
      this.rightIndex = id;
      this.getRight();
    },
    getRight() {
      axios.get("/api/right/" + this.rightIndex).then(res => {
        console.log(...res.data, "0000");
        this.rightData = res.data.map(item => {
          item.num = 0;
          //因为我们在点击以后会改变这个num属性
          //所以我们不应该让其默认初始都是0
          //我们将点击的商品列表存放在了
          //shopArr这个列表中了 
          //所以每次要循坏一下这个列表看看有没有
          //id对应相等的那一项让其的num值改变一下
          this.shopArr.forEach(el=>{
             if(el.id==item.id){
               item.num=el.num;
             }
          })
          return item;
        });
        console.log(this.rightData, "00000000000000");
      });
    }
  }
};
</script>

<style lang="scss">
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
#home {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  font-size: 0.34rem;
}
header {
  width: 100%;
  height: 1rem;
  background-color: red;
  color: #fff;
  font-size: 0.4rem;
  text-align: center;
  line-height: 1rem;
}
main {
  flex: 1;
  overflow: hidden;
  .list {
    width: 100%;
    height: 100%;
    display: flex;
  }
}
footer {
  width: 100%;
  height: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>

