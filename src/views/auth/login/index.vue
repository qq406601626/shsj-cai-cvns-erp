<template>
  <div class="login-container">
    <el-form
        class="form-wrap"
        label-width="60px"
        :style="{transform:`scale(${_scale})`}">
      <div class="title" style="font-size: 22px;color: #000;font-weight: bolder;margin-bottom: 60px;margin-top: -20px">施工CAD插件系统</div>
      <el-form-item>
        <span slot="label" style="color: #ffffff;font-size: 16px">账号：</span>
        <el-input style="width: 300px"></el-input>
      </el-form-item>
      <el-form-item>
        <span slot="label" style="color: #ffffff;font-size: 16px">密码：</span>
        <el-input type="password" style="width: 300px"></el-input>
      </el-form-item>
      <el-form-item label="">
        <el-button style="width: 300px">登录</el-button>
      </el-form-item>
      <el-row>
        bottom text
      </el-row>
    </el-form>
  </div>
</template>

<script>
export default {
  computed: {
    _scale() {
      return document.documentElement.clientWidth / 1440
    }
  }
}
</script>

<style scoped lang="scss">
.login-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: gray;

  .form-wrap {
    width: 450px;
    height: 420px;
    background: rgba(255, 255, 255, 0.4);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .title {
      font-size: 22px;
      color: #000;
      font-weight: bolder;
      margin-bottom: 60px;
    }

  }
}
</style>
