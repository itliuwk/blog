<template>
  <div class="about">

    <div class="layui-tab">
      <ul class="layui-tab-title">
        <li lay-id="1" @click="layClick(1)" :class="active==1?'layui-this':''">关于本站</li>
        <li lay-id="2" @click="layClick(2)" :class="active==2?'layui-this':''">关于本人</li>
        <li lay-id="3" @click="layClick(3)" :class="active==3?'layui-this':''">友情链接</li>
        <li lay-id="4" @click="layClick(4)" :class="active==4?'layui-this':''">留言墙</li>
      </ul>
    </div>

    <div v-show="active==1" class="layui-content" style="text-align: center">
      <img class="favicon" src="../../assets/img/favicon.png" alt="" style="border: 1px solid #ccc">
      <h3>随心博客</h3>
      <p>前端开发人员的个人博客，记录工作上，生活上的知识，并分享前端方面技术和一些趣事。</p>
      <p>www.sxitw.cn</p>
      <p class="synopsis">
        <span>简介</span>
      </p>
      <p class="info">
        前端人员开发的个人博客网站，诞生于2019年8月24日，前端页面使用
        <a target="_blank" href="https://cn.vuejs.org/">vue</a>
        +
        <a target="_blank" href="https://element.eleme.cn/#/zh-CN">Element</a>，后台使用
        <a target="_blank" href="https://koajs.com/">koa2</a>
        +
        <a target="_blank" href="https://www.mysql.com/">mysql</a>，
        <a target="_blank" href="https://buy.cloud.tencent.com/cvm?tab=lite&loginSet=SET_PASSWORD">linux CentOS</a> 部署，
        基本功能已经完成，后续将会继续完善功能和页面的优化！
      </p>
      <p>本博客所有前后端代码已放在 <a target="_blank" style="color: #188ae2" href="https://github.com/itliuwk">Github</a></p>
      <h3 style="text-align:center;margin-top: 20px;">end</h3>
    </div>


    <div v-show="active==2" class="layui-content" style="text-align: center">
      <img class="author" src="../../assets/img/author.png" alt="">
      <h3>刘伟坤</h3>
      <p class="info">
        90后 <strong>前端开发</strong> 大军中的一员，懂点Node知识，本博客后台基于
        <a target="_blank" href="https://koajs.com/">koa2</a>
        +
        <a target="_blank" href="https://www.mysql.com/">mysql</a>搭建
      </p>
      <p class="synopsis">
        <span>简介</span>
      </p>
      <p class="info">
        刘伟坤，90后前端开发人员，广东五华人，出厂26年有余，此博客站长，地地道道农村出生，已有小姐姐青睐和一个可爱的儿子。
      </p>
      <img class="son" src="../../assets/img/son.png" alt="">
    </div>


    <!-- 来必力City版安装代码 -->
    <div v-show="active==4" id="lv-container" data-id="city" style="width: 100%;"
         data-uid="MTAyMC80NjQ2MC8yMjk3MQ=="></div>
    <!-- City版安装代码已完成 -->
  </div>
</template>

<script>
    import Right from '@/components/right'

    export default {
        name: "about",
        data() {
            return {
                active: 2
            }
        },
        components: {
            Right
        },
        mounted() {

            (function (d, s) {
                let j, e = d.getElementsByTagName(s)[0];

                if (typeof LivereTower === 'function') {
                    return;
                }

                j = d.createElement(s);
                j.src = 'https://cdn-city.livere.com/js/embed.dist.js';
                j.async = true;

                e.parentNode.insertBefore(j, e);
            })(document, 'script');
        },
        methods: {
            layClick(idx) {
                this.active = idx;
            }
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .about {

    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 0;
    padding-right: 0;
    height: 100%;
    min-height: 900px;
    box-shadow: 0 0 10px 2px #666;

    .layui-tab {
      background: #fff;
      width: 100%;
      margin-left: auto;
      margin-right: auto;
      padding-top: 20px;

      .layui-tab-title {
        text-align: center;
        border-bottom: 1px solid #5fb878;

        li {
          display: inline-block;
          width: 100px;
          cursor: pointer;
          height: 40px;
          line-height: 40px;
        }

        .layui-this {
          border-bottom: 1px solid #5fb878;
          transition-duration: .3s;
        }
      }
    }


    .layui-content {
      background: #fff;
      padding-top: 20px;

      .favicon,.author {
        width: 120px;
        height: 120px;
        border-radius: 50%;
      }
      .son{
        width: 40%;
        height: 500px;
        border-radius: 10px;
        margin: 20px 0;
      }

      p {
        margin-top: 30px;
      }

      .synopsis {
        border-top: 1px solid #ccc;
        position: relative;
        text-align: center;
        box-sizing: border-box;

        span {
          position: absolute;
          top: -10px;
          margin-left: -50px;
          display: inline-block;
          width: 100px;
          text-align: center;
          background: #fff;
          box-sizing: border-box;
        }
      }

      .info {
        padding: 0 80px;
        line-height: 30px;

        a {
          color: #188ae2;
          padding: 0 5px;
        }
      }
    }

    #lv-container {
      padding: 20px;
    }
  }


</style>
