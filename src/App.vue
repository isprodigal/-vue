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
#app {
  background-image: url(assets/banner.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100%;
  position: fixed;
  width: 100%;
}
.bt {
  text-align: center;
  color: red;
}
.mar {
  margin: 0 20%;
}
</style>
