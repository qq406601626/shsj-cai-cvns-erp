<template>
  <content-layout
      :has-pagination="true"
      :table-data="pageData.tableData"
      :pagination-data="pageData.paginationData"
  >
    <el-row slot="search-controls" :gutter="40">
      <el-col :span="6">
        <search-item label="反馈手机号">
          <el-input/>
        </search-item>
      </el-col>
      <el-col :span="6">
        <search-item label="关联用户">
          <el-input/>
        </search-item>
      </el-col>
    </el-row>
    <template slot="search-buttons">
      <el-button type="primary">查询</el-button>
    </template>
    <template>
      <el-table-column label="反馈ID" prop="序列设备号" align="center"/>
      <el-table-column label="反馈信息" prop="项目名称" align="center"/>
      <el-table-column label="反馈时间" prop="所在位置经纬度" align="center"/>
      <el-table-column label="反馈人" prop="监测点" align="center"/>
      <el-table-column label="反馈手机号" prop="开始盘测时问" align="center"/>
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
  data() {
    return {}
  }
}
</script>

<style scoped>

</style>
