<template>
  <div class="sidebar">
    <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group> -->
    <el-menu
      :default-active="onRoutes"
      class="sidebar-el-menu"
      :collapse="collapse"
      text-color="#666"
      active-text-color="#FF9933"
      unique-opened
      router
    >
      <template v-for="item in sideBarList">
        <template v-if="item.subs">
          <el-submenu  :index="item.index" :key="item.index"  >
            <template slot="title">
              <i :class="['iconfont','fontSize',item.url ]"></i>
              <span slot="title" class="listtitle">{{ item.title }}</span>
            </template>
            <template v-for="subItem in item.subs">
              <el-submenu v-if="subItem.subs" :index="subItem.index" :key="subItem.index">
                <template slot="title">{{ subItem.title }}</template>
                <el-menu-item
                  v-for="(threeItem,i) in subItem.subs"
                  :key="i"
                  :index="threeItem.index"
                >{{ threeItem.title }}</el-menu-item>
              </el-submenu>
              <el-menu-item v-else :index="subItem.index" :key="subItem.index">{{ subItem.title }}</el-menu-item>
            </template>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item active-text-color="#FF9933" :index="item.index" :key="item.index" >
            <i :class="['iconfont','fontSize',item.url ]"></i>
            <span slot="title" class="listtitle">{{ item.title }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>
<script>
import { getSideBar } from '@/components/api/api.js'
export default {
  name: 'sidebar',
  data () {
    return {
      sideBarList: [],
      ctitle: '首页',
      icon: [
        {
          type: '首页',
          src: 'icon-shouye'
        },
        {
          type: '用户管理',
          src: 'icon-yuangong'
        },
        {
          type: '产品管理',
          src: 'icon-dianpu'
        },
        {
          type: '订单管理',
          src: 'icon-zhanghuxinxi'
        },
        {
          type: '渠道管理',
          src: 'icon-shangdian'
        },
        {
          type: '电销管理',
          src: 'icon-tongji'
        },
        {
          type: '报表管理',
          src: 'icon-caiwu'
        }, {
          type: '提醒订单',
          src: 'icon-xiaoxi'
        }, {
          type: '规则引擎',
          src: 'icon-guize'
        }, {
          type: '额度管理',
          src: 'icon-edu'
        }, {
          type: '系统管理',
          src: 'icon-xitong'
        }
      ],
      onRoutes: '/dashboard'
    }
  },
  methods: {
  },
  created () {
    getSideBar().then(res => {
      if (res.code === '200') {
        let sidebarlist = JSON.parse(JSON.stringify(res.data))
        let sidelist = []
        function sideDg (data) {
          data.forEach(item => {
            if (item.url) {
              sidelist.push(item.url)
            }
            if (item.children && item.children.length > 0) {
              sideDg(item.children)
            }
          })
        };
        sideDg(sidebarlist)
        localStorage.setItem('clist', JSON.stringify(sidelist))
        let arr = []
        // 父级菜单去重
        for (var i = 0; i < res.data.length; i++) {
          for (var j = i + 1; j < res.data.length; j++) {
            if (res.data[i].id === res.data[j].id) {
              i++
              j = i
            }
          }
          arr.push(res.data[i])
        }
        // console.log(arr);
        // 子菜单去重
        arr.map(item => {
          if (item.children && item.children.length !== 0) {
            let child = []
            for (var i = 0; i < item.children.length; i++) {
              for (var j = i + 1; j < item.children.length; j++) {
                if (item.children[i].id === item.children[j].id) {
                  i++
                  j = i
                }
              }
              child.push(item.children[i])
            }
            item.children = child
          }
        })
        arr.map(item => {
          let para = { index: item.name, title: item.name }
          if (item.url != null && item.url !== '') {
            para.index = item.url
          }
          if (item.children && item.children.length !== 0) {
            para.subs = []
            item.children.map(items => {
              if (items !== []) {
                para.subs.push({ index: items.url, title: items.name })
              }
            })
          }
          this.sideBarList.push(para)
        })
        for (let i = 0; i < this.sideBarList.length; i++) {
          for (let j = 0; j < this.icon.length; j++) {
            if (this.sideBarList[i].title === this.icon[j].type) {
              this.sideBarList[i].url = this.icon[j].src
              break
            }
          }
        }
      }
    })
  },
  computed: {
    collapse () {
      return this.$store.state.collapse
    },
    screenTag () {
      return this.$store.state.screenTag
    }
  }
}
</script>
<style lang="less" scoped>
.sidebar {
  font-size: 18px;
  .imgicon {
    width: 18px;
    vertical-align: middle;
    margin-right: 20px;
  }
  .is-active .listtitle {
    color: rgb(255, 153, 51);
  }
  .listtitle {
    font-size: 16px;
    margin-left: 15px;
  }
  .el-menu {
    border-right: none;
  }
  .is-active .fontSize {
    color: rgb(255, 153, 51);
  }
  .fontSize {
    font-size: 20px;
    color: #666;
  }
}
</style>
