<template>
  <div class="blogList">

    <div class="item" @click="toDetail(item.id)" v-for="(item,index) in blogList" :key="index">
      <img  v-if="item.url" :src="item.url" alt=""/>
      <img v-else src="../assets/images/10.jpg" alt=""/>
      <div>
        <h3>{{item.title}}</h3>
       <div class="view">
         {{item.subtitle}}
       </div>
        <div class="info">
          <span>{{item.author}}</span>
          <span>{{item.createtime}}</span>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
  import {random_photo} from '@/utils/index'
  import {YYYYMMDD} from '@/utils/date'
  import {list} from '@/api/blog'

  export default {
    name: "blogList",
    data() {
      return {
        blogList: []
      }
    },
    mounted() {
      this.getList();
    },
    methods: {
      toDetail(id) {
        this.$router.push('./detail?id=' + id);
      },
      getList() {
        list({page:1,total:5}).then(res => {
          res.data.map((item,index)=>{
            item.createtime = YYYYMMDD(item.createtime);
            item.content = item.content.toString()
            // item.url = random_photo();
            console.log(item.content);
            return item;
          });

          this.blogList = res.data;
        })
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
        width: 80%;

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

      img {
        transition-duration: .5s;
        transform: scale(1.2);
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
