<template>
  <div class="home">
    <main>
      <div class="list">
        <div class="homeLeft">
          <left></left>
        </div>
        <div class="homeRight">
          <right></right>
        </div>
      </div>
    </main>
    <footer>
      <span>
        数量:
        <b v-color="'blue'">{{sum}}</b>
      </span>
      <span>
        价格:
        <b v-color="'red'">{{price}}</b>
      </span>
    </footer>
  </div>
</template>


<script>
import left from "@/components/left.vue";
import right from "@/components/right.vue";
import {mapState,mapActions,mapGetters,mapMutations} from "vuex"


export default {
  components: {
    left,
    right
  },
  computed: {
    //获取仓库的购买列表
    ...mapState({
      buylist:state=>state.right.buyList
    }),
    sum() {
      let sum = 0;
      console.log(this.buylist,"aaa")
      this.buylist.forEach(item => {
        sum += item.num;
      });
      return sum;
    },
    price() {
      let price = 0;
      //let buyList = this.$store.state.right.buyList;
      this.buylist.forEach(item => {
        price += item.num * item.price;
      });
      return price;
    }
  },
  methods: {
    ...mapMutations({  //必须放在methods里面然后需要的话放在created里面
      buyDefault:'right/buyDefault',
      rightchange:'right/rightchange'
    }),
    ...mapActions({
      getleft:'left/getleft'
    })
  },
  created() {
    //触发仓库的一个函数用来把本地存储的值默认赋值给渲染列表
    let buylist = JSON.parse(localStorage.getItem("buylist"));
    if (buylist) {
      console.log("执行了几遍")
      this.buyDefault(buylist)
      //this.$store.commit("right/buyDefault", buylist);
    }
    //触发一下网络请求
    // this.$store.dispatch("left/getleft").then(res => {
    //   //在左边数据完成以后默认触发右边第一个数据
    //   //再去触发右边仓库
    //   this.$store.commit("right/rightchange", 1);
    // });

    this.getleft().then(res=>{
        this.rightchange(1)
    })

  },
  updated() {
    
  },
  directives: {
    color: {
      bind(el, binding) {
        el.style.color = binding.value;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  main {
    flex: 1;
    overflow: auto;
  }
  .list {
    display: flex;
    width: 100%;
    height: 100%;
  }
  .homeLeft {
    width: 35%;
    background-color: #eee;
  }
  .homeRight {
    width: 65%;
  }
  footer {
    width: 100%;
    height: 1.5rem;
    background-color: pink;
    font-size: 0.45rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    span {
      b {
        margin-left: 0.2rem;
      }
    }
  }
}
</style>
