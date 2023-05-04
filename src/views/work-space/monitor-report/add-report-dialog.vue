<template>
  <el-dialog
      title="新增报告"
      :visible.sync="_value"
      width="600px"
  >
    <el-form
        ref="form"
        :model="formModel"
        :rules="formRules"
        label-width="140px"
    >
      <el-form-item label="设备序列号" prop="equipSerialNum">
        <el-input v-model="formModel.equipSerialNum" clearable/>
      </el-form-item>
      <el-form-item label="检测时间段" prop="daterangeModel">
        <el-date-picker
            v-model="_daterangeModel"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            clearable
            style="width: 100%"
        >
        </el-date-picker>
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
    value: Boolean
  },
  data() {
    return {
      formModel: {
        equipSerialNum: '',
        checkDateFrom: '',
        checkDateTo: ''
      },
      formRules: {
        equipSerialNum: [{required: true, message: '请输入设备序列号', trigger: 'blur'}],
        daterangeModel: [
          {
            validator:(rule, value, callback)=>{
              if(!this.formModel.checkDateFrom){
               return  callback('请选择检测开始时间')
              }
              if(!this.formModel.checkDateTo){
                return  callback('请选择检测结束时间')
              }
              callback()
            },
            required:true
          }
        ],
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
    _daterangeModel: {
      get() {
        return [this.formModel.checkDateFrom, this.formModel.checkDateTo]
      },
      set(v) {
        const [checkDateFrom = '', checkDateTo = ''] = v || []
        this.formModel.checkDateFrom = checkDateFrom
        this.formModel.checkDateTo = checkDateTo
      }
    }
  },
  methods: {
    async handlerSubmit() {
      try {
        await this.$refs.form.validate()
        // this.submitButtonLoading = true
        // this.$axios.post('/biz/reportInfo/add', this.formModel)
        // this._value = false
        // await this.$nextTick()
        // this.$alert('<div style="text-align: center"><h3>报告生成中</h3><div>报告生成预计2分钟</div><div>请稍后在报告页面中查询</div></div>', '', {
        //   dangerouslyUseHTMLString: true,
        //   confirmButtonText: '知道了',
        //   center: true
        // })
        this.submitButtonLoading = false
      } catch (e) {
        this.submitButtonLoading = false
      }

    }
  }
}
</script>

<style>

</style>
