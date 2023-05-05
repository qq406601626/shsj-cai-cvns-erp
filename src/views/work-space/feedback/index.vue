<template>
  <content-layout
      :has-pagination="true"
      :table-data="pageData.tableData"
      :pagination-data="pageData.paginationData"
  >
    <el-row slot="search-controls" :gutter="40">
      <el-col :span="6">
        <search-item label="反馈手机号">
          <el-input v-model="pageData.searchData.searchModel.relatedUserPhone" clearable/>
        </search-item>
      </el-col>
      <el-col :span="6">
        <search-item label="关联用户">
          <el-input  v-model="pageData.searchData.searchModel.relatedUserName" clearable/>
        </search-item>
      </el-col>
    </el-row>
    <template slot="search-buttons">
      <el-button
          type="primary"
          :loading="pageData.searchData.searchButtonLoading"
          @click="handlerSearch"
      >
        查询
      </el-button>
    </template>
    <template>
      <el-table-column label="反馈ID" prop="id" align="center"/>
      <el-table-column label="反馈信息" prop="content" align="center"/>
      <el-table-column label="反馈时间" prop="createTime" align="center"/>
      <el-table-column label="反馈人" prop="relatedUserName" align="center"/>
      <el-table-column label="反馈手机号" prop="relatedUserPhone" align="center"/>
      <el-table-column label="操作" fixed="right" align="center">
        <template slot-scope="scope">
          <el-button type="text">查看图片</el-button>
        </template>
      </el-table-column>
    </template>
  </content-layout>
</template>

<script>
export default {
  fetchTableUrl: '/biz/reportInfo/page',
  data() {
    return {
      pageData: {
        searchData: {
          searchModel: {
            relatedUserPhone: '',
            relatedUserName: ''
          }
        },
      },
    }
  },
  mounted() {
    this.fetchTableData()
  }
}
</script>

<style scoped>

</style>
