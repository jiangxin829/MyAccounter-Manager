<template>
  <div class="container">
    <div class="login-box">
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="用户名" prop="userName">
          <el-input v-model="form.userName"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="form.password" type="password" @keyup.enter.native="handleLogin"></el-input>
        </el-form-item>
        <div class="login-btn">
          <el-button type="primary" @click="handleLogin">登录</el-button>
          <el-button>注册</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Login',
  data() {
    return {
      form: {
        userName: null,
        password: null
      },
      rules: {
        userName: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 11 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 11 个字符', trigger: 'blur' }
        ],
      }
    }
  },
  methods: {
    handleLogin() {
      if (this.form.userName === 'admin' && this.form.password === 'admin') {
        sessionStorage.setItem('userName', this.form.userName)
        this.$router.push({
          name: 'Home'
        })
      } else {
        this.$message.error('用户名或密码不正确！')
      }
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
}
.login-box {
  margin-top: 300px;
  padding: 20px 20px 0;
  width: 700px;
  height: 200px;
  background-color: lightblue;
}
.login-btn {
  display: flex;
  flex: 1;
  justify-content: space-around;
}
</style>
