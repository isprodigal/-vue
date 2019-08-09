<template>
  <div class="navMenu">
    <el-menu
      :default-active="onRoutes"
      class="el-menu-vertical-demo"
      background-color="#002140"
      text-color="#fff"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      unique-opened
      router
    >
      <template v-for="item in nav">
        <template v-if="item.childs">
          <el-submenu :index="item.entity.id" :key="item.entity.id">
            <template slot="title">
              <i :class="['iconfont','fontSize',item.entity.icon ]"></i>
              <span slot="title" class="listtitle">{{ item.entity.alias }}</span>
            </template>
            <template v-for="subItem in item.childs">
              <el-submenu v-if="subItem.childs" :index="subItem.entity.id" :key="subItem.entity.id">
                <template slot="title">
                  <i :class="['iconfont','fontSize',subItem.entity.icon]"></i>
                  <span slot="title" class="listtitle">{{ subItem.entity.alias }}</span>
                </template>
                <el-menu-item
                  v-for="(threeItem,i) in subItem.childs"
                  :key="i"
                  :index="threeItem.entity.id"
                >
                  <template slot="title">
                    <i :class="['iconfont','fontSize',subItem.entity.icon]"></i>
                    <span slot="title" class="listtitle">{{ subItem.entity.alias }}</span>
                  </template>
                  <!-- {{ threeItem.entity.alias }} -->
                </el-menu-item>
              </el-submenu>
              <el-menu-item v-else :index="subItem.entity.value" :key="subItem.entity.id">
                <template slot="title">
                  <i :class="['iconfont','fontSize',subItem.entity.icon]"></i>
                  <span slot="title" class="listtitle">{{ subItem.entity.alias }}</span>
                </template>
                <!-- {{ subItem.entity.alias }} -->
              </el-menu-item>
            </template>
          </el-submenu>
        </template>
        <el-menu-item v-else :index="item.entity.value" :key="item.entity.id">
          <template slot="title">
            <i :class="['iconfont','fontSize',item.entity.icon]"></i>
            <span slot="title" class="listtitle">{{ item.entity.alias }}</span>
          </template>
        </el-menu-item>
      </template>
    </el-menu>
  </div>

</template>
<script>
export default {
  name: 'navMenu',
  data () {
    return {
      isCollapse: false,
      ssr: false,
      nav: [],
      onRoutes: '/home'
    }
  },
  created () {
    this.axios.get('/qwe.json').then(res => {
      this.nav = res.data
      this.onRoutes = this.$route.path
    })
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
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
  i {
    margin-right: 10px;
  }
}
</style>
