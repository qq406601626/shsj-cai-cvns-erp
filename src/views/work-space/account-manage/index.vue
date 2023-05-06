<template>
  <div style="width: 100%;height: 100%">
    <content-layout
        :has-pagination="true"
        :table-data="pageData.tableData"
        :pagination-data="pageData.paginationData"
    >
      <el-row slot="search-controls" :gutter="40">
        <el-col :span="6">
          <search-item label="用户名">
            <el-input
                v-model="pageData.searchData.searchModel.searchKey"
                clearable
                placeholder="请输入用户名"
            />
          </search-item>
        </el-col>
      </el-row>
      <template slot="search-buttons">
        <el-button type="primary" @click="addAccountDialogVisible = true">新增账号</el-button>
        <el-button
            type="primary"
            :loading="pageData.searchData.searchButtonLoading"
            @click="handlerSearch"
        >
          查询
        </el-button>
      </template>
      <template>
        <el-table-column label="用户名" prop="name" align="center"/>
        <el-table-column label="登录账号" prop="account" align="center"/>
        <el-table-column label="创建时间" prop="createTime" align="center"/>
        <el-table-column label="操作" fixed="right" align="center">
          <template slot-scope="scope">
            <el-button
                type="text"
                @click="handlerResetPwd(scope.row)"
                :loading="scope.row._resetButtonLoading"
            >
              重设密码
            </el-button>
          </template>
        </el-table-column>
      </template>
    </content-layout>
    <add-account-dialog
        v-model="addAccountDialogVisible"
        :show-account-info="showAccountInfo"
        @add-success="handlerSearch"
    />
  </div>
</template>

<script>
import addAccountDialog from './add-account-dialog'
import {getDecryptPwd} from '@/utils/auth'

export default {
  fetchTableUrl: '/biz/user/page',
  components: {addAccountDialog},
  data() {
    return {
      pageData: {
        searchData: {
          searchModel: {
            searchKey: '',
          }
        },
      },
      addAccountDialogVisible: false
    }
  },
  methods: {
    showAccountInfo({name, account, password}) {
      this.$alert(
          `
            <div style="text-align: center">
              <h3>账号信息</h3>
              <div><span style="display: inline-block;width: 50%;text-align: right">用户名：</span><span style="display: inline-block;width: 50%;text-align: left">${name}</span></div>
              <div><span style="display: inline-block;width: 50%;text-align: right">账号：</span><span style="display: inline-block;width: 50%;text-align: left">${account}</span></div>
              <div><span style="display: inline-block;width: 50%;text-align: right">密码：</span><span style="display: inline-block;width: 50%;text-align: left">${getDecryptPwd(password)}</span></div>
            </div>
            `,
          '',
          {
            dangerouslyUseHTMLString: true,
            confirmButtonText: '知晓了',
            center: true,
            showClose: false
          })
    },
    async handlerResetPwd(row) {
      try {
        this.$set(row, '_resetButtonLoading', true)
        const newPwd = await this.$axios.post('/biz/user/resetPassword', {id: row.id})
        await this.showAccountInfo({
          name: row.name,
          account: row.account,
          password: newPwd
        })
        this.$set(row, '_resetButtonLoading', false)
      } catch (e) {
        this.$set(row, '_resetButtonLoading', false)
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
