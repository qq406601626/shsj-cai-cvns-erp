<template>
  <content-layout
      :has-pagination="true"
      :table-data="pageData.tableData"
      :pagination-data="pageData.paginationData"
  >
    <el-row slot="search-controls" :gutter="40">
      <el-col :span="6">
        <search-item label="项目名称">
          <el-input/>
        </search-item>
      </el-col>
      <el-col :span="6">
        <search-item label="报告生成时间">
          <el-input/>
        </search-item>
      </el-col>
    </el-row>
    <template slot="search-buttons">
      <el-button type="primary">生成报告</el-button>
      <el-button type="primary">查询</el-button>
    </template>
    <template>
      <el-table-column label="设备序列号" prop="设备序列号" align="center"/>
      <el-table-column label="项目名称" prop="项目名称" align="center"/>
      <el-table-column label="监测点" prop="监测点" align="center"/>
      <el-table-column label="报告时问殷" prop="报告时问殷" align="center"/>
      <el-table-column label="报告生成时问" prop="报告生成时问" align="center"/>
      <el-table-column label="报告人" prop="报告人" align="center"/>
      <el-table-column label="关联手机号" prop="关联手机号" align="center"/>
      <el-table-column label="申请人" prop="申请人" align="center"/>
      <el-table-column label="操作" fixed="right" align="center">
        <template slot-scope="scope">
          <el-button type="text">下载查看</el-button>
        </template>
      </el-table-column>
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
