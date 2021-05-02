<template>
  <div class="note">
    <div v-if="userInfo != null && userInfo.username == 'liuwk'">
      <div style="text-align: center;">
        <el-input v-model="title" @keyup.enter.native="seacrch" style="width: 30%;"
                  placeholder="输入标题关键字 Enter键搜索..."></el-input>
        <el-button style="margin:0 0 0 20px;" @click="seacrch">搜索</el-button>

        <el-button type="primary" @click="add">添加笔记</el-button>
      </div>
      <div class="box">
        <el-card class="box-card" v-for="item in list" :key="item.id">
          <div slot="header" class="clearfix">
            <span>{{ item.title }}</span>
          </div>
          <div class="text item" style="white-space: pre-wrap;">{{ item.content }}</div>
          <div class="btn">
            <span>{{ item.createtime | filterDate }}</span>
            <el-button type="danger" size="mini" @click="del(item.id)">删除</el-button>
            <el-button type="primary" size="mini" @click="detail(item)">详情</el-button>
          </div>
        </el-card>
      </div>

      <el-dialog :title="info" :visible.sync="isDetail" :close-on-click-modal="false">
        <el-form :model="form">
          <el-form-item label="标题">
            <el-input v-model="form.title" placeholder="请输入标题"></el-input>
          </el-form-item>
          <el-form-item label="内容">
            <el-input type="textarea" :rows="3" placeholder="请输入内容" v-model="form.content"></el-input>
          </el-form-item>
          <el-form-item label="">
            <p style="white-space: pre-wrap;">{{ form.content }}</p>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="cantch">取 消</el-button>
          <el-button type="primary" @click="confirm">确 定</el-button>
        </div>
      </el-dialog>
    </div>
    <div v-else style="text-align: center;font-size: 30px;margin-top: 50px;color: #ccc;">功能受限，无法查看，请登录试试。</div>
  </div>
</template>

<script>
    import {list, add, update, del} from '../../api/note.js';
    import {YYYYMMDD} from '@/utils/date';
    import Alert from '@/utils/alert';
    import {updateTitle} from '@/utils/index';

    export default {
        name: 'note',
        data() {
            return {
                list: [],
                title: '',
                info: '添加笔记',
                isDetail: false,
                form: {
                    id: '',
                    title: '',
                    content: ''
                }
            };
        },
        computed: {
            userInfo() {
                return this.$store.state.userInfo || JSON.parse(localStorage.getItem('userInfo'));
            }
        },
        beforeCreate() {
            updateTitle('个人笔记');
        },
        mounted() {
            if (this.userInfo != null && this.userInfo.username == 'liuwk') {
                this.getList();
            }

        },
        methods: {
            getList() {
                list({title: this.title}).then(res => {
                    this.list = res.data;
                });
            },
            del(id) {
                Alert.confirm('确定删除嘛？').then(reslut => {
                    del({id}).then(res => {
                        if (res.errno === 0) {
                            Alert.success('删除成功');
                            setTimeout(() => {
                                this.getList();
                            }, 300);
                        }
                    });
                });
            },
            detail(item) {
                this.info = '详情';
                this.form = JSON.parse(JSON.stringify(item));
                this.isDetail = true;
            },
            add() {
                this.isDetail = true;
            },
            seacrch() {
                this.getList();
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
                        Alert.success('添加成功');
                        this.isDetail = false;
                        this.getList();
                    });
                }
            },
            cantch() {
                this.form = {
                    id: '',
                    title: '',
                    content: ''
                };
                this.isDetail = false;
                this.getList();
            }
        },
        filters: {
            filterDate(val) {
                return YYYYMMDD(val);
            }
        }
    };
</script>

<style scoped rel="stylesheet/scss" lang="scss">
  .note {
    width: 100%;
    min-height: 100vh;
    padding: 20px;
    box-sizing: border-box;

    .box {
      width: 100%;
      height: 100%;
      display: flex;
      flex-wrap: wrap;
      algin-items: center;

      .box-card {
        display: inline-block;
        width: 335px;
        margin: 20px;

        .item {
          text-align: left;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          min-height: 60px;
        }

        .btn {
          width: 100%;
          text-align: right;
          padding-top: 20px;

          span {
            padding-top: 8px;
            float: left;
            font-size: 14px;
            color: #999;
          }
        }
      }
    }
  }
</style>
