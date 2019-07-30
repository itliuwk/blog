<template>
  <div class="detail">
    {{detail}}
  </div>
</template>

<script>
  import {axiosTest} from "../api/axios";

  export default {
    name: "axios",
    data() {
      return {
        detail: null
      }
    },
    mounted() {
      axiosTest({id: 4}).then(res => {
        this.detail = res
      })
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .detail {
    color: red;
  }
</style>
