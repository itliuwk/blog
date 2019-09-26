<template>
  <div class="register">
    <div id="box">
      <!--      <img class="img-logo" src="../../assets/img/footer_bar_logo.png" height="155" width="499"/>-->
      <h3 style="text-align: center;">注册</h3>
      <div class="box-ipt">
        <i class="iconfont icon-fl-renyuan"></i>
        <input type="text" id="account-number" v-model="params.username" placeholder="请输入您需要注册的账号" />
        <i class="iconfont icon-mima"></i>
        <input type="password" id="password" v-model="params.password" placeholder="请输入密码" />
        <i class="iconfont icon-mima confirm"></i>
        <input type="text" id="confirm-password" v-model="params.realname" placeholder="昵称" />
      </div>

      <div id="code"><input type="text" v-model="code" class="code" placeholder="请输入验证码" /></div>
      <div class="login-code" @click="refreshCode">
        <!--验证码组件-->
        <SIdentify :identifyCode="identifyCode"></SIdentify>
      </div>
      <button type="submit" class="user_login_btn user_register_btn" @click="registerClick">注册</button>
      <p class="register1">
        <span>已有账号,我要去</span>
        <router-link to="/login">登录</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import { register } from '../../api/login';
import Alert from '@/utils/alert';
import SIdentify from './sidentify';
import { updateTitle } from '@/utils/index';

export default {
  name: 'register',
  data() {
    return {
      params: {
        username: '',
        password: '',
        realname: '',
        createDate: ''
      },
      identifyCodes: '1234567890',
      identifyCode: '',
      code: '' //text框输入的验证码
    };
  },
  beforeCreate() {
    updateTitle('注册')
  },
  components: {
    SIdentify
  },
  mounted() {
    this.identifyCode = '';
    this.makeCode(this.identifyCodes, 4);
  },
  methods: {
    registerClick() {
      if (!this.params.username) {
        Alert.fail('请输入你要注册的账号');
        return false;
      }

      if (!this.params.password) {
        Alert.fail('请输入你的密码');
        return false;
      }

      if (!this.params.realname) {
        Alert.fail('请输入你的昵称');
        return false;
      }

      if (!this.code) {
        Alert.fail('请输入验证码');
        return false;
      }

      if (this.identifyCode !== this.code) {
        this.code = '';
        this.refreshCode();
        Alert.fail('请输入正确的验证码');
        return false;
      }

      let params = {
        ...this.params,
        createDate: Date.now()
      };
      register(params).then(res => {
        if (res.data.errno == -1) {
          Alert.fail(res.data.message);
          return false;
        }
        setTimeout(() => {
          this.$router.push('/login');
        }, 2000);
      });
    },
    //验证码
    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },

    refreshCode() {
      this.identifyCode = '';
      this.makeCode(this.identifyCodes, 4);
    },
    makeCode(o, l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode += this.identifyCodes[this.randomNum(0, this.identifyCodes.length)];
      }
    }
  }
};
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
  max-width: 400px;
  height: 460px;
  position: fixed;
  background: #fff;
  padding: 30px;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 150px auto;
  display: inline-block;
  border-radius: 4px;
  box-shadow: 1px 1px 50px rgba(0, 0, 0, 0.3);
}

.box-ipt {
  position: relative;
  height: 180px;
  margin-top: 30px;
}

.box-ipt input {
  color: #525252;
}

#account-number {
  margin-bottom: 20px;
}

#account-number,
#password {
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
  color: #ecbc62;
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
  text-align: right;
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

#password,
#confirm-password {
  margin-bottom: 20px;
}

#confirm-password {
  border: 1px solid #e6e6e6;
  width: 100%;
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

#code {
  margin-bottom: 20px;
}

.code {
  border: 1px solid #e6e6e6;
  width: 50%;
  float: left;
  height: 40px;
  line-height: 40px;
  padding-left: 35px;
  color: #525252;
  font-size: 15px;
}

.login-code {
  cursor: pointer;
  position: relative;
  top: -15px;
  display: inline-block;
}
</style>
