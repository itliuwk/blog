<template>
  <div class="page">
    <a href="javascript:;" class="file">
      将文件拖到此处，或
      <em>点击上传</em>
      <input type="file" name id accept="image/*, video/*" @change="changeFile" ref="empty" />
    </a>

    <div v-if="img||video">
      <spanp style="margin: 20px 0">{{img||video}}</spanp>
      <el-button
        type="primary"
        size="mini"
        v-clipboard:copy="img||video"
        v-clipboard:success="onCopy"
        v-clipboard:error="onError"
      >复制</el-button>
    </div>

    <img :src="img" alt v-if="img" />
    <video :src="video" v-if="video"></video>
  </div>
</template>

<script>
import { config } from "../../config";
import { updatePhoto, updatePhoto1 } from "../../api/qiniu";

export default {
  name: "index",
  data() {
    return {
      img: "",
      video: "",
    };
  },
  mounted() {},
  methods: {
    onCopy(e) {
      this.$message({
        message: "复制成功 (^o^)/",
        type: "success",
      });
    },
    // 复制失败
    onError(e) {
      this.$message({
        message: "复制失败 o(╥﹏╥)o",
        type: "warning",
      });
    },
    async changeFile(e) {
      let that = this;

      let type = e.target.files[0].type;

      let qiniuInfo = await updatePhoto();

      let data = new FormData();
      data.append("token", qiniuInfo.uploadToken);
      //七牛需要的token，叫后台给，是七牛账号密码等组成的hash
      data.append("file", e.target.files[0]);
      this.$refs["empty"].value = "";
      updatePhoto1(data).then((res) => {
        let src = qiniuInfo.domain + res.key;
        if (type.indexOf("video") != -1) {
          this.video = src;
          this.img = "";
        } else {
          this.img = src;
          this.video = "";
        }
      });
    },
  },
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.page {
  height: 800px;
  text-align: center;
  padding-top: 20px;

  video {
    height: 300px;
  }

  .file {
    position: relative;
    display: inline-block;
    background: #fff;
    border: 2px dashed #d9d9d9;
    border-radius: 4px;
    padding: 25px 70px;
    overflow: hidden;
    text-decoration: none;
    text-indent: 0;
    line-height: 90px;
    cursor: pointer;
    color: #333;
  }

  .file input {
    position: absolute;
    font-size: 100px;
    right: 0;
    top: 0;
    opacity: 0;
    cursor: pointer;
  }

  .file em {
    color: #188ae2;
    font-style: normal;
  }

  .file:hover {
    border-color: #78c3f3;
    text-decoration: none;
  }
}
</style>
