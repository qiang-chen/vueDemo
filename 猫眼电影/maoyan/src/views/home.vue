<template>
  <div class="container">
    <main>
        <router-view></router-view>
    </main>
    <footer>
      <div class="f-item">
        <i></i>
        <router-link to="hit" tag="span">电影</router-link>
      </div>
      <div class="f-item">
        <i></i>
        <router-link to="/home/cinema" tag="span">影院</router-link>
      </div>
      <div class="f-item">
        <i></i>
        <router-link to="/my" tag="span">我的</router-link>
        
      </div>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  font-size: 0.34rem;
}
header {
  width: 100%;
  .nav{
      width: 100%;
      height: 0.9rem;
      border-bottom: 1px solid #eee;
      display: flex;
      span{
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
      }
  }
}
main {
  flex: 1;
  overflow: auto;
}
footer {
  width: 100%;
  height: 1rem;
  border-top: 1px solid #ccc;
  background-color: #eee;
  display: flex;
  .f-item {
    flex: 1;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    span.active{
        color: red;
    }
  }
}
</style>