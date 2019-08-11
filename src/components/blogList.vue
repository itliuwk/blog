<template>
  <div class="blogList">

    <div class="item" @click="toDetail" v-for="(item,index) in blogList" :key="index">
      <img :src="item.url" alt="">
      <div>
        <h3>{{item.title}}</h3>
        <p class="view">{{item.content}}</p>
        <div class="info">
          <span>{{item.author}}</span>
          <span>{{item.createDate}}</span>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
  import {random_photo} from '@/utils/index'
  export default {
    name: "blogList",
    data(){
      return{
        blogList:[
          {
            title:'新浪图床外链调用失效临时解决办法：使用Referrer策略',
            content:' 昨天我们分析了新浪图床外链调用失败的原因，新浪图床可能已经开始限制外链，疑似已开启防盗链，新浪免费图床时代看来已经结束了，建议各位站长尽量还是更换别的图床或者本地化吧。今天写一个...',
            author:'liuwk',
            createDate:'2019年8月11日16:40:05',
            url:random_photo()
          },
          {
            title:'新浪图床外链调用失效临时解决办法：使用Referrer策略',
            content:' 昨天我们分析了新浪图床外链调用失败的原因，新浪图床可能已经开始限制外链，疑似已开启防盗链，新浪免费图床时代看来已经结束了，建议各位站长尽量还是更换别的图床或者本地化吧。今天写一个...',
            author:'liuwk',
            createDate:'2019年8月11日16:40:05',
            url:random_photo()
          },
          {
            title:'新浪图床外链调用失效临时解决办法：使用Referrer策略',
            content:' 昨天我们分析了新浪图床外链调用失败的原因，新浪图床可能已经开始限制外链，疑似已开启防盗链，新浪免费图床时代看来已经结束了，建议各位站长尽量还是更换别的图床或者本地化吧。今天写一个...',
            author:'liuwk',
            createDate:'2019年8月11日16:40:05',
            url:random_photo()
          },
          {
            title:'新浪图床外链调用失效临时解决办法：使用Referrer策略',
            content:' 昨天我们分析了新浪图床外链调用失败的原因，新浪图床可能已经开始限制外链，疑似已开启防盗链，新浪免费图床时代看来已经结束了，建议各位站长尽量还是更换别的图床或者本地化吧。今天写一个...',
            author:'liuwk',
            createDate:'2019年8月11日16:40:05',
            url:random_photo()
          }
        ]
      }
    },
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
