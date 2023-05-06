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
          <el-input
              v-model="pageData.searchData.searchModel.equipSerialNum"
              clearable
              placeholder="请输入设备序列号"
          />
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
      <el-button type="primary" @click="$router.push({name:'add-device'})">新增设备</el-button>
    </template>
    <template>
      <el-table-column label="设备序列号" prop="equipSerialNum" align="center"/>
      <el-table-column label="设备名称" prop="equipName" align="center"/>
      <el-table-column label="主摄像机名" prop="mainConfig.mainCameraName" align="center"/>
      <el-table-column label="主摄像IP" prop="mainConfig.mainCameraIp" align="center"/>
      <el-table-column label="主摄像端口号" prop="mainConfig.mainCameraPort" align="center"/>
      <el-table-column label="主摄像登录名" prop="mainConfig.mainCameraAccount" align="center"/>
      <el-table-column label="主摄像登录密码" prop="mainConfig.mainCameraPassword" align="center"/>
      <el-table-column label="副摄像机名" prop="mainConfig.secondaryCameraName" align="center"/>
      <el-table-column label="副摄像IP" prop="mainConfig.secondaryCameraIp" align="center"/>
      <el-table-column label="副摄像端口号" prop="mainConfig.secondaryCameraPort" align="center"/>
      <el-table-column label="副摄像登录名" prop="mainConfig.secondaryCameraAccount" align="center"/>
      <el-table-column label="副摄像登录密码" prop="mainConfig.secondaryCameraPassword" align="center"/>
      <el-table-column label="操作" fixed="right" align="center">
        <template slot-scope="scope">
          <el-button type="text" @click="handlerEdit(scope.row)">修改</el-button>
        </template>
      </el-table-column>
    </template>
  </content-layout>
</template>

<script>
export default {
  fetchTableUrl:'/biz/equipmentMetaInfo/page',
  data(){
    return {
      pageData: {
        searchData: {
          searchModel: {
            equipSerialNum:''
          }
        },
      }
    }
  },
  methods:{
    handlerEdit(row){
      sessionStorage.setItem('editDeviceRowInfo',JSON.stringify(row))
      this.$router.push({name:'edit-device'})
    }
  },
  mounted() {
    this.fetchTableData()
  }
}
</script>

<style scoped>

</style>
