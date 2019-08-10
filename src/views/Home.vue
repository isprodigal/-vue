<template>
  <div class="home">
    <div class="main">
      <el-scrollbar style="height:100%">
      <el-card class="box-card" AutoScroll=true>
        <div slot="header" class="clearfix">
          <span>首页</span>
        </div>
        <Tables></Tables>
        <div id="EchartsPie"></div>
      </el-card>
      </el-scrollbar>
    </div>
  </div>
</template>

<script>
import Tables from './Tables.vue'
export default {
  name: 'home',
  components: {
    Tables
  },
  mounted () {
    this.drawLine()
  },
  methods: {
    drawLine () {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('EchartsPie'))
      // 绘制图表
      myChart.setOption({
        title: { text: '在Vue中使用echarts' },
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      })
    }
  }
}
</script>
<style lang="less">
.el-scrollbar__wrap {
   overflow-x: hidden;
}
#EchartsPie {
  width: 100%;
  height: 500px;
}
</style>
