<template>
  <div id="app">
    <home :isTop="isTop"></home>
    <div class="routerView">
      <router-view/>
    </div>
  </div>
</template>

<script>
  import home from '@/components/index'

  export default {
    name: 'App',
    components: {
      home
    },
    data() {
      return {
        isTop: false
      }

    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll)
    },
    methods: {
      handleScroll(e) {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop // 滚动条偏移量
        if (scrollTop > 1) {
          this.isTop = true;
        } else {
          this.isTop = false;
        }
      }
    }
  }
</script>

<style>
  .routerView {
    max-width: 1300px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 0;
    padding-right: 0;
  }
</style>
