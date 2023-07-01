<template>
  <div style="width: 100%;height: 100%">
    <content-layout
        :has-pagination="true"
        :table-data="pageData.tableData"
        :pagination-data="pageData.paginationData"
        @size-change="handlerSizeChange"
        @current-change="handlerCurrentChange"
    >
      <el-row slot="search-controls" :gutter="40">
        <el-col :sm="8" :xl="6">
          <search-item label="项目名称">
            <el-input
                v-model="pageData.searchData.searchModel.projectName"
                clearable
                placeholder="请输入项目名称"
            />
          </search-item>
        </el-col>
        <el-col :sm="8" :xl="6">
          <search-item label="报告生成时间">
            <!--todo：过滤项不生效-->
            <el-date-picker
                v-model="pageData.searchData.searchModel.createTimeStart"
                value-format="yyyy-MM-dd HH:mm:ss"
                type="date"
                placeholder="选择日期"
                style="width: 100%">
            </el-date-picker>
          </search-item>
        </el-col>
      </el-row>
      <template slot="search-buttons">
        <el-button type="primary" @click="addReportDialogVisible = true">生成报告</el-button>
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
        <el-table-column label="监测点" prop="checkSpotsCount" align="center"/>
        <el-table-column label="报告时问殷" prop="报告时问殷" align="center">
          <template slot-scope="scope">
            <span>{{ row.checkDateFrom }}</span>
            <span>-</span>
            <span>{{ row.checkDateTo }}</span>
          </template>
        </el-table-column>
        <el-table-column label="报告生成时问" prop="createTime" align="center"/>
        <el-table-column label="报告人" prop="reportUserName" align="center"/>
        <el-table-column label="关联手机号" prop="reportUserPhone" align="center"/>
        <el-table-column label="申请人" prop="applyUserName" align="center"/>
        <el-table-column label="操作" fixed="right" align="center">
          <template slot-scope="scope">
            <a :href="scope.row.pdfUrl || 'javascript:void(0)'">
              <el-button type="text">下载查看</el-button>
            </a>
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
  components: {addReportDialog},
  data() {
    return {
      pageData: {
        searchData: {
          searchModel: {
            projectName: '',
            createTimeStart: ''
          }
        },
      },
      addReportDialogVisible: false
    }
  },
  mounted() {
    this.fetchTableData()
  }
}
</script>

<style scoped>

</style>
