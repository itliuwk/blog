<template>
  <div class="page">
    <el-button v-if="isEdit" @click="returnUp">返回</el-button>

    <div v-if="!isEdit">
      <el-table
        v-loading="loading"
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
            <el-button size="small" @click="del(list.row)" type="danger">删除</el-button>

          </template>
        </el-table-column>
      </el-table>
      <div class="pageCount">
        <el-pagination
          background
          @current-change="currentChange"
          layout="total, prev, pager, next, jumper"
          :page-size="params.total"
          :total="count">
        </el-pagination>
      </div>
    </div>
    <div v-else>
      <PublishArticles :detail="detail"></PublishArticles>
    </div>
  </div>
</template>

<script>
  import {list, listCount, detail, del} from '@/api/blog'
  import {YYYYMMDD} from '@/utils/date'
  import PublishArticles from './publish-articles'
  import Alert from '@/utils/alert'

  export default {
    name: "my-article",
    data() {
      return {
        list: [],
        isLoading: true,
        params: {
          page: 0,
          total: 10,
          username: JSON.parse(localStorage.getItem('userInfo')).username
        },
        count: 0,
        isEdit: false,
        loading: true,
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
        if (this.params.username == 'liuwk') {
          this.params = {
            ...this.params,
            username: ''
          }
        }
        list(this.params).then(res => {
          this.loading = false;
          this.list = res.data.map(item => {
            item.createtime = YYYYMMDD(item.createtime);
            return item;
          })
        })


        listCount(this.params).then(res => {

          this.count = res.data['count(id)'];
        })
      },
      edit(id) {
        this.loading = true;
        setTimeout(() => {
          this.isEdit = true;
          this.loading = false;
          let params = {
            id
          };
          detail(params).then(res => {
            this.detail = res.data;
          });
        }, 1000)

      },
      del(row) {
        let params = {
          id: row.id,
          username: row.author || JSON.parse(localStorage.getItem('userInfo')).username
        };

        Alert.confirm('确定删除嘛？').then(reslut => {
          del(params).then(res => {
            if (res.errno === 0) {
              Alert.success('删除成功');
              setTimeout(() => {
                this.getList();
              }, 1000)
            }

          }).catch(err => {

          })
        })

      },
      returnUp() {
        this.isEdit = false;
      },
      currentChange(page) {
        this.loading = true;
        this.params = {
          page: (page - 1) * this.params.total,
          total: this.params.total
        };
        this.isLoading = true;
        setTimeout(() => {
          this.getList();
        }, 1000)
      },

    }
  }
</script>

<style scoped rel="stylesheet/scss" lang="scss">
  .page {
    padding: 20px;
  }

  .pageCount {
    background: #fff;
    padding: 10px;
    border-radius: 4px;
    margin-bottom: 50px;
  }
</style>
