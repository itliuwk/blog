<template>
  <div class="home">
    <div class="left">
<!--      <div class="carousel">-->
<!--        <el-carousel :interval="5000" arrow="always">-->
<!--          <el-carousel-item v-for="(item,index) in items" :key="index">-->
<!--            <img :src="item.src" alt="">-->
<!--          </el-carousel-item>-->
<!--        </el-carousel>-->
<!--      </div>-->
      <BlogList></BlogList>
    </div>
    <div class="right">
      <Right></Right>
    </div>
  </div>
</template>

<script>
  import BlogList from '@/components/blogList'
  import Right from '@/components/right'
  import {random_photo} from '@/utils/index'

  export default {
    name: "home",
    data() {
      return {
        items: [
          {
            url: '',
            src: random_photo()
          },
          {
            url: '',
            src: random_photo()
          },
          {
            url: '',
            src: random_photo()
          }
        ]
      }
    },
    components: {
      BlogList,
      Right
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>


  @import "@/views/home/home.scss";

</style>
