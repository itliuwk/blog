<template>
  <div class="control">
    <div class="personal">
      <h3>个人资料简介</h3>
      <p class="info">刘伟坤，90后前端开发人员，广东五华人，出厂26年有余，此博客站长，地地道道农村出生，已有小姐姐青睐。</p>
      <div class="contact">
        <div class="weixin">
          <i class="iconfont icon-weixin"></i>
          <img src="../assets/img/weixiCode.jpg" alt="" />
        </div>
        <div class="qq">
          <a target="_blank" href="http://wpa.qq.com/msgrd?V=3&uin=1834183435&Site=QQ&Menu=yes"><i class="iconfont icon-icon"></i></a>
        </div>
        <div class="github">
          <a target="_blank" href="https://github.com/itliuwk"><i class="iconfont icon-github"></i></a>
        </div>
        <div class="weibo">
          <a target="_blank" href="https://weibo.com/u/2433275163"><i class="iconfont icon-weibo"></i></a>
        </div>
      </div>
      <p style="color: #fff;font-size: 10px;">随心it,刘伟坤it,刘伟坤博客,刘伟坤,随心博客</p>
      <div class="statistics">
        <div>
          <p>文章</p>
          <p>{{ $store.state.count }}</p>
        </div>
        <div>
          <p>留言</p>
          <p><span id="sourceId::T99999999999999" class="cy_cmt_count"></span></p>
        </div>
        <div>
          <p>分类</p>
          <p>12</p>
        </div>
      </div>
    </div>

    <div class="article">
      <p class="title">热门标签</p>
      <div>
        <ul>
          <li v-for="(item, index) in classify" :key="index" @click="toClassDetail(item.value, item.label)">
            <span>{{ item.label }}</span>
            <span>({{ item.length }})</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { classifylen } from '@/api/classify';
export default {
  name: 'right',
  data() {
    return {
      classify: []
    };
  },
  mounted() {
    this.classifylen();

   // setTimeout(()=>{
   //   const script = document.createElement('script');
   //   script.src = 'https://changyan.sohu.com/upload/plugins/plugins.list.count.js?clientId=cysWFxvAX';
   //   script.type = 'text/javascript';
   //   script.language = 'JavaScript';
   //   document.body.appendChild(script);
   // },2000)
  },
  methods: {
    classifylen() {
      classifylen().then(res => {
        this.classify = res.data;
      });
    },
    toClassDetail(value, label) {
      this.$router.push('./classifyDetail?value=' + value + '&label=' + label);
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.personal {
  background: #fff;
  position: relative;
  height: 300px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(37, 45, 51, 0.5);
  background: url('../assets/bordergif.gif') no-repeat;
  background-size: 100% 100%;

  h3 {
    padding: 20px 0 10px 20px;
    font-size: 16px;
    color: #188ae2;
  }

  .info {
    text-align: center;
    text-indent: 2em;
    font-size: 15px;
    padding: 10px;
    color: #999;
  }

  .contact {
    padding: 20px;
    text-align: center;

    div {
      display: inline-block;
      width: 35px;
      height: 35px;
      line-height: 35px;
      margin: 0 10px;
      border: 1px solid #1f2d3d;
      border-radius: 50%;
      text-align: center;
      cursor: pointer;

      i {
        font-size: 20px;
      }
    }

    .weixin {
      color: #248a34;
      border: 1px solid #248a34;
      position: relative;

      img {
        width: 100px;
        height: 100px;
        position: absolute;
        top: -110px;
        left: 0;
        opacity: 0;
        box-shadow: 0 0 10px rgba(37, 45, 51, 0.5);
      }
    }

    .weixin:hover {
      img {
        opacity: 1;
        transition-duration: 1s;
      }
    }

    .qq {
      color: #4e91d1;
      border: 1px solid #4e91d1;
    }

    .weibo {
      color: #d28300;
      border: 1px solid #d28300;
    }
  }

  .statistics {
    border-top: 1px solid #eee;
    width: 100%;
    display: flex;
    position: absolute;
    height: 60px;
    line-height: 25px;
    bottom: 0;
    left: 0;

    div {
      padding: 5px;
      flex: 1;
      border-left: 1px solid #eee;
      text-align: center;
      font-size: 14px;

      p:nth-child(2) {
        color: #999;
      }
    }

    div:nth-child(1) {
      border: none;
    }
  }
}

.article {
  background: #fff;
  padding: 20px;
  margin-top: 20px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(37, 45, 51, 0.5);
  border: 1px solid #ccc;

  .title {
    font-size: 16px;
    color: #188ae2;
    font-weight: bold;
    margin-bottom: 20px;
  }
  ul {
    overflow: hidden;
    li {
      float: left;
      padding: 5px;
      font-size: 12px;
      cursor: pointer;
      margin: 5px;
    }
    li:hover {
      background: #188ae2;
      color: #fff;
      border-radius: 4px;
    }
  }
}
</style>
