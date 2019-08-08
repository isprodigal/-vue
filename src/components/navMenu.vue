<template>
  <div class="navMenu">
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      background-color="#002140"
      text-color="#fff"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
    >
      <el-menu-item index="1">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">导航一</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="2-4">
          <span slot="title">选项4</span>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3">
        <i class="el-icon-setting"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>

export default {
  name: 'navMenu',
  data () {
    return {
      isCollapse: false,
      ssr: false
    }
  },
  created () {
    this.axios.get('/qwe.json').then(res => {
      console.log(res)
    })
  },
  methods: {
    // handleOpen (key, keyPath) {
    //   console.log(key, keyPath)
    // },
    // handleClose (key, keyPath) {
    //   console.log(key, keyPath)
    // }
  }
}
</script>
<style lang="less" scoped>
.navMenu {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  .el-menu-vertical-demo {
    width: 200px;
    height: 100%;
  }
}
</style>
