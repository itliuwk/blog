<template>
  <div :class="isTop==true?'blog':'blog-none'">
    <div id="top-img"></div>
    <div class="blog-nav">
      <div class="content">
        <a title="刘伟坤博客-刘伟坤博客,分享网站seo优化教程，网站源码下载，网站搭建教程，专注互联网资讯，新手站长起点资源网站！" href="#"><img
          src="../assets/img/logo.jpg" alt="刘伟坤博客"></a>
        <div class="nav-u">
          <ul>
            <li>
              <i class="iconfont icon-shouye"></i>
              <router-link to="/">首页</router-link>
            </li>
            <li>
              <i class="iconfont icon-shouye"></i>
              技术教程
            </li>
            <li>
              <i class="iconfont icon-gongju"></i>
              站长工具
            </li>
          </ul>
        </div>
        <div class="login">
          <el-input v-model="searchValue" clearable class="search" placeholder="输入关键字 Enter键搜索..."></el-input>
          <span>
            <router-link to="/login">登录</router-link>
          </span>
          <el-button type="primary" round>
            <router-link to="/register">我要注册</router-link>
          </el-button>
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
    props: ['isTop']
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

  .blog {
    width: 100%;
    position: fixed;
    z-index: 999;
    top: 0px;
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
      padding-top: 4px;
      box-sizing: border-box;
      max-width: 1300px;
      margin-left: auto;
      margin-right: auto;
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

        ul {
          width: 100%;

          li {
            float: left;
            margin-right: 20px;
            cursor: pointer;
            font-size: 16px;
            color: #99a9bf;
          }

          li:hover {
            color: #188ae2;
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
