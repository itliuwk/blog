<template>
  <div class="blogList">

    <div v-loading="isLoading" v-if="blogList.length">
      <div class="item" v-for="(item,index) in blogList" :key="index">
        <img v-if="item.url" :src="item.url" alt=""/>
        <img v-else src="../assets/images/8.jpg" alt=""/>
        <div>
          <div class="header">
            <h3 @click="toDetail(item.id)">{{item.title}}</h3>
            <span style="cursor: pointer" @click="toClassDetail(item.value,item.label)">{{item.label}}</span>
          </div>
          <div class="view">
            {{item.subtitle}}
          </div>
          <div class="info">
            <span>{{item.author}}</span>
            <span>{{item.createtime}}</span>
          </div>
        </div>
      </div>
    </div>
    <div v-else style="text-align: center">
      抱歉，没有符合您查询条件的结果
    </div>


    <div class="pageCount" style="text-align: center">
      <el-pagination
        background
        @current-change="currentChange"
        layout="total, prev, pager, next, jumper"
        :page-size="params.total"
        :total="count">
      </el-pagination>
    </div>


  </div>
</template>

<script>
    import {random_photo,random_bg_photo} from '@/utils/index'
    import {YYYYMMDD} from '@/utils/date'
    import {list, listCount} from '@/api/blog'

    export default {
        name: "blogList",
        data() {
            return {
                blogList: [],
                isLoading: true,
                params: {
                    page: 0,
                    total: 10,
                    keyword: ''
                },
                count: 0
            }
        },
        computed: {
            search() {
                return this.$store.state.search
            }
        },
        watch: {
            search(val) {
                this.params = {
                    page: 0,
                    total: 10,
                    keyword: val
                };
                this.isLoading = true;
                this.getList();
                this.getCount();
            }
        },
        mounted() {
            this.getList();
            this.getCount();
        },
        methods: {
            toDetail(id) {
                this.$router.push('./detail?id=' + id);
            },
            toClassDetail(value,label) {
                this.$router.push('./classifyDetail?value=' + value+'&label='+label);
            },
            getList() {
                list(this.params).then(res => {
                    res.data.map((item, index) => {
                        item.createtime = YYYYMMDD(item.createtime);
                        item.content = item.content.toString();
                        item.url = random_bg_photo();
                        return item;
                    });

                    setTimeout(() => {
                        this.blogList = res.data;
                        this.isLoading = false;
                    }, 300);

                });

                listCount().then(res => {
                    this.$store.commit('SET_COUNT',res.data['count(id)'])
                })

            },
            getCount(){
                listCount(this.params).then(res => {
                    this.count = res.data['count(id)'];
                    this.$store.commit('',)
                })
            },
            currentChange(page) {
                this.params = {
                    page: (page - 1) * this.params.total,
                    total: this.params.total
                };
                this.isLoading = true;
                this.getList();
            },
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .blogList {
    margin-top: 20px;

    .item {
      padding: 20px;
      width: 100%;
      background: #fff;
      border-radius: 4px;
      border: 1px solid #ccc;
      display: flex;
      margin: 20px 0;


      img {
        width: 130px;
        height: 90px;
      }


      .header {
        width: 100%;

        h3 {
          display: inline-block;
          cursor: pointer;
        }

        span {
          float: right;
          background-color: #ffbb50;
          padding: 4px 10px;
          color: #fff;
          font-size: 12px;
          line-height: 1.4;
          font-weight: 400;
          margin: 0 5px 5px 0;
          border-radius: 2px;
          display: inline-block;
        }

        span:hover {
          transition-duration: .2s;
          background-color: #9759d0;

        }
      }


      div {
        margin-left: 20px;
        position: relative;
        width: 80%;


        .view {
          text-indent: 2em;
          margin-top: 10px;
          font-size: 14px;
          color: #999;
        }

        .info {
          position: absolute;
          bottom: -15px;
          left: -20px;
          color: #999;

          span {
            margin: 0 5px;
          }
        }
      }
    }

    .item {
      animation: upScale 0.5s;
    }


    .item:hover {
      transition-duration: .5s;
      background: #000;

      h3 {
        transition-duration: .5s;
        font-size: 20px;
        color: #188ae2;
      }

      .view {
        transition-duration: .5s;
        color: #fff;
      }

      img {
        transition-duration: .5s;
        transform: scale(1.2);
      }
    }


  }

  .pageCount {
    background: #fff;
    padding: 10px;
    border-radius: 4px;
    margin-bottom: 50px;
  }

</style>
