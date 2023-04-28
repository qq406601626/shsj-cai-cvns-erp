<template>
  <div class="login-container">
    <el-form class="form-wrap" label-width="60px">
        <div class="title"   style="font-size: 22px;color: #000;font-weight: bolder;margin-bottom: 60px">表单标题</div>
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
export default {}
</script>

<style scoped lang="scss">
@function resSize($size) {
  //@return max($size,($size / 1440) * 1vw)
  //@return 'max(450px,100vw)'
  //@return calc(100vw - 600px)
}
.login-container{
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: gray;
  .form-wrap{
    width: resSize(450);
    height: resSize(420);
    background: rgba(255,255,255,0.4);
    border-radius: resSize(20);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .title{
      font-size: resSize(22);
      color: #000;
      font-weight: bolder;
      margin-bottom: resSize(60)
    }

  }
}
</style>
