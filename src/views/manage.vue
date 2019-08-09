<template>
  <div class="manage">
    <headTop></headTop>
    <navMenu></navMenu>
    <router-view></router-view>
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

</style>
