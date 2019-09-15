<template>
  <div class="menuContainer">
    <header>
      <img src="../../../assets/logo.png" alt>
    </header>
    <div class="main">
      <div class="menuLeft">
        <span
          v-for="item in leftData"
          :key="item.id"
          :class="{'active':item.id==count}"
        >{{item.title}}</span>
      </div>
      <div class="menuRight">
        <div class="menuList">
          <div class="menuItem" v-for="item in listData" :key="item.id">
            <!--写列表循坏  -->
            <div class="itemLeft">
              <img :src="item.img" alt>
              <!-- <router-link to="/" tag="img" src="item.src"></router-link> -->
            </div>
            <div class="itemRight">
              <h4>{{item.title}}</h4>
              <div class="bottom">
                <span>
                  ￥
                  <b>{{item.number}}</b>
                </span>
                <span>
                  <b @click="unfold(item.id)">+</b>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="alert" v-show="flag">
      <div class="box">
        <div class="title">
          <span>
            <b @click="close">x</b>
          </span>
        </div>
        <div class="content">
          <h4>商品是：---{{msg}}</h4>
        </div>
        <div class="count">
          <span @click="quantity('-')" v-show="initial">-</span>
          <span>{{initial}}</span>
          <span @click="quantity('+')">+</span>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
//引入网络请求
import { getList } from "@/api/";
export default {
  data() {
    return {
      curId: null, //记录当前弹框是那条数据
      initial: 0,
      flag: false,
      msg: "",
      count: 2,
      listData: [],
      leftData: [
        {
          title: "大师咖啡",
          id: 1
        },
        {
          title: "零度拿铁",
          id: 2
        },
        {
          title: "瑞纳铁",
          id: 3
        },
        {
          title: "经典饮品",
          id: 4
        },
        {
          title: "健康饮食",
          id: 5
        },
        {
          title: "鲜榨果蔬汁",
          id: 6
        }
      ],
      buyList: [] //用来存放所有购买过的数据
    };
  },
  async created() {
    let arr = JSON.parse(localStorage.getItem("buy"));
    if (arr) {
      this.buyList = [...arr];
      console.log(this.buyList, "默认初始进来的购买列表");
    }
    let data = await getList();
    this.listData = data.data.list.map(item => {
      let index = this.buyList.findIndex(el => el.id == item.id);
      if (index != -1) {
        item.num = this.buyList[index].num;
      } else {
        item.num = 0;
      }

      return item;
    });
    console.log(this.listData);
  },
  methods: {
    unfold(id) {
      //获取数据中的num进行替换
      console.log(id);
      this.flag = true;
      let index = this.listData.findIndex(item => item.id == id);
      this.initial = this.listData[index].num;
      this.msg = this.listData[index].title;
      this.curId = id;
    },
    close() {
      this.flag = false;
      //在点击关闭的时候确认下当前数量是不是零 不是的话把这个数据存放到购买列表中去
      //console.log(this.curId,"点击关闭的列表")
      let opj = this.listData.find(item => item.id == this.curId);
      let index=this.buyList.findIndex(item=>item.id==this.curId);
      if(index==-1){
        this.buyList.push(opj);
      }else{
        this.buyList[index].num=this.listData[index].num
      }
      
      if (opj.num) {
        localStorage.setItem("buy", JSON.stringify(this.buyList));
        console.log(this.buyList, "点击关闭的时候列表里面的数据");
      }
    },
    quantity(type) {
      //加减进行的操作
      let index = this.listData.findIndex(item => item.id == this.curId);
      let newNum = this.listData[index].num;
      console.log(this.curId, "当前弹框操作的id");
      if (type == "-") {
        newNum -= 1;
      } else {
        newNum += 1;
      }
      this.initial = newNum;
      this.listData[index].num = newNum;
    }
  },
  // watch:{
  //     buyList(newbuy,oldbuy){
  //         console.log(oldbuy,newbuy,"购买列表发生了改变")
  //         localStorage.removeItem("buy")
  //         localStorage.setItem("buy",JSON.stringify(newbuy))
  //     }
  // },
  destroyed(){
      console.log(this.buyList,"销毁")
      //在这个路由的销毁的生命周期中发送在下一个路由的created可以接受到
        this.$bus.$emit("buylist",this.buyList)
  }
};
</script>

<style lang="scss" scoped>
.menuContainer {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  header {
    width: 100%;
    height: 4rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .alert {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    left: 0;
    top: 0;
    .box {
      width: 90%;
      background-color: #fff;
      position: fixed;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      .title {
        width: 100%;
        height: 1rem;
        text-align: right;
        span {
          width: 100%;
          height: 1rem;
          display: flex;
          align-items: center;
          justify-content: flex-end;
        }
        b {
          width: 0.8rem;
          height: 0.8rem;
          display: inline-block;
          background-color: red;
          color: #fff;
          border-radius: 50%;
          font-size: 0.4rem;
          text-align: center;
          line-height: 0.8rem;
        }
      }
      .content {
        width: 100%;
        height: 1rem;
        line-height: 1rem;
        text-align: center;
      }
      .count {
        width: 100%;
        height: 1rem;
        text-align: center;
        line-height: 1rem;
        display: flex;
        justify-content: center;
        span {
          width: 0.8rem;
          height: 0.8rem;
          background-color: red;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          &:nth-child(2) {
            background: #fff;
            color: #000;
            margin: 0 0.1rem;
          }
        }
      }
    }
  }
}
.main {
  flex: 1;
  height: calc(100% - 4rem);
  display: flex;
  overflow: hidden;
  .menuLeft {
    width: 35%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: #eee;
    text-align: center;
    span {
      display: block;
      width: 100%;
      height: 1rem;
      line-height: 1rem;
    }
    span.active {
      background-color: #fff;
    }
  }
  .menuRight {
    width: 65%;
    height: 100%;
    overflow: auto;
    .menuList {
      width: 100%;
      .menuItem {
        width: 100%;
        height: 1.5rem;
        display: flex;
        border-bottom: 0.04rem solid #eee;
        .itemLeft {
          flex: 3;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .itemRight {
          flex: 7;
          h4 {
            height: 0.5rem;
            text-align: center;
            line-height: 0.5rem;
          }
          .bottom {
            height: 1rem;
            line-height: 1rem;
            display: flex;
            justify-content: space-around;
            span {
              width: 50%;
              display: inline-block;
              text-align: center;
              &:last-child {
                b {
                  width: 0.5rem;
                  height: 0.5rem;
                  background-color: rgb(62, 62, 235);
                  color: #fff;
                  border-radius: 50%;
                  text-align: center;
                  line-height: 0.4rem;
                  display: inline-block;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>