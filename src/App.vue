<template>
  <div id="app">
    <home :isTop="isTop"></home>

    <div class="bg" :style="{backgroundImage: 'url('+bgUrl+')'}">
      <transition name="fade-transform" mode="out-in">
        <router-view class="animated"></router-view>
      </transition>

    </div>
    <div class="copyright">
      <div>
        <span>Copyright © 刘伟坤 - 博客 版权所有 Powered By liuwk Design.   </span>
        <a target="_blank" href="http://www.beian.miit.gov.cn"><img src="./assets/img/icp1.png"> 粤ICP备19106134号</a>
        <a target="_blank" style="color: #188ae2" href="https://github.com/itliuwk"><i class="iconfont icon-github"></i></a>
      </div>
      <div style="padding-top: 20px;">
        <a href="https://www.yunaq.com/new_analytics/report/login/?site=www.sxitw.cn" title="创宇云安全" target="_blank"><img
          src="./assets/img/jsl.png" width="127px" height="47px" style="margin:0px 5px;"></a>
        <a href="http://www.qcloud.com/redirect.php?redirect=1001&amp;cps_key=8c96bc9f7c143bf40b60cfd558885a8d"
           title="腾讯云安全认证" target="_blank"><img src="./assets/img/qcloud.png" width="127px" height="47px"
                                                style="margin:0px 5px;"></a>
      </div>
    </div>
    <div id="top-img"></div>
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
                isCloseBg: false,
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
                document.title = '刘伟坤 - 个人博客 | 随心IT'
                // this.leaveClass = this.ClassArr[this.random()];
                // this.enterClass = this.ClassArr[this.random()];

                if (window._czc) {
                    let location = window.location;
                    let contentUrl = location.pathname + location.hash;
                    let refererUrl = '/';
                    window._czc.push(['_trackPageview', contentUrl, refererUrl])
                }

            }
        },
        mounted() {
            this.closeBg();
            window.addEventListener('scroll', this.handleScroll);

            window._czc = window._czc || [];
            const script = document.createElement('script');
            script.src = 'https://s19.cnzz.com/z_stat.php?id=1270854462&web_id=1270854462';
            script.type = "text/javascript";
            script.language = 'JavaScript';
            document.body.appendChild(script);

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
                if (this.isCloseBg) {
                    this.bgUrl = random_photo();
                } else {
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

  #top-img {
    background: url('./assets/img/top.png');
    height: 4px;
    top: 0px;
    width: 100%;
    Z-index: 9999;
  }

  .copyright {
    text-align: center;
    border-top: 1px solid #eaeaea;
    /*box-shadow: 0 0 2px rgba(37, 45, 51, 0.5);*/
    padding: 20px 0;
  }
</style>
