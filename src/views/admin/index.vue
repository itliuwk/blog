<template>
  <div class="detail">
    <section class="article-focusbox"
             style="background-image: url(https://cy-pic.kuaizhan.com/g3/ac/71/4dc8-80b8-40c0-9600-9d30118b967a24);">
      <header class="article-header">
        <img src="../../assets/img/tx.png" style="z-index: 999" width="80" alt=""/>
        <div style="    margin-top: 10px;">
          <span class="article-title" v-if="userInfo">账号：{{ userInfo.username || '' }}</span>
          <span class="article-title" v-if="userInfo">创建时间：{{ userInfo.createDate || '' }}</span>
          <span class="article-title" v-if="userInfo">最近登录时间：{{ userInfo.logintime || '' }}</span>
        </div>
      </header>
    </section>

    <div class="content">
      <div class="left">
        <ul>
          <!--          <li :class="selIdx=='1'?'active':''" @click="selectIndex(1)">用户中心</li>-->
          <li :class="selIdx == '2' ? 'active' : ''" @click="selectIndex(2)">发布文章</li>
          <li :class="selIdx == '3' ? 'active' : ''" @click="selectIndex(3)">管理文章</li>
          <li v-if="userInfo.username=='liuwk'" :class="selIdx == '6' ? 'active' : ''" @click="selectIndex(6)">管理友链</li>
          <!--          <li :class="selIdx=='4'?'active':''" @click="selectIndex(4)">修改资料</li>-->
          <!--          <li :class="selIdx=='5'?'active':''" @click="selectIndex(5)">退出</li>-->
        </ul>
      </div>
      <div class="right-s">
        <!--        <User v-if="selIdx==1"></User>-->
        <PublishArticles v-if="selIdx == 2"></PublishArticles>
        <MyArticle v-if="selIdx == 3"></MyArticle>
        <Modify v-if="selIdx == 4"></Modify>
        <Friends v-if="selIdx == 6"></Friends>
      </div>
    </div>
  </div>
</template>

<script>
  import Right from '@/components/right';
  import Modify from './modify';
  import MyArticle from './my-article';
  import PublishArticles from './publish-articles';
  import User from './user';
  import Friends from './friends';
  import {random_photo, updateTitle} from '@/utils/index';
  import {YYYYMMDD} from '@/utils/date';
  import {detail} from '@/api/blog';

  export default {
    name: 'blogDetail',
    data() {
      return {
        bgUrl: '',
        selIdx: 2,
        detail: {}
      };
    },
    components: {
      Right,
      Modify,
      MyArticle,
      PublishArticles,
      User,
      Friends
    },
    computed: {
      userInfo() {
        return JSON.parse(localStorage.getItem('userInfo')) || null;
      }
    },
    watch: {
      userInfo(val) {
      }
    },
    beforeCreate() {
      updateTitle('会员中心');
    },
    mounted() {
      this.bgUrl = random_photo();
      window.addEventListener('scroll', this.handleScroll);
    },
    methods: {
      selectIndex(index) {
        this.selIdx = index;
      },
      handleScroll() {
        if (this.selIdx===3){
          let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop; // 滚动条偏移量
          if (scrollTop > 600) {
            document.getElementsByClassName('v-note-op')[0].style = ' position: fixed;top:0'
          } else {
            document.getElementsByClassName('v-note-op')[0].style = ''
          }
        }

      }
    }
  };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import '@/views/home/home.scss';

  .article-focusbox {
    position: relative;
    padding: 50px 0;
    background-position: center 50%;
    background-attachment: fixed;
    background: no-repeat;

    .article-header {
      text-align: center;
      padding: 25px 0 25px 0;
      border-bottom: 0;
      border-radius: 5px 5px 0 0;
    }

    .article-title {
      position: relative;
      margin-bottom: 10px;
      font-size: 16px;
      line-height: 1.3;
      margin: 0;
      color: #47bcf9;
      font-weight: normal;
      padding: 10px 20px;
      z-index: 2;
    }

    .article-meta {
      font-size: 12px;
      color: #eaeaea;
      padding: 0 20px;
      z-index: 2;
      position: relative;
    }

    .article-meta .item {
      margin: 0 5px;
      text-shadow: 0.8px 0 5px #333;
    }
  }

  .statement {
    padding: 30px 20px;
    color: #999;
    line-height: 30px;
  }

  .content-c {
    padding: 0 20px 20px;
    background: #fff;
    position: relative;
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(37, 45, 51, 0.5);

    img {
      width: 70% !important;
      text-align: center;
    }
  }

  .content {
    margin-bottom: 20px;
    display: block !important;
  }

  .content .left {
    /*flex: 1;*/
    /*height: 600px;*/
    box-shadow: 0 0 10px rgba(37, 45, 51, 0.5);
    background: #545c64;
    border-radius: 10px;
    width: 100%;

    ul {
      display: flex;

      li {
        padding: 20px;
        cursor: pointer;
        color: #fff;
        flex: 1;
        text-align: center;
        box-sizing: border-box;
      }

      li.active {
        color: rgb(255, 208, 75);
        /*border-left: 5px solid #188ae2;*/
      }

      li:hover {
        background: rgb(67, 74, 80);
        transition-duration: 0.5s;
        /*border-left: 5px solid #188ae2;*/
      }
    }
  }

  .content .right-s {
    flex: 4;
    background: #fff;
    overflow: hidden;
    border-radius: 10px;
  }

  .content-b {
    margin: 20px 0 50px;
    padding: 20px;
    background: #fff;
    position: relative;
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(37, 45, 51, 0.5);

    h3 {
      text-align: center;
    }

    > div {
      margin: 10px 0;
      color: #8c8c8c;
    }

    a {
      color: #188ae2;
    }

    .title {
      color: #ff1493;
    }
  }

  .el-menu {
    border: none;
  }

  /*/deep/ .v-note-op {*/
  /*background: rgb(255, 255, 255);*/
  /*position: fixed;*/
  /*top: 0;*/
  /*width: 55%;*/
  /*height: 200px;*/
  /*}*/
</style>
