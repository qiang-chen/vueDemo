<template>
  <div class="containnerMain">
    <main>
      <router-view></router-view>
    </main>
    <footer>
      <router-link to="/main/home" tag="span">首页</router-link>
      <router-link to="/main/home" tag="span">菜单</router-link>
      <router-link to="/main/home" tag="span">我的</router-link>
    </footer>
  </div>
</template>


<style lang="scss" scoped>
.containnerMain {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  main {
    flex: 1;
    overflow: auto;
  }
  footer {
    width: 100%;
    height: 1rem;
    border-top: 1px solid #eee;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 0.4rem;
  }
}
</style>