<template>
  <div class="uploadfiles">
    <el-upload class="avatar-uploader" :action="action" :show-file-list="false" multiple :on-success="handleAvatarSuccess">
      <i class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
    <div class="files">
      <ul>
        <li v-for="(item, index) in files" :key="index">
          <a :href="item" target="_blank">{{ item }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { BASE_API } from '@/config';
import { getFiles } from '@/api/files.js';
export default {
  data() {
    return {
      files: [],
      action: BASE_API + 'uploadfiles'
    };
  },
  mounted() {
    this.getFiles();
  },
  methods: {
    getFiles() {
      getFiles().then(res => {
        this.files = res.data;
      });
    },
    handleAvatarSuccess() {
      this.getFiles();
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.uploadfiles {
  background: #fff;
  text-align: center;
  padding: 20px 0;
}
.files {
  text-align: left;
  ul {
    li {
      margin: 5px 0;
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
