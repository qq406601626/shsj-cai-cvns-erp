<template>
  <div style="width: 100%;height: 100%">
    <el-row :gutter="20">
      <el-col
          v-for="(cartItem,index) in cardItemList"
          :key="index"
          :span="8"
      >
        <el-card shadow="hover" style="margin-bottom: 20px">
          <div style="font-size: 30px;font-weight: bolder;margin-bottom: 10px">{{ responseData[cartItem.prop] }}</div style="font-size: 30px;font-weight: bolder;ma">
          <div>{{ cartItem.label }}</div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cardItemList: [
        {label: '在线设备数', prop: 'onLineEquipCount'},
        {label: '在线项目数', prop: 'onLineProjectCount'},
        {label: '30日新增项目', prop: 'recentlyProjectCount'},
        {label: '30日新增报告', prop: 'recentlyReportCount'},
        {label: '30日新增用户', prop: 'recentlyUserCount'},
        {label: '累计项目数', prop: 'totalProjectCount'},
        {label: '累计报告数', prop: 'totalReportCount'},
        {label: '累计用户数', prop: 'totalUserCount'},
      ],
      responseData: {}
    }
  },
  async mounted() {
    this.responseData = await this.$axios.get('/biz/home/statistics')
  }
}
</script>

<style scoped>

</style>
