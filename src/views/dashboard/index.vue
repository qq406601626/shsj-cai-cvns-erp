<template>
  <div id="app">
    <el-container style="height: 100%">
      <el-aside width="200px"
                style="display:flex;flex-direction:column;background: #001529;box-shadow: 1px 0 4px 0 rgba(0,0,0,0.1);">
        <router-link to="/" style="flex-shrink: 0;text-align: center">
          <img src="~@/assets/logo-tiny.png" alt="logo" height="100">
        </router-link>
        <el-menu
            router
            background-color="#000c17"
            text-color="#9ea6ae"
            :default-openeds="['work-space'].concat($route.matched.map(route=>route.name||''))"
            :default-active="$route.name || undefined"
            active-text-color="#ffffff"
            style="flex-grow: 0;border-right: none"
            class="aside-nav-manu"
        >
          <el-menu-item index="index" :route="{path:'/'}">
            <span>工作台</span>
          </el-menu-item>
          <el-menu-item
              v-for="(submenu,submenuIndex) in routerPaths"
              v-if="!submenu.meta?.hidden"
              :key="submenuIndex"
              :index="submenu.name"
              :route="submenu"
          >
            <span>{{ submenu.meta.label }}</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <!--todo-->
        <el-header style="border-bottom: 10px solid #f0f2f5;">
          <el-row type="flex" justify="space-between" align="middle" style="height: 100%">
            <div>{{ $route.meta.label }}</div>
            <el-dropdown v-if="userInfo.id" @command="handlerCommandChange" style="color: #000000">
              <span class="el-dropdown-link">
                <span>欢迎你，{{ userInfo.name }}</span>
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="logout">退出</el-dropdown-item>
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
import config from '@/utils/auth/config'

export default {
  data() {
    return {
      userInfo: {},
      routerPaths: Object.freeze(routerPaths),
    }
  },
  methods: {
    handlerCommandChange(commandName) {
      if (commandName === 'logout') {
        localStorage.removeItem(config.tokenSsKey)
        this.$router.push({name: 'auth-login'})
      }
    }
  },
  async mounted() {
    this.userInfo = await this.$axios.get('/auth/b/getLoginUser')
  }
};
</script>
<style lang="scss">
body {
  padding: 0;
  margin: 0;

  #app {
    width: 100vw;
    height: 100vh;

    .aside-nav-manu {
      .el-menu-item {
        &:hover, &.is-active {
          background: #2b2fed !important;
          color: #ffffff !important;

          .el-icon-s-home {
            color: #ffffff !important;
          }
        }
      }
    }
  }
}
</style>
