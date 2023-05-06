<template>
  <el-dialog
      title="新增账号"
      :visible.sync="_value"
      :close-on-click-modal="false"
      width="600px"
  >
    <el-form
        ref="form"
        :model="formModel"
        :rules="formRules"
        label-width="80px"
    >
      <el-form-item label="用户名" prop="name">
        <el-input
            v-model="formModel.name"
            clearable
            placeholder="请输入用户名"
        />
      </el-form-item>
      <el-form-item label="账号" prop="account">
        <el-input
            v-model="formModel.account"
            clearable
            placeholder="请输入账号"
        />
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="_value = false">取 消</el-button>
      <el-button type="primary" @click="handlerSubmit">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  props: {
    value: Boolean,
    showAccountInfo:Function
  },
  data() {
    return {
      formModel: {
        name: '',
        account: '',
      },
      formRules: {
        name: [{required: true, message: '请输入用户名', trigger: 'blur'}],
        account: [{required: true, message: '请输入账号', trigger: 'blur'}],
      },
      submitButtonLoading: false
    }
  },
  computed: {
    _value: {
      get() {
        return this.value
      },
      set(v) {
        this.$emit('input', v)
      }
    },
  },
  methods: {
    async handlerSubmit() {
      try {
        await this.$refs.form.validate()
        this.submitButtonLoading = true
        const accountInfo = await this.$axios.post('/biz/user/add', this.formModel)
        this._value = false
        await this.$nextTick()
        this.showAccountInfo(accountInfo)
        this.submitButtonLoading = false
        this.$emit('add-success')
      } catch (e) {
        this.submitButtonLoading = false
      }

    }
  }
}
</script>

<style>

</style>
