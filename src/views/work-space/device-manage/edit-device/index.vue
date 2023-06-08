<template>
  <el-row>
    <el-col :sm="18" :lg="14" :xl="8" :offset="2">
      <el-form
          ref="form"
          :model="formModel"
          :rules="formRules"
          label-width="200px"
      >
        <el-form-item label="设备序列号：" prop="equipSerialNum">
          <el-input
              v-model="formModel.equipSerialNum"
              disabled
              clearable
          />
        </el-form-item>
        <el-form-item label="设备名称：" prop="equipName">
          <el-input
              v-model="formModel.equipName"
              disabled
              clearable
          />
        </el-form-item>
        <el-form-item label="主摄像机名称：" prop="mainConfig.mainCameraName">
          <el-input
              v-model="formModel.mainConfig.mainCameraName"
              clearable
              placeholder="请输入主摄像机名称"
          />
        </el-form-item>
        <el-form-item label="主摄像机IP：" prop="mainConfig.mainCameraIp">
          <el-input
              v-model="formModel.mainConfig.mainCameraIp"
              clearable
              placeholder="请输入主摄像机IP"
          />
        </el-form-item>
        <el-form-item label="主摄像机端口：" prop="mainConfig.mainCameraPort">
          <el-input
              v-model="formModel.mainConfig.mainCameraPort"
              clearable
              placeholder="请输入主摄像机端口"
          />
        </el-form-item>
        <el-form-item label="主摄像机账号：" prop="mainConfig.mainCameraAccount">
          <el-input
              v-model="formModel.mainConfig.mainCameraAccount"
              clearable
              placeholder="请输入主摄像机账号"
          />
        </el-form-item>
        <el-form-item label="主摄像机密码：" prop="mainConfig.mainCameraPassword">
          <el-input
              v-model="formModel.mainConfig.mainCameraPassword"
              clearable
              placeholder="请输入主摄像机密码"
          />
        </el-form-item>
        <el-form-item label="副摄像机名称：" prop="mainConfig.secondaryCameraName">
          <el-input
              v-model="formModel.mainConfig.secondaryCameraName"
              clearable
              placeholder="请输入副摄像机名称"
          />
        </el-form-item>
        <el-form-item label="副摄像机IP：" prop="mainConfig.secondaryCameraIp">
          <el-input
              v-model="formModel.mainConfig.secondaryCameraIp"
              clearable
              placeholder="请输入副摄像机IP"
          />
        </el-form-item>
        <el-form-item label="副摄像机端口：" prop="mainConfig.secondaryCameraPort">
          <el-input
              v-model="formModel.mainConfig.secondaryCameraPort"
              clearable
              placeholder="请输入副摄像机端口"
          />
        </el-form-item>
        <el-form-item label="副摄像机账号：" prop="mainConfig.secondaryCameraAccount">
          <el-input
              v-model="formModel.mainConfig.secondaryCameraAccount"
              clearable
              placeholder="请输入副摄像机账号"
          />
        </el-form-item>
        <el-form-item label="副摄像机密码：" prop="mainConfig.secondaryCameraPassword">
          <el-input
              v-model="formModel.mainConfig.secondaryCameraPassword"
              clearable
              placeholder="请输入副摄像机密码"
          />
        </el-form-item>
        <el-form-item label="倾角仪ip：" prop="mainConfig.qjyIp">
          <el-input
              v-model="formModel.mainConfig.qjyIp"
              clearable
              placeholder="请输入倾角仪ip"
          />
        </el-form-item>
        <el-form-item label="倾角仪端口：" prop="mainConfig.qjyPort">
          <el-input
              v-model="formModel.mainConfig.qjyPort"
              clearable
              placeholder="请输入倾角仪端口"
          />
        </el-form-item>
        <el-form-item label="测距IP：" prop="mainConfig.stIp">
          <el-input
              v-model="formModel.mainConfig.stIp"
              clearable
              placeholder="请输入测距IP"
          />
        </el-form-item>
        <el-form-item label="测距端口：" prop="mainConfig.stPort">
          <el-input
              v-model="formModel.mainConfig.stPort"
              clearable
              placeholder="请输入测距端口"
          />
        </el-form-item>
        <el-row type="flex" justify="center">
          <el-button @click="$router.push({name:'device-list'})">取消</el-button>
          <el-button
              type="primary"
              :loading="submitButtonLoading"
              @click="handlerSubmit"
          >
            确定
          </el-button>
        </el-row>
      </el-form>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      formModel: {
        equipSerialNum: '',
        equipName: '',
        mainConfig: {
          mainCameraName: '',
          mainCameraIp: '',
          mainCameraPort: '',
          mainCameraAccount: '',
          mainCameraPassword: '',
          secondaryCameraName: '',
          secondaryCameraIp: '',
          secondaryCameraPort: '',
          secondaryCameraAccount: '',
          secondaryCameraPassword: '',
          qjyIp:'',
          qjyPort:'',
          stIp:'',
          stPort:'',
        }
      },
      formRules: {
        equipSerialNum: [{required: true, message: '请输入设备序列号', trigger: 'blur'}],
        equipName: [{required: true, message: '请输入设备名称', trigger: 'blur'}],
        'mainConfig.mainCameraName': [{required: true, message: '请输入主摄像头名称', trigger: 'blur'}],
        'mainConfig.mainCameraIp': [{required: true, message: '请输入主摄像头IP地址', trigger: 'blur'}],
        'mainConfig.mainCameraPort': [{required: true, message: '请输入主摄像头端口号', trigger: 'blur'}],
        'mainConfig.mainCameraAccount': [{required: true, message: '请输入主摄像头账号', trigger: 'blur'}],
        'mainConfig.mainCameraPassword': [{required: true, message: '请输入主摄像头密码', trigger: 'blur'}],
        'mainConfig.secondaryCameraName': [{required: true, message: '请输入副摄像头名称', trigger: 'blur'}],
        'mainConfig.secondaryCameraIp': [{required: true, message: '请输入副摄像头IP地址', trigger: 'blur'}],
        'mainConfig.secondaryCameraPort': [{required: true, message: '请输入副摄像头端口号', trigger: 'blur'}],
        'mainConfig.secondaryCameraAccount': [{required: true, message: '请输入副摄像头账号', trigger: 'blur'}],
        'mainConfig.secondaryCameraPassword': [{required: true, message: '请输入副摄像头密码', trigger: 'blur'}],
        'mainConfig.qjyIp': [{required: true, message: '请输入倾角仪ip', trigger: 'blur'}],
        'mainConfig.qjyPort': [{required: true, message: '请输入倾角仪端口', trigger: 'blur'}],
        'mainConfig.stIp': [{required: true, message: '请输入测距IP', trigger: 'blur'}],
        'mainConfig.stPort': [{required: true, message: '请输入测距端口', trigger: 'blur'}],
      },
      submitButtonLoading: false
    }
  },
  methods: {
    async handlerSubmit() {
      try {
        await this.$refs.form.validate()
        this.submitButtonLoading = true
        const postData = {
          id: this.formModel.equipSerialNum,
          mainConfig: this.formModel.mainConfig
        }
        await this.$axios.post('/biz/equipmentMetaInfo/edit', postData)
        this.submitButtonLoading = false
        this.$message.success('编辑设备成功')
        this.$router.push({name: 'device-list'})
      } catch (e) {
        this.submitButtonLoading = false
      }
    }
  },
  mounted() {
    try {
      const editDeviceRowInfo = JSON.parse(sessionStorage.getItem('editDeviceRowInfo'))
      this.formModel = editDeviceRowInfo
    } catch (e) {
      this.$router.back()
    }
  }
}
</script>

<style scoped>

</style>
