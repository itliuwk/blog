<template>
  <div class="register">

    <div id="box">
<!--      <img class="img-logo" src="../../assets/img/footer_bar_logo.png" height="155" width="499"/>-->
      <div class="box-ipt">
        <i class="iconfont icon-fl-renyuan"></i>
        <input type="text" id="account-number" v-model="params.username" placeholder="请输入您需要注册的账号">
        <i class="iconfont icon-mima"></i>
        <input type="password" id="password" v-model="params.password" placeholder="请输入密码">
        <i class="iconfont icon-mima confirm"></i>
        <input type="text" id="confirm-password" v-model="params.realname" placeholder="真实姓名">
      </div>
      <button type="submit" class="user_login_btn user_register_btn" @click="registerClick">注册</button>
      <p class="register1">
        <span>已有账号,我要去</span>
        <router-link to='/login'>登录</router-link>
      </p>
    </div>
  </div>
</template>

<script>
  import {register} from "../../api/login";
  import Alert from '@/utils/alert'

  export default {
    name: "register",
    data() {
      return {
        params: {
          username: '',
          password: '',
          realname: ''
        }
      }
    },
    methods: {
      registerClick() {
        register(this.params).then(res => {
          if (res.errno == -1) {
            Alert.fail(res.message);
            return false;
          }
          Alert.success(res.message + ',即将返回登录页面');
          setTimeout(() => {
            this.$router.push('/login');
          }, 2000);
        })
      }
    }
  }
</script>

<style scoped>
  .register {
    width: 100%;
    height: calc(100vh - 74px);
    /*background: url(../../assets/img/bg.jpg) no-repeat;*/
    /*-webkit-background-size: 100% 100%;*/
    /*background-size: 100% 100%;*/
  }

  #box {
    width: 400px;
    height: 350px;
    position: fixed;
    /*background: rgb(255, 248, 235);*/
    padding: 30px;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 250px auto;
    display: inline-block;
    border-radius: 4px;
    box-shadow: 1px 1px 50px rgba(0, 0, 0, .3);
  }

  .box-ipt {
    height: 120px;
    position: relative;
    margin-top: 30px;
  }

  .box-ipt input {
    color: #525252;
  }

  #account-number {
    margin-bottom: 20px;
  }

  #account-number, #password {
    border: 1px solid #e6e6e6;
    width: 91%;
    float: left;
    height: 40px;
    line-height: 40px;
    padding-left: 35px;
    color: #525252;
    font-size: 15px;
  }

  .box-ipt i {
    color: #ECBC62;
    font-size: 25px;
    position: absolute;
    top: 7px;
    left: 7px;
  }

  .box-ipt .icon-mima {
    top: 70px;
  }

  .user_login_btn {
    cursor: pointer;
    letter-spacing: 7px;
    display: block;
    width: 100%;
    margin: 0px auto;
    background: rgb(236, 188, 98);
    margin-top: 30px;
    height: 47px;
    border-radius: 4px;
    color: white;
    font-size: 16px;
    text-align: center;
    line-height: 47px;
    border: 0px;
  }

  .register1 {
    text-align: center;
    margin-top: 20px;
  }

  .register1 span {
    color: #929292;
  }

  .register1 a {
    color: #188ae2;
  }


  .img-logo {
    max-width: 80%;
    position: absolute;
    top: -120px;
    left: 10%;
  }

  #password, #confirm-password {
    margin-bottom: 20px;
  }

  #confirm-password {
    border: 1px solid #e6e6e6;
    width: 91%;
    float: left;
    height: 40px;
    line-height: 40px;
    padding-left: 35px;
    color: #525252;
    font-size: 15px;
  }

  .box-ipt .confirm {
    top: 135px;
  }

  .register span {
    color: #929292;
  }

  .register a {
    color: #188ae2;
  }
</style>
