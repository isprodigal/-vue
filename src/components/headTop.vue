<template>
  <div class="headTop">
    <el-card class="box-card">
      <el-dropdown class="fr" style="margin-right:30px;">
        <el-badge is-dot class="item">
        <el-button type="text">admin</el-button>
      </el-badge>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-card>
  </div>
</template>
<script>
export default {
  name: 'headTop'
}
</script>
<style lang="less" scoped>
.fr {
  float: right;
}
</style>
