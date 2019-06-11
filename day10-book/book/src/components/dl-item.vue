<template>
  <div>
    <dl v-for="(item,index) in listData" :key="index" @click="detail(item.fiction_id)">
      <dd>
          <img :src="item.cover" alt="">
      </dd>
      <dt>{{item.title}}</dt>
    </dl>
  </div>
</template>

<script>
export default {
  props: ["listData"],
  created() {
    console.log(this.listData, "qqq");
  },
  methods: {
    detail(id){
       //跳转路由去详情页面
       this.$router.push({path:`/detail/${id}`})
    }
  }
};
</script>

<style>

img{
    width:100px;
}


</style>
