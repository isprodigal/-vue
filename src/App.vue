<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'App',
  data () {
    return {
      meg: '1'
    }
  }
}
</script>
<style lang="less">
* {
  padding: 0;
  margin: 0;
}
.bt {
  text-align: center;
  color: red;
}
.mar {
  margin: 0 20%;
}
</style>
