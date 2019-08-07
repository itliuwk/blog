<template>
  <div id="app">
    <home :isTop="isTop"></home>

    <div class="routerView">
      <transition :enter-active-class="enterClass" :leave-active-class="leaveClass">
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
        enterClass: '',
        leaveClass: '',
        ClassArr: ['fadeOut', 'fadeOutDown', 'fadeOutDownBig', 'fadeOutLeft', 'fadeOutLeftBig', 'fadeOutRight', 'fadeOutRightBig', 'fadeOutUp', 'fadeOutUpBig', 'bounceIn', 'bounceInDown', 'bounceInUp', 'lightSpeedIn', 'lightSpeedOut', 'rotateIn', 'zoomInDown', 'zoomIn', 'rollOut', 'rollIn', 'slideOutUp', 'slideOutDown', 'slideInLeft', 'slideInRight', 'rotateOut', 'rotateOutDownLeft', 'rotateOutDownRight', 'fadeIn', 'fadeInDown', 'fadeInUp', 'fadeInUpBig', 'bounceOut', 'bounceOutDown', 'bounceOutLeft', 'bounceOutRight', 'bounceOutUp', 'slideInUp', 'slideInDown', 'zoomIn', 'zoomInDown', 'zoomInUp']
      }

    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
    },
    watch: {
      $route(to, from) {
        this.enterClass = this.ClassArr[this.random()];
        this.leaveClass = this.ClassArr[this.random()];
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
        return Math.floor(Math.random() * (1 - 40) + 40)
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
