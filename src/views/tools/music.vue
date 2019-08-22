<template>
  <div class="music">
     <div>
       <el-header class="header">音乐搜索</el-header>
       <el-select v-model="url">
         <el-option label="QQ音乐" value="QQ">QQ音乐</el-option>
         <el-option label="网易云音乐" value="WYY">网易云音乐</el-option>
       </el-select>
       <el-input
         placeholder="请输入歌曲名称或歌手"
         v-model="value"
         @input="inputChange"
         @keyup.enter.native="searchEnterFun"
         class="value"
         clearable>
       </el-input>

       <el-button class="search" type="primary" @click="search">搜索</el-button>
     </div>
      <el-table
        :data="musicData"
        v-loading="loading"
        style="width: 100%;">
        <el-table-column
          prop="title"
          align="center"
          label="歌曲名称">
        </el-table-column>
        <el-table-column
          prop="author"
          align="center"
          label="歌手">
        </el-table-column>
        <el-table-column
          prop="url"
          align="center"
          label="歌曲播放">
          <template slot-scope="musicData">
            <a style="text-decoration:none" target="_blank" :href="musicData.row.url"> 播放</a>
            <a v-if="musicData.row.download" style="text-decoration:none" target="_blank"
               :href="musicData.row.url">下载</a>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          label="信息">
          <template slot-scope="musicData">
            <span style="margin-right: 20px;">{{musicData.row.info}}</span>
            <el-button type="primary" size="mini"
                       v-clipboard:copy="musicData.row.info"
                       v-clipboard:success="onCopy"
                       v-clipboard:error="onError">复制
            </el-button>
          </template>
        </el-table-column>
      </el-table>

    <Copyright></Copyright>
  </div>
</template>

<script>
  import Axios from 'axios'
  import Copyright from './copyright'

  export default {
    name: "music",
    components: {
      Copyright
    },
    mounted() {

    },
    data() {
      return {
        value: '',
        musicData: [],
        loading: false,
        url: 'WYY'
      }
    },
    methods: {
      get() {
        if (!this.value) {
          return false;
        }
        this.loading = true;
        let url = '';
        if (this.url == 'QQ') {
          url = 'https://api.mlwei.com/music/api/?key=523077333&cache=1&type=so&id=' + encodeURIComponent(this.value) + '&size=hq';
        } else {
          url = 'https://api.mlwei.com/music/api/wy/?key=523077333&cache=1&type=so&id=' + encodeURIComponent(this.value) + '&size=hq';
        }

        Axios({
          url
        }).then(res => {
          res.data.Body.map(item => {
            this.loading = false;
            if (item.url.indexOf('api.mlwei.com') != -1) {
              item.download = true
            } else {
              item.download = false
            }
            item.info = item.author + ' - ' + item.title;
            return item;
          });
          this.musicData = res.data.Body;

        }).catch(err => {
          this.loading = false;
          console.log(err);
        })
      },
      inputChange(val) {
        let timer = null;
        clearTimeout(timer);
        timer = setTimeout(() => {
          this.get();
          clearTimeout(timer);
        }, 1000);
      },
      search() {
        this.get();
      },
      searchEnterFun() {
        this.get();
      },

      // 复制成功
      onCopy(e) {
        this.$message({
          message: '复制成功 \(^o^)/',
          type: 'success'
        });
      },
      // 复制失败
      onError(e) {
        this.$message({
          message: '复制失败 o(╥﹏╥)o',
          type: 'warning'
        });
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

  .music {
    text-align: center;
    margin: 100px auto;
    background: #fff;

    .header {
      font-weight: bolder;
    }

    .value {
      width: 20%;
      min-width: 200px;
    }

    .search {
      margin-left: 10px;
    }

    a {
      color: #188ae2;
    }
  }
</style>

<style>


</style>
