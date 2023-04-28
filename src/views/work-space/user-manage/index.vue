<template>
  <content-layout
      :has-pagination="true"
      :table-data="pageData.tableData"
      :pagination-data="pageData.paginationData"
  >
    <el-row slot="search-controls" :gutter="40">
      <el-col :span="6">
        <search-item label="手机号">
          <el-input/>
        </search-item>
      </el-col>
      <el-col :span="6">
        <search-item label="注册时间">
          <el-date-picker style="width: 100%"/>
        </search-item>
      </el-col>
    </el-row>
    <template slot="search-buttons">
      <el-button type="primary">查询</el-button>
    </template>
    <template>
      <el-table-column label="用户ID" prop="用户ID" align="center"/>
      <el-table-column label="姓名" prop="姓名" align="center"/>
      <el-table-column label="手机号" prop="手机号" align="center"/>
      <el-table-column label="监控设备数" prop="监控设备数" align="center"/>
      <el-table-column label="生成报告数" prop="生成报告数" align="center"/>
      <el-table-column label="注册时间" prop="注册时间" align="center"/>
    </template>
  </content-layout>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style scoped>

</style>
