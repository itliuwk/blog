<template>
  <div id="app">
    <home :isTop="isTop"></home>
    <div class="bg">
      <keep-alive>
        <transition name="fade-transform" mode="out-in"><router-view class="animated"></router-view></transition>
      </keep-alive>
    </div>
    <Copyright></Copyright>
    <div v-show="returnTop" class="top" :style="{ bottom: scrollTop + 'px' }" @click="returnTo"><i class="iconfont icon-fanhuidingbu"></i></div>
  </div>
</template>

<script>
import home from '@/components/index';
import { random_photo, updateTitle } from '@/utils/index';

export default {
  name: 'App',
  components: {
    home
  },
  data() {
    return {
      isTop: false,
      returnTop: false,
      isCloseBg: false,
      disabled: false,
      transitionName: 'slide-right',
      enterClass: 'bounceIn',
      leaveClass: '',
      bgUrl: '',
      ClassArr: ['rollIn', 'rollOut'],
      timer: null,
      scrollTop: 100,
      count: 5
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
      updateTitle();
      document.documentElement.scrollTop = 0;
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
      }
      if (scrollTop < 10) {
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
      let that = this;

      if (this.disabled) {
        return false;
      }
      this.disabled = true;
      that.timer = setInterval(function() {
        that.count += 4;
        //获取滚动条的滚动高度
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

        //用于设置速度差，产生缓动的效果
        var speed = Math.floor(-scrollTop / 3);
        document.documentElement.scrollTop = document.body.scrollTop = scrollTop + speed;
        that.scrollTop = that.count * 30;
        if (scrollTop == 0) {
          that.returnTop = false;
          that.scrollTop = 100;
          that.count = 5;
          clearInterval(that.timer);
          that.disabled = false;
        }
      }, 50);
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss">
#app {
  position: relative;

  .bg {
    background: #373d41;
    background-size: cover;
    overflow: auto;
  }
}

// body {
//   min-width: 1400px;
// }

.top:hover {
  color: #0086b3;
  transition: all 0.5s;
  transform: rotate(360deg) scale(1.2);
}
.top {
  position: fixed;
  bottom: 100px;
  right: 100px;
  color: #188ae2;
  i {
    font-size: 50px;
    cursor: pointer;
  }
}
</style>
