<template>
  <el-dialog
      title="新增报告"
      :visible.sync="_value"
      :close-on-click-modal="false"
      width="600px"
  >
    <el-form
        ref="form"
        :model="formModel"
        :rules="formRules"
        label-width="140px"
    >
      <el-form-item label="设备序列号" prop="equipSerialNum">
        <el-input
            v-model="formModel.equipSerialNum"
            clearable
            placeholder="请输入设备序列号"
        />
      </el-form-item>
      <el-form-item label="检测时间段" prop="daterangeModel">
        <el-date-picker
            v-model="_daterangeModel"
            type="datetimerange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            clearable
            value-format="yyyy-MM-dd HH:mm:ss"
            style="width: 100%"
            format="yyyy-MM-dd HH:mm"
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
        this.submitButtonLoading = true
        await this.$axios.post('/biz/reportInfo/add', this.formModel)
        this._value = false
        await this.$nextTick()
        this.$alert('<div style="text-align: center"><h3>报告生成中</h3><div>报告生成预计2分钟</div><div>请稍后在报告页面中查询</div></div>', '', {
          dangerouslyUseHTMLString: true,
          confirmButtonText: '知道了',
          center: true,
          showClose:false
        })
        this.submitButtonLoading = false
      } catch (e) {
        this.submitButtonLoading = false
      }

    }
  },
  watch:{
    _value(v){
      if(v){
        this.formModel.equipSerialNum = ''
        this.formModel.checkDateFrom = ''
        this.formModel.checkDateTo = ''
        this.$nextTick(()=>{
          this.$refs.form.clearValidate()
        })
      }
    }
  }
}
</script>

<style>

</style>
