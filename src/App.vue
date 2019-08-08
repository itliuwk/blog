<template>
  <div id="app">
    <home :isTop="isTop"></home>

    <div class="">
      <transition name="fade-transform" mode="out-in">
        <router-view class="animated"></router-view>
      </transition>
    </div>

  </div>
</template>

<script>
  import home from '@/components/index'

  export default {
    name: 'App',
    components: {
      home
    },
    data() {
      return {
        isTop: false,
        transitionName: 'slide-right',
        enterClass: 'bounceIn',
        leaveClass: '',
        ClassArr: ['rollIn', 'rollOut']
      }

    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
    },
    watch: {
      $route(to, from) {
        // this.leaveClass = this.ClassArr[this.random()];
        // this.enterClass = this.ClassArr[this.random()];
      }
    },
    methods: {
      handleScroll(e) {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop // 滚动条偏移量
        if (scrollTop > 1) {
          this.isTop = true;
        } else {
          this.isTop = false;
        }
      },
      random() {
        let n = 2;
        //定义随机数，对应好 this.ClassArr.length 的长度，我这里 length 是 21
        return Math.floor(Math.random() * (1 - n) + n)
      }
    }
  }
</script>

<style>
  .routerView {
    max-width: 1300px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 0;
    padding-right: 0;
  }


  /*.child-view {*/
  /*  position: absolute;*/
  /*  max-width: 1300px;*/
  /*  transition: all 1s;*/
  /*}*/

  /*.slide-left-enter, .slide-right-leave-active {*/
  /*  opacity: 0;*/
  /*  transform: translate(100px, 100px) scale(0.3) rotate(45deg);*/
  /*}*/

  /*.slide-left-leave-active, .slide-right-enter {*/
  /*  opacity: 0;*/
  /*  transform: translate(100px, 100px) scale(0.3) rotate(45deg);*/
  /*}*/
</style>
