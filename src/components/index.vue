<template>
  <div :class="isTop==true?'blog':'blog-none'">
    <div id="top-img"></div>
    <div class="blog-nav">
      <div class="content">
        <router-link to="/"><a title="刘伟坤博客-刘伟坤博客,分享网站seo优化教程，网站源码下载，网站搭建教程，专注互联网资讯，新手站长起点资源网站！" href="#"><img
          src="../assets/img/logo.jpg" alt="刘伟坤博客"></a></router-link>
        <div class="nav-u">
          <ul>
            <router-link to="/">
              <li>
                <i class="iconfont icon-shouye"></i>
                首页
              </li>
            </router-link>
            <li>
              <i class="iconfont icon-shouye"></i>
              技术文章
            </li>
            <li>
              <i class="iconfont icon-gongju"></i>
              站长工具
            </li>
          </ul>
        </div>
        <div class="login">
          <el-input v-model="searchValue" clearable class="search" placeholder="输入关键字 Enter键搜索..."></el-input>

          <div style="display: inline-block" v-if="userInfo==null">
            <span>
            <router-link to="/login">登录</router-link>
          </span>
            <router-link to="/register">
              <el-button type="primary" round>
                我要注册
              </el-button>
            </router-link>
          </div>
          <div v-else style="display: inline-block">
            <router-link  style="    color: #99a9bf;" to="/admin">会员中心</router-link>
            <img src="../assets/img/default.png" style="border-radius: 50%;margin-left: 20px" alt="">
            <el-dropdown>
              <span class="el-dropdown-link" style="cursor: pointer">
                {{userInfo.realname}}<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>
                  <router-link to="/">退出</router-link>
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>


          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        searchValue: ''
      }
    },
    props: ['isTop'],
    mounted() {

    },
    computed: {
      userInfo() {
        return JSON.parse(localStorage.getItem('userInfo')) || null;
      }
    },
    watch: {
      userInfo(val) {
        console.log(val);
      }
    },
    methods: {
      handleSelect(val) {
        console.log(val);
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

  .blog {
    width: 100%;
    position: fixed;
    z-index: 999;
    top: 0;
    animation: upAndTranslateX 1.5s;
  }


  @keyframes upAndTranslateX {
    0% {
      opacity: 0.2;

    }
    25% {
      opacity: 0.4;
    }
    50% {
      opacity: 0.6;
    }
    75% {
      opacity: 0.8;
    }
    100% {
      opacity: 1;
    }
  }

  #top-img {
    background: url('../assets/img/top.png');
    height: 4px;
    top: 0px;
    width: 100%;
    Z-index: 9999;
  }

  .blog-nav {
    background: #fff;
    box-shadow: 0 0 20px rgba(37, 45, 51, .5);


    .content {
      position: relative;
      height: 70px;
      top: 0;
      box-sizing: border-box;
      /*max-width: 1300px;*/

      margin: 0 20px;
      padding-left: 0;
      padding-right: 0;

      img {
        height: 35px;
        display: inline-block;
        vertical-align: top;
        max-height: 32px;
        margin-bottom: 20px;
        margin-top: 17px;
      }

      .nav-u {
        display: inline-block;
        margin-left: 25px;
        width: 500px;
        line-height: 65px;
        height: 100%;

        ul {
          width: 100%;
          overflow: hidden;
          height: 100%;

          li {
            float: left;
            margin-right: 30px;
            cursor: pointer;
            font-size: 16px;
            color: #99a9bf;
            height: 100%;
            padding: 0 10px;
          }

          li:hover {
            color: #fff;
            background: #289ee2;
            animation: upOpacity 0.3s;
          }

          @keyframes upOpacity {
            0% {
              opacity: 0.2;
            }
            50% {
              opacity: 0.5;
            }
            100% {
              opacity: 1;
            }
          }
        }
      }

      .login {
        float: right;
        height: 100%;
        line-height: 65px;

        > span {
          margin-right: 20px;
          color: #188ae2;
          cursor: pointer;
        }

        .search {
          display: inline-block;
          width: 250px;
          margin-right: 20px;

        }

        /deep/ .el-input__inner {
          border-radius: 20px;
        }
      }
    }
  }


</style>
