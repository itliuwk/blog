<template>
  <div id="app">
    <home :isTop="isTop"></home>
    <div class="bg" :style="{ backgroundImage: 'url(' + bgUrl + ')' }">
      <transition name="fade-transform" mode="out-in"><router-view class="animated"></router-view></transition>
    </div>
    <copyright></copyright>
    <div v-show="returnTop" class="top" @click="returnTo"><i class="iconfont icon-fanhuidingbu"></i></div>
  </div>
</template>

<script>
import home from '@/components/index';
import copyright from '@/components/copyright';
import { random_photo } from '@/utils/index';

export default {
  name: 'App',
  components: {
    home,
    copyright
  },
  data() {
    return {
      isTop: false,
      returnTop: false,
      isCloseBg: false,
      transitionName: 'slide-right',
      enterClass: 'bounceIn',
      leaveClass: '',
      bgUrl: '',
      ClassArr: ['rollIn', 'rollOut'],
      timer:null
    };
  },
  computed: {
    CloseBg() {
      return this.$store.state.isCloseBg;
    }
  },
  watch: {
    CloseBg(val) {
      this.isCloseBg = val;
      this.closeBg();
    },
    $route(to, from) {
      document.title = '刘伟坤 - 个人博客 | 随心IT | 一个分享技术文章,热门资源的博客';
      // this.leaveClass = this.ClassArr[this.random()];
      // this.enterClass = this.ClassArr[this.random()];

      if (window._czc) {
        let location = window.location;
        let contentUrl = location.pathname + location.hash;
        let refererUrl = '/';
        window._czc.push(['_trackPageview', contentUrl, refererUrl]);
      }
    }
  },
  mounted() {
    this.closeBg();
    window.addEventListener('scroll', this.handleScroll);

    window._czc = window._czc || [];
    const script = document.createElement('script');
    script.src = 'https://s19.cnzz.com/z_stat.php?id=1270854462&web_id=1270854462';
    script.type = 'text/javascript';
    script.language = 'JavaScript';
    document.body.appendChild(script);

    const script1 = document.createElement('script');
    script1.src = '//cdn.bootcss.com/canvas-nest.js/1.0.1/canvas-nest.min.js';
    script1.type = 'text/javascript';
    script1.language = 'JavaScript';
    script1.pointColor = '0,0,255';
    script1.clolor = '24,138,226';
    script1.zIndex = '999';
    script1.count = '599';
    document.body.appendChild(script1);
  },
  methods: {
    handleScroll(e) {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop; // 滚动条偏移量
      if (scrollTop > 50) {
        this.isTop = true;
      } else {
        this.isTop = false;
      }

      if (scrollTop > 300) {
        this.returnTop = true;
      } else {
        this.returnTop = false;
      }
    },
    closeBg() {
      if (this.isCloseBg) {
        this.bgUrl = random_photo();
      } else {
        this.bgUrl = '';
      }
    },
    random() {
      let n = 2;
      //定义随机数，对应好 this.ClassArr.length 的长度，我这里 length 是 21
      return Math.floor(Math.random() * (1 - n) + n);
    },
    returnTo() {
      let that =this
      that.timer = setInterval(function() {
        //获取滚动条的滚动高度
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

        //用于设置速度差，产生缓动的效果
        var speed = Math.floor(-scrollTop / 3);
        document.documentElement.scrollTop = document.body.scrollTop = scrollTop + speed;

        if (scrollTop == 0) {
          clearInterval(that.timer);
        }
      }, 50);
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
#app {
  position: relative;
}
.routerView {
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 0;
  padding-right: 0;
}

.bg {
  background: url('./assets/img/bg.jpg') no-repeat;
  background-size: cover;
  overflow: auto;
}

body {
  min-width: 1400px;
}

.top {
  position: fixed;
  bottom: 50px;
  right: 100px;
  color: #fff;
  i {
    font-size: 50px;
    color: #188ae2;
    cursor: pointer;
  }
}
</style>
