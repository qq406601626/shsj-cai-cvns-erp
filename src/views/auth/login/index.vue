<template>
  <div class="login-container">
    <el-form
        class="form-wrap"
        label-width="60px"
        :style="{zoom:_scale}">
      <div class="title" style="font-size: 22px;color: #000;font-weight: bolder;margin-bottom: 60px;margin-top: -20px">
        上海四建集团监测APP后台
      </div>
      <el-form-item>
        <span slot="label" style="color: #ffffff;font-size: 16px">账号：</span>
        <el-input
            v-model="formModel.account"
            clearable
            placeholder="请输入账号"
            style="width: 300px"
        />
      </el-form-item>
      <el-form-item>
        <span slot="label" style="color: #ffffff;font-size: 16px">密码：</span>
        <el-input
            v-model="formModel.password"
            type="password"
            clearable
            show-password
            placeholder="请输入密码"
            style="width: 300px"
        />
      </el-form-item>
      <el-form-item label="">
        <el-button
            :loading="submitButtonLoading"
            @click="handlerSubmit"
            style="width: 300px"
        >
          登录
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {getEncryptPwd, setEncryptToken} from '@/utils/auth'

export default {
  data() {
    return {
      submitButtonLoading: false,
      formModel: {
        account: 'superAdmin',
        password: '123456'
      }
    }
  },
  computed: {
    _scale() {
      return document.documentElement.clientWidth / 1440
    }
  },
  methods: {
    async handlerSubmit() {
      try {
        this.submitButtonLoading = true
        const encryptionPassword = getEncryptPwd(this.formModel.password)
        const postData = {
          account: this.formModel.account,
          password: encryptionPassword
        }
        const token = await this.$axios.post('/auth/b/doLogin', postData)
        setEncryptToken(token)
        this.submitButtonLoading = false
        this.$router.push('/')
      } catch (e) {
        this.submitButtonLoading = false
      }

    },
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
  background: url("/img/auth/login/bg.jpg") center/cover no-repeat;

  .form-wrap {
    width: 450px;
    height: 420px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(2px);
    border: 1px solid rgba(255,255,255,0.3);


    .title {
      font-size: 22px;
      color: #000;
      font-weight: bolder;
      margin-bottom: 60px;
    }

  }
}
</style>
