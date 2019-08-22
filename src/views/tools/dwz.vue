<template>
  <div class="dwz">
    <el-container>
      <el-header class="header">短网址生成</el-header>
      <el-main>
        <el-input
          placeholder="请输入你要生成的网址"
          v-model="dwzIptValue"
          @keyup.enter.native="searchEnterFun"
          class="value"
          clearable>
        </el-input>
        <el-date-picker
          style="width: 140px"
          v-model="expireDate"
          type="date"
          value-format="yyyy-MM-dd"
          :picker-options="pickerOptions"
          placeholder="有效期">
        </el-date-picker>
        <el-button class="search" type="primary" @click="search">生成</el-button>
      </el-main>
    </el-container>
    <div v-if="isShow" class="dwzValue">
      <span>你生成的短网址是: {{dwzValue}}</span>
      <el-button class="search" type="success" size="small"
                 v-clipboard:copy="dwzValue"
                 v-clipboard:success="onCopy"
                 v-clipboard:error="onError">点我复制
      </el-button>
    </div>
    <Copyright></Copyright>
  </div>
</template>

<script>
  import Axios from 'axios'
  import Copyright from './copyright'

  export default {
    name: "music",
    mounted() {

    },
    components: {
      Copyright
    },
    data() {
      return {
        dwzIptValue: '',
        dwzValue: '',
        loading: false,
        expireDate: '',
        isShow: false,
        pickerOptions: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e7;
          },
        }
      }
    },
    methods: {
      get() {

        let dwzIptValue = this.dwzIptValue;
        let expireDate = this.expireDate;
        if (!dwzIptValue) {
          this.$message({
            message: '我警告你喔(￣ε(#￣)☆╰╮(￣▽￣///)，网址必填',
            type: 'warning'
          });
          return
        }

        if (!expireDate) {
          this.$message({
            message: '我警告你喔(￣ε(#￣)☆╰╮(￣▽￣///)，日期必填',
            type: 'warning'
          });
          return
        }
        this.loading = true;
        let url = 'http://api.suolink.cn/api.php?format=jsonp&key=5ce4ad4c8e676d21eb3f63ae@d18650ec15830c6da1bfa4f29f04783c&url=' + encodeURI(this.dwzIptValue) + '&expireDate=' + expireDate;
        Axios({
          url: url
        }).then(res => {
          let str = res.data;
          str = str.substr(1, str.length - 2);
          let data = JSON.parse(str);
          this.isShow = true;
          this.dwzValue = data.url;

        }).catch(err => {
          console.log(err);
        })
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

  .dwz {
    text-align: center;
    margin: 100px auto;
    background: #fff;
    /*min-width: 500px;*/

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

    .dwzValue {
      margin-top: 30px;
    }

    a {
      color: #188ae2;
    }
  }

  @media screen and (max-width: 500px) {
    .search {
      margin-top: 20px;
    }
  }
</style>

<style>


</style>
