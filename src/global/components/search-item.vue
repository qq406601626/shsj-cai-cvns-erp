<template>
  <div class="el-form-item">
    <label class="el-form-item__label">
      <span>{{ label }}</span>
      <span>：</span>
    </label>
    <div class="el-form-item__content">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: String
  }
}
</script>

<style scoped lang="scss">
.el-form-item {
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  margin-bottom: 0;

  .el-form-item__label {
    flex-grow: 0;
    flex-shrink: 0;
  }

  .el-form-item__content {
    flex-grow: 1;
    flex-shrink: 0;
  }
}
</style>
