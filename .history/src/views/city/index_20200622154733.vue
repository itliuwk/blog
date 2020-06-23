<template>
  <div class="sel">
      <ul>
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
}
</style>
