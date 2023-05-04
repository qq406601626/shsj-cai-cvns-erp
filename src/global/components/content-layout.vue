<template>
  <div class="content-layout-container">
    <div v-if="$slots['search-controls']" class="search-wrap">
      <slot name="search-controls"></slot>
      <el-row type="flex" justify="end">
        <slot name="search-buttons"></slot>
      </el-row>
    </div>
    <div v-if="$slots.default" class="table-wrap">
      <el-table
          v-loading="tableData.loading"
          height="100%"
          :data="tableData.list"
          border
          :header-cell-style="{background:'#f4f4f4'}"
      >
        <slot></slot>
      </el-table>
    </div>
    <el-pagination
        v-if="hasPagination"
        @size-change="$emit('size-change',...arguments)"
        @current-change="$emit('current-change',...arguments)"
        :current-page="paginationData.currentPage"
        :page-sizes="paginationData.pageSizes"
        :page-size="paginationData.pageSize"
        :layout="paginationData.layout"
        :total="paginationData.total"
        style="align-self: flex-end"
    />

  </div>
</template>
<script>
export default {
  props: {
    tableData: {
      type: Object,
      default() {
        return {
          loading: false,
          list: []
        }
      }
    },
    paginationData: {
      type: Object,
      default() {
        return {}
      }
    },
    hasPagination: Boolean
  }
}
</script>

<style scoped lang="scss">
.content-layout-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  .search-wrap {
    flex-grow: 0;
    flex-shrink: 0;
  }

  .table-wrap {
    position: relative;
    flex-grow: 1;
  }
}
</style>
