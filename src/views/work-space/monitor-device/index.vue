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
        <search-item label="设备序列号">
          <el-input v-model="pageData.searchData.searchModel.equipSerialNum" clearable/>
        </search-item>
      </el-col>
      <el-col :span="6">
        <search-item label="项目名称">
          <el-input v-model="pageData.searchData.searchModel.projectName" clearable/>
        </search-item>
      </el-col>
      <el-col :span="6">
        <search-item label="关联用户">
          <el-input v-model="pageData.searchData.searchModel.bindUserName" clearable/>
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
      <el-table-column label="序列设备号" prop="equipSerialNum" align="center"/>
      <el-table-column label="项目名称" prop="projectName" align="center"/>
      <el-table-column label="所在位置经纬度" prop="所在位置经纬度" align="center">
        <template slot-scope="scope">
          <span>{{ [scope.row.longitude,scope.row.latitude].join(',') }}</span>
        </template>
      </el-table-column>
      <el-table-column label="监测点" prop="checkSpotsCount" align="center"/>
      <el-table-column label="开始监测时问" prop="startMonitorTime" align="center"/>
      <!--todo：单位换算-->
      <el-table-column label="监测时长" prop="监测时长" align="center"/>
      <el-table-column label="关联人" prop="bindUserName" align="center"/>
      <el-table-column label="关联手机号" prop="bindUserPhone" align="center"/>
    </template>
  </content-layout>
</template>

<script>
export default {
  fetchTableUrl: '/biz/monitorEquipInfo/page',
  data() {
    return {
      pageData: {
        searchData: {
          searchModel: {
            equipSerialNum: '',
            projectName: '',
            bindUserName: ''
          }
        },
      }
    }
  },
  mounted() {
    this.fetchTableData()
  }
}
</script>

<style scoped>

</style>
