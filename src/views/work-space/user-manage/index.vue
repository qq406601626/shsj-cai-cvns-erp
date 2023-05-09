<template>
  <content-layout
      :has-pagination="true"
      :table-data="pageData.tableData"
      :pagination-data="pageData.paginationData"
      @size-change="handlerSizeChange"
      @current-change="handlerCurrentChange"
  >
    <el-row slot="search-controls" :gutter="40">
      <el-col :span="6">
        <!--todo：后端不支持过滤-->
        <search-item label="手机号">
          <el-input
              clearable
              placeholder="请输入手机号"
          />
        </search-item>
      </el-col>
      <!--todo：后端不支持过滤-->
      <el-col :span="6">
        <search-item label="注册时间">
          <el-date-picker style="width: 100%"/>
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
      <el-table-column label="用户ID" prop="id" align="center"/>
      <el-table-column label="姓名" prop="name" align="center"/>
      <el-table-column label="手机号" prop="phone" align="center"/>
      <!--todo：缺少字段-->
      <el-table-column label="监控设备数" prop="监控设备数" align="center"/>
      <!--todo：缺少字段-->
      <el-table-column label="生成报告数" prop="生成报告数" align="center"/>
      <el-table-column label="注册时间" prop="createTime" align="center"/>
    </template>
  </content-layout>
</template>

<script>
export default {
  fetchTableUrl: '/biz/clientUser/page',
  data() {
    return {
      pageData: {
        searchData: {
          searchModel: { }
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
