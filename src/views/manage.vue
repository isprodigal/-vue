<template>
  <div class="manage">
    <el-container style="height: 100%;">
      <navMenu></navMenu>
      <div style="height:100%;width:100%">
        <headTop></headTop>
        <router-view></router-view>
      </div>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
import headTop from '@/components/headTop.vue'
import navMenu from '@/components/navMenu.vue'
export default {
  name: 'manage',
  components: {
    headTop,
    navMenu
  }
}
</script>
<style lang="less">
.manage {
  width: 100%;
  height: 100%;
}
</style>
