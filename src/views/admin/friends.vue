<template>
  <div class="page">
    <el-button @click="add">创建友链</el-button>
    <div>
      <el-table v-loading="loading" :data="list" style="width: 100%">
        <el-table-column prop="name" label="名称"></el-table-column>
        <el-table-column prop="url" label="链接"></el-table-column>
        <el-table-column prop="src" label="logo"></el-table-column>
        <el-table-column prop="createtime" label="创建时间"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="list">
            <el-button size="small" @click="edit(list.row)" type="primary">编辑</el-button>
            <el-button size="small" @click="del(list.row)" type="danger">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <el-dialog :title="info" :visible.sync="isDetail" :close-on-click-modal="false">
      <el-form :model="form">
        <el-form-item label="标题"><el-input v-model="form.name" placeholder="请输入名称"></el-input></el-form-item>
        <el-form-item label="网站链接"><el-input v-model="form.url" placeholder="请输入网站链接"></el-input></el-form-item>
        <el-form-item label="logo链接"><el-input v-model="form.src" placeholder="请输入logo链接"></el-input></el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cantch">取 消</el-button>
        <el-button type="primary" @click="confirm">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { list, add, update, del } from '@/api/friends';
import { YYYYMMDD } from '@/utils/date';
import PublishArticles from './publish-articles';
import Alert from '@/utils/alert';

export default {
  name: 'my-article',
  data() {
    return {
      list: [],
      isLoading: true,
      isDetail: false,
      info: '创建友链',
      params: {
        name:''
      },
      form: {
        id: '',
        name: '',
        url: '',
        src: ''
      },
      isEdit: false,
      loading: true,
      detail: {}
    };
  },
  mounted() {
    this.getList();
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
        };
      }
      list(this.params).then(res => {
        this.loading = false;
        this.list = res.data.map(item => {
          item.createtime = YYYYMMDD(parseInt(item.createtime));
          return item;
        });
      });
    },
    add() {
      this.isDetail = true;
    },
    confirm() {
      if (this.form.id) {
        update(this.form).then(res => {
          Alert.success('更新成功');
          this.isDetail = false;
          this.getList();
        });
      } else {
        add(this.form).then(res => {
          Alert.success('创建成功');
          this.isDetail = false;
          this.getList();
        });
      }
    },
    cantch() {
      this.form = {
        name: '',
        src: '',
        url: ''
      };
      this.isDetail = false;
      this.getList();
    },
    edit(row) {
      this.form = row;
      this.isDetail = true;
    },
    del(row) {
      let params = {
        id: row.id
      };

      Alert.confirm('确定删除嘛？').then(reslut => {
        del(params)
          .then(res => {
            if (res.errno === 0) {
              Alert.success('删除成功');
              setTimeout(() => {
                this.getList();
              }, 1000);
            }
          })
          .catch(err => {});
      });
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
      }, 1000);
    }
  }
};
</script>

<style scoped rel="stylesheet/scss" lang="scss">
.page {
  padding: 20px;
}

.pageCount {
  background: #fff;
  padding: 10px;
  border-radius: 4px;
}
</style>
