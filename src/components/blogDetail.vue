<template>
  <div class="detail">

    <section class="article-focusbox" :style="{backgroundImage: 'url('+bgUrl+')'}">
      <header class="article-header">
        <h1 class="article-title">{{detail.title}}</h1>
        <div class="article-meta">
          <span class="item item-1">{{detail.createtime}}</span>
          <span class="item item-4">分类：    	<a href="https://iooqp.cn/?sort=9" rel="category tag">技术教程</a></span>
<!--          <span class="item item-5">-->
<!--            <a id="ae_bdcx" rel="external nofollow" target="_blank"-->
<!--               :href='detail.included'-->
<!--               style="color: rgb(255, 0, 0);">提交收录</a>-->
<!--          </span>-->

        </div>

      </header>
    </section>

    <div class="content">
      <div class="left">
        <div class="content-c">
          <p class="statement">特别声明：文章多为网络转载，资源使用一般不提供任何帮助，特殊资源除外，如有侵权请联系！</p>

          <div v-html="detail.content"></div>
        </div>
        <div class="content-b">
          <h3>本文版权</h3>
          <div>
            发布日期： {{detail.createtime}}
          </div>
          <div>
            本文标题： <span class="title">{{detail.title}}</span>
          </div>
          <div>
            本文链接：<a :href="detail.url">{{detail.url}}</a>
          </div>
          <div>
            版权声明：文章为《 <a href="javascript:void (0)">{{detail.author}}</a>》原创，转载请保留出处！
          </div>
        </div>

      </div>
      <div class="right">
        <Right></Right>
      </div>
    </div>

  </div>
</template>

<script>
  import Right from '@/components/right'
  import {random_photo} from '@/utils/index'
  import {YYYYMMDD} from '@/utils/date'
  import {detail} from '@/api/blog'

  export default {
    name: "blogDetail",
    data() {
      return {
        bgUrl: '',
        detail: {}
      }
    },
    components: {
      Right
    },
    mounted() {

      this.getDetail();
    },
    methods: {

      getDetail() {
        let params = {
          id: this.$route.query.id
        };
        detail(params).then(res => {
          let href = window.location.href;
          res.data.createtime = YYYYMMDD(res.data.createtime);
          res.data.url = href;
          res.data.included = 'http://zhanzhang.baidu.com/sitesubmit/index?sitename=' + href;
          this.detail = res.data;
          this.bgUrl = random_photo();
        });


      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "@/views/home/home.scss";

  .article-focusbox {
    position: relative;
    padding: 50px 0;
    background-position: center 50%;
    background-size: cover;
    background-repeat: repeat;
    background-attachment: fixed;

    .article-header {
      text-align: center;
      padding: 25px 0 25px 0;
      border-bottom: 0;
      border-radius: 5px 5px 0 0;
    }

    .article-title {
      position: relative;
      margin-bottom: 10px;
      font-size: 20px;
      font-weight: bold;
      line-height: 1.3;
      margin: 0;
      color: #fff;
      display: block;
      padding: 10px 20px;
      text-shadow: 0.8px 0 5px #333;
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

  .article-focusbox:before {
    content: '';
    background-image: url(../assets/img/pattern.png);
    background-repeat: repeat;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 1;
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


</style>
