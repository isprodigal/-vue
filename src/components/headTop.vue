<template>
  <div class="headTop">
     <el-header style="text-align: right; font-size: 12px;padding:0">
        <el-card class="box-card">
       <el-dropdown @command="handleCommand" >
          <el-badge is-dot class="item">
            <el-avatar :size="45">
              <img
                src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1565417404&di=e57dac195ebe3d98c31d50901f993d31&src=http://ac-r.static.booking.cn/images/hotel/max1024x768/987/98767654.jpg"
              />
            </el-avatar>
          </el-badge>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="a">个人中心</el-dropdown-item>
            <el-dropdown-item command="b">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        </el-card>
    </el-header>
  </div>
</template>
<script>
export default {
  name: 'headTop',
  methods: {
    handleCommand (command) {
      if (command === 'a') {
        this.$router.replace('/account/Personal')
      }
      if (command === 'b') {
        localStorage.removeItem('elementUI')
        this.$router.replace('/')
      }
    }
  }
}
</script>
<style lang="less" scoped>
.headTop{
  overflow: hidden;
}
// .el-card__body{
//   padding: 10px;
// }
</style>
