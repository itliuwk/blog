<template>
  <div class="page">
    <el-table
      :data="list"
      style="width: 100%">
      <el-table-column
        prop="author"
        label="作者">
      </el-table-column>
      <el-table-column
        prop="title"
        label="标题">
      </el-table-column>
      <el-table-column
        prop="createtime"
        label="发布时间">
      </el-table-column>
      <el-table-column
        label="操作">
        <template slot-scope="list">
          <el-button size="small" type="primary">编辑</el-button>
          <el-button size="small" type="danger">删除</el-button>

        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import {list} from '@/api/blog'
  import {YYYYMMDD} from '@/utils/date'

  export default {
    name: "my-article",
    data() {
      return {
        list: []
      }
    },
    mounted() {
      this.getList()
    },
    methods: {
      getList() {
        let username = JSON.parse(localStorage.getItem('userInfo')).username;
        if (username == 'liuwk') {
          username = '';
        }
        list({username}).then(res => {

          this.list = res.data.map(item => {
            item.createtime = YYYYMMDD(item.createtime);
            return item;
          })
        })
      }
    }
  }
</script>

<style scoped rel="stylesheet/scss" lang="scss">
  .page {
    padding: 20px;
  }
</style>
