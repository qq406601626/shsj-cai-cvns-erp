<template>
  <div id="app">
    <el-container style="height: 100%">
      <el-aside width="200px" style="display: flex;flex-direction: column;">
        <div class="logo">1111</div>
        <el-menu style="flex-grow: 1" router>
          <el-submenu
              v-for="(submenu,submenuIndex) in routerPaths"
              :key="submenuIndex"
              :index="submenu.name">
            <template slot="title">
              <i :class="submenu.icon"></i>
              <span>{{ submenu.meta.label }}</span>
            </template>
            <el-menu-item
                v-for="(submenuItem,submenuItemIndex) in submenu.children"
                :key="submenuItemIndex"
                :index="submenuItem.name"
                :route="submenuItem"
            >
              <span>{{ submenuItem.meta.label }}</span>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>
          <el-row type="flex" justify="space-between" align="middle" style="height: 100%">
            <div>{{ $route.meta.label }}</div>
            <el-dropdown>
              <span class="el-dropdown-link">
                <span>欢迎你，Lycon</span>
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>黄金糕</el-dropdown-item>
                <el-dropdown-item>狮子头</el-dropdown-item>
                <el-dropdown-item>螺蛳粉</el-dropdown-item>
                <el-dropdown-item disabled>双皮奶</el-dropdown-item>
                <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-row>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import routerPaths from '@/router/paths'

export default {
  data() {
    return {
      routerPaths: Object.freeze(routerPaths),
    }
  },
  methods: {}
};
</script>
<style lang="scss">
body {
  padding: 0;
  margin: 0;

  #app {
    width: 100vw;
    height: 100vh;
  }
}
</style>
