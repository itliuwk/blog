<template>
  <div class="home about">
    <div class="left">
      left
    </div>
    <div class="right">
      <Right></Right>
    </div>
  </div>
</template>

<script>
    import Right from '@/components/right'

    export default {
        name: "about",
        components: {
            Right
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "../home/home.scss";
</style>
