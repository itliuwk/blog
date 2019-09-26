<template>
  <div class="copyright">
    <div>
      <span>
        Copyright © 刘伟坤 - 个人博客 版权所有
        <a target="_blank" style="color: #188ae2" href="https://github.com/itliuwk"><i class="iconfont icon-github"></i></a>
        Powered By liuwk Design.
      </span>
      <a target="_blank" href="http://www.beian.miit.gov.cn">粤ICP备19106134号</a>
    </div>
    <div style="margin: 10px; 0">
      <a
        target="_blank"
        href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44011302002188"
        style="display:inline-block;text-decoration:none;height:20px;line-height:20px;"
      >
        <img src="../assets/img/备案图标.png" style="float:left;" /> 
        <p style="float:left;height:20px;line-height:20px; ">  粤公网安备 44011302002188号</p>
      </a>
    </div>
    <div>本站低调运行已经有 {{ time }}</div>
    <div style="padding: 20px 0">
      <a href="https://www.yunaq.com/new_analytics/report/login/?site=www.sxitw.cn" title="创宇云安全" target="_blank">
        <img src="../assets/img/jsl.png" width="127px" height="47px" style="margin:0px 5px;" />
      </a>

      <a href="http://www.qcloud.com/redirect.php?redirect=1001&amp;cps_key=8c96bc9f7c143bf40b60cfd558885a8d" title="腾讯云安全认证" target="_blank">
        <img src="../assets/img/qcloud.png" width="127px" height="47px" style="margin:0px 5px;" />
      </a>
    </div>
    <div id="top-img"></div>
  </div>
</template>

<script>
export default {
  name: 'copyright',
  data() {
    return {
      time: '0天0小时0分0秒'
    };
  },
  mounted() {
    this.showtime();
  },
  methods: {
    showtime(biryear = 2019, birmonth = 8, birday = 24) {
      setInterval(() => {
        let that = this;
        let TMonth = new Array('Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec');
        let nowMonth = birmonth - 1;
        let bmonth = TMonth[nowMonth];
        let startday = new Date('' + bmonth + ' ' + birday + ', ' + biryear + ' 18:00');
        startday.setYear('' + biryear + '');
        let today = new Date();
        let minPerDay = 60 * 1000;
        let hoursPerDay = 60 * 60 * 1000;
        let PerDay = 24 * 60 * 60 * 1000;
        let secsLeft = (today.getTime() - startday.getTime()) / minPerDay;
        let secsRound = Math.round(secsLeft);
        let secsRemain = secsLeft - secsRound;
        secsRemain = secsRemain < 0 ? (secsRemain = 60 - (secsRound - secsLeft) * 60) : (secsRemain = (secsLeft - secsRound) * 60);
        secsRemain = Math.round(secsRemain);
        let minLeft = (today.getTime() - startday.getTime()) / hoursPerDay;
        let minRound = Math.round(minLeft);
        let minRemain = minLeft - minRound;
        minRemain = minRemain < 0 ? (minRemain = 60 - (minRound - minLeft) * 60) : (minRemain = (minLeft - minRound) * 60);
        minRemain = Math.round(minRemain - 0.495);
        let hoursLeft = (today.getTime() - startday.getTime()) / PerDay;
        let hoursRound = Math.round(hoursLeft);
        let hoursRemain = hoursLeft - hoursRound;
        hoursRemain = hoursRemain < 0 ? (hoursRemain = 24 - (hoursRound - hoursLeft) * 24) : (hoursRemain = (hoursLeft - hoursRound) * 24);
        hoursRemain = Math.round(hoursRemain - 0.5);
        let daysLeft = (today.getTime() - startday.getTime()) / PerDay;
        daysLeft = daysLeft - 0.5;
        let daysRound = Math.round(daysLeft);
        let daysRemain = daysRound;
        let day_rem = '天';
        let hour_rem = '小时';
        let min_rem = '分';
        let sec_rem = '秒';
        let timeRemain = daysRemain + day_rem + hoursRemain + hour_rem + minRemain + min_rem + secsRemain + sec_rem;
        that.time = timeRemain;
      }, 1000);
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.copyright {
  background: #121a1d;
  color: #fff;
  /*margin-top: 20px;*/
  text-align: center;
  // border-top: 1px solid #eaeaea;
  /*box-shadow: 0 0 2px rgba(37, 45, 51, 0.5);*/
  padding-top: 20px;
  position: relative;
}

#top-img {
  background: url('../assets/img/top.png');
  height: 4px;
  top: 0px;
  width: 100%;
  z-index: 9999;
}
</style>
