<template>
  <div>
    <div class="home">
      <div class="left">
        <h3>闲言微语</h3>
        <div class="item" v-for="item in list" :key="item.id">
          <img :src="item.src" alt="" />
          <div class="whisper">
            <p class="info">{{ item.whisper }}</p>
            <div class="author">
              <span style="vertical-align: top;">
                <i class="iconfont icon-ren" style="font-size: 14px;"></i>
                {{ item.author }}
              </span>
              <span style="margin-left: 10px;font-size: 14px;">
                <i class="iconfont icon-shijian" style="vertical-align: top;font-size: 14px;"></i>
                {{ item.createtime }}
              </span>
            </div>
          </div>
        </div>
        <div class="content-edit">
          <input class="content-ipt" type="text" v-model="params.author" placeholder="请输入你的昵称,必填" />
          <div class="content-ipt"><textarea v-model="params.whisper" placeholder="请输入你的微语,必填" rows="5"></textarea></div>
          <div class="btn"><el-button type="primary" @click="submit">提交微语</el-button></div>
        </div>
      </div>
      <div class="right"><Right></Right></div>
    </div>
  </div>
</template>

<script>
import Right from '@/components/right';
import { random_whisper_photo } from '@/utils/index';
import { YYYYMMDD } from '@/utils/date';
import { list, add, update, del } from '@/api/whisper.js';
import Alert from '@/utils/alert';
export default {
  name: 'home',
  data() {
    return {
      list: [],
      params: {
        author: '',
        whisper: ''
      }
    };
  },
  components: {
    Right
  },
  mounted() {
    this.getList();
  },
  methods: {
    getList() {
      list().then(res => {
        res.data.map((item, index) => {
          item.createtime = YYYYMMDD(item.createtime);
          item.src = random_whisper_photo();
          return item;
        });
        this.list = res.data;
      });
    },
    submit() {
      if (!this.params.author) {
        Alert.fail('昵称必填喔!');
        return false;
      }

      if (!this.params.whisper) {
        Alert.fail('你还没有填写微语呢!');
        return false;
      }
      add(this.params).then(res => {
        Alert.success('提交成功!');
        this.params = {
          author: '',
          whisper: ''
        };
        setTimeout(() => {
          this.getList();
        }, 500);
      });
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import '@/views/home/home.scss';
.left {
  h3 {
    text-align: center;
    padding: 10px;
    color: #9b4e84;
  }
}

.item {
  animation: upScale 0.5s;
}
.item {
  overflow: hidden;
  display: flex;
  align-items: center;
  box-shadow: 0 0 10px rgba(37, 45, 51, 0.5);
  padding: 20px;
  border-radius: 4px;
  background: #fff;
  margin: 20px 0;
  img {
    // width: 82px;
    // height: 82px;
    border-radius: 50%;
  }

  img:hover {
    transition: all 1s;
    transform: rotate(360deg);
  }
  .whisper {
    overflow: hidden;
    margin-left: 20px;
    .info {
      line-height: 25px;
      text-indent: 2em;
      color: #9b4e84;
    }
    .author {
      margin-top: 20px;
      span {
        color: #999;
        margin: 0 5px;
      }
    }
  }
}

.content-edit {
  position: relative;
  margin-top: 150px;
  background: #fff;
  padding: 20px;
  box-shadow: 0 0 10px rgba(37, 45, 51, 0.5);
  border-radius: 4px;
  .content-ipt {
    margin-bottom: 15px;
  }
  input,
  textarea {
    resize: none;
    border: 1px solid #dcdfe6;
    width: 100%;
    color: #606266;
    border-radius: 4px;
    padding: 14px 0 0 14px;
    font-size: 14px;
  }
  input {
    color: #606266;
    height: 40px;
    padding: 0 0 0 14px;
  }
  .btn {
    position: absolute;
    bottom: 40px;
    right: 20px;
  }
}
</style>
