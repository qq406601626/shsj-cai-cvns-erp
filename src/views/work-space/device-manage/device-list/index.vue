<template>
  <content-layout
      :has-pagination="true"
      :table-data="pageData.tableData"
      :pagination-data="pageData.paginationData"
  >
    <el-row slot="search-controls" :gutter="40">
      <el-col :span="6">
        <search-item label="设备序列号">
          <el-input/>
        </search-item>
      </el-col>
    </el-row>
    <template slot="search-buttons">
      <el-button type="primary">查询</el-button>
      <el-button type="primary">新增设备</el-button>
    </template>
    <template>
      <el-table-column label="设备序列号" prop="设备序列号" align="center"/>
      <el-table-column label="设备名称" prop="项目名称" align="center"/>
      <el-table-column label="主摄像机名" prop="所在位置经纬度" align="center"/>
      <el-table-column label="主摄像IP" prop="监测点" align="center"/>
      <el-table-column label="主摄像端口号" prop="开始盘测时问" align="center"/>
      <el-table-column label="主摄像登录名" prop="监测点" align="center"/>
      <el-table-column label="主摄像登录密码" prop="开始盘测时问" align="center"/>
      <el-table-column label="副摄像机名" prop="监测点" align="center"/>
      <el-table-column label="副摄像IP" prop="开始盘测时问" align="center"/>
      <el-table-column label="副摄像端口号" prop="监测点" align="center"/>
      <el-table-column label="副摄像登录名" prop="开始盘测时问" align="center"/>
      <el-table-column label="副摄像登录密码" prop="监测点" align="center"/>
      <el-table-column label="操作" fixed="right" align="center">
        <template slot-scope="scope">
          <el-button type="text">修改</el-button>
        </template>
      </el-table-column>
    </template>
  </content-layout>
</template>

<script>
export default {
  mounted() {
    console.log('111')
    this.$axios.get('/biz/equipmentMetaInfo/page',{
      params:{

      }
    })
  }
}
</script>

<style scoped>

</style>
