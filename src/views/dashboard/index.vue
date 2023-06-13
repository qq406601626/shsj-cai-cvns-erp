<template>
  <div id="app">
    <el-container style="height: 100%">
      <el-aside width="200px" style="display:flex;flex-direction:column;background: #001529;box-shadow: 1px 0 4px 0 rgba(0,0,0,0.1);">
        <router-link to="/" style="flex-shrink: 0;text-align: center">
          <img src="~@/assets/logo-tiny.png" alt="logo" height="100">
        </router-link>
        <ul class="aside-nav-manu el-menu"
            style="background-color: #001529; flex-grow: 0; border-right: none;">
          <li class="el-submenu">
            <ul class="el-menu el-menu--inline"
                style="background-color: #001529; ">
              <li :class="['el-menu-item',{'is-active':$route.path==='/'}]"
                  style="padding-left: 40px; color: #9ea6ae; background-color: #001529;">
                <router-link to="/"
                             style="color:inherit; text-decoration: none;display: block;width: 100%;height: 100%">
                  <i class="el-icon-s-home"></i>
                  <span>工作台</span>
                </router-link>
              </li>
            </ul>
          </li>
        </ul>
        <el-menu
            router
            background-color="#000c17"
            text-color="#9ea6ae"
            :default-openeds="['work-space'].concat($route.matched.map(route=>route.name||''))"
            :default-active="$route.name || undefined"
            active-text-color="#80c3ed"
            style="flex-grow: 0;border-right: none"
            class="aside-nav-manu"
        >
          <el-submenu
              v-for="(submenu,submenuIndex) in routerPaths"
              v-if="!submenu.meta?.hidden"
              :key="submenuIndex"
              :index="submenu.name"
          >
            <template slot="title">
              <i :class="submenu.icon" style="color: #ffffff"/>
              <span>{{ submenu.meta.label }}</span>
            </template>
            <template v-for="(submenuItem) in submenu.children">
              <el-submenu v-if="submenuItem.children" :index="submenuItem.name">
                <template slot="title">
                  <i :class="submenuItem.icon" style="color: #ffffff"/>
                  <span>{{ submenuItem.meta.label }}</span>
                </template>
                <el-menu-item
                    v-for="(thirdMenu,thirdMenuIndex) in submenuItem.children"
                    v-if="!thirdMenu.meta?.hidden"
                    :key="thirdMenuIndex"
                    :index="thirdMenu.name"
                    :route="thirdMenu"
                >
                  <span>{{ thirdMenu.meta.label }}</span>
                </el-menu-item>
              </el-submenu>
              <el-menu-item
                  v-else-if="!submenuItem.meta?.hidden"
                  :index="submenuItem.name"
                  :route="submenuItem"
              >
                <span>{{ submenuItem.meta.label }}</span>
              </el-menu-item>
            </template>
          </el-submenu>
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
import fetchUserInfo from '@/utils/auth/userInfo'

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
    this.userInfo = await fetchUserInfo()
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
      .el-submenu {
        .el-menu-item {
          &:hover, &.is-active {
            background: #2b2fed !important;
            color: #ffffff !important;

            .el-icon-s-home {
              color: #ffffff !important;
            }
          }
        }

        .el-submenu__title {
          background: #001529 !important;
        }

        .el-submenu__icon-arrow {
          color: #9ea6ae;
        }
      }

    }
  }
}
</style>
