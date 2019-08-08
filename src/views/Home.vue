<template>
  <div class="home">
    <headTop></headTop>
    <navMenu></navMenu>
    <div class="main">
      <el-card class="box-card">
        123
      </el-card>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import headTop from '@/components/headTop.vue'
import navMenu from '@/components/navMenu.vue'
export default {
  name: 'home',
  components: {
    headTop,
    navMenu
  }
}
</script>
<style lang="less">
.home {
  width: 100%;
  height: 100%;
  background-color: #f0f2f5;
  position: fixed;
  .main {
    margin-left: 220px;
    margin-right: 20px;
    margin-top: 20px;
    margin-bottom:20px;
  }
}
</style>
