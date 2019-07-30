<template>
  <div class="home">
    <div class="left">
      <div class="carousel">
        <el-carousel :interval="5000" arrow="always">
          <el-carousel-item v-for="item in items" :key="item">
            <img :src="item.src" alt="">
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <div class="right">
      <div class="control">
        <h3>个人资料简介</h3>
        <p class="info">刘伟坤，90后前端开发人员，广东五华人，出厂26年有余，此博客站长，地地道道农村出生，已有小姐姐青睐。</p>
        <div class="contact">
          <div class="weixin">
            <i class="iconfont icon-weixin"></i>
          </div>
          <div class="qq">
            <i class="iconfont icon-icon"></i>
          </div>
          <div class="github">
            <i class="iconfont icon-github"></i>
          </div>
          <div class="weibo">
            <i class="iconfont icon-weibo"></i>
          </div>
        </div>
        <div class="statistics">
          <div>
            <p>文章</p>
            <p>10</p>
          </div>
          <div>
            <p>留言</p>
            <p>34</p>
          </div>
          <div>
            <p>标签</p>
            <p>5</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "home",
    data() {
      return {
        items: [
          {
            url: '',
            src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564488182001&di=ff0726f2ccedc04d61bf83d201085d3e&imgtype=jpg&src=http%3A%2F%2Fhardware.mydrivers.com%2Fimg%2F20120514%2F2012051401182555.jpg'
          },
          {
            url: '',
            src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564488181151&di=0c9418b79f38485c1916dd611100358e&imgtype=0&src=http%3A%2F%2Fk.zol-img.com.cn%2Fnbbbs%2F5771%2Fa5770668_s.jpg'
          },
          {
            url: '',
            src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564488181150&di=7af98085670043c50c8957576ab32289&imgtype=0&src=http%3A%2F%2Fimg775.ph.126.net%2FBWiPiksczbWMJXQHKKCBhg%3D%3D%2F4841369599423340905.jpg'
          }
        ]
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>


  .home {
    display: flex;
    margin-top: 20px;

    .left {
      flex: 3;
      margin-right: 20px;

      /deep/ .el-carousel {
        border-radius: 4px;

        .el-carousel__item {
          cursor: pointer;
        }
      }

      img {
        width: 100%;
        height: 100%;
      }
    }

    .right {
      flex: 1;

      .control {
        position: relative;
        height: 300px;
        border-radius: 4px;
        box-shadow: 0 0 10px rgba(37, 45, 51, 0.5);

        h3 {
          padding: 20px 0 10px 20px;
          font-size: 16px;
          color: #188ae2;
        }

        .info {
          text-align: center;
          text-indent: 2em;
          font-size: 15px;
          padding: 10px;
          color: #999;
        }

        .contact {
          padding: 20px;
          text-align: center;

          div {
            display: inline-block;
            width: 35px;
            height: 35px;
            line-height: 35px;
            margin: 0 10px;
            border: 1px solid #1f2d3d;
            border-radius: 50%;
            text-align: center;
            cursor: pointer;

            i {
              font-size: 20px;
            }
          }

          .weixin {
            color: #248a34;
            border: 1px solid #248a34;
          }

          .qq {
            color: #4e91d1;
            border: 1px solid #4e91d1;
          }


          .weibo {
            color: #d28300;
            border: 1px solid #d28300;
          }
        }

        .statistics {
          border-top: 1px solid #eee;
          width: 100%;
          display: flex;
          position: absolute;
          height: 60px;
          line-height: 25px;
          bottom: 0;
          left: 0;

          div {
            padding: 5px;
            flex: 1;
            border-left: 1px solid #eee;
            text-align: center;
            font-size: 14px;

            p:nth-child(2) {
              color: #999;
            }
          }

          div:nth-child(1) {
            border: none;
          }
        }
      }
    }
  }

</style>
