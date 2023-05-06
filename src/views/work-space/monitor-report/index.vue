<template>
  <div style="width: 100%;height: 100%">
    <content-layout
        :has-pagination="true"
        :table-data="pageData.tableData"
        :pagination-data="pageData.paginationData"
    >
      <el-row slot="search-controls" :gutter="40">
        <el-col :span="6">
          <search-item label="项目名称">
            <el-input
                clearable
                placeholder="请输入项目名称"
            />
          </search-item>
        </el-col>
        <el-col :span="6">
          <search-item label="报告生成时间">
            <el-date-picker
                v-model="pageData.searchData.searchModel.createTime"
                type="date"
                placeholder="选择日期">
            </el-date-picker>
          </search-item>
        </el-col>
      </el-row>
      <template slot="search-buttons">
        <el-button type="primary"  @click="addReportDialogVisible = true">生成报告</el-button>
        <el-button
            type="primary"
            :loading="pageData.searchData.searchButtonLoading"
            @click="handlerSearch"
        >
          查询
        </el-button>
      </template>
      <template>
        <el-table-column label="设备序列号" prop="equipSerialNum" align="center"/>
        <el-table-column label="项目名称" prop="projectName" align="center"/>
        <!--todo-->
        <el-table-column label="监测点" prop="监测点" align="center"/>
        <!--todo-->
        <el-table-column label="报告时问殷" prop="报告时问殷" align="center"/>
        <el-table-column label="报告生成时问" prop="createTime" align="center"/>
        <el-table-column label="报告人" prop="reportUserName" align="center"/>
        <!--todo-->
        <el-table-column label="关联手机号" prop="关联手机号" align="center"/>
        <el-table-column label="申请人" prop="applyUserName" align="center"/>
        <el-table-column label="操作" fixed="right" align="center">
          <template slot-scope="scope">
            <el-button type="text">下载查看</el-button>
          </template>
        </el-table-column>
      </template>
    </content-layout>
    <add-report-dialog v-model="addReportDialogVisible"/>
  </div>
</template>

<script>
import addReportDialog from './add-report-dialog'
export default {
  fetchTableUrl: '/biz/reportInfo/page',
  components:{addReportDialog},
  data() {
    return {
      pageData: {
        searchData: {
          searchModel: {
            projectName: '',
            createTime: ''
          }
        },
      },
      addReportDialogVisible:false
    }
  },
  mounted() {
    this.fetchTableData()
  }
}
</script>

<style scoped>

</style>
