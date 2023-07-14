<template>
  <content-layout
      :has-pagination="true"
      :table-data="pageData.tableData"
      :pagination-data="pageData.paginationData"
      @size-change="handlerSizeChange"
      @current-change="handlerCurrentChange"
  >
    <el-row slot="search-controls" :gutter="40">
      <el-col :sm="8" :xl="6">
        <search-item label="手机号">
          <el-input
              v-model="pageData.searchData.searchModel.phone"
              clearable
              placeholder="请输入手机号"
          />
        </search-item>
      </el-col>
      <el-col :sm="8" :xl="6">
        <search-item label="注册时间">
          <el-date-picker
              v-model="pageData.searchData.searchModel.createTimeStart"
              value-format="yyyy-MM-dd HH:mm:ss"
              style="width: 100%"
              @change="pageData.searchData.searchModel.createTimeEnd = $event&&`${$event.slice(0,10)} 23:59:59`"
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
    </template>
    <template>
      <el-table-column label="用户ID" prop="id" align="center"/>
      <el-table-column label="姓名" prop="name" align="center"/>
      <el-table-column label="手机号" prop="phone" align="center"/>
      <!--&lt;!&ndash;todo：缺少字段&ndash;&gt;-->
      <!--<el-table-column label="监控设备数" prop="监控设备数" align="center"/>-->
      <!--&lt;!&ndash;todo：缺少字段&ndash;&gt;-->
      <!--<el-table-column label="生成报告数" prop="生成报告数" align="center"/>-->
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
          searchModel: {
            phone: '',
            createTimeStart: '',
            createTimeEnd: ''
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
