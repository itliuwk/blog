<template>
  <div class="page">
    <div v-if="!isEdit">
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
            <el-button size="small" @click="edit(list.row.id)" type="primary">编辑</el-button>
            <el-button size="small" @click="del(list.row.id)" type="danger">删除</el-button>

          </template>
        </el-table-column>
      </el-table>
    </div>
    <div v-else>
      <PublishArticles :detail="detail"></PublishArticles>
    </div>
  </div>
</template>

<script>
  import {list, detail,del} from '@/api/blog'
  import {YYYYMMDD} from '@/utils/date'
  import PublishArticles from './publish-articles'
  import Alert from '@/utils/alert'

  export default {
    name: "my-article",
    data() {
      return {
        list: [],
        isEdit: false,
        detail: {}
      }
    },
    mounted() {
      this.getList()
    },
    components: {
      PublishArticles
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
      },
      edit(id) {
        this.isEdit = true;
        let params = {
          id
        };
        detail(params).then(res => {
          this.detail = res.data;
        });
      },
      del(id) {
        let params = {
          id,
          username: JSON.parse(localStorage.getItem('userInfo')).username
        };
        del(params).then(res => {
          if (res.errno===0){
            Alert.success('删除成功');
            setTimeout(()=>{
              this.getList();
            },1000)
          }

        });
      },

    }
  }
</script>

<style scoped rel="stylesheet/scss" lang="scss">
  .page {
    padding: 20px;
  }
</style>
