<template>
  <div class="blogList">

    <div class="item" @click="toDetail">
      <img src="https://ww2.sinaimg.cn/large/006WWMJggy1g2ftrfpvsej30st06kmxs.jpg" alt="">
      <div>
        <h3>新浪图床外链调用失效临时解决办法：使用Referrer策略</h3>
        <p class="view">
          昨天我们分析了新浪图床外链调用失败的原因，新浪图床可能已经开始限制外链，疑似已开启防盗链，新浪免费图床时代看来已经结束了，建议各位站长尽量还是更换别的图床或者本地化吧。今天写一个...</p>
        <div class="info">
          <span>liuwk</span>
          <span>2019年7月30日18:33:23</span>
        </div>
      </div>
    </div>

    <div class="item" @click="toDetail">
      <img src="https://ww2.sinaimg.cn/large/006WWMJggy1g2ftrfpvsej30st06kmxs.jpg" alt="">
      <div>
        <h3>新浪图床外链调用失效临时解决办法：使用Referrer策略</h3>
        <p class="view">
          昨天我们分析了新浪图床外链调用失败的原因，新浪图床可能已经开始限制外链，疑似已开启防盗链，新浪免费图床时代看来已经结束了，建议各位站长尽量还是更换别的图床或者本地化吧。今天写一个...</p>
        <div class="info">
          <span>liuwk</span>
          <span>2019年7月30日18:33:23</span>
        </div>
      </div>
    </div>


    <div class="item" @click="toDetail">
      <img src="https://ww2.sinaimg.cn/large/006WWMJggy1g2ftrfpvsej30st06kmxs.jpg" alt="">
      <div>
        <h3>新浪图床外链调用失效临时解决办法：使用Referrer策略</h3>
        <p class="view">
          昨天我们分析了新浪图床外链调用失败的原因，新浪图床可能已经开始限制外链，疑似已开启防盗链，新浪免费图床时代看来已经结束了，建议各位站长尽量还是更换别的图床或者本地化吧。今天写一个...</p>
        <div class="info">
          <span>liuwk</span>
          <span>2019年7月30日18:33:23</span>
        </div>
      </div>
    </div>

    <div class="item" @click="toDetail">
      <img src="https://ww2.sinaimg.cn/large/006WWMJggy1g2ftrfpvsej30st06kmxs.jpg" alt="">
      <div>
        <h3>新浪图床外链调用失效临时解决办法：使用Referrer策略</h3>
        <p class="view">
          昨天我们分析了新浪图床外链调用失败的原因，新浪图床可能已经开始限制外链，疑似已开启防盗链，新浪免费图床时代看来已经结束了，建议各位站长尽量还是更换别的图床或者本地化吧。今天写一个...</p>
        <div class="info">
          <span>liuwk</span>
          <span>2019年7月30日18:33:23</span>
        </div>
      </div>
    </div>

    <div class="item" @click="toDetail">
      <img src="https://ww2.sinaimg.cn/large/006WWMJggy1g2ftrfpvsej30st06kmxs.jpg" alt="">
      <div>
        <h3>新浪图床外链调用失效临时解决办法：使用Referrer策略</h3>
        <p class="view">
          昨天我们分析了新浪图床外链调用失败的原因，新浪图床可能已经开始限制外链，疑似已开启防盗链，新浪免费图床时代看来已经结束了，建议各位站长尽量还是更换别的图床或者本地化吧。今天写一个...</p>
        <div class="info">
          <span>liuwk</span>
          <span>2019年7月30日18:33:23</span>
        </div>
      </div>
    </div>

    <div class="item" @click="toDetail">
      <img src="https://ww2.sinaimg.cn/large/006WWMJggy1g2ftrfpvsej30st06kmxs.jpg" alt="">
      <div>
        <h3>新浪图床外链调用失效临时解决办法：使用Referrer策略</h3>
        <p class="view">
          昨天我们分析了新浪图床外链调用失败的原因，新浪图床可能已经开始限制外链，疑似已开启防盗链，新浪免费图床时代看来已经结束了，建议各位站长尽量还是更换别的图床或者本地化吧。今天写一个...</p>
        <div class="info">
          <span>liuwk</span>
          <span>2019年7月30日18:33:23</span>
        </div>
      </div>
    </div>

    <div class="item" @click="toDetail">
      <img src="https://ww2.sinaimg.cn/large/006WWMJggy1g2ftrfpvsej30st06kmxs.jpg" alt="">
      <div>
        <h3>新浪图床外链调用失效临时解决办法：使用Referrer策略</h3>
        <p class="view">
          昨天我们分析了新浪图床外链调用失败的原因，新浪图床可能已经开始限制外链，疑似已开启防盗链，新浪免费图床时代看来已经结束了，建议各位站长尽量还是更换别的图床或者本地化吧。今天写一个...</p>
        <div class="info">
          <span>liuwk</span>
          <span>2019年7月30日18:33:23</span>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

  export default {
    name: "blogList",
    methods: {
      toDetail() {
        this.$router.push('./detail');
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .blogList {
    margin-top: 20px;

    .item {
      padding: 20px;
      width: 100%;
      background: #fff;
      border-radius: 4px;
      border: 1px solid #ccc;
      display: flex;
      cursor: pointer;
      margin: 20px 0;


      img {
        width: 130px;
        height: 90px;
      }

      div {
        margin-left: 20px;
        position: relative;

        .view {
          text-indent: 2em;
          margin-top: 10px;
          font-size: 14px;
          color: #999;
        }

        .info {
          position: absolute;
          bottom: -15px;
          left: -20px;
          color: #999;

          span {
            margin: 0 5px;
          }
        }
      }
    }

    .item:hover {
      transition-duration: .5s;
      background: #000;

      h3 {
        transition-duration: .5s;
        font-size: 20px;
        color: #188ae2;
      }

      .view {
        transition-duration: .5s;
        color: #fff;
      }
    }

    @keyframes upOpacity {
      0% {
        opacity: 0.5;
      }
      100% {
        opacity: 1;
      }
    }
  }

</style>
