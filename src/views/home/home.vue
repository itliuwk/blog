<template>
  <div>
    <!-- <div class="carousel">
      <el-carousel :interval="5000" arrow="always">
        <el-carousel-item v-for="(item, index) in items" :key="index"><img :src="item.src" alt=""/></el-carousel-item>
      </el-carousel>
    </div>-->

    <div class="home">
      <div class="left">
        <BlogList></BlogList>
      </div>
      <div class="right">
        <Right></Right>
      </div>
    </div>
  </div>
</template>

<script>
import BlogList from "@/components/blogList";
import Right from "@/components/right";
import { random_bg_photo } from "@/utils/index";

export default {
  name: "home",
  data() {
    return {
      items: [
        {
          url: "",
          src:
            "https://img.xjh.me/random_img.php?type=bg&ctype=nature&return=302&id=" +
            1,
        },
        {
          url: "",
          src:
            "https://img.xjh.me/random_img.php?type=bg&ctype=nature&return=302&id=" +
            2,
        },
        {
          url: "",
          src:
            "https://img.xjh.me/random_img.php?type=bg&ctype=nature&return=302&id=" +
            3,
        },
      ],
    };
  },
  components: {
    BlogList,
    Right,
  },
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "@/views/home/home.scss";
</style>
