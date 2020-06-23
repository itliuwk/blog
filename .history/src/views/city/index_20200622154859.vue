<template>
  <div class="sel">
    <ul class="sel-field">
      <li>省份</li>
      <li>城市</li>
      <li>县区</li>
    </ul>
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
    li {
      width: 80px;
      float: left;
      text-align: center;
      height: 40px;
      line-height: 40px;
      cursor: pointer;
    }
  }
}
</style>
