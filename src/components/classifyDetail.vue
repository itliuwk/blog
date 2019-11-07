<template>
  <div class="home">
    <div class="left">
      <div class="blogList">
        <section class="article-focusbox">
          <!-- :style="{backgroundImage: 'url('+bgUrl+')'}" -->
          <header class="article-header">
            <h1 class="article-title">{{ $route.query.label }}</h1>
          </header>
        </section>
        <div v-if="classify.length">
          <div v-loading="isLoading">
            <div class="item" v-for="(item, index) in classify" :key="index">
              <img v-if="item.url" :src="item.url" alt="" />
              <img v-else src="../assets/images/8.jpg" alt="" />
              <div>
                <div class="header">
                  <h3 @click="toDetail(item.id)">
<!--                    <a target="_blank" :href="">{{ }}</a>-->
                    {{ item.title }}
                  </h3>
                  <span style="cursor: pointer" @click="toClassDetail(item.value, item.label)">{{ item.label }}</span>
                </div>
                <div class="view">{{ item.subtitle }}</div>
                <div class="info">
                  <span style="color: #188AE2;cursor: pointer;vertical-align: top;" @click="authorDetail(item.author)">
                    <i class="iconfont icon-ren" style="vertical-align: top;font-size: 14px;">{{ item.author }}</i>
                  </span>
                  <span style="margin-left: 10px;font-size: 14px;">
                    <i class="iconfont icon-shijian" style="vertical-align: top;font-size: 14px;">{{ item.createtime }}</i>
                  </span>

                  <span style="margin-left: 10px;">
                    <i class="iconfont icon-yanjing" style="vertical-align: top;font-size: 14px;">阅读({{ item.count }})</i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-else v-show="!isLoading" style="text-align: center">抱歉，没有符合您查询条件的结果</div>

        <div class="pageCount" v-if="classify.length" style="text-align: center">
          <el-pagination background @current-change="currentChange" layout="total, prev, pager, next" :page-size="params.total" :total="count"></el-pagination>
        </div>
      </div>
    </div>
    <div class="right"><Right></Right></div>
  </div>
</template>

<script>
import Right from '@/components/right';
import { random_bg_photo, updateTitle } from '@/utils/index';
import { YYYYMMDD } from '@/utils/date';
import { listClass, listClassCount, detailHtml } from '@/api/blog';

export default {
  name: 'classifyDetail',
  data() {
    return {
      bgUrl: '',
      detail: {},
      params: {
        page: 0,
        total: 10,
        classify: ''
      },
      isLoading: true,
      classify: [],
      count: 0
    };
  },
  components: {
    Right
  },
  watch: {
    $route(to, from) {
      this.getDetail();
    },
    search(val) {
      this.params = {
        page: 0,
        total: 10,
        keyword: val
      };
      this.isLoading = true;
      this.getDetail();
    }
  },
  computed: {
    search() {
      return this.$store.state.search;
    }
  },

  mounted() {
    this.getDetail();
  },
  methods: {
    getDetail() {
      this.isLoading = true;
      let params = {
        ...this.params,
        classify: this.value || this.$route.query.value
      };
      updateTitle(this.$route.query.label);

      let that = this;

      listClass(params).then(res => {
        res.data.map((item, index) => {
          item.createtime = YYYYMMDD(item.createtime);
          item.content = item.content.toString();
          item.url =  'https://img.xjh.me/random_img.php?type=bg&ctype=nature&return=302&id='+item.id;
          item.href = window._www + `/detail_${item.id}.html`;
          return item;
        });
        setTimeout(() => {
          this.classify = res.data;
          this.isLoading = false;
        }, 300);
      });

      listClassCount(params).then(res => {
        this.count = res.data['count(id)'];
      });
    },
    authorDetail(value) {
      this.$router.push('./author?author=' + value);
    },
    toClassDetail(value, label) {
      this.$router.push('./classifyDetail?value=' + value + '&label=' + label);
    },
    toDetail(id) {
      this.$router.push('./detail?id=' + id);
      // detailHtml({ id })
      //   .then(res => {
      //     console.log(res);
      //   })
      //   .catch(err => {
      //     window.open(window._www + `/detail_${id}.html`);
      //   });
    },
    currentChange(page) {
      this.params = {
        page: (page - 1) * this.params.total,
        total: this.params.total
      };
      this.isLoading = true;
      this.getDetail();
      document.documentElement.scrollTop = 0;
    },
    unescapeHTML(str) {
      str = str.replace(/fuwenben963/g, '');
      str = str.replace(/&amp;/g, '&');
      str = str.replace(/&lt;/g, '<');
      str = str.replace(/&gt;/g, '>');
      str = str.replace(/&quot;/g, '');
      str = str.replace(/&#039;/g, "'");
      return str;
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import '@/views/home/home.scss';
@import '@/components/styles/blogList.scss';
.article-focusbox {
  position: relative;
  // padding: 50px 0;
  background-position: center 50%;
  background-size: cover;
  background-repeat: repeat;
  background-attachment: fixed;
  border-radius: 5px;

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
  // background-image: url(../assets/img/pattern.png);
  background-repeat: repeat;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 1;
  background: #373d41;
}

.pageCount {
  background: #fff;
  padding: 10px;
  border-radius: 4px;
}
</style>
