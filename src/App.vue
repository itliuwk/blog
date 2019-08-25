<template>
  <div id="app">
    <home :isTop="isTop"></home>

    <div class="bg" :style="{backgroundImage: 'url('+bgUrl+')'}">
      <transition name="fade-transform" mode="out-in">
        <router-view class="animated"></router-view>
      </transition>

    </div>
    <div style="text-align: center">
      <div>
        <span>Copyright © 刘伟坤 - 博客 版权所有 Powered By liuwk Design.   </span>
        <a target="_blank" style="color: #188ae2" href="https://github.com/itliuwk"><i class="iconfont icon-github"></i></a>
      </div>
<!--      <div>本站在每天各种攻击的压力下顽强的存活了：1472天23小时53分58秒</div>-->
    </div>

  </div>
</template>

<script>
    import home from '@/components/index'
    import {random_photo} from '@/utils/index'

    export default {
        name: 'App',
        components: {
            home
        },
        data() {
            return {
                isTop: false,
                isCloseBg:false,
                transitionName: 'slide-right',
                enterClass: 'bounceIn',
                leaveClass: '',
                bgUrl: '',
                ClassArr: ['rollIn', 'rollOut']
            }

        },
        computed: {
            CloseBg() {
                return this.$store.state.isCloseBg
            }
        },
        watch: {
            CloseBg(val) {
                this.isCloseBg = val;
                this.closeBg();
            },
            $route(to, from) {
                document.title= '刘伟坤 - 个人博客 | 随心IT'
                // this.leaveClass = this.ClassArr[this.random()];
                // this.enterClass = this.ClassArr[this.random()];
            }
        },
        mounted() {
            this.closeBg();
            window.addEventListener('scroll', this.handleScroll);

        },
        methods: {
            handleScroll(e) {
                let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop // 滚动条偏移量
                if (scrollTop > 100) {
                    this.isTop = true;
                } else {
                    this.isTop = false;
                }
            },
            closeBg() {
                if (this.isCloseBg){
                    this.bgUrl = random_photo();
                }else{
                    this.bgUrl = '';
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

  .bg {

    background: url('./assets/img/bg.jpg') no-repeat;
    background-size: cover;
    overflow: auto;
  }

  body {
    min-width: 1400px;
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
