<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
body {
  padding: 0;
  margin: 0;

  #app {
    width: 100vw;
    height: 100vh;
    .aside-nav-manu{
      .el-submenu__title{
        background: #414e69 !important;
      }
      .el-submenu__icon-arrow{
        color: #ffffff;
      }
    }
  }
}
</style>
