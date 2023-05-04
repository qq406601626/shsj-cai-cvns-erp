<template>
  <el-row>
    <el-col :sm="18" :lg="14" :xl="8" :offset="2">
      <el-form :model="formModel" label-width="200px">
        <el-form-item label="设备序列号：" >
          <el-input />
        </el-form-item>
        <el-form-item label="设备名称：">
          <el-input/>
        </el-form-item>
        <el-form-item label="主摄像机名称：">
          <el-input/>
        </el-form-item>
        <el-form-item label="主摄像机IP：">
          <el-input/>
        </el-form-item>
        <el-form-item label="主摄像机端口：">
          <el-input/>
        </el-form-item>
        <el-form-item label="主摄像机账号：">
          <el-input/>
        </el-form-item>
        <el-form-item label="主摄像机密码：">
          <el-input/>
        </el-form-item>
        <el-form-item label="副摄像机名称：">
          <el-input/>
        </el-form-item>
        <el-form-item label="副摄像机IP：">
          <el-input/>
        </el-form-item>
        <el-form-item label="副摄像机端口：">
          <el-input/>
        </el-form-item>
        <el-form-item label="副摄像机账号：">
          <el-input/>
        </el-form-item>
        <el-form-item label="副摄像机密码：">
          <el-input/>
        </el-form-item>
        <el-row type="flex" justify="center">
          <el-button>取消</el-button>
          <el-button type="primary">确定</el-button>
        </el-row>
      </el-form>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      formModel: {},
      submitButtonLoading:false
    }
  },
}
</script>

<style scoped>

</style>
