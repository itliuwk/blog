<template>
  <div class="sel"></div>
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
