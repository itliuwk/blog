<template>
  <div style="background: #000;" class="maoyan">
    <div style="text-align: center;font-weight: bold;padding: 30px 0;font-size: 50px;color: #fff;">
      日期: {{this.filterDate()}}
    </div>
    <el-table
      :data="data"
      v-loading="loading"
      stripe
      empty-text="暂无数据,刷新页面试试"
      style="width: 100%;padding-bottom: 20px;">
      <el-table-column
        type="index">
      </el-table-column>
      <el-table-column
        prop="MovieName"
        label="影片">
      </el-table-column>
      <el-table-column
        prop="movieDay"
        label="上映天数">
      </el-table-column>
      <el-table-column
        prop="sumBoxOffice"
        label="综合票房（万）">
      </el-table-column>
      <el-table-column
        prop="BoxOffice"
        label="票房（万）">
      </el-table-column>
      <el-table-column
        prop="boxPer"
        label="票房占比">
      </el-table-column>
      <el-table-column
        prop="time"
        label="数据获取时间">
      </el-table-column>
    </el-table>
    <div v-if="isReload" style="text-align: center;background: #fff;">
      <el-button @click="reload()" type="text">刷新页面</el-button>
    </div>
  </div>

</template>

<script>
  import Axios from 'axios'
  import jsonp from '../../utils/jsonp';

  export default {
    data() {
      return {
        data: [],
        cacheData: [],
        timer: null,
        loading: false,
        isReload: false,
        count: 0,
      }
    },
    mounted() {
      this.getList();
      this.timer = setInterval(() => {
        this.getList();
      }, 20000);

    },
    destroyed() {
      clearInterval(this.timer);
    },
    methods: {
      getList() {
        this.data = this.cacheData;
        if (this.count >= 1) {
          this.loading = false;
        } else {
          this.loading = true;
        }
        this.count = this.count + 1;
        let url = 'https://api.shenjian.io/?appid=8c440c9ed71c32654bb8265bef23159c&date=' + this.filterDate();
        jsonp(url, '', 'jsonpCallBack').then((response) => {
          this.data = response.data;
          this.cacheData = response.data;
          this.loading = false;
          if (!response.data.length) {
            this.isReload = true;
          }
        });
      },
      reload() {
        window.location.reload()
      },
      filterDate() {
        let date = new Date();
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let strDate = date.getDate();
        if (month >= 1 && month <= 9) {
          month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
          strDate = "0" + strDate;
        }

        return year + '-' + month + '-' + strDate
      }
    }

  }
</script>
<style lang="scss">


  .maoyan .el-table::before {
    left: 0;
    bottom: 0;
    width: 100%;
    height: 0;
  }

  .maoyan .has-gutter tr th {
    background: #373737;
    color: #999;
    font-weight: bold;
    font-size: 20px;
  }

  .maoyan .el-table--striped .el-table__body tr:nth-child(odd) td {
    background-color: #3f3f4d;
    color: #fff;
  }

  .maoyan .el-table--striped .el-table__body tr.el-table__row--striped td {
    background: #535265 !important;
    color: #fff;
  }


  .maoyan .el-table--striped .el-table__body tr:nth-child(1) {
    font-size: 20px;

    .cell {
      div {
        width: 25px;
        line-height: 25px;
        background: orange;
        border-radius: 50%;
        text-align: center;
      }
    }
  }

  .maoyan .el-table--striped .el-table__body tr:nth-child(2) {
    font-size: 18px;

    .cell {
      div {
        width: 25px;
        line-height: 25px;
        background: cornflowerblue;
        border-radius: 50%;
        text-align: center;
      }
    }
  }

  .maoyan .el-table--striped .el-table__body tr:nth-child(3) {
    font-size: 16px;

    .cell {
      div {
        width: 25px;
        line-height: 25px;
        background: darkmagenta;
        border-radius: 50%;
        text-align: center;
      }
    }
  }

  .maoyan .el-table--enable-row-hover .el-table__body tr:hover > td {
    background-color: #212e3e !important;
  }

</style>
