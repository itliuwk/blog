<template>
  <div class="index">
    <h1>随心站长工具集合 </h1>
    <p>(百度搜索：随心it,随心博客，随心工具,刘伟坤）</p>
    <div class="box">
      <div class="box-card" v-for="(item,index) in list" :key="index">
        <el-card>
          <router-link v-if="!item.target" tag="a" v :to="item.path">
            <div>
              <img :src="item.src" alt="" width="70" height="70">
              <p class="title">{{item.name}}</p>
              <p>{{item.info}}</p>
            </div>
          </router-link>
          <a v-else :href="item.path" target="_blank">
            <div>
              <img :src="item.src" alt="" width="70" height="70">
              <p class="title">{{item.name}}</p>
              <p>{{item.info}}</p>
            </div>
          </a>
        </el-card>
      </div>
    </div>

  </div>
</template>

<script>
  import pf from '../../assets/img/pf.png'
  import gq from '../../assets/img/gq.png'
  import dwz from '../../assets/img/dwz.png'
  import bk from '../../assets/img/favicon.png'
  import zqzb from '../../assets/img/zqzb.jpg'

  export default {
    name: "index",

    data() {
      return {
        list: [
          {
            name: '电影实时票房',
            path: '/dy',
            info: '24小时更新电影票房，查看最新的排名',
            src: pf
          },
          {
            name: '歌曲搜索',
            path: '/music',
            info: '搜索热门歌曲，部分可下载收费音乐',
            src: gq
          },
          {
            name: '短网址',
            path: '/dwz',
            info: '免费、稳定有效的在线缩短网址',
            src: dwz
          },
          {
            name: '个人博客',
            path: 'https://itliuwk.github.io/',
            info: '刘伟坤 - 小前端前往后端的路上的博客',
            src: bk,
            target:'_blank'

          }
        ]
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  body {
    background: #fff;
  }


  .index {
    padding: 20px;
    width: 100vw;
    height: 100%;
    box-sizing: border-box;
    position: relative;


    h1 {
      text-align: center;
    }

    p {
      text-align: center;
    }

    .title {
      font-weight: bold;
    }

    p {
      padding: 10px;
    }
  }


  .box-card {
    display: inline-block;
    width: 250px;
    margin: 20px;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: #333;

    div {
      text-align: center;

      img {
        border-radius: 10px;
      }
    }
  }

  .box-card:hover {
    transform: translate3d(0, -.3rem, 0);
    transition: all .3s ease;


    .el-card {
      background-color: #4293f4 !important;

      p {
        color: #fff;
      }
    }
  }

  @media screen and (max-width: 620px) {
    .box-card {
      display: block;
      margin: 20px auto;
    }

    .box .box-card:last-child {
      margin-bottom: 50px;
    }
  }
</style>
