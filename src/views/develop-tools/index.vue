<template>
  <div class="note">
    <div>
      <div class="box">
        <el-card class="box-card" v-for="item in list" :key="item.id">
          <div slot="header" class="clearfix">
            <img :src="item.logo" class="img" alt="" />
            <a :href="item.link" class="color" target="_black">{{ item.name }}</a>
          </div>
          <div class="text item" style="white-space: pre-wrap">
            {{ item.desc }}
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
import { list } from "../../api/develop-tools.js";
import { YYYYMMDD } from "@/utils/date";
import { updateTitle } from "@/utils/index";

export default {
  name: "note",
  data() {
    return {
      list: [],
    };
  },
  computed: {
    // userInfo() {
    //     return this.$store.state.userInfo || JSON.parse(localStorage.getItem('userInfo'));
    // }
  },
  beforeCreate() {
    updateTitle("开发工具");
  },
  mounted() {
    this.getList();
  },
  methods: {
    getList() {
      list({ title: this.title }).then((res) => {
        this.list = res.data;
      });
    },
    detail(item) {
      this.info = "详情";
      this.form = JSON.parse(JSON.stringify(item));
      this.isDetail = true;
    },
  },
  filters: {
    filterDate(val) {
      return YYYYMMDD(val);
    },
  },
};
</script>

<style scoped rel="stylesheet/scss" lang="scss">
.note {
  width: 100%;
  min-height: 100vh;
  padding: 20px;
  box-sizing: border-box;

  .box {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    algin-items: center;
    img {
      vertical-align: middle;
      width: 40px;
      height: 40px;
    }
    .color{    
      vertical-align: middle;
      color: #188ae2;
    }

    .box-card {
      display: inline-block;
      width: 335px;
      margin: 20px;

      .item {
        text-align: left;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        min-height: 60px;
      }

      .btn {
        width: 100%;
        text-align: right;
        padding-top: 20px;

        span {
          padding-top: 8px;
          float: left;
          font-size: 14px;
          color: #999;
        }
      }
    }
  }
}
</style>
