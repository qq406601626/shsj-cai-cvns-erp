<template>
  <div style="width: 100%;height: 100%">
    <content-layout
        :has-pagination="true"
        :table-data="pageData.tableData"
        :pagination-data="pageData.paginationData"
        @size-change="handlerSizeChange"
        @current-change="handlerCurrentChange"
    >
      <el-row slot="search-controls" :gutter="40">
        <el-col :span="6">
          <search-item label="反馈手机号">
            <el-input
                v-model="pageData.searchData.searchModel.relatedUserPhone"
                clearable
                placeholder="请输入反馈手机号"
            />
          </search-item>
        </el-col>
        <el-col :span="6">
          <search-item label="关联用户">
            <el-input
                v-model="pageData.searchData.searchModel.relatedUserName"
                clearable
                placeholder="请输入关联用户"
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
        <el-table-column label="反馈ID" prop="id" align="center"/>
        <el-table-column label="反馈信息" prop="content" align="center"/>
        <el-table-column label="反馈时间" prop="createTime" align="center"/>
        <el-table-column label="反馈人" prop="relatedUserName" align="center"/>
        <el-table-column label="反馈手机号" prop="relatedUserPhone" align="center"/>
        <el-table-column label="操作" fixed="right" align="center">
          <template slot-scope="scope">
            <el-button type="text" @click="handlerPreviewImg(scope.row)">查看图片</el-button>
          </template>
        </el-table-column>
      </template>
    </content-layout>
    <image-viewer
        v-if="showViewer"
        :z-index="2000"
        :initial-index="0"
        :url-list="previewSrcList"
        :on-close="()=>{showViewer=false}"
    />
  </div>
</template>

<script>
import imageViewer from 'element-ui/packages/image/src/image-viewer'

export default {
  fetchTableUrl: '/biz/feedback/page',
  components: {imageViewer},
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
      showViewer: false,
      previewSrcList: []
    }
  },
  methods: {
    handlerPreviewImg(row) {
      let {relatedUrls} = row
      try {
        relatedUrls = relatedUrls.replace(/[\[\]]/g, '').split(',')
        this.previewSrcList = relatedUrls
        this.showViewer = true
      } catch (e) {
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
