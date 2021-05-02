<template>
  <div class="uploadfiles">
    <input type="file" id="file" accept="image/*" @change="changeImg" />
  </div>
</template>

<script>
import request from "@/utils/request";
export default {
  data() {
    return {
      files: [],
      action: "http://localhost:3000/api/" + "upload",
    };
  },
  mounted() {},
  methods: {
    changeImg(e) {
      let file = document.getElementById("file");

      let img = file.files[0];
      if (img) {
        let url = URL.createObjectURL(img);
        let base64 = this.blobToDataURL(img, function (base64Url) {
          request({
            url: "/api/upload",
            method: "post",
            data: {
              imgData: base64Url,
            },
          }).then((res) => {
            console.log("res.data: ", res);
          });
        });
      }
    },
    blobToDataURL(blob, cb) {
      let reader = new FileReader();
      reader.onload = function (evt) {
        let base64 = evt.target.result;
        cb(base64);
      };
      reader.readAsDataURL(blob);
    },
  },
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.uploadfiles {
  text-align: center;
  padding: 20px 0;
}
.files {
  text-align: left;
  padding: 20px;
  ul {
    li {
      margin: 5px 0;
      text-align: center;
      a {
        color: #188ae2;
      }
    }
  }
}

.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(37, 45, 51, 0.5);
}

.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}

.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}

.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
/deep/ .el-upload {
  border: 1px solid #eee;
}
</style>
