<template>
  <div class="home">
    <div class="left">
      <div class="carousel">
        <el-carousel :interval="5000" arrow="always">
          <el-carousel-item v-for="(item,index) in items" :key="index">
            <img :src="item.src" alt="">
          </el-carousel-item>
        </el-carousel>
      </div>
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
