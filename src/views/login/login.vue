<template>
  <div class="login">

    <div id="box">
      <!--      <img class="img-logo" src="../../assets/img/footer_bar_logo.png" height="155" width="499"/>-->
      <h3 style="text-align: center;">登录</h3>
      <div class="box-ipt">

        <i class="iconfont icon-fl-renyuan"></i>
        <input type="text" id="account-number" v-model="params.username" placeholder="请输入您的账号" value="">
        <i class="iconfont icon-mima"></i>
        <input type="password" v-model="params.password" id="password" placeholder="登录密码" value="">
      </div>
      <button type="submit" class="user_login_btn" @click="loginClick">登录</button>
      <p class="register">
        <span>没有账号,我要</span>
        <router-link to='/register'>注册</router-link>
      </p>
    </div>
  </div>
</template>

<script>
    import {login} from "../../api/login";
    import Alert from '@/utils/alert'

    export default {
        name: "login",
        data() {
            return {
                params: {
                    username: '',
                    password: ''
                }
            }
        },
        watch: {
            '$router': function (val) {
                console.log(val);
            }
        },
        methods: {
            loginClick() {

                if (!this.params.username) {

                    Alert.fail('请输入你的账号');
                    return false;
                }

                if (!this.params.password) {
                    Alert.fail('请输入你的密码');
                    return false;
                }


                login(this.params).then(res => {

                    if (res.data.errno === 0) {
                        localStorage.setItem('userInfo', JSON.stringify(res.data.data));
                        this.$store.commit('SET_USERINFO', res.data.data);
                        Alert.success('登录成功，即将进入后台页面');
                        this.$store.commit('SET_ISLOGIN', true);
                        setTimeout(() => {
                            this.$router.push('/admin');
                        }, 2000);
                    } else {
                        Alert.fail(res.data.message);
                    }
                })
            }
        }

    }
</script>

<style scoped>
  .login {
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
    width: 100%;
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

  .register {
    text-align: right;
    margin-top: 20px;
  }

  .register span {
    color: #929292;
  }

  .register a {
    color: #188ae2;
  }


  .img-logo {
    max-width: 80%;
    position: absolute;
    top: -120px;
    left: 10%;
  }
</style>
