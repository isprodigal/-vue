<template>
  <div class="login">
    <div class="bjt">
      <p>elementUI后台管理系统</p>
      <el-card class="box-card">
        <el-form
          :model="ruleForm2"
          :rules="rules2"
          ref="ruleForm2"
          label-width="0"
          class="demo-dynamic"
        >
          <el-form-item label prop="name">
            <el-input type="name" v-model="ruleForm2.name" placeholder="请输入账号"></el-input>
          </el-form-item>
          <el-form-item label prop="password">
            <el-input type="password" v-model="ruleForm2.password" placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-checkbox v-model="ruleForm2.checked">自动登陆</el-checkbox>
            <router-link style="float:right;color:#1890ff;text-decoration:none;" to>忘记密码</router-link>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" style="width:100%" @click="submitForm">登陆</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Login',
  data () {
    var validateName = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入账号'))
      } else {
        if (this.ruleForm2.name !== '') {
          this.$refs.ruleForm2.validateField('checkPass')
        }
        callback()
      }
    }
    var validatePassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm2.password !== '') {
          this.$refs.ruleForm2.validateField('checkPass')
        }
        callback()
      }
    }
    return {
      ruleForm2: {
        name: '',
        password: '',
        checked: true
      },
      rules2: {
        name: [{ validator: validateName, trigger: 'blur' }],
        password: [{ validator: validatePassword, trigger: 'blur' }]
      }
    }
  },
  created () {
    if (localStorage.elementUI) {
      let storage = JSON.parse(localStorage.elementUI)
      if (storage.checked) {
        this.submitForm(storage)
      }
    }
  },
  methods: {
    submitForm (val) {
      // console.log(val)
      if (val.name === 'admin' && val.password === '123456') {
        this.$router.replace('/home')
      } else if (val.checked === true) {
        this.$message.error('自动登陆验证失败,请重新登陆')
      } else {
        localStorage.setItem('elementUI', JSON.stringify(this.ruleForm2))
        this.ruleForm2.name === 'admin' && this.ruleForm2.password === '123456'
          ? this.$router.replace('/home')
          : this.$message.error('登陆失败,账号密码错误,请检查账号密码')
      }
    }
  }
}
</script>
<style lang="less" scoped>
.login {
  background-image: url(../assets/banner.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100%;
  position: fixed;
  width: 100%;
  .bjt {
    width: 350px;
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
  }
  p {
    color: aliceblue;
    font-size: 25px;
    text-align: center;
    margin-bottom: 40px;
  }
}
</style>
