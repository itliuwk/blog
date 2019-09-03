<template>
  <div class="copyright">
    <div>
      <span>Copyright © 刘伟坤 - 博客 版权所有 Powered By liuwk Design.   </span>
      <a target="_blank" href="http://www.beian.miit.gov.cn"><img src="../assets/img/icp1.png"> 粤ICP备19106134号</a>
      <a target="_blank" style="color: #188ae2" href="https://github.com/itliuwk"><i
        class="iconfont icon-github"></i></a>
    </div>
    <div style="padding: 20px 0">
      <a href="https://www.yunaq.com/new_analytics/report/login/?site=www.sxitw.cn" title="创宇云安全" target="_blank"><img
        src="../assets/img/jsl.png" width="127px" height="47px" style="margin:0px 5px;"></a>
      <a href="http://www.qcloud.com/redirect.php?redirect=1001&amp;cps_key=8c96bc9f7c143bf40b60cfd558885a8d"
         title="腾讯云安全认证" target="_blank"><img src="../assets/img/qcloud.png" width="127px" height="47px"
                                              style="margin:0px 5px;"></a>
    </div>
    <div id="top-img"></div>
  </div>
</template>

<script>
    export default {
        name: "copyright",
        data() {
            return {}
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .copyright {
    margin-top: 20px;
    text-align: center;
    border-top: 1px solid #eaeaea;
    /*box-shadow: 0 0 2px rgba(37, 45, 51, 0.5);*/
    padding-top: 20px;
  }

  #top-img {
    background: url('../assets/img/top.png');
    height: 4px;
    top: 0px;
    width: 100%;
    Z-index: 9999;
  }

</style>
