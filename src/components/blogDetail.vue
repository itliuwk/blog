<template>
  <div class="detail">
    <!--    <section class="article-focusbox" :style="{ backgroundImage: 'url(' + bgUrl + ')' }"> -->
    <section class="article-focusbox">
      <!-- :style="{backgroundImage: 'url('+bgUrl+')'}" -->
      <header class="article-header">
        <h1 class="article-title">{{ detail.title }}</h1>
        <div class="article-meta">
          <span class="item item-1">{{ detail.createtime }}</span>
          <span style="font-size: 14px; margin-left: 10px">
            <i class="iconfont icon-yanjing" style="vertical-align: middle"></i>
            阅读({{ detail.count }})
          </span>
          <span class="item item-4">
            分类：
            <span
              style="cursor: pointer; color: #188ae2"
              @click="toClassDetail(detail.value, detail.label)"
              >{{ detail.label }}</span
            >
          </span>
          <span class="item item-5"
            ><a
              id="ae_bdcx"
              rel="external nofollow"
              target="_blank"
              :href="detail.included"
              style="color: rgb(255, 0, 0)"
              >提交收录</a
            ></span
          >
        </div>
      </header>
    </section>

    <div class="content">
      <div class="left">
        <div class="content-c">
          <p class="statement">
            特别声明：文章多为网络转载，资源使用一般不提供任何帮助，特殊资源除外，如有侵权请联系！
          </p>

          <div
            v-html="detail.content"
            class="hlDiv"
            v-loading="loading"
            v-highlight
          ></div>
        </div>
        <div class="content-b">
          <h3>本文版权</h3>
          <div>发布日期： {{ detail.createtime }}</div>
          <div>
            本文标题：
            <span class="title">{{ detail.title }}</span>
          </div>
          <div>
            本文链接：
            <a :href="detail.url">{{ detail.url }}</a>
          </div>
          <div>
            版权声明：文章为《
            <a href="javascript:void (0)" @click="authorDetail(detail.author)">{{
              detail.author
            }}</a>
            》原创，转载请保留出处！
          </div>
        </div>

        <div class="SOHUCS"><div id="SOHUCS" :sid="detail.id"></div></div>
      </div>
      <div class="right"><Right></Right></div>
    </div>
  </div>
</template>

<script>
import Right from "@/components/right";
import { random_photo, updateTitle } from "@/utils/index";
import { YYYYMMDD } from "@/utils/date";
import { detail } from "@/api/blog";
import marked from "marked";
import hljs from "highlight.js";
import "highlight.js/styles/monokai-sublime.css";

export default {
  name: "blogDetail",
  data() {
    return {
      bgUrl: "",
      detail: {},
      loading: true,
      classify: {},
    };
  },
  components: {
    Right,
  },
  mounted() {
    this.getDetail();

    window.changyan = undefined;
    window.cyan = undefined;
    this.$loadScript("https://changyan.sohu.com/upload/changyan.js", () => {
      window.changyan.api.config({
        appid: "cysWFxvAX", // 此处换成你的畅言应用的appid,
        conf: "prod_02e199e651f0597818eb703cd2db9ebe", // 此处换成你畅言应用的conf。
      });
    });

    marked.setOptions({
      renderer: new marked.Renderer(),
      gfm: true,
      tables: true,
      breaks: true,
      pedantic: false,
      sanitize: true,
      smartLists: true,
      smartypants: false,
      highlight: function (code) {
        return hljs.highlightAuto(code).value;
      },
    });
  },
  methods: {
    getDetail() {
      let params = {
        id: this.$route.query.id,
      };

      let that = this;

      detail(params).then((res) => {
        let href = window.location.href;
        res.data.createtime = YYYYMMDD(res.data.createtime);
        res.data.content = that.html_entity_decode(res.data.content);
        // res.data.content = that.parseDom(res.data.content);
        res.data.content = marked(res.data.content);

        res.data.url = href;
        res.data.included =
          "http://zhanzhang.baidu.com/sitesubmit/index?sitename=" +
          "http://sxitw.cn/detail_" +
          res.data.id +
          ".html";
        updateTitle(res.data.title);
        that.detail = res.data;
        that.bgUrl = random_photo();
      });
    },
    parseDom(str) {
      let that = this;
      let obj = document.createElement("div");
      obj.innerHTML = str;
      let newStr = "";

      let childNodes = $(obj)[0].childNodes;
      for (let i = 0; i < childNodes.length; i++) {
        const strElement = childNodes[i];
        if (strElement.tagName == "PRE") {
          let pre = that.unescapeHTML($(strElement).html());
          newStr += "<pre>" + pre + "</pre>";
        } else {
          newStr += "<p>" + $(strElement).html() + "</p>";
        }
      }
      return newStr;
    },

    html_entity_decode(str) {
      str = str.replace(/fuwenben963/g, "");
      str = str.replace(/&amp;/g, "&");
      str = str.replace(/&lt;/g, "<");
      str = str.replace(/&gt;/g, ">");
      str = str.replace(/&quot;/g, "");
      str = str.replace(/&#039;/g, "'");
      return str;
    },
    unescapeHTML(str) {
      str = str.replace(/&/g, "&amp;");
      str = str.replace(/&amp;nbsp;/g, " ");
      str = str.replace(/</g, "&lt;");
      str = str.replace(/&amp;gt;/g, ">");
      str = str.replace(/"/g, "&quot;");
      str = str.replace(/'/g, "&#039;");
      return str;
    },
    toClassDetail(value, label) {
      this.$router.push("./classifyDetail?value=" + value + "&label=" + label);
    },
    authorDetail(value) {
      this.$router.push("./author?author=" + value);
    },
  },
};
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
  content: "";
  // background-image: url(../assets/img/pattern.png);
  background: #373d41;
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
  .hlDiv {
    /deep/ p {
      line-height: 30px;
    }
    /deep/ .hljs-string {
      color: #e6db74 !important;
    }
  }

  /deep/ pre {
    display: block;
    padding: 10px;
    margin: 0 0 10px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #abb2bf;
    background: #282c34;
    word-break: break-all;
    word-wrap: break-word;
    overflow: auto;
  }

  /deep/ a {
    color: #188ae2 !important;
  }

  // /deep/ p {
  //   text-indent: 2em;
  //   color: #666 !important;
  //   line-height: 30px;
  // }

  /deep/ img {
    // width: 100%;
    max-width: 80%;
  }
}

.content-c,
.content-b {
  animation: upScale 0.3s;
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

.SOHUCS {
  padding: 20px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(37, 45, 51, 0.5);
}
</style>
