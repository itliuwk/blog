<template>
  <div class="sel">
    <ul class="sel-field">
      <li class>省份</li>
      <li class="active">城市</li>
      <li>县区</li>
    </ul>
    <div class="sel-content"></div>
  </div>
</template>

<script>
import { city } from "./city.js";
export default {
  data() {
    return {
      city: city
    };
  },
  mounted() {},
  methods: {}
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.sel {
  margin: 100px auto;
  background: #fff;
  width: 600px;
  height: 400px;

  .sel-field {
    border-bottom: 1px solid #eee;
    width: 100%;
    overflow: hidden;
    li {
      width: 80px;
      float: left;
      text-align: center;
      height: 40px;
      line-height: 40px;
      cursor: pointer;
      border: 1px solid #eee;
    }

    li.active {
      border-bottom: none;
      background: #eee;
    }
  }

  .sel-content {
    width: 100%;
    height: calc(100% - 40px);
    padding: 20px;
  }
}
</style>
