<template>
  <div>
    <div class="nav">
      <span v-for="(item,index) in navData" :key="index" @click="tiao(item.id)">{{item.title}}</span>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  //注册模块
  components: {
    
  },
  created () {
      
  },
  data() {
    return {
      navData: [
        {
          id: 1,
          title: "tap1"
        },
        {
          id: 2,
          title: "tap2"
        },
        {
          id: 3,
          title: "tap3"
        }
      ]
    };
  },
  methods: {
    tiao(id) {
        //发送默认路由加载列表第一条
        console.log(id)
        this.$router.push({path:`/home/list/${id}`}) 
    }
  }
};
</script>


<style lang="scss" scoped>
.nav {
  width: 100%;
  height: 50px;
  display: flex;
  span {
    flex: 1;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>

