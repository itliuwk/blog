<template>
  <div class="page">
    <el-input v-model="form.title" placeholder="请输入标题，50字以内"></el-input>
    <el-input style="margin-top: 20px" v-model="form.subtitle" placeholder="请输入副标题，50字以内"></el-input>
    <div style="margin: 25px 0;">
      <quill-editor
        v-model="form.content"
        ref="myQuillEditor"
        :options="editorOption">
      </quill-editor>
    </div>

  <div>
    <el-button type="primary" @click="confirm">确定发布</el-button>
  </div>

  </div>
</template>

<script>
  // 工具栏配置
  const toolbarOptions = [
    ["bold", "italic", "underline", "strike"], // 加粗 斜体 下划线 删除线
    ["blockquote", "code-block"], // 引用  代码块
    [{header: 1}, {header: 2}], // 1、2 级标题
    [{list: "ordered"}, {list: "bullet"}], // 有序、无序列表
    [{script: "sub"}, {script: "super"}], // 上标/下标
    [{indent: "-1"}, {indent: "+1"}], // 缩进
    // [{'direction': 'rtl'}],                         // 文本方向
    [{size: ["small", false, "large", "huge"]}], // 字体大小
    [{header: [1, 2, 3, 4, 5, 6, false]}], // 标题
    [{color: []}, {background: []}], // 字体颜色、字体背景颜色
    [{font: []}], // 字体种类
    [{align: []}], // 对齐方式
    ["clean"], // 清除文本格式
    ["link", "image", "video"] // 链接、图片、视频
  ];


  import {add} from '@/api/blog'
  import Alert from '@/utils/alert'

  export default {
    name: "release",
    data() {
      return {
        form: {
          title: '',
          subtitle:'',
          content: '',
          author: JSON.parse(localStorage.getItem('userInfo')).username,
          createTime: Date.now()
        },

        editorOption: {
          theme: "snow", // or 'bubble'
          placeholder: "您想说点什么呢？",
          modules: {
            toolbar: {
              container: toolbarOptions,
            }
          }
        }
      }
    },
    mounted() {

    },
    props:['detail'],

    watch:{
      detail(val){
        this.form = val
      }
    },
    methods: {

      confirm() {


        if (!this.form.title) {
          Alert.fail('标题不能为空喔');
          return false;
        }


        if (this.form.title.length>50) {
          Alert.fail('标题太长喔');
          return false;
        }

        if (!this.form.subtitle) {
          Alert.fail('副标题不能为空喔');
          return false;
        }


        if (this.form.subtitle.length>50) {
          Alert.fail('副标题太长喔');
          return false;
        }

        if (!this.form.content) {
          Alert.fail('内容不能为空喔');
          return false;
        }


        add(this.form).then(res => {
          if(res.errno==0){
            Alert.success('发布成功');
            this.form = {
              title: '',
              content: '',
              author: JSON.parse(localStorage.getItem('userInfo')).username,
              createTime: Date.now()
            };

            Alert.confirm('发布成功,要跳转会首页查看嘛？').then(reslut=>{
              this.$router.push('/')
            })

          }
        })


      }
    }
  }
</script>

<style scoped rel="stylesheet/scss" lang="scss">
  .page {
    padding: 20px;
    height: 100%;
    box-sizing: border-box;
  }
</style>
