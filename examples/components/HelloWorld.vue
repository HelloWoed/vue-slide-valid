<template>
  <div class="hello">
    <h1>滑动验证</h1>
    <div class="loginForm">
      <el-form size="medium" :model="loginForm" ref="loginForm" :rules="loginRules">
          <el-form-item prop="username">
              <el-input
                  placeholder="请输入用户名"
                  prefix-icon="el-icon-user"
                  v-model="loginForm.username"
                  ></el-input>
          </el-form-item>
          <el-form-item prop="password">
              <el-input
                  type="password"
                  onpaste="return false" 
                  ondragenter="return false"
                  placeholder="请输入密码"
                  prefix-icon="el-icon-lock"
                  v-model="loginForm.password"
                  ></el-input>
          </el-form-item>
          <el-form-item prop="isValid">
              <slide-valid 
              v-model="loginForm.isValid"
              :startText="startText" 
              :successText="successText" />
          </el-form-item>
          <el-form-item>
              <el-button type="primary" class="handleLogin" @click.native.prevent="handleLogin">登录</el-button>
          </el-form-item>
          <el-row type="flex" justify="end">
              <el-link :underline="false" type="primary" @click="jumpForgetPasswd">忘记密码</el-link>
          </el-row>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return {
      loginForm:{},
      startText: '请拖住滑块，拖动到最右边',
      successText: '验证成功'
    }
  },
  computed:{
    loginRules(){
      return {
        isValid: [
          {required: true,message: '请滑动验证',trigger: 'change'}
        ]
      }
    }
  },
  methods:{
    handleLogin(){
      
    },
    jumpForgetPasswd(){

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.loginForm{
  padding: 0 25%;
}
</style>
