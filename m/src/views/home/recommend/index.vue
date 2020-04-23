<template>
  <div class="homelist">
    <header>
      <span>推荐</span>
      <span>北京</span>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<style lang="scss" scoped>
  .homelist{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    header{
      width: 100%;
      height: 1rem;
      display: flex;
      justify-content: space-around;
      align-items: center;
      border-bottom: 1px solid #000;
    }
    main{
      flex: 1;
    }
  }
</style>