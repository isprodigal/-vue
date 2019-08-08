<template>
  <div class="Tables">
    <div class="mar">
      <el-collapse v-model="activeName" accordion>
        <!-- table多选模式 -->
        <el-collapse-item title="table多选模式" name="1">
          <div class="bt">table多选模式</div>
          <el-form :inline="true" class="demo-form-inline marbootom">
            <el-form-item>
              <el-input v-model="input" placeholder="请输入内容"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" icon="el-icon-search" @click="serch">搜索</el-button>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" icon="el-icon-circle-plus-outline" @click="newAdd">新增</el-button>
            </el-form-item>
            <el-form-item>
              <el-button
                type="danger"
                icon="el-icon-delete"
                v-show="deletion"
                @click="batchDeletion"
              >批量删除</el-button>
            </el-form-item>
          </el-form>
          <!-- el-table标签
        :data="tableData3"  渲染表格所读取的数据
        stripe 开启表格斑马线
        @selection-change当点击选择项发生变化时会触发该事件
        @current-change点击table上任一一个地方就会触发   有小bug  个人观点
          -->
          <el-table
            ref="multipleTable"
            :data="tableData3"
            stripe
            tooltip-effect="dark"
            style="width: 100%;margin-bottom:10px"
            @selection-change="handleSelectionChange"
            @current-change="currentChange"
          >
            <el-table-column type="selection" width="55" label></el-table-column>
            <el-table-column label="日期" width="120">
              <template slot-scope="scope">{{ scope.row.date }}</template>
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="120"></el-table-column>
            <el-table-column prop="address" label="地址" show-overflow-tooltip></el-table-column>
            <el-table-column label="操作" width="120">
              <template slot-scope="scope">
                <el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
                <el-button
                  @click.native.prevent="deleteRow(scope.$index, tableData3)"
                  type="text"
                  size="small"
                >删除</el-button>
              </template>
            </el-table-column>
          </el-table>
          <div class="block" style="float:right;margin-bottom:10px">
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currentPage4"
              :page-sizes="[3, 6, 9, 12]"
              :page-size="3"
              layout="total,  prev, pager, next,sizes"
              :total="tableData3.length"
            ></el-pagination>
          </div>
        </el-collapse-item>
        <!-- table单选模式 -->
        <el-collapse-item title="table单选模式" name="2">
          <div class="bt">table单选模式</div>
        </el-collapse-item>
      </el-collapse>
    </div>
    <!-- 弹出层 -->
    <el-dialog :title="titles" :visible.sync="dialogVisible" width="30%">
      <el-form
        :model="ruleForm2"
        status-icon
        :rules="rules2"
        ref="ruleForm2"
        label-width="50px"
        class="demo-ruleForm"
      >
        <el-form-item label="日期" prop="riqi">
          <el-input v-model="ruleForm2.riqi" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="姓名" prop="name">
          <el-input type="name" v-model="ruleForm2.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="地址" prop="address">
          <el-input v-model.number="ruleForm2.address"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
          <el-button v-show="titles=='编辑'?true:false" @click="resetForm('ruleForm2')">重置</el-button>
          <el-button v-show="titles=='新增'?true:false" @click="dialogVisible = false">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
    <!-- 删除确认 -->
    <el-dialog title="提示" :visible.sync="centerDialogVisible" width="30%" center>
      <span>确定删除？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="delted">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: 'Tables',
  data () {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('不能为空'))
      } else {
        callback()
      }
    }
    return {
      activeName: 1,
      currentPage4: 1,
      input: '',
      dialogVisible: false,
      centerDialogVisible: false,
      delarr: [],
      titles: '',
      deletion: false,
      ruleForm2: {
        riqi: '',
        name: '',
        address: ''
      },
      rules2: {
        riqi: [{ validator: validatePass, trigger: 'blur' }],
        name: [{ validator: validatePass, trigger: 'blur' }],
        address: [{ validator: validatePass, trigger: 'blur' }]
      },
      tableData3: [
        {
          date: '2016-05-03',
          name: '王小虎1',
          address: '上海市普陀区金沙江路 1 弄'
        },
        {
          date: '2016-05-02',
          name: '王小虎2',
          address: '上海市普陀区金沙江路 2 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎3',
          address: '上海市普陀区金沙江路 3 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎4',
          address: '上海市普陀区金沙江路 4 弄'
        },
        {
          date: '2016-05-08',
          name: '王小虎5',
          address: '上海市普陀区金沙江路 5 弄'
        },
        {
          date: '2016-05-06',
          name: '王二',
          address: '上海市普陀区金沙江路 6 弄'
        },
        {
          date: '2016-05-07',
          name: '张三',
          address: '上海市普陀区金沙江路 7 弄'
        }
      ],
      multipleSelection: []
    }
  },
  // computed: {
  //   // 模糊搜索
  //   tables() {
  //     const input = this.input;
  //     if (input) {
  //       // filter() 方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。
  //       // 注意： filter() 不会对空数组进行检测。
  //       // 注意： filter() 不会改变原始数组。
  //       return this.tableData3.filter(data => {
  //         // some() 方法用于检测数组中的元素是否满足指定条件;
  //         // some() 方法会依次执行数组的每个元素：
  //         // 如果有一个元素满足条件，则表达式返回true , 剩余的元素不会再执行检测;
  //         // 如果没有满足条件的元素，则返回false。
  //         // 注意： some() 不会对空数组进行检测。
  //         // 注意： some() 不会改变原始数组。
  //         return Object.keys(data).some(key => {
  //           // indexOf() 返回某个指定的字符在某个字符串中首次出现的位置，如果没有找到就返回-1；
  //           // 该方法对大小写敏感！所以之前需要toLowerCase()方法将所有查询到内容变为小写。
  //           return (
  //             String(data[key])
  //               .toLowerCase()
  //               .indexOf(input) > -1
  //           );
  //         });
  //       });
  //     }
  //     return this.tableData3;
  //   }
  // },
  methods: {
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    },
    // 判断勾选状态
    toggleSelection (rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row)
        })
      } else {
        this.$refs.multipleTable.clearSelection()
      }
    },
    // 当点击选择项发生变化时会触发该事件
    handleSelectionChange (val) {
      this.multipleSelection = val
      this.multipleSelection.length >= 2
        ? (this.deletion = true)
        : (this.deletion = false)
    },
    // 点击table一列的任意位置就勾选上
    currentChange (val) {
      //   console.log(val) // 获取到当前元素的内容
      //   console.log(this.$refs.multipleTable) // 获取DOM当前元素
      this.$refs.multipleTable.toggleRowSelection(val)
    },
    // 搜索
    serch () {},
    // 新增
    newAdd () {
      this.titles = '新增'
      this.ruleForm2 = {
        riqi: '',
        name: '',
        address: ''
      }
      this.dialogVisible = true
    },
    // 批量删除
    batchDeletion () {
      const length = this.multipleSelection.length
      for (let i = 0; i < length; i++) {
        // console.log(this.multipleSelection[i])
        // 此处应该拿到this.multipleSelection[i].id
        this.delarr.push(this.multipleSelection[i])
        // console.log(this.delarr[i])
      }
      // 拿到所有的选中的id给后台
      console.log(this.delarr)
    },
    // 单个删除
    deleteRow (index, rows) {
      // console.log(index, rows)
      this.delarr = []
      this.delarr.push(index, rows)
      console.log(this.delarr)
      this.centerDialogVisible = true
      // rows.splice(index, 1)
    },
    // 单个删除确定删除
    delted () {
      this.delarr[1].splice(this.delarr[0], 1)
      this.centerDialogVisible = false
    },
    // 编辑
    handleClick (val) {
      //   console.log(val)
      this.titles = '编辑'
      this.dialogVisible = true
      this.ruleForm2 = {
        riqi: val.date,
        name: val.name,
        address: val.address
      }
    },
    // 编辑提交和新增提交
    submitForm (formName) {
      if (this.titles === '编辑') {
        this.$refs[formName].validate(valid => {
          if (valid) {
            alert('编辑成功!')
          } else {
            console.log('error submit!!')
            return false
          }
        })
      } else if (this.titles === '新增') {
        this.$refs[formName].validate(valid => {
          if (valid) {
            alert('新增成功!')
          } else {
            console.log('error submit!!')
            return false
          }
        })
      }
    },
    // 编辑层重置
    resetForm (formName) {
      // this.ruleForm2 = {
      //   riqi: '',
      //   name: '',
      //   address: ''
      // }
      console.log(this.$refs[formName])
      this.$refs[formName].resetFields() // 表单重置方法   有bug
    }
  }
}
</script>
<style lang="less" socped>
// 去掉总选框
// thead {
//   .el-table-column--selection {
//     .cell {
//       display: none;
//     }
//   }
// }
.marbootom {
  .el-form-item {
    margin-bottom: 0;
    margin-top: 10px;
  }
}
</style>
